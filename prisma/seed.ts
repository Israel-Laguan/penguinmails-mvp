import { PrismaClient } from "../app/api/generated/prisma";

const prisma = new PrismaClient();

async function findOrCreate(model: any, where: object, data: object) {
  if (!model || !where || !data) return console.log("Necesary fields");
  const found = await model.findFirst({ where });
  if (found) {
    console.log("Already created: ", found);
    return found;
  }
  return model.create({ data });
}

async function main() {
  const freePlan = await findOrCreate(
    prisma.planDetail,
    { name: "FREE" },
    {
      name: "FREE",
      isMonthly: true,
      price: 0,
      maxCampaigns: 0,
      maxEmailAccounts: 0,
      maxEmailsPerMonth: 0,
      description: 'Free plan',
    },
  );

  await findOrCreate(
    prisma.planDetail,
    {
      name: "STARTER",
    },
    {
      name: "STARTER",
      isMonthly: true,
      maxCampaigns: 5,
      maxEmailAccounts: 10,
      maxEmailsPerMonth: 10000,
      price: 29.99,
      description: 'Starter plan',
    },
  );

  await findOrCreate(
    prisma.planDetail,
    { name: "PRO" },
    {
      name: "PRO",
      isMonthly: true,
      maxCampaigns: 50,
      maxEmailAccounts: 20,
      maxEmailsPerMonth: 50000,
      price: 59.99,
      description: 'Pro plan',
    },
  );

  const company = await findOrCreate(
    prisma.company,
    { name: "Acme Inc." },
    {
      name: "Acme Inc.",
    }
  );

  await prisma.subscription.create({
    data: {
      planDetailId: freePlan.id,
      companyId: company.id,
      paidOn: new Date(),
      renovateBefore: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    }
  });

  const user1 = await findOrCreate(
    prisma.user,
    { email: "alice@acme.com" },
    {
      name: "Alice",
      email: "alice@acme.com",
      username: "alice",
      passwordHash: "hashedpassword1",
      firebaseUid: "12312312323",
      role: "ADMIN",
      companyId: company.id,
    }
  );

  const user2 = await findOrCreate(
    prisma.user,
    { email: "bob@acme.com" },
    {
      name: "Bob",
      email: "bob@acme.com",
      username: "bob",
      passwordHash: "hashedpassword2",
      firebaseUid: "12312312234",
      role: "MEMBER",
      companyId: company.id,
    }
  );

  const client1 = await findOrCreate(
    prisma.client,
    { email: "john@example.com" },
    {
      email: "john@example.com",
      firstName: "John",
      lastName: "Doe",
      companyId: company.id,
    }
  );

  const client2 = await findOrCreate(
    prisma.client,
    { email: "jane@example.com" },
    {
      email: "jane@example.com",
      firstName: "Jane",
      lastName: "Smith",
      companyId: company.id,
    }
  );

  const tag = await findOrCreate(
    prisma.personalizationTag,
    { identifier: "firstName", companyId: company.id },
    {
      name: "First Name",
      identifier: "firstName",
      visualText: "{First Name}",
      type: "CLIENT",
      companyId: company.id,
    }
  );

  const template = await findOrCreate(
    prisma.template,
    { name: "Welcome Template", companyId: company.id },
    {
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
    }
  );

  const existingCampaigns = await prisma.campaign.findMany({
    where: { companyId: company.id },
  });

  if (!existingCampaigns.length) {
    await prisma.campaign.createMany({
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
      ],
    });
  }

  const campaign = existingCampaigns[0]

  if (!campaign) throw new Error("No campaign found after creation.");

  await prisma.campaignStep.upsert({
    where: {
      campaignId_sequenceOrder: {
        campaignId: campaign.id,
        sequenceOrder: 0,
      },
    },
    update: {},
    create: {
      sequenceOrder: 0,
      emailSubject: "Getting Started {First Name}",
      emailBody: "Let’s start your journey!",
      templateId: template.id,
      campaignId: campaign.id,
    },
  });

  const existingCampaignClients = await prisma.campaignClient.findMany({
    where: {
      campaignId: campaign.id,
    },
  });

  if (!existingCampaignClients.length) {
    await prisma.campaignClient.createMany({
      data: [
        { campaignId: campaign.id, clientId: client1.id },
        { campaignId: campaign.id, clientId: client2.id },
      ],
    });
  }

  const client = await prisma.client.findFirst();
  if (!client) throw new Error("No client found.");

  const existingMessages = await prisma.emailMessage.findMany({
    where: {
      campaignId: campaign.id,
      clientId: client.id,
    },
  });

  if (!existingMessages.length) {
    await prisma.emailMessage.createMany({
      data: [
        {
          subject: "Welcome to Acme!",
          body: "Thanks for joining us. This is the first step of a great journey.",
          status: "DRAFT",
          read: false,
          starred: false,
          campaignId: campaign.id,
          clientId: client.id,
        },
        {
          subject: "How can we help you?",
          body: "We’re here to help you get started. Reply to this email if you have any questions.",
          status: "DRAFT",
          read: true,
          starred: true,
          campaignId: campaign.id,
          clientId: client.id,
        },
        {
          subject: "Tips to make the most of Acme",
          body: "Today we’re sharing some tips to help you get the most out of our platform.",
          status: "DRAFT",
          read: false,
          starred: false,
          campaignId: campaign.id,
          clientId: client.id,
        },
        {
          subject: "Meet our team",
          body: "We want to introduce you to the people behind Acme. We’re here to support you!",
          status: "DRAFT",
          read: false,
          starred: false,
          campaignId: campaign.id,
          clientId: client.id,
        },
        {
          subject: "Did you know…?",
          body: "There are hidden features that can boost your productivity. Find out what they are.",
          status: "DRAFT",
          read: true,
          starred: false,
          campaignId: campaign.id,
          clientId: client.id,
        },
        {
          subject: "Let’s stay in touch",
          body: "We just wanted to check in. How’s everything going with Acme?",
          status: "DRAFT",
          read: false,
          starred: false,
          campaignId: campaign.id,
          clientId: client.id,
        },
        {
          subject: "Your opinion matters",
          body: "Tell us what you think about Acme so far. We’d love to hear from you.",
          status: "DRAFT",
          read: true,
          starred: false,
          campaignId: campaign.id,
          clientId: client.id,
        },
        {
          subject: "Final steps of your onboarding",
          body: "You’re almost done with the process. You’ve got this!",
          status: "DRAFT",
          read: false,
          starred: false,
          campaignId: campaign.id,
          clientId: client.id,
        },
      ],
    });
  }

  const existingAccounts = await prisma.emailAccount.findMany({
    where: { companyId: company.id },
  });

  if (!existingAccounts.length) {
    await prisma.emailAccount.createMany({
      data: [
        { companyId: company.id, email: "alice@acme.com", provider: "Google Workspace", createdById: user1.id, status: "ACTIVE", dayLimit: 20 },
        { companyId: company.id, email: "john@example.com", provider: "Google Workspace", createdById: user2.id, lastSync: new Date(Date.now() - 15 * 60 * 1000).toISOString(), status: "ACTIVE" },
        { companyId: company.id, email: "sales@example.com", provider: "Google Workspace", createdById: user2.id, status: "ACTIVE", sent24h: 5 },
        { companyId: company.id, email: "marketing@example.com", provider: "Google Workspace", createdById: user2.id, status: "ACTIVE", dayLimit: 5 },
        { companyId: company.id, email: "ana.morales@domain.com", provider: "Google Workspace", createdById: user1.id, status: "ACTIVE", dayLimit: 10 },
        { companyId: company.id, email: "david.gonzalez@service.io", provider: "Google Workspace", createdById: user1.id, status: "ACTIVE", dayLimit: 11 },
        { companyId: company.id, email: "carlos.flower@meail.org", provider: "Google Workspace", createdById: user1.id, status: "ACTIVE", dayLimit: 20 },
      ],
    });
  }

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
