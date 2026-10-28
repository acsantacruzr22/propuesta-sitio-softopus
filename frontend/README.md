# Sitio web de Softopus

Frontend del sitio institucional de Softopus, construido con React, TypeScript y Vite. Incluye las páginas de inicio, nosotros y política de privacidad, además de componentes compartidos como el encabezado, el pie de página y el formulario de contacto.

## Requisitos

- Node.js 22.12 o posterior (se recomienda una versión LTS).
- npm, incluido con Node.js.

Puedes comprobar las versiones instaladas con:

```sh
node --version
npm --version
```

## Instalación

Abre una terminal en la carpeta `frontend` e instala las dependencias definidas en `package-lock.json`:

```sh
npm ci
```

Si estás en la raíz del repositorio, primero entra a esa carpeta:

```sh
cd frontend
```

## Desarrollo

Inicia el servidor local:

```sh
npm run dev
```

Vite mostrará en la terminal la dirección local, normalmente `http://localhost:5173/`. Usa `Ctrl+C` para detener el servidor.

## Comandos disponibles

Ejecuta estos comandos desde `frontend`:

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo con recarga en caliente. |
| `npm run build` | Comprueba los tipos de TypeScript y genera la versión de producción en `dist/`. |
| `npm run preview` | Sirve localmente la última compilación de `dist/`; ejecuta primero `npm run build`. |
| `npm run lint` | Analiza el código con Oxlint. |

## Páginas

| Ruta | Página |
| --- | --- |
| `/` | Inicio |
| `/nosotros` | Nosotros |
| `/politica-de-privacidad` | Política de privacidad |

## Estructura del proyecto

- `src/` — aplicación React, páginas, estilos y recursos.
- `src/components/` — componentes reutilizables.
- `public/` — archivos estáticos servidos sin transformación.
- `dist/` — archivos generados por `npm run build` (no editar manualmente).

## Tecnologías principales

- React 19 y React Router para las páginas y la navegación.
- TypeScript para el tipado estático.
- Vite para el servidor de desarrollo y la compilación.
- Tailwind CSS para los estilos.
- Oxlint para el análisis estático del código.
