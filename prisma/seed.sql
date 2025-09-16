INSERT INTO "Proyecto" (
    id,
    nombre,
    descripcion,
    estado,
    "fechaInicio",
    "fechaFin",
    "fechaCreation",
    "fechaActualizacion"
) VALUES
-- Proyectos EN_PROGRESO
(gen_random_uuid(), 'Sistema de Gestión Inventario', 'Desarrollo de sistema para control de inventarios', 'EN_PROGRESO', CURRENT_DATE - INTERVAL '25 days', CURRENT_DATE + INTERVAL '45 days', CURRENT_DATE - INTERVAL '25 days', CURRENT_DATE - INTERVAL '5 days'),
(gen_random_uuid(), 'App Móvil Delivery', 'Aplicación móvil para pedidos a domicilio', 'EN_PROGRESO', CURRENT_DATE - INTERVAL '20 days', CURRENT_DATE + INTERVAL '30 days', CURRENT_DATE - INTERVAL '20 days', CURRENT_DATE - INTERVAL '3 days'),
(gen_random_uuid(), 'Portal Cliente Web', 'Portal web para clientes corporativos', 'EN_PROGRESO', CURRENT_DATE - INTERVAL '15 days', CURRENT_DATE + INTERVAL '60 days', CURRENT_DATE - INTERVAL '15 days', CURRENT_DATE - INTERVAL '1 day'),
(gen_random_uuid(), 'API Integración Pagos', 'Sistema de integración con pasarelas de pago', 'EN_PROGRESO', CURRENT_DATE - INTERVAL '18 days', CURRENT_DATE + INTERVAL '25 days', CURRENT_DATE - INTERVAL '18 days', CURRENT_DATE - INTERVAL '2 days'),
(gen_random_uuid(), 'Dashboard Analytics', 'Panel de analíticas y métricas', 'EN_PROGRESO', CURRENT_DATE - INTERVAL '12 days', CURRENT_DATE + INTERVAL '35 days', CURRENT_DATE - INTERVAL '12 days', CURRENT_DATE),
(gen_random_uuid(), 'Sistema CRM Personalizado', 'CRM adaptado a las necesidades específicas', 'EN_PROGRESO', CURRENT_DATE - INTERVAL '22 days', CURRENT_DATE + INTERVAL '50 days', CURRENT_DATE - INTERVAL '22 days', CURRENT_DATE - INTERVAL '4 days'),
(gen_random_uuid(), 'Plataforma E-learning', 'Sistema de educación en línea', 'EN_PROGRESO', CURRENT_DATE - INTERVAL '28 days', CURRENT_DATE + INTERVAL '70 days', CURRENT_DATE - INTERVAL '28 days', CURRENT_DATE - INTERVAL '1 day'),
(gen_random_uuid(), 'Módulo Reportes Avanzados', 'Sistema de generación de reportes complejos', 'EN_PROGRESO', CURRENT_DATE - INTERVAL '10 days', CURRENT_DATE + INTERVAL '40 days', CURRENT_DATE - INTERVAL '10 days', CURRENT_DATE),
(gen_random_uuid(), 'Sistema Reservas Online', 'Plataforma de reservas para servicios', 'EN_PROGRESO', CURRENT_DATE - INTERVAL '14 days', CURRENT_DATE + INTERVAL '42 days', CURRENT_DATE - INTERVAL '14 days', CURRENT_DATE - INTERVAL '2 days'),
(gen_random_uuid(), 'Bot Atención Cliente', 'Chatbot para atención automatizada', 'EN_PROGRESO', CURRENT_DATE - INTERVAL '8 days', CURRENT_DATE + INTERVAL '28 days', CURRENT_DATE - INTERVAL '8 days', CURRENT_DATE),

-- Proyectos FINALIZADOS
(gen_random_uuid(), 'Migración Base Datos Legacy', 'Migración de sistema legacy a PostgreSQL', 'FINALIZADO', CURRENT_DATE - INTERVAL '30 days', CURRENT_DATE - INTERVAL '5 days', CURRENT_DATE - INTERVAL '30 days', CURRENT_DATE - INTERVAL '5 days'),
(gen_random_uuid(), 'Actualización Framework Frontend', 'Upgrade de React a última versión', 'FINALIZADO', CURRENT_DATE - INTERVAL '25 days', CURRENT_DATE - INTERVAL '3 days', CURRENT_DATE - INTERVAL '25 days', CURRENT_DATE - INTERVAL '3 days'),
(gen_random_uuid(), 'Implementación SSL Certificados', 'Configuración de certificados SSL en todos los dominios', 'FINALIZADO', CURRENT_DATE - INTERVAL '20 days', CURRENT_DATE - INTERVAL '8 days', CURRENT_DATE - INTERVAL '20 days', CURRENT_DATE - INTERVAL '8 days'),
(gen_random_uuid(), 'Optimización Queries BD', 'Mejora de rendimiento en consultas críticas', 'FINALIZADO', CURRENT_DATE - INTERVAL '28 days', CURRENT_DATE - INTERVAL '12 days', CURRENT_DATE - INTERVAL '28 days', CURRENT_DATE - INTERVAL '12 days'),
(gen_random_uuid(), 'Setup Monitoreo Aplicaciones', 'Configuración de herramientas de monitoreo', 'FINALIZADO', CURRENT_DATE - INTERVAL '22 days', CURRENT_DATE - INTERVAL '6 days', CURRENT_DATE - INTERVAL '22 days', CURRENT_DATE - INTERVAL '6 days'),
(gen_random_uuid(), 'Documentación API REST', 'Creación de documentación completa de APIs', 'FINALIZADO', CURRENT_DATE - INTERVAL '18 days', CURRENT_DATE - INTERVAL '4 days', CURRENT_DATE - INTERVAL '18 days', CURRENT_DATE - INTERVAL '4 days'),
(gen_random_uuid(), 'Testing Automatizado E2E', 'Implementación de tests end-to-end', 'FINALIZADO', CURRENT_DATE - INTERVAL '26 days', CURRENT_DATE - INTERVAL '10 days', CURRENT_DATE - INTERVAL '26 days', CURRENT_DATE - INTERVAL '10 days'),
(gen_random_uuid(), 'Refactorización Módulo Auth', 'Mejora del sistema de autenticación', 'FINALIZADO', CURRENT_DATE - INTERVAL '15 days', CURRENT_DATE - INTERVAL '2 days', CURRENT_DATE - INTERVAL '15 days', CURRENT_DATE - INTERVAL '2 days'),
(gen_random_uuid(), 'Integración Sistema Terceros', 'Conexión con API externa de proveedores', 'FINALIZADO', CURRENT_DATE - INTERVAL '24 days', CURRENT_DATE - INTERVAL '7 days', CURRENT_DATE - INTERVAL '24 days', CURRENT_DATE - INTERVAL '7 days'),
(gen_random_uuid(), 'Backup Automatizado Datos', 'Sistema de respaldos automáticos', 'FINALIZADO', CURRENT_DATE - INTERVAL '16 days', CURRENT_DATE - INTERVAL '1 day', CURRENT_DATE - INTERVAL '16 days', CURRENT_DATE - INTERVAL '1 day'),

-- Proyectos SIN_INICIAR
(gen_random_uuid(), 'Rediseño UX/UI Principal', 'Renovación completa de la interfaz de usuario', 'SIN_INICIAR', NULL, NULL, CURRENT_DATE - INTERVAL '5 days', CURRENT_DATE - INTERVAL '1 day'),
(gen_random_uuid(), 'Módulo Inteligencia Artificial', 'Implementación de ML para recomendaciones', 'SIN_INICIAR', NULL, NULL, CURRENT_DATE - INTERVAL '3 days', CURRENT_DATE),
(gen_random_uuid(), 'Sistema Notificaciones Push', 'Servicio de notificaciones en tiempo real', 'SIN_INICIAR', NULL, NULL, CURRENT_DATE - INTERVAL '7 days', CURRENT_DATE - INTERVAL '2 days'),
(gen_random_uuid(), 'Plataforma Multi-idioma', 'Soporte para múltiples idiomas', 'SIN_INICIAR', NULL, NULL, CURRENT_DATE - INTERVAL '2 days', CURRENT_DATE),
(gen_random_uuid(), 'Optimización SEO Avanzada', 'Mejoras para posicionamiento web', 'SIN_INICIAR', NULL, NULL, CURRENT_DATE - INTERVAL '4 days', CURRENT_DATE - INTERVAL '1 day'),
(gen_random_uuid(), 'Sistema Facturación Electrónica', 'Implementación de facturación DIAN', 'SIN_INICIAR', NULL, NULL, CURRENT_DATE - INTERVAL '6 days', CURRENT_DATE - INTERVAL '2 days'),
(gen_random_uuid(), 'App Escritorio Multiplataforma', 'Aplicación desktop con Electron', 'SIN_INICIAR', NULL, NULL, CURRENT_DATE - INTERVAL '1 day', CURRENT_DATE),
(gen_random_uuid(), 'Integración Redes Sociales', 'Login y sharing con redes sociales', 'SIN_INICIAR', NULL, NULL, CURRENT_DATE - INTERVAL '8 days', CURRENT_DATE - INTERVAL '3 days'),
(gen_random_uuid(), 'Sistema Geo-localización', 'Funcionalidades basadas en ubicación', 'SIN_INICIAR', NULL, NULL, CURRENT_DATE - INTERVAL '3 days', CURRENT_DATE - INTERVAL '1 day'),
(gen_random_uuid(), 'Módulo Gamificación', 'Sistema de puntos y logros', 'SIN_INICIAR', NULL, NULL, CURRENT_DATE - INTERVAL '2 days', CURRENT_DATE),

-- Proyectos CANCELADOS
(gen_random_uuid(), 'Integración Blockchain Pagos', 'Sistema de pagos con criptomonedas', 'CANCELADO', CURRENT_DATE - INTERVAL '29 days', NULL, CURRENT_DATE - INTERVAL '29 days', CURRENT_DATE - INTERVAL '15 days'),
(gen_random_uuid(), 'App Realidad Virtual', 'Experiencia VR para productos', 'CANCELADO', CURRENT_DATE - INTERVAL '27 days', NULL, CURRENT_DATE - INTERVAL '27 days', CURRENT_DATE - INTERVAL '18 days'),
(gen_random_uuid(), 'Sistema Trading Automatizado', 'Bot para trading de acciones', 'CANCELADO', CURRENT_DATE - INTERVAL '21 days', NULL, CURRENT_DATE - INTERVAL '21 days', CURRENT_DATE - INTERVAL '12 days'),
(gen_random_uuid(), 'Plataforma NFT Marketplace', 'Mercado para tokens no fungibles', 'CANCELADO', CURRENT_DATE - INTERVAL '23 days', NULL, CURRENT_DATE - INTERVAL '23 days', CURRENT_DATE - INTERVAL '10 days'),
(gen_random_uuid(), 'Sistema Reconocimiento Facial', 'Login biométrico por reconocimiento facial', 'CANCELADO', CURRENT_DATE - INTERVAL '19 days', NULL, CURRENT_DATE - INTERVAL '19 days', CURRENT_DATE - INTERVAL '8 days'),

-- Proyectos BLOQUEADOS
(gen_random_uuid(), 'Migración Cloud AWS', 'Migración completa de infraestructura', 'BLOQUEADO', CURRENT_DATE - INTERVAL '17 days', CURRENT_DATE + INTERVAL '90 days', CURRENT_DATE - INTERVAL '17 days', CURRENT_DATE - INTERVAL '3 days'),
(gen_random_uuid(), 'Integración ERP SAP', 'Conexión con sistema SAP empresarial', 'BLOQUEADO', CURRENT_DATE - INTERVAL '13 days', CURRENT_DATE + INTERVAL '120 days', CURRENT_DATE - INTERVAL '13 days', CURRENT_DATE - INTERVAL '1 day'),
(gen_random_uuid(), 'Sistema Cumplimiento GDPR', 'Adaptación a normativas europeas', 'BLOQUEADO', CURRENT_DATE - INTERVAL '11 days', CURRENT_DATE + INTERVAL '60 days', CURRENT_DATE - INTERVAL '11 days', CURRENT_DATE - INTERVAL '2 days'),
(gen_random_uuid(), 'Plataforma Video Conferencias', 'Sistema propio de videollamadas', 'BLOQUEADO', CURRENT_DATE - INTERVAL '9 days', CURRENT_DATE + INTERVAL '80 days', CURRENT_DATE - INTERVAL '9 days', CURRENT_DATE),
(gen_random_uuid(), 'Sistema Auditoria Interna', 'Herramientas de auditoría y compliance', 'BLOQUEADO', CURRENT_DATE - INTERVAL '6 days', CURRENT_DATE + INTERVAL '100 days', CURRENT_DATE - INTERVAL '6 days', CURRENT_DATE - INTERVAL '1 day');