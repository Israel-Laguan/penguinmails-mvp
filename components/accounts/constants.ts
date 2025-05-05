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
