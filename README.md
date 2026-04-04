# Variable Web

Landing page comercial creada con React + Vite para ofrecer paginas web, tiendas online, webs corporativas y sistemas a medida.

## Descripcion

Este proyecto esta pensado como la web principal de una agencia o estudio digital enfocado en conversion. La pagina presenta una propuesta de valor clara desde el hero, muestra servicios, rubros, portfolio conceptual, social proof y un formulario de contacto que prepara un mensaje para WhatsApp.

## Objetivo

La meta del sitio es vender:

- Landing pages
- Tiendas online
- Webs corporativas
- Sistemas personalizados

Tambien busca transmitir una imagen visual moderna, profesional y fuerte para negocios locales, marcas y profesionales.

## Stack

- React 19
- Vite 8
- CSS puro
- ESLint

## Scripts disponibles

Desde la carpeta `frontend`, puedes ejecutar:

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

## Estructura del proyecto

```text
frontend/
├─ public/
│  └─ favicon.svg
├─ src/
│  ├─ App.jsx
│  ├─ App.css
│  ├─ index.css
│  └─ main.jsx
├─ index.html
├─ package.json
└─ README.md
```

## Organizacion de estilos

El proyecto ya esta separado de forma simple y clara:

- `src/index.css`: estilos globales, variables, tipografia, reglas base y layout general del root
- `src/App.css`: estilos propios de la landing, secciones, componentes visuales y responsive

No se agregaron mas archivos de estilo porque, para el tamano actual del proyecto, esta arquitectura sigue siendo clara y mantenible.

## Secciones de la landing

- Hero con propuesta de valor y CTA principal
- Navegacion superior con identidad de marca
- Servicios
- Rubros
- Portfolio / proyectos
- Nosotros
- Resenas
- Proceso de trabajo
- Contacto con salida a WhatsApp

## Responsive

La web esta ajustada para:

- Desktop amplio
- Notebook
- Tablet
- Mobile

Se trabajaron breakpoints para reorganizar:

- Header y navegacion
- Hero y mockups visuales
- Grillas de servicios, proyectos, resenas y pasos
- Formulario y botones

## Personalizacion rapida

Si quieres adaptar la landing a tu marca o cliente:

1. Edita los textos y arrays en `src/App.jsx`
2. Ajusta colores y variables base en `src/index.css`
3. Modifica el look de secciones y componentes en `src/App.css`
4. Reemplaza el enlace de WhatsApp por tu numero real
5. Sustituye proyectos ficticios por casos reales cuando los tengas

## Contacto por WhatsApp

Actualmente el formulario arma un mensaje y abre WhatsApp en una nueva pestaña. Esto permite usar la landing sin backend.

Si mas adelante quieres:

- envio por email
- guardado en base de datos
- panel de leads
- integracion con CRM

se puede conectar facilmente desde el formulario actual.

## Build de produccion

Para generar la version lista para deploy:

```bash
npm run build
```

Los archivos finales quedan en:

```text
frontend/dist/
```

## Deploy

Puedes publicar esta landing en cualquier hosting estatico compatible con Vite, por ejemplo:

- Vercel
- Netlify
- GitHub Pages
- Hosting tradicional con carpeta `dist`

## Estado actual

- Landing comercial funcional
- Logo y favicon personalizados
- Diseno claro con color principal naranja
- Responsive mejorado
- Lint y build funcionando

## Proximos pasos sugeridos

- Agregar numero real de WhatsApp
- Reemplazar testimonios conceptuales por testimonios reales
- Agregar imagenes reales de trabajos
- Conectar formulario a backend o email
- Mejorar SEO con metadatos sociales y Open Graph

