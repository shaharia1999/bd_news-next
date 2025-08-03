export async function serverFetchData<T>(query: string, cache: 'store' | 'no-store' = 'store'): Promise<T | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${query}`, {
      cache: cache === 'no-store' ? 'no-store' : 'default',
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }

    const json = await res.json();
    return json.news ?? null;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return null;
  }
}
