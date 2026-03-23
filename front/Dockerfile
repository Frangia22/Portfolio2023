# ---------- 1. Dependencies cache ----------
    FROM node:20-alpine AS deps
    WORKDIR /app
    
    COPY package.json pnpm-lock.yaml ./
    RUN corepack enable && pnpm install --frozen-lockfile
    
    # ---------- 2. Build ----------
    FROM node:20-alpine AS builder
    WORKDIR /app
    
    COPY --from=deps /app/node_modules ./node_modules
    COPY . .
    
    RUN corepack enable && pnpm build
    
    # ---------- 3. Runtime (NGINX) ----------
    FROM nginx:alpine
    
    # Limpia config default
    RUN rm -rf /usr/share/nginx/html/*
    
    # Copia build
    COPY --from=builder /app/dist /usr/share/nginx/html
    
    EXPOSE 80
    
    CMD ["nginx", "-g", "daemon off;"]