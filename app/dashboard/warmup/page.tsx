import WarmupContent from "./content";

async function getWarmupData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/warmup`, {
    method: 'GET',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    },
    next: {
      revalidate: 0 // Disable caching
    }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch warmup data' + JSON.stringify(res), );
  }

  return res.json();
}

export default async function WarmupPage() {
  const { accounts, stats } = await getWarmupData();
  return <WarmupContent accounts={accounts} stats={stats} />;
}
