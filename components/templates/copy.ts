import { TemplateCategory } from "@/app/api/generated/prisma";

export const copyText = {
  page: {
    title: "Email Templates",
    newTemplate: "New Template",
  },
  tabs: {
    myTemplates: "My Templates",
    builtIn: "Built-in Templates",
  },
  search: {
    myTemplates: "Search your templates...",
    builtIn: "Search built-in templates...",
  },
  categories: {
    placeholder: "Select a category",
    all: "All Categories",
    labels: {
      OUTREACH: "Outreach",
      INTRODUCTION: "Introduction",
      FOLLOW_UP: "Follow Up",
      MEETING: "Meeting",
      VALUE: "Value Proposition",
      SAAS: "SaaS",
      AGENCY: "Agency",
      CONSULTING: "Consulting",
      ECOMMERCE: "E-commerce",
      REAL_ESTATE: "Real Estate",
      HR: "HR & Recruitment",
      FINANCE: "Financial Services",
      HEALTHCARE: "Healthcare"
    } as Record<TemplateCategory, string>,
  },
  templateCard: {
    usage: "usage",
    actions: {
      view: "View",
      edit: "Edit",
      duplicate: "Duplicate",
      delete: "Delete",
      useTemplate: "Use Template",
    },
    dates: {
      created: "Created",
      lastUpdated: "Last updated",
    },
  },
  notifications: {
    tagInserted: {
      title: "Tag Inserted",
      description: (tag: string) => `${tag} has been inserted into your template.`
    },
    templateSaved: {
      title: "Template Saved",
      description: "Your template has been saved successfully.",
      error: "Failed to save template",
      errorDescription: "There was an error saving your template. Please try again."
    },
    templateUpdateError: {
      title: "Failed to update template",
      description: "An unknown error occurred"
    },
    error: {
      createFailed: {
        title: "Failed to create template",
        description: "An unknown error occurred"
      }
    }
  },
  newTemplate: {
    title: "Create New Template",
    form: {
      name: {
        label: "Template Name",
        placeholder: "Enter template name"
      },
      category: {
        label: "Category",
        placeholder: "Select category"
      },
      subject: {
        label: "Subject Line",
        placeholder: "Enter subject line",
        tooltip: "Include personalization tags in your subject line."
      },
      content: {
        label: "Email Body",
        placeholder: "Write your email content here...",
        tooltip: "Use personalization tags to make your emails more personal."
      }
    },
    actions: {
      create: "Create Template",
      creating: "Creating Template...",
      save: "Save Changes",
      saving: "Saving...",
      cancel: "Cancel"
    }
  },
  viewTemplate: {
    labels: {
      category: "Category",
      subject: "Subject Line",
      body: "Email Body",
      created: "Created"
    },
    actions: {
      edit: "Edit Template",
      duplicate: "Duplicate"
    }
  },
  errors: {
    templateNotFound: {
      message: "The template you're looking for doesn't exist.",
      action: "Return to Templates"
    }
  },
  category: {
    label: "Category"
  },
  subjectLine: {
    label: "Subject Line"
  },
  emailBody: {
    label: "Email Body"
  },
  created: {
    label: "Created"
  }
} as const;
