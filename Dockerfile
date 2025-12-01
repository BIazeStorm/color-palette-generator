# 1. Етап збірки Фронтенду
FROM node:20-alpine AS build-frontend
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build

# 2. Етап налаштування Бекенду (Фінальний)
FROM node:20-alpine
WORKDIR /app

# Встановлюємо залежності бекенду
COPY backend/package*.json ./backend/
WORKDIR /app/backend
RUN npm install

# Копіюємо код бекенду
COPY backend/ .

# КОПІЮЄМО зібраний React у папку public бекенду
COPY --from=build-frontend /app/frontend/dist ./public

# Порт і запуск
EXPOSE 3001
CMD ["node", "index.js"]