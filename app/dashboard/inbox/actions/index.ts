import { mockEmails } from "../mockEmails";

interface Query {
  email?: string[];
  from?: string[];
  campaign?: string[];
}

type Type = "all" | "unread" | "starred";

interface PaginationOptions {
  page?: number;
  limit?: number;
}

export const getAllMessages = async (
  query: Query = {},
  type: Type = "all",
  pagination: PaginationOptions = {},
  search = "",
) => {
  const { email = [], from = [], campaign = [] } = query;
  const { page = 1, limit = 10 } = pagination;

  const filteredEmails = mockEmails.filter((msg) => {
    const matchesEmail =
      email.length === 0 ||
      email.some((e) => msg.email.toLowerCase().includes(e.toLowerCase()));

    const matchesFrom =
      from.length === 0 ||
      from.some((f) => msg.from.toLowerCase().includes(f.toLowerCase()));

    const matchesCampaign =
      campaign.length === 0 ||
      campaign.some((c) => msg.campaign.toLowerCase().includes(c.toLowerCase()));

      const matchesSearch =
      search === "" ||
      [msg.from, msg.email, msg.subject, msg.preview, msg.campaign]
        .some((field) =>
          field.toLowerCase().includes(search.toLowerCase())
        );

    return matchesEmail && matchesFrom && matchesCampaign && matchesSearch;
  });

  const unreadCount = filteredEmails.filter((email) => !email.isRead);

  let emailsToReturn = filteredEmails;

  if (type === "unread") {
    emailsToReturn = filteredEmails.filter((email) => !email.isRead);
  } else if (type === "starred") {
    emailsToReturn = filteredEmails.filter((email) => email.isStarred);
  }

  const startIndex = (page - 1) * limit;
  const paginatedEmails = emailsToReturn.slice(startIndex, startIndex + limit);

  return {
    emails: paginatedEmails,
    unread: unreadCount.length,
    total: filteredEmails.length,
    totalPages: Math.ceil(filteredEmails.length / limit),
    currentPage: page,
  };
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
