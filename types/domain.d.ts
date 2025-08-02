interface DNSRecord {
  type: string;
  name: string;
  value: string;
  status: 'verified' | 'pending' | 'failed';
  description: string;
}
