export const copyText = {
  table: {
    email: "Email",
    firstName: "First Name",
    lastName: "Last Name",
    noClientsFound: "No clients found.",
    pagination: "Page {0} of {1}",
    notes: "Notes",
  },
  actions: {
    label: "Actions",
    copyData: "Copy client data",
    edit: "Edit client",
    remove: "Remove from campaign",
    dataCopied: "Client data copied to clipboard",
  },
  menu: {
    open: "Open menu"
  },
  filters: {
    emailsPlaceholder: "Filter emails...",
  },
  buttons: {
    hidePII: "Hide PII",
    showPII: "Show PII",
    addClient: "Add Client",
    previous: "Previous",
    next: "Next",
    cancel: "Cancel",
    removeClient: "Remove Client",
    copyClipboard: "Copy to clipboard"
  },
  modal: {
    removeClient: {
      title: "Remove Client from Campaign",
      description: "This action cannot be undone. The client data is shown below for your records.",
    },
    notes: {
      title: "Client Notes",
      edit: "Edit Notes",
      description: "The client data is shown below for your records.",
    }
  },
  headers: {
    title: "Edit Client",
    clientsCampaign: (name: string) => `Clients from campaign ${name}`
  },
  page: {
    title: 'Add New Client',
    description: 'Add a new client to your campaign',
  },
  form: {
    email: {
      label: 'Email*',
      placeholder: 'client@example.com',
    },
    firstName: {
      label: 'First Name',
      placeholder: 'John',
    },
    lastName: {
      label: 'Last Name',
      placeholder: 'Doe',
    },
    notes: {
      label: 'Notes',
      placeholder: 'Additional notes about the client...',
    },
    buttons: {
      submit: 'Create Client',
      submitting: 'Creating...',
      update: 'Update Client',
      updating: 'Updating...',
      cancel: 'Cancel',
    },
    delete: {
      button: 'Delete Client',
      title: 'Delete Client',
      description: 'This will permanently delete the client and remove them from all campaigns. This action cannot be undone.',
    },
    remove: {
      button: 'Remove from Campaign',
      title: 'Remove from Campaign',
      description: 'This will remove the client from this campaign only. The client data will remain in your database.',
    },
    mask: {
      title: 'Mask Personal Information',
      description: 'This will mask personal information in the database. This action cannot be undone.',
      button: 'Mask PII',
    },
    confirm: 'Remove',
    cancel: 'Cancel',
  }
}
