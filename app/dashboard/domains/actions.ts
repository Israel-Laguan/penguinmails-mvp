'use server';

import { revalidatePath } from 'next/cache';
import { DnsProvider } from '@/components/domains/constants';

interface CreateDomainData {
  domain: string;
  provider: DnsProvider;
}

export async function createDomain(data: CreateDomainData) {
  try {
    const response = await fetch(`${process.env.APP_URL}/api/domains`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create domain');
    }

    const domain = await response.json();
    revalidatePath('/dashboard/domains');
    return domain;
  } catch (error) {
    console.error('Error creating domain:', error);
    throw error;
  }
}

export async function getDomains() {
  try {
    const response = await fetch(`${process.env.APP_URL}/api/domains`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to fetch domains');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching domains:', error);
    throw error;
  }
}