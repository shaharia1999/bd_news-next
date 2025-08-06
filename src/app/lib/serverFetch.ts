export async function serverFetchData<T>(query: string, cache: 'store' | 'no-store' = 'store'): Promise<T | null> {
  console.log(`Fetching data with query:${process.env.NEXT_PUBLIC_API_URL}/${query} and cache: ${cache}`);
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${query}`, {
      cache: cache === 'no-store' ? 'no-store' : 'default',
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }

    const json = await res.json();
    console.log('Fetched data:', json);
    return json  || null;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return null;
  }
}