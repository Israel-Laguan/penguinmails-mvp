import AccountsContent, { type EmailAccount, type Domain } from "./content";

// Sample accounts data
const emailAccounts: EmailAccount[] = [
  {
    id: 1,
    email: "john@example.com",
    provider: "Gmail",
    status: "ACTIVE",
    reputation: 85,
    warmupStatus: "WARMING",
    dayLimit: 200,
    sent24h: 120,
    lastSync: new Date(Date.now() - 10 * 60 * 1000).toISOString(), // 10 minutes ago
    spf: true,
    dkim: true,
    dmarc: true,
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days ago
    updatedAt: new Date().toISOString(),
    companyId: 1,
    createdById: "user_1",
  },
  {
    id: 2,
    email: "sales@example.com",
    provider: "Outlook",
    status: "ACTIVE",
    reputation: 92,
    warmupStatus: "WARMED",
    dayLimit: 300,
    sent24h: 250,
    lastSync: new Date(Date.now() - 30 * 60 * 1000).toISOString(), // 30 minutes ago
    spf: true,
    dkim: true,
    dmarc: true,
    createdAt: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(), // 60 days ago
    updatedAt: new Date().toISOString(),
    companyId: 1,
    createdById: "user_1",
  },
  {
    id: 3,
    email: "marketing@example.com",
    provider: "SMTP",
    status: "ISSUE",
    reputation: 60,
    warmupStatus: "WARMING",
    dayLimit: 150,
    sent24h: 80,
    lastSync: new Date(Date.now() - 60 * 60 * 1000).toISOString(), // 1 hour ago
    spf: true,
    dkim: false,
    dmarc: true,
    createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(), // 15 days ago
    updatedAt: new Date().toISOString(),
    companyId: 1,
    createdById: "user_1",
  }
];

const domains: Domain[] = [
  {
    id: 1,
    domain: "example.com",
    provider: "Google Workspace",
    status: "VERIFIED",
    daysActive: 120,
    reputation: 88,
    spf: true,
    dkim: true,
    dmarc: true,
    createdAt: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000).toISOString(), // 120 days ago
    updatedAt: new Date().toISOString(),
    companyId: 1,
    createdById: "user_1",
  },
  {
    id: 2,
    domain: "marketing-domain.com",
    provider: "Namecheap",
    status: "SETUP_REQUIRED",
    daysActive: 30,
    reputation: 72,
    spf: true,
    dkim: false,
    dmarc: false,
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days ago
    updatedAt: new Date().toISOString(),
    companyId: 1,
    createdById: "user_1",
  }
];

export default function AccountsPage() {
  // In the future, this is where we'll fetch data from the server
  return <AccountsContent emailAccounts={emailAccounts} domains={domains} />;
}
