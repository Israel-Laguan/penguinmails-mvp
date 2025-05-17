import { mockEmails } from "../../mockEmails";

export async function fetchEmailById(id: string) {
    const email = mockEmails.find((email) => email.id === parseInt(id));
    if (!email) {
      return null;
    }
    return {
      ...email,
      htmlContent: email.message,
    };
  }
