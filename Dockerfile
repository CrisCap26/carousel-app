# Usar una imagen base con Node.js
FROM node:20-slim

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el package.json y package-lock.json (o yarn.lock) para instalar dependencias
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar todo el código fuente a la imagen
COPY . .

# Construir el proyecto para producción
RUN npm run build

# Exponer el puerto en el que el servidor estará disponible
EXPOSE 3000

# Comando para iniciar el servidor de producción (usando `serve` para servir los archivos estáticos)
CMD ["npx", "serve", "dist"]
