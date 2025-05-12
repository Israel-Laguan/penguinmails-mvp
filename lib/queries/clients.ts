import { getMockClient } from '../mocks/clients';
// import { prisma } from '@/lib/prisma';

export async function getClient(id: number) {
  // Real implementation (commented out for now)
  // return await prisma.client.findUnique({
  //   where: { id },
  //   select: {
  //     id: true,
  //     email: true,
  //     firstName: true,
  //     lastName: true,
  //     notes: true,
  //   },
  // });

  // Mock implementation
  return getMockClient(id);
}
