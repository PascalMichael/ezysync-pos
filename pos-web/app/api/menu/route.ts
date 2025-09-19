
import { prisma } from '@/lib.db'; import { NextResponse } from 'next/server';
export async function GET(){ const items = await prisma.menuItem.findMany(); return NextResponse.json({ items }); }
export async function POST(req: Request){ const b = await req.json(); const it = await prisma.menuItem.create({ data: { name: b.name, priceCents: b.priceCents } }); return NextResponse.json({ item: it }); }
