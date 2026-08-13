# 🚀 Guía de Despliegue en Netlify — Sierva María Estética

Esta carpeta contiene la aplicación web del **Manual de Marca Interactivo** lista para desplegarse de manera gratuita e instantánea en **Netlify**.

---

## 🛠️ Método 1: Arrastrar y Soltar (Drag & Drop en 30 segundos) — RECOMENDADO

1. Inicia sesión o crea una cuenta en [https://app.netlify.com](https://app.netlify.com).
2. Ve a la pestaña **"Sites"** (Sitios).
3. Arrastra la carpeta **`dist`** (ubicada dentro de `Sierva Maria/dist`) y suéltala directamente en el recuadro que dice:
   > **"Want to deploy a new site without connecting to Git? Drag and drop your site output folder here"**.
4. ¡Listo! Netlify generará tu enlace URL público inmediatamente (ejemplo: `https://sierva-maria-brand.netlify.app`).

---

## 🐙 Método 2: Despliegue desde GitHub / GitLab

Si subes este código a un repositorio de GitHub:

1. En Netlify, selecciona **"Add new site"** → **"Import an existing project"**.
2. Conecta tu repositorio de GitHub.
3. Netlify detectará automáticamente la configuración requerida gracias al archivo `netlify.toml` incluido:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Haz clic en **"Deploy Site"**.

---

## 📁 Archivos de Configuración Incluidos
- `netlify.toml`: Define los comandos de build y redirecciones SPA.
- `public/_redirects`: Garantiza la navegación fluida sin errores 404 al recargar páginas.
- `dist/`: Carpeta compilada optimizada de producción lista para hosting.
- Assets descargables integrados (`/Logo-Sierva-Maria-Negro.svg`, `/Identidad-de-Marca-Sierva-Maria.pdf`).
