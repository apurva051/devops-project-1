# Base Image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy React source code
COPY frontend/ .

# Expose React port
EXPOSE 3000

# Start React application
CMD ["npm", "start"]