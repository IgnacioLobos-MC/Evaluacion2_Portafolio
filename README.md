# Portafolio Personal - Ignacio Lobos

## Descripción

Portafolio personal desarrollado con React y Vite para la evaluación de Desarrollo Fullstack II en Duoc UC.

El sitio presenta información personal, estudios, experiencia, proyectos y un formulario de contacto con validaciones del lado del cliente.

## Tecnologías utilizadas

- React
- JavaScript
- Vite
- HTML y CSS
- Vitest
- React Testing Library

## Estructura del proyecto

El proyecto utiliza el patrón de diseño Atomic Design para organizar sus componentes.

- `src/components/atoms`: componentes básicos reutilizables.
- `src/components/molecules`: componentes formados por elementos básicos.
- `src/components/organisms`: secciones principales del portafolio.
- `src/components/templates`: estructura general de la página.
- `src/components/pages`: contenido de las páginas.
- `src/assets`: recursos gráficos e imágenes.

## Requisitos

- Node.js instalado.
- npm disponible mediante la instalación de Node.js.

## Instalación y ejecución

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/IgnacioLobos-MC/Evaluacion2_Portafolio.git
   ```

2. Entrar a la carpeta del proyecto:

   ```bash
   cd Evaluacion2_Portafolio
   ```

3. Instalar las dependencias:

   ```bash
   npm install
   ```

4. Ejecutar el proyecto en modo desarrollo:

   ```bash
   npm run dev
   ```

5. Abrir en el navegador la dirección local que muestra la terminal, normalmente `http://localhost:5173`.

## Pruebas

El proyecto incluye pruebas automatizadas con Vitest y React Testing Library para verificar el renderizado de componentes y el comportamiento de funcionalidades importantes, como el formulario de contacto.

Para ejecutar las pruebas:

```bash
npm test
```

Para generar la versión de producción:

```bash
npm run build
```

## Autor

**Ignacio Lobos**  
Estudiante de Analista Programador — Duoc UC.

GitHub: [IgnacioLobos-MC](https://github.com/IgnacioLobos-MC)
