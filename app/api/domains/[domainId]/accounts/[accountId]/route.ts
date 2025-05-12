import { NextResponse } from 'next/server';

interface AccountDetails {
  id: string;
  email: string;
  status: 'Active' | 'Inactive' | 'Warming';
  sentToday: number;
  dailyLimit: number;
  inboxRate: number;
  spamRate: number;
  reputation: number;
  daysActive: number;
  parentDomain: string;
  stats: { // Added stats for charts and table
    name: string; // Typically a date string like "May 05"
    volume: number;
    inbox: number;
    spam: number;
    reputation: number;
  }[];
}

// Mock data - replace with actual data fetching logic
const mockStatsData = [
  { name: 'May 01', volume: 10, inbox: 8, spam: 1, reputation: 70 },
  { name: 'May 02', volume: 12, inbox: 10, spam: 1, reputation: 75 },
  { name: 'May 03', volume: 15, inbox: 13, spam: 0, reputation: 80 },
  { name: 'May 04', volume: 18, inbox: 17, spam: 1, reputation: 85 },
  { name: 'May 05', volume: 20, inbox: 19, spam: 0, reputation: 90 },
  { name: 'May 06', volume: 22, inbox: 20, spam: 1, reputation: 92 },
  { name: 'May 07', volume: 25, inbox: 24, spam: 0, reputation: 95 },
];

const mockAccountData: AccountDetails = {
  id: 'mockAccountId',
  email: 'test@example.com',
  status: 'Active',
  sentToday: 25,
  dailyLimit: 100,
  inboxRate: 95,
  spamRate: 2,
  reputation: 98,
  daysActive: 30,
  parentDomain: 'example.com',
  stats: mockStatsData,
};

export async function GET(
  request: Request,
  { params }: { params: { domainId: string; accountId: string } }
) {
  const { domainId, accountId } = params;

  // In a real application, you would fetch data from your database
  // using domainId and accountId
  console.log(`Fetching data for domain: ${domainId}, account: ${accountId}`);

  // For now, return mock data
  // You can customize this mock data based on the params if needed
  const accountData = {
    ...mockAccountData,
    id: accountId,
  };

  if (accountId === 'notfound') {
    return NextResponse.json({ error: 'Account not found' }, { status: 404 });
  }

  return NextResponse.json(accountData);
}