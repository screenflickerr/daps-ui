FROM node:20-alpine AS builder
RUN npm install -g pnpm
WORKDIR /app

# Copy source code
COPY . .

# Copy package files
# COPY package.json ./
# COPY tsconfig.json ./
# COPY vite.config.ts ./

# Install dependencies
RUN pnpm install

# Build the application
RUN pnpm run build
# RUN pnpm exec vite build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]