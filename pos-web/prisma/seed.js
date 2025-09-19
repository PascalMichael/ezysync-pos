
const { PrismaClient } = require('@prisma/client'); const prisma = new PrismaClient();
async function main(){ await prisma.staff.upsert({ where:{ pin: '1234' }, update:{}, create:{ name:'Admin', pin:'1234', role:'ADMIN' } }); console.log('Seed done'); }
main().finally(()=>prisma.$disconnect());
