
import { prisma } from '@/lib.db'; import { NextResponse } from 'next/server';
export async function POST(req: Request) {
  const { pin } = await req.json();
  if (!pin) return NextResponse.json({ error: 'PIN required' }, { status: 400 });
  const staff = await prisma.staff.findUnique({ where: { pin } });
  if (!staff) return NextResponse.json({ error: 'Invalid PIN' }, { status: 401 });
  return NextResponse.json({ staff });
}
