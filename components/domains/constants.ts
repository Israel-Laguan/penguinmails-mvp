export enum DnsProvider {
  CLOUDFLARE = "Cloudflare",
  GODADDY = "GoDaddy",
  NAMECHEAP = "Namecheap",
  ROUTE53 = "AWS Route 53",
  DIGITALOCEAN = "DigitalOcean",
  GOOGLE_DOMAINS = "Google Domains",
  OTHER = "Other",
}

export enum DkimManagementType {
  USER_MANAGED_TXT = "USER_MANAGED_TXT",
  SERVICE_MANAGED_CNAME = "SERVICE_MANAGED_CNAME",
}

export const DNS_RECORD_TTL = 3600; // 1 hour in seconds

export const DNS_RECORD_TYPES = {
  SPF: {
    type: "TXT",
    name: "@",
    ttl: DNS_RECORD_TTL,
    template: "v=spf1 include:_spf.penguinmails.com ~all"
  },
  DKIM: {
    type: "CNAME",
    name: "pm._domainkey",
    ttl: DNS_RECORD_TTL,
    template: "{domain}.dkim.penguinmails.com"
  },
  DMARC: {
    type: "TXT",
    name: "_dmarc",
    ttl: DNS_RECORD_TTL,
    template: "v=DMARC1; p=none; rua=mailto:dmarc@penguinmails.com"
  }
};

export enum EmailProvider {
  GMAIL = "Gmail",
  OUTLOOK = "Outlook",
  SMTP = "SMTP",
  OFFICE365 = "Office 365",
  YAHOO = "Yahoo",
  ZOHO = "Zoho",
  AMAZON_SES = "Amazon SES",
  MAILGUN = "Mailgun",
  SENDGRID = "SendGrid",
  POSTMARK = "Postmark",
}

export const providerDetails = {
  [EmailProvider.GMAIL]: {
    maxDailyLimit: 2000,
    requiresOAuth: true,
    icon: "gmail",
  },
  [EmailProvider.OUTLOOK]: {
    maxDailyLimit: 1000,
    requiresOAuth: true,
    icon: "outlook",
  },
  [EmailProvider.OFFICE365]: {
    maxDailyLimit: 10000,
    requiresOAuth: true,
    icon: "office365",
  },
  [EmailProvider.SMTP]: {
    maxDailyLimit: 50000,
    requiresOAuth: false,
    icon: "smtp",
  },
  // Add other providers as needed
}
