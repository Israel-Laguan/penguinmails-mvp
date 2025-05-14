import { mockEmails } from "../mockEmails";
import { EmailsTypeSchema } from "../schemas/schemas";

export const getAllMessages = async () => {
  await new Promise((r) => setTimeout(r, 1000));
  return EmailsTypeSchema.parse({ emails: mockEmails });
};

export const getUniqueEmails = () => {
  return [...new Set(mockEmails.map((email) => email.email))];
};

export const getUniqueNames = () => {
  return [...new Set(mockEmails.map((email) => email.from))];
};

export const getUniqueCampaigns = () => {
  return [
    ...new Set(
      mockEmails.map((email) => {
        return email.campaign;
      })
    ),
  ];
};
