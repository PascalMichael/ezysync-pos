
POS Web Quickstart
------------------
cp .env.example .env
# edit .env with SUPABASE or SQLITE_URL
npm install
npx prisma generate
npx prisma db push
node prisma/seed.js
npm run dev
