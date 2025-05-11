export const copyText = {
  title: "Domains",
  description: "Manage your sending domains and monitor their health.",
  buttons: {
    addDomain: "Add Domain",
    verifyAll: "Verify All",
  },
  cards: {
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
    }
  },
  status: {
    PENDING: "Pending",
    VERIFIED: "Verified",
    SETUP_REQUIRED: "Setup Required",
    FAILED: "Failed",
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
};