export const content = {
  notifications: {
    tagInserted: {
      title: "Tag inserted",
      description: "{tag} has been inserted into your template."
    },
    templateSaved: {
      title: "Template saved",
      description: "Your template has been saved successfully."
    }
  },
  errors: {
    templateNotFound: {
      message: "The template you're looking for doesn't exist.",
      action: "Return to Templates"
    }
  }
} as const;
