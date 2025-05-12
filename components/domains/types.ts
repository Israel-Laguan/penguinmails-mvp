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
export type EmailAccountStatus =
  | "PENDING"
  | "ACTIVE"
  | "ISSUE"
  | "SUSPENDED"
  | "DELETED";

export type DomainStatus =
  | "PENDING"
  | "VERIFIED"
  | "SETUP_REQUIRED"
  | "FAILED"
  | "DELETED";

export type WarmupStatusType =
  | "NOT_STARTED"
  | "WARMING"
  | "WARMED"
  | "PAUSED";

export type EmailAccount = {
  id: number;
  email: string;
  provider: string;
  status: EmailAccountStatus;
  reputation: number;
  warmupStatus: WarmupStatusType;
  dayLimit: number;
  sent24h: number;
  lastSync: string;
  spf: boolean;
  dkim: boolean;
  dmarc: boolean;
  createdAt: string;
  updatedAt: string;
  companyId: number;
  createdById: string;
};

export type Domain = {
  id: number;
  domain: string;
  provider: string;
  status: DomainStatus;
  daysActive: number;
  reputation: number;
  spf: boolean;
  dkim: boolean;
  dmarc: boolean;
  createdAt: string;
  updatedAt: string;
  companyId: number;
  createdById: string;
};

export enum VerificationStatus {
  VERIFIED = "VERIFIED",
  PENDING = "PENDING",
  ERROR = "ERROR",
  NOT_CONFIGURED = "NOT_CONFIGURED",
  DISABLED = "DISABLED"
}

export enum RelayType {
  INTERNAL = "INTERNAL",
  EXTERNAL = "EXTERNAL",
  DEFAULT_SERVER_CONFIG = "DEFAULT_SERVER_CONFIG"
}

export enum AccountCreationType {
  LINUX_USER = "LINUX_USER",
  VIRTUAL_USER_DB = "VIRTUAL_USER_DB",
}
