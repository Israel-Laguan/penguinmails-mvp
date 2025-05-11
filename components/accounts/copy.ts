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
      spf: "Enable SPF Configuration",
      dkim: "Enable DKIM Configuration",
      dmarc: "Enable DMARC Configuration",
      spfRecordValue: "SPF Record Value",
      spfStatus: "SPF Status",
      dkimSelector: "DKIM Selector",
      dkimRecordValue: "DKIM Record Value",
      dkimStatus: "DKIM Status",
      dmarcRecordValue: "DMARC Record Value",
      dmarcStatus: "DMARC Status",
      accountSmtpAuthStatus: "Account SMTP Auth Status", // Renamed from saslAuthStatus
      relayType: "Relay Type",
      relayHost: "External Relay Host",
      // isVirtualUser: "Configure as Virtual User?", // Removed as accountType handles this
      mailboxPath: "Mailbox Storage Path",
      mailboxQuotaMB: "Mailbox Quota (MB)",
      accountSetupStatus: "Overall Account Setup Status",
      accountType: "Account Creation Type",
      virtualMailboxMapping: "Virtual Mailbox Mapping",
      warmupDailyIncrement: "Warmup Daily Increment",
      warmupTargetDailyVolume: "Warmup Target Daily Volume",
      accountDeliverabilityStatus: "Account Deliverability Status",
    },
    placeholders: {
      email: "john@example.com",
      provider: "Select provider",
      status: "Select status",
      warmupStatus: "Select status",
      spfRecordValue: "e.g., v=spf1 ip4:your_ip -all",
      dkimSelector: "e.g., default",
      dkimRecordValue: "e.g., v=DKIM1; k=rsa; p=your_public_key",
      dmarcRecordValue: "e.g., v=DMARC1; p=none; rua=mailto:reports@example.com",
      relayHost: "e.g., smtp.externalprovider.com",
      mailboxPath: "e.g., /var/mail/example.com/user",
      mailboxQuotaMB: "e.g., 1024",
      accountType: "Select account type",
      virtualMailboxMapping: "e.g., user/",
      warmupDailyIncrement: "e.g., 10",
      warmupTargetDailyVolume: "e.g., 500",
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
        title: "DNS Authentication Records",
        description: "DNS authentication records help improve deliverability. Configure these records in your domain provider's DNS settings. Status will update after verification.",
        hint: "Configure these records in your domain's DNS settings",
      },
      relaySetup: {
        title: "SMTP Authentication & Relay",
        description: "Configure how emails are sent and authenticated.",
      },
      mailboxSetup: {
        title: "Mailbox Configuration",
        description: "Define storage path and quota if using virtual mailboxes (optional).",
      },
      sendingConfig: {
        title: "Sending Configuration",
        description: "Manage daily limits and warmup settings for this account."
      },
      accountCreation: {
        title: "Account Creation & Authentication",
        description: "Configure how this account is set up and authenticates."
      },
      domainAuthOverview: {
        title: "Domain Authentication Overview",
        description: "Status of the parent domain's authentication records (read-only)."
      },
      warmupStrategy: { // New section for more detailed warmup settings
        title: "Warmup Strategy",
        description: "Define how this account's sending volume will gradually increase."
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
    enums: {
      verificationStatus: {
        VERIFIED: "Verified",
        PENDING: "Pending Verification",
        ERROR: "Error",
        NOT_CONFIGURED: "Not Configured",
        DISABLED: "Disabled",
      },
      relayTypes: {
        INTERNAL: "Internal Server",
        EXTERNAL: "External SMTP Relay",
        DEFAULT_SERVER_CONFIG: "Default Server Configuration",
      },
      accountCreationType: {
        LINUX_USER: "Linux System User",
        VIRTUAL_USER_DB: "Virtual User (Database)",
      }
    }
  }
}
