
import { prisma } from '@/lib.db'; import { NextResponse } from 'next/server';
export async function GET(){ const sales = await prisma.order.aggregate({ _sum: { totalCents: true }}); return NextResponse.json({ totalSalesCents: sales._sum.totalCents || 0 }); }
