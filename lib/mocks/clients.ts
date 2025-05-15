export const mockClients = [
  {
    id: 1,
    email: "john@example.com",
    firstName: "John",
    lastName: "Doe",
    notes: "Test client 1"
  },
  {
    id: 2,
    email: "jane@example.com",
    firstName: "Jane",
    lastName: "Smith",
    notes: "Test client 2"
  }
];

export function getMockClient(id: number) {
  return mockClients.find(client => client.id === id);
}
