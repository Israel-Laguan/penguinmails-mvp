import { Template } from '@/components/templates/mocks';
import { userTemplates, builtInTemplates } from '@/components/templates/mocks';
// import prisma from '@/lib/prisma';

export async function getTemplates(userId: string): Promise<Template[]> {
  try {
    // When ready to use Prisma:
    // const templates = await prisma.template.findMany({
    //   where: { userId },
    //   orderBy: { createdAt: 'desc' }
    // });
    // return templates;

    // For now, return mock data
    console.log('Fetching templates for user:', userId);
    return userTemplates;
  } catch (error) {
    console.error('Error fetching templates:', error);
    return [];
  }
}

export async function getTemplate(id: string): Promise<Template | null> {
  try {
    // When ready to use Prisma:
    // const template = await prisma.template.findUnique({
    //   where: { id }
    // });
    // return template;

    // For now, return mock data
    const template = [...userTemplates, ...builtInTemplates].find(t => t.id === id);
    return template || null;
  } catch (error) {
    console.error('Error fetching template:', error);
    return null;
  }
}

export async function createTemplate(data: Partial<Template>): Promise<Template | null> {
  try {
    // When ready to use Prisma:
    // const template = await prisma.template.create({
    //   data: {
    //     ...data,
    //     bodyHtml: convertToHtml(data.body), // You'll need to implement this
    //   }
    // });
    // return template;

    // For now, return mock data
    const newTemplate: Template = {
      id: `t${userTemplates.length + 1}`,
      name: data.name || '',
      category: data.category || 'OUTREACH',
      subject: data.subject || '',
      body: data.body || '',
      bodyHtml: data.bodyHtml || '',
      description: data.description || '',
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: data.userId || 'user1',
    };
    userTemplates.push(newTemplate);
    return newTemplate;
  } catch (error) {
    console.error('Error creating template:', error);
    return null;
  }
}

export async function updateTemplate(id: string, data: Partial<Template>): Promise<Template | null> {
  try {
    // When ready to use Prisma:
    // const template = await prisma.template.update({
    //   where: { id },
    //   data: {
    //     ...data,
    //     bodyHtml: data.body ? convertToHtml(data.body) : undefined,
    //   }
    // });
    // return template;

    // For now, update mock data
    const index = userTemplates.findIndex(t => t.id === id);
    if (index === -1) return null;
    
    userTemplates[index] = {
      ...userTemplates[index],
      ...data,
      updatedAt: new Date()
    };
    return userTemplates[index];
  } catch (error) {
    console.error('Error updating template:', error);
    return null;
  }
}
