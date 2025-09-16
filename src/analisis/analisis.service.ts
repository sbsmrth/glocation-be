import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../providers/prisma.service';
import { ConfigService } from '@nestjs/config';
import ModelClient, { isUnexpected } from '@azure-rest/ai-inference';
import { AzureKeyCredential } from '@azure/core-auth';

const endpoint = 'https://models.github.ai/inference';
const model = 'openai/gpt-4.1';

type ChatResponse = {
  choices: { message: { content: string } }[];
};

@Injectable()
export class AnalisisService {
  private aiClient;

  constructor(
    private prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {
    const token = this.configService.getOrThrow<string>('GITHUB_ACCESS_TOKEN');

    this.aiClient = ModelClient(endpoint, new AzureKeyCredential(token));
  }

  async generarResumen() {
    const projects = await this.prisma.proyecto.findMany({
      select: { nombre: true, descripcion: true },
    });

    const descripciones = projects
      .map((p) => `- ${p.nombre}: ${p.descripcion ?? 'Sin descripción'}`)
      .join('\n');

    const prompt = `
        Eres un analista. Resume de forma clara y concisa las siguientes descripciones de proyectos:

        ${descripciones}

        Devuélveme un solo párrafo.
    `;

    const response = await this.aiClient.path('/chat/completions').post({
      body: {
        messages: [
          {
            role: 'system',
            content: 'Eres un asistente que resume proyectos.',
          },
          { role: 'user', content: prompt },
        ],
        model,
      },
    });

    console.log('response: ', response);

    if (isUnexpected(response)) {
      throw new InternalServerErrorException(
        'Ocurrió un error al obtener la respuesta',
      );
    }

    const safeResponse = response.body as ChatResponse;
    return safeResponse.choices[0].message.content;
  }
}
