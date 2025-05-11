export type DomainStatus = 
  | "PENDING"
  | "VERIFIED"
  | "SETUP_REQUIRED"
  | "FAILED"
  | "DELETED";

export type Domain = {
  id: number;
  name: string;
  provider: string;
  status: DomainStatus;
  daysActive: number;
  reputation: number;
  spf: boolean;
  dkim: boolean;
  dmarc: boolean;
  emailAccounts: number;
  createdAt: string;
  updatedAt: string;
  companyId: number;
  createdById: string;
};