#!/bin/bash
# ════════════════════════════════════════════════════════════
# deploy.sh — Desplegar Freestyle Católico en el VPS
# Ejecutar desde el VPS: bash deploy.sh
# ════════════════════════════════════════════════════════════

set -e

APP_DIR="/home/frate/freestyle-catolico"
API_DIR="/home/frate/freestyle-catolico/server"
SERVICE_NAME="frate-api"

echo "═══ [1/7] Verificando Node.js ═══"
if ! command -v node &> /dev/null; then
  echo "Instalando Node.js 20.x..."
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt-get install -y nodejs
fi
echo "Node $(node -v) | npm $(npm -v)"

echo ""
echo "═══ [2/7] Instalando dependencias del frontend ═══"
cd "$APP_DIR"
npm install

echo ""
echo "═══ [3/7] Build del frontend ═══"
npm run build
echo "Build completado en $APP_DIR/dist"

echo ""
echo "═══ [4/7] Instalando dependencias del backend ═══"
cd "$API_DIR"
npm install

echo ""
echo "═══ [5/7] Configurando variables de entorno ═══"
if [ ! -f "$API_DIR/.env" ]; then
  echo "Creando .env desde .env.example..."
  cp "$API_DIR/.env.example" "$API_DIR/.env"
  echo ""
  echo "⚠️  EDITA EL ARCHIVO $API_DIR/.env CON TUS CREDENCIALES"
  echo "   Especialmente: SMTP_PASS y ADMIN_TOKEN"
  echo ""
fi

echo ""
echo "═══ [6/7] Configurando PM2 ═══"
if ! command -v pm2 &> /dev/null; then
  echo "Instalando PM2 globally..."
  npm install -g pm2
fi

# Detener instancia previa si existe
pm2 stop "$SERVICE_NAME" 2>/dev/null || true
pm2 delete "$SERVICE_NAME" 2>/dev/null || true

# Iniciar API
cd "$API_DIR"
pm2 start server.js --name "$SERVICE_NAME" --cwd "$API_DIR"
pm2 save

# Configurar PM2 para iniciar con el sistema
pm2 startup systemd -u root --hp /root 2>/dev/null || true

echo ""
echo "═══ [7/7] Configurando Nginx ═══"
if ! command -v nginx &> /dev/null; then
  echo "Instalando Nginx..."
  sudo apt-get install -y nginx
fi

# Copiar configuración
sudo cp "$API_DIR/nginx-frate.conf" /etc/nginx/sites-available/frate-lat
sudo ln -sf /etc/nginx/sites-available/frate-lat /etc/nginx/sites-enabled/frate-lat

# Eliminar default si existe
sudo rm -f /etc/nginx/sites-enabled/default

# Test y reload
sudo nginx -t && sudo systemctl reload nginx

echo ""
echo "═══════════════════════════════════════════════════════════"
echo "✅  Despliegue completado!"
echo "═══════════════════════════════════════════════════════════"
echo ""
echo "🌐  Sitio:     http://frate.lat"
echo "📡  API:       http://frate.lat/api/health"
echo "🔒  Admin:     http://frate.lat/admin/donaciones/TU_TOKEN"
echo ""
echo "📋  Próximos pasos:"
echo "   1. Editar $API_DIR/.env con tus credenciales SMTP"
echo "   2. Configurar HTTPS con Let's Encrypt (certbot)"
echo "   3. Verificar que el correo funciona: curl http://localhost:3001/api/health"
echo ""
echo "📋  Comandos útiles:"
echo "   pm2 logs frate-api      — ver logs"
echo "   pm2 restart frate-api   — reiniciar API"
echo "   pm2 status              — estado de procesos"
echo ""
