export const mockClients = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  email: `client${i + 1}@example.com`,
  firstName: `FirstName${i + 1}`,
  lastName: `LastName${i + 1}`,
  createdAt: new Date(2024, 0, i + 1),
  updatedAt: new Date(2024, 0, i + 1),
  notes: `Notes for client ${i + 1}`,
  maskPII: false,
  campaignId: 1,
  companyId: 1,
}));

export const getMockClientsPage = (page: number, itemsPerPage: number = 10) => {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return {
    clients: mockClients.slice(start, end),
    pages: Math.ceil(mockClients.length / itemsPerPage)
  };
};
