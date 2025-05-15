import { mockEmails } from "../mockEmails";
import { EmailsTypeSchema } from "../schemas/schemas";

export const getAllMessages = async (query = {}) => {
  const { email, from, campaign } = query;

  await new Promise((r) => setTimeout(r, 1000));

  const filteredEmails = mockEmails.filter((msg) => {
    const matchesEmail = Array.isArray(email)
      ? email.some((e) => msg.email.toLowerCase().includes(e.toLowerCase()))
      : email
        ? msg.email.toLowerCase().includes(email.toLowerCase())
        : true;

    const matchesFrom = Array.isArray(from)
      ? from.some((f) => msg.from.toLowerCase().includes(f.toLowerCase()))
      : from
        ? msg.from.toLowerCase().includes(from.toLowerCase())
        : true;

    const matchesCampaign = Array.isArray(campaign)
      ? campaign.some((c) =>
          msg.campaign.toLowerCase().includes(c.toLowerCase())
        )
      : campaign
        ? msg.campaign.toLowerCase().includes(campaign.toLowerCase())
        : true;

    return matchesEmail && matchesFrom && matchesCampaign;
  });

  const unreadCount = filteredEmails.filter((email) => email.isRead === false);

  return EmailsTypeSchema.parse({
    emails: filteredEmails,
    unread: unreadCount.length,
  });
};


export const getUnreadMessages = async () => {
  await new Promise((r) => setTimeout(r, 1000));
  return EmailsTypeSchema.parse({
    emails: mockEmails.filter((email) => email.isRead === false),
  });
};

export const getStarredMessages = async () => {
  await new Promise((r) => setTimeout(r, 1000));
  return EmailsTypeSchema.parse({
    emails: mockEmails.filter((email) => email.isStarred === true),
  });
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
