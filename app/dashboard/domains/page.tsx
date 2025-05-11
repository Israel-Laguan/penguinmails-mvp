import DomainsContent, { type Domain } from "./content";

// Sample domains data for development
const domains: Domain[] = [
  {
    id: 1,
    name: "example.com",
    provider: "Google Domains",
    status: "VERIFIED",
    daysActive: 120,
    reputation: 88,
    spf: true,
    dkim: true,
    dmarc: true,
    emailAccounts: 3,
    createdAt: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date().toISOString(),
    companyId: 1,
    createdById: "user_1",
  },
  {
    id: 2,
    name: "marketing.example.com",
    provider: "Namecheap",
    status: "SETUP_REQUIRED",
    daysActive: 30,
    reputation: 72,
    spf: true,
    dkim: false,
    dmarc: false,
    emailAccounts: 1,
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date().toISOString(),
    companyId: 1,
    createdById: "user_1",
  },
  {
    id: 3,
    name: "outreach.example.com",
    provider: "GoDaddy",
    status: "PENDING",
    daysActive: 5,
    reputation: 65,
    spf: true,
    dkim: false,
    dmarc: false,
    emailAccounts: 0,
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date().toISOString(),
    companyId: 1,
    createdById: "user_1",
  }
];

export default function DomainsPage() {
  // In the future, this will fetch data from the server
  return <DomainsContent domains={domains} />;
}