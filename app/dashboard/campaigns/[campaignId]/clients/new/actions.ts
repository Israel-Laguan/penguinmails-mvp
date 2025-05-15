'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

interface CreateClientData {
  email: string;
  firstName?: string;
  lastName?: string;
  notes?: string;
  campaignId: string;
}

interface ClientData {
  email: string;
  firstName: string;
  lastName: string;
  notes: string;
  campaignId: string;
}

export async function createClient(data: CreateClientData) {
  const campaign = await prisma.campaign.findUnique({
    where: { id: parseInt(data.campaignId) },
    select: { companyId: true }
  });

  if (!campaign) {
    throw new Error('Campaign not found');
  }

  const client = await prisma.client.create({
    data: {
      email: data.email,
      firstName: data.firstName || null,
      lastName: data.lastName || null,
      notes: data.notes || null,
      companyId: campaign.companyId,
      campaigns: {
        create: {
          campaignId: parseInt(data.campaignId),
          statusInCampaign: 'PENDING'
        }
      }
    }
  });

  revalidatePath('/dashboard/clients');
  return client;
}

export async function updateClient(id: number, data: ClientData) {
  // Mock implementation
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { success: true };
}

export async function removeFromCampaign(clientId: number, campaignId: number) {
  await prisma.campaignClient.delete({
    where: {
      campaignId_clientId: {
        campaignId,
        clientId,
      }
    }
  });
  
  revalidatePath('/dashboard/clients');
}

export async function deleteClient(clientId: number) {
  await prisma.client.delete({
    where: { id: clientId }
  });
  
  revalidatePath('/dashboard/clients');
}

export async function maskClientPII(clientId: number) {
  const client = await prisma.client.findUnique({
    where: { id: clientId },
    select: { firstName: true, lastName: true }
  });

  if (!client) return;

  const maskName = (name?: string | null) => {
    if (!name) return name;
    return name.slice(0, 3) + '*'.repeat(name.length - 3);
  };

  return await prisma.client.update({
    where: { id: clientId },
    data: {
      maskPII: true,
      firstName: maskName(client.firstName),
      lastName: maskName(client.lastName),
    },
  });
}
