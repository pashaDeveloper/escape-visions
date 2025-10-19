# Multi-stage Dockerfile for React application

# Stage 1: Build the application
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev dependencies needed for build)
RUN npm ci

# Copy all source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production image
FROM node:18-alpine AS production

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy built files from builder stage
COPY --from=builder /app/dist ./dist

# Install a simple HTTP server to serve the static files
RUN npm install -g serve

# Expose port
EXPOSE 8080

# Start the server
CMD ["serve", "-s", "dist", "-l", "8080"]