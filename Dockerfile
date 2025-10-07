# Gunakan image Node versi terbaru (dev-friendly)
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package.json dan install dependency
COPY package*.json ./
RUN npm install

# Copy semua source code
COPY . .

# Expose port Next.js
EXPOSE 3000

# Jalankan Next.js dalam mode development
CMD ["npm", "run", "dev"]
