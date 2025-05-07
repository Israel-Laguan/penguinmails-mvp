export const copyText = {
  table: {
    email: "Email",
    firstName: "First Name",
    lastName: "Last Name",
    noClientsFound: "No clients found.",
    pagination: "Page {0} of {1}"
  },
  actions: {
    label: "Actions",
    copyData: "Copy client data",
    edit: "Edit client",
    remove: "Remove from campaign"
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
    }
  },
  headers: {
    clientsCampaign: (name: string) => `Clients from campaign ${name}`
  }
}
