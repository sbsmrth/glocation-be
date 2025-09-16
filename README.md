<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank">
    <img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" />
  </a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank">
    <img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" />
  </a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank">
    <img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" />
  </a>
  <a href="https://circleci.com/gh/nestjs/nest" target="_blank">
    <img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" />
  </a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank">
    <img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/>
  </a>
  <a href="https://twitter.com/nestframework" target="_blank">
    <img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter">
  </a>
</p>

---

# 📡 Backend - GLocation

Backend desarrollado en **NestJS** para la aplicación **GLocation**, proporcionando un API escalable y eficiente para gestionar la lógica de negocio y conexión con la base de datos.

---

## 📦 Requisitos Previos

- [Node.js](https://nodejs.org/) (versión recomendada: >=18)
- [npm](https://www.npmjs.com/) o [pnpm](https://pnpm.io/)
- [Docker](https://www.docker.com/) (para levantar la base de datos)

---

## ⚙️ Instalación

Clonar el proyecto e instalar dependencias:

```bash
git clone https://github.com/sbsmrth/glocation-be.git
cd glocation-be
npm install
```

---

## ▶️ Ejecución del Proyecto

### 1. Levantar la base de datos con Docker

```bash
docker compose up -d
```

### 2. Ejecutar la aplicación

```bash
# desarrollo
npm run start

# watch mode (hot reload)
npm run start:dev

# producción
npm run start:prod
```

---

## 📜 Scripts Útiles

- `npm run build` → Compila la aplicación.  
- `npm run lint` → Corre el linter para verificar errores de estilo.  
- `npm run test` → Ejecuta pruebas unitarias.  
- `npm run test:e2e` → Ejecuta pruebas end-to-end.  

---
