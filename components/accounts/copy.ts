import { EmailProvider } from "./constants"

export const copyText = {
  title: "Email Accounts",
  buttons: {
    addAccount: "Add Account",
    addDomain: "Add Domain",
  },
  cards: {
    emailAccounts: {
      title: "Email Accounts",
      activeText: "active",
    },
    domains: {
      title: "Domains",
      verifiedText: "verified",
    },
    reputation: {
      title: "Avg. Reputation",
      subtitle: "Overall sending health",
    }
  },
  tables: {
    emailAccounts: {
      title: "Email Accounts",
      headers: {
        email: "Email",
        provider: "Provider",
        status: "Status",
        reputation: "Reputation",
        warmup: "Warmup",
        sent24h: "Sent (24h)",
        authentication: "Authentication",
      },
      actions: {
        sync: "Sync",
        edit: "Edit",
        delete: "Delete",
      }
    },
    domains: {
      title: "Domains",
      headers: {
        domain: "Domain",
        provider: "Provider",
        status: "Status",
        age: "Age",
        reputation: "Reputation",
        authentication: "Authentication",
      },
      ageText: "days",
      actions: {
        setupGuide: "Setup Guide",
        dnsRecords: "DNS Records",
        verify: "Verify",
        delete: "Delete",
      }
    }
  },
  status: {
    ACTIVE: "Active",
    ISSUE: "Issue",
    VERIFIED: "Verified",
    SETUP_REQUIRED: "Setup Required",
  },
  warmupStatus: {
    WARMING: "Warming",
    WARMED: "Warmed",
  },
  auth: {
    SPF: "SPF",
    DKIM: "DKIM",
    DMARC: "DMARC",
  },
  timeAgo: {
    minutesAgo: "minutes ago",
    hoursAgo: "hours ago",
    daysAgo: "days ago",
  },
};

export const emailAccountCopy = {
  form: {
    labels: {
      email: "Email Address",
      provider: "Email Provider",
      status: "Account Status",
      dayLimit: "Daily Email Limit",
      reputation: "Reputation Score",
      warmupStatus: "Warmup Status",
      password: "Password or App Password",
      spf: "SPF Record",
      dkim: "DKIM Record",
      dmarc: "DMARC Record",
    },
    placeholders: {
      email: "john@example.com",
      provider: "Select provider",
      status: "Select status",
      warmupStatus: "Select status",
    },
    buttons: {
      submit: {
        create: "Add Account",
        update: "Update Account",
      },
      cancel: "Cancel",
    },
    providers: Object.values(EmailProvider).reduce((acc, provider) => ({
      ...acc,
      [provider.toLowerCase()]: provider
    }), {} as Record<string, string>),
    notifications: {
      success: {
        created: {
          title: "Account created",
          description: "Your email account has been successfully added.",
        },
        updated: {
          title: "Account updated",
          description: "Your email account has been successfully updated.",
        },
      },
      error: {
        title: "Error",
        description: (action: string, error: string) => 
          `Failed to ${action} account: ${error}`,
      },
    },
    validation: {
      email: {
        invalid: "Please enter a valid email address",
      },
      provider: {
        required: "Please select an email provider",
      },
      password: {
        minLength: "Password must be at least 8 characters",
      },
    },
    ui: {
      title: "Add Email Account",
      description: "Connect a new email account to your workspace",
      auth: {
        description: "DNS authentication records help improve deliverability",
        hint: "Configure these records in your domain's DNS settings",
      },
      warmup: {
        description: "Gradually increase sending limits to improve reputation",
        hint: {
          NOT_STARTED: "Account will start warmup process automatically",
          WARMING: "Account is being warmed up gradually",
          WARMED: "Account has completed warmup process",
          PAUSED: "Warmup process is temporarily paused",
        },
      },
      provider: {
        hint: (maxLimit: number) => `Maximum daily limit: ${maxLimit} emails`,
        oauth: "This provider requires OAuth authentication",
        smtp: "This provider requires SMTP credentials",
      },
      limits: {
        description: "Set daily sending limits for this account",
        hint: "Recommended: Start with lower limits and increase gradually",
      },
    },
  }
}
