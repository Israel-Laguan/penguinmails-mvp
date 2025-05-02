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
