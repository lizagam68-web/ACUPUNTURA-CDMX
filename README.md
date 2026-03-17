# Acupuntura CDMX

Este es el repositorio del sitio web de Acupuntura CDMX, una clínica de terapia holística y bienestar.

## Tecnologías

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Vite**: Herramienta de construcción rápida para proyectos web modernos.
- **Tailwind CSS**: Framework de CSS para estilos rápidos y responsivos.
- **TypeScript**: Superset de JavaScript con tipos estáticos.
- **React Router**: Enrutamiento para aplicaciones de una sola página (SPA).
- **Framer Motion**: Biblioteca para animaciones fluidas.

## Instalación y Ejecución Local

1.  Clona este repositorio:
    ```bash
    git clone https://github.com/tu-usuario/acupuntura-cdmx.git
    cd acupuntura-cdmx
    ```

2.  Instala las dependencias:
    ```bash
    npm install
    ```

3.  Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```

4.  Abre tu navegador en `http://localhost:3000`.

## Despliegue

### Vercel (Recomendado)

Este proyecto está configurado para desplegarse fácilmente en Vercel.

1.  Instala Vercel CLI: `npm i -g vercel`
2.  Ejecuta `vercel` en la raíz del proyecto.
3.  Sigue las instrucciones en pantalla.

El archivo `vercel.json` ya está configurado para manejar el enrutamiento SPA.

### GitHub Pages

Si deseas desplegar en GitHub Pages, necesitarás ajustar `vite.config.ts` para establecer la propiedad `base` con el nombre de tu repositorio (si no usas un dominio personalizado).

## Estructura del Proyecto

- `/src`: Código fuente de la aplicación.
- `/public`: Archivos estáticos.
- `index.html`: Punto de entrada HTML.
- `vite.config.ts`: Configuración de Vite.
- `tailwind.config.js`: Configuración de Tailwind CSS (si aplica, o vía plugin Vite).

## Licencia

Este proyecto es privado y propiedad de Acupuntura CDMX.
