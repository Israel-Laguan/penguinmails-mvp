import { EmailProvider } from "./constants"

export const copyText = {
  title: "Domains",
  description: "Manage your sending domains and monitor their health.",
  emailAccounts: "Email Accounts",
  buttons: {
    addDomain: "Add Domain",
    addAccount: "Add Account",
    verifyAll: "Verify All",
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
    },
    overview: {
      domains: {
        title: "Total Domains",
        verifiedText: "verified",
      },
      authentication: {
        title: "Authentication",
        subtitle: "Domains with complete setup",
      },
      reputation: {
        title: "Avg. Reputation",
        subtitle: "Overall domain health",
      },
      accounts: {
        title: "Email Accounts",
        subtitle: "Across all domains",
      }
    }
  },
  tables: {
    domains: {
      title: "All Domains",
      empty: "No domains added yet",
      headers: {
        domain: "Domain",
        provider: "Provider",
        status: "Status",
        age: "Age",
        reputation: "Reputation",
        accounts: "Accounts",
        authentication: "Authentication",
      },
      ageText: "days",
      actions: {
        setupGuide: "Setup Guide",
        dnsRecords: "DNS Records",
        verify: "Verify Now",
        settings: "Settings",
        delete: "Delete"
      }
    },
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
  },
  status: {
    PENDING: "Pending",
    VERIFIED: "Verified",
    SETUP_REQUIRED: "Setup Required",
    FAILED: "Failed",
    ACTIVE: "Active",
    ISSUE: "Issue",
  },
  warmupStatus: {
    WARMING: "Warming",
    PAUSED: "Paused",
    WARMED: "Warmed",
  },
  auth: {
    SPF: "SPF",
    DKIM: "DKIM",
    DMARC: "DMARC",
  },
  form: {
    title: "Add Domain",
    description: "Configure a new sending domain for your email accounts.",
    labels: {
      domain: "Domain Name",
      provider: "DNS Provider",
      spf: "SPF Record", // Keep for general reference if needed, specific inputs below
      dkim: "DKIM Record", // Keep for general reference
      dmarc: "DMARC Record", // Keep for general reference
      spfRecordValue: "SPF Record Value",
      spfStatus: "SPF Status",
      dkimManagementType: "DKIM Management Type",
      dkimSelector: "DKIM Selector (User-Managed)",
      dkimPublicKey: "DKIM Public Key (User-Managed)",
      dkimStatus: "DKIM Status",
      dmarcRecordValue: "DMARC Record Value",
      dmarcStatus: "DMARC Status",
      overallAuthStatus: "Overall Authentication Status",
    },
    placeholders: {
      domain: "example.com",
      provider: "Select your DNS provider",
      spfRecordValue: "e.g., v=spf1 include:_spf.penguinmails.com ~all",
      dkimManagementType: "Select DKIM management type",
      dkimSelector: "e.g., pm or default",
      dkimPublicKey: "e.g., v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQ...",
      dmarcRecordValue: "e.g., v=DMARC1; p=none; rua=mailto:dmarc@example.com",
    },
    hints: {
      domain: "Enter your domain name without www or http://",
      provider: "Select your domain's DNS host",
      auth: "Configure these records in your domain's DNS settings. Statuses will update after verification.",
      spfRecordValue: "Enter the full TXT value for your SPF record.",
      dkimCname: "Point this CNAME record to our DKIM service.",
      dkimSelector: "Enter the selector for your DKIM TXT record (e.g., 'default', 'pm').",
      dkimPublicKey: "Enter the public key part (p=...) of your DKIM TXT record.",
      dmarcRecordValue: "Enter the full TXT value for your DMARC record.",
    },
    alerts: {
      setup: {
        title: "Configure Domain Authentication",
        description: "Add your domain and configure DNS records to ensure reliable email delivery. You'll need access to your domain's DNS settings."
      }
    },
    sections: {
      domain: {
        title: "Domain Information",
        description: "Enter your domain details and select your DNS provider to get started."
      },
      serverConfig: {
        title: "Server Configuration Notes (Informational)",
        mainCf: "Ensure your Postfix server's main.cf includes SASL authentication for your domain:",
        restartPostfix: "Remember to restart Postfix after changes to main.cf."
      },
      reputationMonitoring: {
        title: "Domain Reputation Monitoring (Recommended)",
        description: "Register your domain with these services to monitor its sending reputation:"
      }
    },
    validation: {
      domain: {
        required: "Domain name is required",
        invalid: "Please enter a valid domain name"
      },
      provider: {
        required: "DNS provider is required"
      }
    },
    auth: {
      title: "DNS Authentication Records", // Added title for the card
      description: "Configure DNS records to improve email deliverability and verify domain ownership.",
      hint: "You'll need to add these DNS records in your domain provider's settings. Statuses will update after verification.",
      spf: "Sender Policy Framework (SPF) specifies which mail servers are authorized to send email for your domain.",
      dkim: "DomainKeys Identified Mail (DKIM) adds a digital signature to emails, verifying they haven't been tampered with.",
      dmarc: "Domain-based Message Authentication (DMARC) tells receiving servers how to handle emails that fail authentication.",
    },
    enums: { // Added enums translations
      verificationStatus: {
        VERIFIED: "Verified",
        PENDING: "Pending Verification",
        ERROR: "Error",
        NOT_CONFIGURED: "Not Configured",
        DISABLED: "Disabled", // Though likely not used for domain records
      },
      dkimManagementType: {
        USER_MANAGED_TXT: "User Managed (TXT Record)",
        SERVICE_MANAGED_CNAME: "Service Managed (CNAME Record - Recommended)",
      }
    },
    buttons: {
      addDomain: "Add Domain",
      submitting: "Adding Domain...",
      cancel: "Cancel",
      verifyAll: "Verify All Records",
      googlePostmaster: "Go to Google Postmaster Tools",
      microsoftSNDS: "Go to Microsoft SNDS",
    }
  },
  notifications: {
    success: {
      title: "Domain added successfully",
      description: "You can now configure the DNS records"
    },
    error: {
      title: "Failed to add domain",
      description: "Please try again"
    }
  },
  setup: {
    title: "Domain Setup",
    description: "Configure your domain for optimal email deliverability",
    steps: {
      spf: {
        title: "Configure SPF",
        description: "Add SPF record to verify your sending servers",
      },
      dkim: {
        title: "Configure DKIM",
        description: "Add DKIM record for email authentication",
      },
      dmarc: {
        title: "Configure DMARC",
        description: "Add DMARC record for email security policy",
      },
    },
  },
  timeAgo: {
    minutesAgo: "minutes ago",
    hoursAgo: "hours ago",
    daysAgo: "days ago",
  }
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
