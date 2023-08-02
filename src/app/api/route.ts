import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(req: any) {
  const data = await req.json();
  const name = data.name;
  const email = data.email
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
    },
  });
  
  return NextResponse.json(newUser);
}


