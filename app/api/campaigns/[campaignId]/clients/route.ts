import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { campaignId: string } }
) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');
  const skip = (page - 1) * limit;

  const clients = await prisma.campaignClient.findMany({
    where: {
      campaignId: parseInt(params.campaignId),
    },
    include: {
      client: true,
    },
    skip,
    take: limit,
  });

  const total = await prisma.campaignClient.count({
    where: {
      campaignId: parseInt(params.campaignId),
    },
  });

  return NextResponse.json({
    clients,
    total,
    pages: Math.ceil(total / limit),
  });
}

export async function DELETE(
  request: Request,
  { params }: { params: { campaignId: string } }
) {
  const { clientId } = await request.json();
  
  await prisma.campaignClient.delete({
    where: {
      campaignId_clientId: {
        campaignId: parseInt(params.campaignId),
        clientId: parseInt(clientId),
      },
    },
  });

  return NextResponse.json({ success: true });
}
