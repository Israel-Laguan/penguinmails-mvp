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
