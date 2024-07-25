# Usa una imagen base de Node.js
FROM node:18 AS build

# Crea y establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Asegúrate de que los archivos binarios de npm tengan permisos de ejecución
RUN chmod -R +x /app/node_modules/.bin

# Construye la aplicación
RUN npm run build

# Usa una imagen base para servir archivos estáticos
FROM nginx:alpine

# Copia los archivos construidos al directorio de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expon los puertos necesarios
EXPOSE 80

# Comando para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]
