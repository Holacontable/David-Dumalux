# Origen Acabados y Construcciones

Sitio web institucional de **Origen Acabados y Construcciones**, construido con HTML, CSS y JavaScript puro (sin dependencias, sin build).

## Estructura

- `index.html` — contenido de la página
- `styles.css` — estilos
- `script.js` — menú móvil y formulario de contacto
- `.github/workflows/pages.yml` — despliegue automático a GitHub Pages

## Edición rápida

- **Teléfono/correo:** busca `+570000000000` y `contacto@origenacabados.com` en `index.html` y reemplázalos por los datos reales.
- **Servicios:** sección `#servicios` en `index.html`.
- **Colores:** variables al inicio de `styles.css` (`:root`).

## Publicar en GitHub Pages

1. En GitHub, ve a **Settings → Pages**.
2. En "Build and deployment", selecciona **Source: GitHub Actions**.
3. Cada push a `main` despliega automáticamente (ver `.github/workflows/pages.yml`).
4. La URL quedará como `https://holacontable.github.io/David-Dumalux/` (se puede cambiar el dominio después).

## Desarrollo local

Abre `index.html` directamente en el navegador, o usa un servidor simple:

```bash
python -m http.server 8080
```
