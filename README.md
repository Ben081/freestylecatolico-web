# Freestyle Católico 2026 — freestylecatolico.frate.lat

Sitio construido en **React (Vite) + Tailwind CSS v4 + Framer Motion**.

## Estado actual

- Todas las secciones de contenido (Hero, Proyecto, Rounds, Cronograma, Instituciones, Aliados, Equipo, Donadores, Footer)
- Modal de Convocatoria (formulario, aún sin conectar a backend/email real)
- Modal de Donación — flujo completo de UI (monto, anonimato, normalización de
  nombre, confirmación). El pago con Culqui está SIMULADO — falta conectar
  la API real de Culqui desde un backend (la clave secreta de Culqui nunca
  debe ir en este frontend).
- Pendiente (fuera de este entregable): backend Node/Express para el cargo
  de Culqui y para recibir las postulaciones de convocatoria.

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm install
npm run build
```

Esto genera la carpeta `dist/` — son archivos estáticos listos para servir con Nginx.

## Despliegue en el VPS (Contabo, 173.212.200.11)

1. Sube este proyecto al servidor (o clónalo si lo subes a un repo Git).
2. En el servidor:
   ```bash
   cd freestyle-catolico
   npm install
   npm run build
   ```
3. Copia el contenido de `dist/` a la ruta que sirva Nginx:
   ```bash
   sudo mkdir -p /var/www/freestylecatolico
   sudo cp -r dist/* /var/www/freestylecatolico/
   ```
4. Configura un server block de Nginx (ejemplo):
   ```nginx
   server {
       listen 80;
       server_name freestylecatolico.frate.lat;
       root /var/www/freestylecatolico;
       index index.html;
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```
5. Recarga Nginx: `sudo nginx -t && sudo systemctl reload nginx`
6. (Pendiente, se hará después) Agregar el registro DNS tipo A para
   `freestylecatolico` -> `173.212.200.11` en Namecheap.
7. (Recomendado) Configurar HTTPS con Certbot: `sudo certbot --nginx -d freestylecatolico.frate.lat`
