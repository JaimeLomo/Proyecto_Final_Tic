# scripts/Dockerfile
FROM node:20-alpine

# Crear carpeta y copiar juego
WORKDIR /app
COPY ../pacman-server /app

# Instalar Express para servidor
RUN npm install express

# Exponer puerto del juego
EXPOSE 3000

# Comando que levanta el servidor
CMD ["node", "server.js"]
