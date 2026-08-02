# --- Stage 1: Build Stage ---
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package manifests and Prisma schema first
COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies (including devDependencies for TypeScript compilation)
RUN npm ci

# Generate Prisma Client
RUN npx prisma generate

# Copy source code and build TypeScript
COPY . .
RUN npm run build

# Prune devDependencies to keep image lightweight
RUN npm prune --production

# --- Stage 2: Production Stage ---
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Run as non-root user for container security
USER node

# Copy built app and dependencies from builder stage
COPY --chown=node:node --from=builder /app/package*.json ./
COPY --chown=node:node --from=builder /app/node_modules ./node_modules
COPY --chown=node:node --from=builder /app/dist ./dist
COPY --chown=node:node --from=builder /app/prisma ./prisma

EXPOSE 5000

CMD ["node", "dist/server.js"]