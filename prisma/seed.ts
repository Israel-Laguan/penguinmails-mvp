import { PrismaClient } from "../app/api/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const company = await prisma.company.create({
    data: {
      name: "Acme Inc.",
      planType: "FREE",
    },
  });

  const user1 = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@acme.com",
      username: "alice",
      passwordHash: "hashedpassword1",
      role: "ADMIN",
      companyId: company.id,
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: "Bob",
      email: "bob@acme.com",
      username: "bob",
      passwordHash: "hashedpassword2",
      role: "MEMBER",
      companyId: company.id,
    },
  });

  const client1 = await prisma.client.create({
    data: {
      email: "john@example.com",
      firstName: "John",
      lastName: "Doe",
      companyId: company.id,
    },
  });

  const client2 = await prisma.client.create({
    data: {
      email: "jane@example.com",
      firstName: "Jane",
      lastName: "Smith",
      companyId: company.id,
    },
  });

  const tag = await prisma.personalizationTag.create({
    data: {
      name: "First Name",
      identifier: "firstName",
      visualText: "{First Name}",
      type: "CLIENT",
      companyId: company.id,
    },
  });

  const template = await prisma.template.create({
    data: {
      name: "Welcome Template",
      subject: "Welcome {First Name}!",
      body: "Hi {First Name}, welcome to Acme!",
      bodyHtml: "<p>Hi {First Name}, welcome to Acme!</p>",
      category: "AGENCY",
      description: "Welcome email",
      companyId: company.id,
      createdById: user1.id,
      tags: {
        create: {
          tagId: tag.id,
          required: true,
          order: 0,
        },
      },
    },
  });

  const campaign = await prisma.campaign.create({
    data: {
      name: "Onboarding Campaign",
      fromName: "Alice",
      fromEmail: "alice@acme.com",
      companyId: company.id,
      createdById: user1.id,
      status: "DRAFT",
      sendDays: [1, 3, 5],
      timezone: "UTC",
    },
  });

  await prisma.campaignStep.create({
    data: {
      sequenceOrder: 0,
      emailSubject: "Getting Started {First Name}",
      emailBody: "Let’s start your journey!",
      templateId: template.id,
      campaignId: campaign.id,
    },
  });

  await prisma.campaignClient.createMany({
    data: [
      {
        campaignId: campaign.id,
        clientId: client1.id,
      },
      {
        campaignId: campaign.id,
        clientId: client2.id,
      },
    ],
  });

  const campaignCurrent = await prisma.campaign.findFirst();
  const client = await prisma.client.findFirst();

  if (!campaignCurrent || !client) {
    throw new Error('No campaign or client found. Please create them first.');
  }

  const emailMessages = await prisma.emailMessage.createMany({
    data: [
      {
        subject: '¡Bienvenido a Acme!',
        body: 'Gracias por unirte a nosotros. Este es el primer paso de un gran viaje.',
        status: 'DRAFT',
        read: false,
        starred: false,
        campaignId: campaignCurrent.id,
        clientId: client.id,
      },
      {
        subject: '¿Cómo podemos ayudarte?',
        body: 'Estamos aquí para ayudarte a empezar. Respondé a este correo si tenés dudas.',
        status: 'DRAFT',
        read: true,
        starred: true,
        campaignId: campaignCurrent.id,
        clientId: client.id,
      },
      {
        subject: 'Consejos para aprovechar al máximo Acme',
        body: 'Hoy te compartimos algunos tips para sacarle el jugo a nuestra plataforma.',
        status: 'DRAFT',
        read: false,
        starred: false,
        campaignId: campaignCurrent.id,
        clientId: client.id,
      },
      {
        subject: 'Conocé a nuestro equipo',
        body: 'Queremos presentarte a quienes están detrás de Acme. ¡Estamos para ayudarte!',
        status: 'DRAFT',
        read: false,
        starred: false,
        campaignId: campaignCurrent.id,
        clientId: client.id,
      },
      {
        subject: '¿Sabías que…?',
        body: 'Hay funciones ocultas que pueden mejorar tu productividad. Descubrí cuáles son.',
        status: 'DRAFT',
        read: true,
        starred: false,
        campaignId: campaignCurrent.id,
        clientId: client.id,
      },
      {
        subject: 'Seguimos en contacto',
        body: 'Solo queríamos saber cómo vas hasta ahora. ¿Todo bien con Acme?',
        status: 'DRAFT',
        read: false,
        starred: false,
        campaignId: campaignCurrent.id,
        clientId: client.id,
      },
      {
        subject: 'Tu opinión importa',
        body: 'Contanos qué te parece Acme hasta ahora. Nos encantaría escucharte.',
        status: 'DRAFT',
        read: true,
        starred: false,
        campaignId: campaignCurrent.id,
        clientId: client.id,
      },
      {
        subject: 'Últimos pasos de tu onboarding',
        body: 'Ya casi terminás el proceso. ¡Vamos que se puede!',
        status: 'DRAFT',
        read: false,
        starred: false,
        campaignId: campaignCurrent.id,
        clientId: client.id,
      },
    ],
  });

  console.log("🌱 Seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
