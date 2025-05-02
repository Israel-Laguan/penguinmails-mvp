export const copyText = {
  title: "Campaigns",
  newCampaign: "New Campaign",
  summary: {
    totalCampaigns: "Total Campaigns",
    activeCampaigns: "Active Campaigns",
    emailsSent: "Emails Sent",
    totalReplies: "Total Replies"
  },
  table: {
    name: "Name",
    status: "Status",
    recipients: "Recipients",
    sent: "Sent",
    replies: "Replies",
    openRate: "Open Rate",
    replyRate: "Reply Rate",
    lastUpdated: "Last Updated",
    actions: "Actions",
    edit: "Edit",
    delete: "Delete",
    view: "View",
    noData: "No campaigns found"
  },
  campaignDetails: {
    labels: {
      campaignName: "Campaign Name",
      fromName: "From Name",
      fromEmail: "From Email",
    },
    placeholders: {
      campaignName: "e.g. Q2 CEO Outreach",
      fromName: "e.g. John Smith",
      selectAccount: "Select a sending account",
    },
    descriptions: {
      fromName: "The name that will appear in recipients' inboxes",
      fromEmail: "Choose the email address this campaign will be sent from",
    },
  },
  delay: {
    waitFor: "Wait for",
    days: "days",
    hours: "hours",
    condition: "Condition",
    selectCondition: "Select condition",
    conditions: {
      always: "Always send after delay",
      notOpened: "Send only if previous email NOT opened",
      notClicked: "Send only if previous email NOT clicked",
      notReplied: "Send only if previous email NOT replied"
    }
  },
  emailStep: {
    subject: {
      label: "Subject",
      placeholder: "Enter email subject"
    },
    body: {
      label: "Body",
      placeholder: "Write your email content here... Use {{variable}} for personalization."
    }
  },
  recipients: {
    title: "Recipients",
    description: "Add recipients by uploading a CSV file or manually entering email addresses.",
    uploadCsvButton: "Upload CSV",
    manualInputLabel: "Manually Add Recipients",
    textareaPlaceholder: "Enter email addresses, one per line...\nExample:\njohn.doe@example.com\njane.smith@example.com",
    settingsTitle: "Campaign Recipients",
    settingsDescription: "This campaign was sent to 2,500 recipients.",
    helpText: "Enter one email address per line. You can also include variables like: email,firstName,lastName\njohn.doe@example.com,John,Doe"
  },
  schedule: {
    title: "Sending Schedule",
    sendingDays: "Sending Days",
    startTime: "Start Time",
    endTime: "End Time",
    timezone: "Timezone",
    days: {
      mon: "Mon",
      tue: "Tue",
      wed: "Wed",
      thu: "Thu",
      fri: "Fri",
      sat: "Sat",
      sun: "Sun"
    },
    selectTimezone: "Select timezone"
  },
  addEmail: "Add Email",
  addDelay: "Add Delay",
  stepLabel: (index: number, type: string) => `Step ${index + 1}: ${type}`,
  stepTypes: {
    email: "Email",
    delay: "Delay"
  },
  conditions: {
    if_not_opened: "if not opened",
    if_not_clicked: "if not clicked",
    if_not_replied: "if not replied"
  },
  buttons: {
    moveStepUp: "Move step up",
    moveStepDown: "Move step down",
    removeStep: "Remove step",
    cancel: "Cancel",
    create: "Create Campaign",
    creating: "Creating...",
    edit: "Edit",
    duplicate: "Duplicate",
    pauseCampaign: "Pause Campaign",
    viewRecipients: "View Recipients",
  },
  templates: {
    buttonLabel: "Import Template",
    dropdownLabel: "Select a Template",
    noTemplatesAvailable: "No templates available",
    items: [
      {
        name: "Intro Offer",
        subject: "Quick Question about [Company Name]",
        body: "Hi {{firstName}},\n\nI saw you recently..."
      },
      {
        name: "Follow Up 1",
        subject: "Re: Quick Question",
        body: "Hi {{firstName}},\n\nJust wanted to follow up..."
      },
      {
        name: "Breakup Email",
        subject: "Closing the loop",
        body: "Hi {{firstName}},\n\nSince I haven't heard back..."
      }
    ]
  },
  pageTitle: "Create Campaign",
  tabs: {
    sequence: "Sequence",
    schedule: "Schedule",
    recipients: "Recipients",
    overview: "Overview",
    settings: "Settings",
  },
  cardTitles: {
    campaignDetails: "Campaign Details",
  },
  validation: {
    campaignName: "Campaign name is required",
    fromName: "From name is required",
    email: "Invalid email address",
    minSteps: "Campaign must have at least one step",
  },
  stats: {
    openRate: "Open Rate",
    clickRate: "Click Rate",
    replyRate: "Reply Rate",
    bounceRate: "Bounce Rate",
    fromAverage: "from average",
    belowAverage: "below average",
  },
  charts: {
    dailyPerformance: "Daily Performance",
    sequencePerformance: "Sequence Performance",
    labels: {
      opens: "Opens",
      clicks: "Clicks",
      replies: "Replies",
    },
  },
  sequence: {
    title: "Email Sequence",
    waitMessage: "Wait 3 days if no reply",
    subject: "Subject:",
  },
  settings: {
    title: "Campaign Settings",
    sections: {
      general: {
        title: "General Settings",
        campaignName: "Campaign Name",
        status: "Status",
        created: "Created",
        sendingAccount: "Sending Account",
      },
      schedule: {
        title: "Sending Schedule",
        sendingWindow: "Sending Window",
        days: "Days",
        emailsPerDay: "Emails Per Day",
      },
    },
  },
  campaignDetail: {
    id: "Campaign ID:",
    status: {
      running: "Running",
    }
  },
  format: {
    upTo: "Up to",
    percentage: (value: number) => `${value.toFixed(1)}%`,
  },
} as const;
