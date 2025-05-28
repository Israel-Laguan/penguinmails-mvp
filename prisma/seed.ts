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

  const campaign = await prisma.campaign.createManyAndReturn({
    data: [
      {
        name: "Onboarding Campaign",
        fromName: "Alice",
        fromEmail: "alice@acme.com",
        companyId: company.id,
        createdById: user1.id,
        status: "DRAFT",
        sendDays: [1, 3, 5],
        timezone: "UTC",
      },
      {
        name: "Software CEOs Outreach",
        fromName: "Ana Morales",
        fromEmail: "ana.morales@domain.com",
        companyId: company.id,
        createdById: user1.id,
        status: "ACTIVE",
        sendDays: [1, 2],
        timezone: "(GMT+02:00) Athens, Bucharest, Istanbul",
      },
      {
        name: "Marketing Directors Follow-up",
        fromName: "David González",
        fromEmail: "david.gonzalez@service.io",
        companyId: company.id,
        createdById: user1.id,
        status: "PAUSED",
        sendDays: [1, 3, 5, 6],
        timezone: "(GMT-03:00) Buenos Aires, Georgetown",
      },
      {
        name: "Startup Founders Introduction",
        fromName: "Ana Morales",
        fromEmail: "ana.morales@domain.com",
        companyId: company.id,
        createdById: user1.id,
        status: "DRAFT",
        sendDays: [1, 2, 4, 5],
        timezone: "(GMT+02:00) Athens, Bucharest, Istanbul",
      },
      {
        name: "SaaS Decision Makers",
        fromName: "Carlos Flores",
        fromEmail: "carlos.flower@meail.org",
        companyId: company.id,
        createdById: user1.id,
        status: "ACTIVE",
        sendDays: [0, 6],
        timezone: "(GMT-04:00) Atlantic Time (Canada)",
      },
      {
        name: "Enterprise IT Directors",
        fromName: "David González",
        fromEmail: "david.gonzalez@service.io",
        companyId: company.id,
        createdById: user1.id,
        status: "COMPLETED",
        sendDays: [0, 2, 6],
        timezone: "(GMT-03:00) Buenos Aires, Georgetown",
      },
    ]
  });

  await prisma.campaignStep.create({
    data: {
      sequenceOrder: 0,
      emailSubject: "Getting Started {First Name}",
      emailBody: "Let’s start your journey!",
      templateId: template.id,
      campaignId: campaign[0].id,
    },
  });

  await prisma.campaignClient.createMany({
    data: [
      {
        campaignId: campaign[0].id,
        clientId: client1.id,
      },
      {
        campaignId: campaign[0].id,
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
        subject: 'Welcome to Acme!',
        body: 'Thanks for joining us. This is the first step of a great journey.',
        status: 'DRAFT',
        read: false,
        starred: false,
        campaignId: campaignCurrent.id,
        clientId: client.id,
      },
      {
        subject: 'How can we help you?',
        body: 'We’re here to help you get started. Reply to this email if you have any questions.',
        status: 'DRAFT',
        read: true,
        starred: true,
        campaignId: campaignCurrent.id,
        clientId: client.id,
      },
      {
        subject: 'Tips to make the most of Acme',
        body: 'Today we’re sharing some tips to help you get the most out of our platform.',
        status: 'DRAFT',
        read: false,
        starred: false,
        campaignId: campaignCurrent.id,
        clientId: client.id,
      },
      {
        subject: 'Meet our team',
        body: 'We want to introduce you to the people behind Acme. We’re here to support you!',
        status: 'DRAFT',
        read: false,
        starred: false,
        campaignId: campaignCurrent.id,
        clientId: client.id,
      },
      {
        subject: 'Did you know…?',
        body: 'There are hidden features that can boost your productivity. Find out what they are.',
        status: 'DRAFT',
        read: true,
        starred: false,
        campaignId: campaignCurrent.id,
        clientId: client.id,
      },
      {
        subject: 'Let’s stay in touch',
        body: 'We just wanted to check in. How’s everything going with Acme?',
        status: 'DRAFT',
        read: false,
        starred: false,
        campaignId: campaignCurrent.id,
        clientId: client.id,
      },
      {
        subject: 'Your opinion matters',
        body: 'Tell us what you think about Acme so far. We’d love to hear from you.',
        status: 'DRAFT',
        read: true,
        starred: false,
        campaignId: campaignCurrent.id,
        clientId: client.id,
      },
      {
        subject: 'Final steps of your onboarding',
        body: 'You’re almost done with the process. You’ve got this!',
        status: 'DRAFT',
        read: false,
        starred: false,
        campaignId: campaignCurrent.id,
        clientId: client.id,
      },
    ],
  });

  const emailAccount = await prisma.emailAccount.createMany({
    data: [
      { companyId: company.id, email: "alice@acme.com", provider: 'Google Workspace', createdById: user1.id, status: 'ACTIVE', dayLimit: 20 },
      { companyId: company.id, email: "john@example.com", provider: 'Google Workspace', createdById: user2.id, lastSync: new Date(Date.now() - 15 * 60 * 1000).toISOString(), status: 'ACTIVE' },
      { companyId: company.id, email: "sales@example.com", provider: 'Google Workspace', createdById: user2.id, status: 'ACTIVE', sent24h: 5 },
      { companyId: company.id, email: "marketing@example.com", provider: 'Google Workspace', createdById: user2.id, status: 'ACTIVE', dayLimit: 5 },
      { companyId: company.id, email: "ana.morales@domain.com", provider: 'Google Workspace', createdById: user1.id, status: 'ACTIVE', dayLimit: 10 },
      { companyId: company.id, email: "david.gonzalez@service.io", provider: 'Google Workspace', createdById: user1.id, status: 'ACTIVE', dayLimit: 11 },
      { companyId: company.id, email: "carlos.flower@meail.org", provider: 'Google Workspace', createdById: user1.id, status: 'ACTIVE', dayLimit: 20 },
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
