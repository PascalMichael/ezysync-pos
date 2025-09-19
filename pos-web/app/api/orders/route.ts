
import { prisma } from '@/lib.db'; import { NextResponse } from 'next/server';
export async function POST(req: Request){
  const { staffId, items } = await req.json();
  const total = items.reduce((s:any,i:any)=>s + i.qty*i.priceCents, 0);
  const o = await prisma.order.create({ data: { staffId, totalCents: total } });
  return NextResponse.json({ orderId: o.id, totalCents: total });
}
