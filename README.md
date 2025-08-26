# GMM Web App

Una aplicación web para la gestión de emisiones de seguros desarrollada con Next.js, Prisma y PostgreSQL.

## 🚀 Configuración Rápida

### 1. Instalar dependencias
```bash
npm install
```

### 2. Configurar Base de Datos

#### Opción A: Neon (Recomendado para producción)
1. Crea una cuenta en [Neon](https://neon.tech)
2. Crea una nueva base de datos
3. Copia la connection string

#### Opción B: Base de datos local
```bash
# Instalar PostgreSQL localmente
brew install postgresql  # macOS
# o usar Docker
docker run --name postgres -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres
```

### 3. Variables de Entorno
```bash
# Copia el archivo de ejemplo
cp .env.example .env.local

# Edita .env.local con tu DATABASE_URL
DATABASE_URL="postgresql://username:password@host:5432/database?sslmode=require"
```

### 4. Configurar Prisma
```bash
# Generar cliente de Prisma
npx prisma generate

# Ejecutar migraciones (solo si tienes una base de datos configurada)
npx prisma db push
```

### 5. Ejecutar en desarrollo
```bash
npm run dev
```

## 📦 Deploy en Netlify

1. Conecta tu repositorio de GitHub a Netlify
2. Configura las variables de entorno en Netlify:
   - `DATABASE_URL`: Tu connection string de PostgreSQL
3. El deploy se ejecutará automáticamente

## 🛠️ Tecnologías

- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Base de Datos**: PostgreSQL (compatible con Neon, Supabase, etc.)
- **UI Components**: Radix UI, Lucide Icons
- **Deploy**: Netlify

## 📁 Estructura del Proyecto

```
├── app/                    # App Router de Next.js
│   ├── api/               # API Routes
│   ├── emisiones/         # Páginas de emisiones
│   └── ...
├── components/            # Componentes React
├── lib/                   # Utilidades y configuraciones
├── prisma/               # Schema y migraciones de Prisma
└── scripts/              # Scripts de base de datos
```

## 🔧 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build para producción
- `npm run start` - Servidor de producción
- `npx prisma studio` - Interface visual de la base de datos
- `npx prisma db push` - Aplicar cambios al schema

## 🚨 Notas Importantes

- Este proyecto usa PostgreSQL en lugar de SQLite para compatibilidad con Netlify
- Las variables de entorno son requeridas para el funcionamiento correcto
- El proyecto incluye datos de ejemplo para desarrollo
