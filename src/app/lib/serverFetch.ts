// export async function serverFetchData<T>(query: string, cache: 'store' | 'no-store' = 'store'): Promise<T | null> {
//   console.log(`Fetching data with query:${process.env.NEXT_PUBLIC_API_URL}/${query} and cache: ${cache}`);
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${query}`, {
//       cache: cache === 'no-store' ? 'no-store' : 'default',
//     });

//     if (!res.ok) {
//       throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
//     }

//     const json = await res.json();
//     console.log('Fetched data:', json);
//     return json  || null;
//   } catch (error) {
//     console.error('Failed to fetch data:', error);
//     return null;
//   }
// }
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * A comprehensive interface for API options, combining standard fetch properties
 * with Next.js-specific caching controls for server-side rendering.
 */
interface ApiOptions extends Omit<RequestInit, 'body'> {
  headers?: Record<string, string>;
  token?: string;
  json?: Record<string, any>; // Use this instead of the 'body' property for JSON payloads
  next?: {
    revalidate?: number | false; // Specifies the revalidation time in seconds
    tags?: string[]; // Optional: for on-demand revalidation
  };
  cache?: 'default' | 'no-store' | 'reload' | 'force-cache' | 'only-if-cached';
}

export async function serverFetchData<T>(
  endpoint: string,
  options?: ApiOptions
): Promise<T | null> {
  const { headers, token, json, next, cache, ...rest } = options || {};
  
  const config: RequestInit = {
    ...rest,
    next: next,
    cache: cache,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  if (token) {
    (config.headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
  }

  if (json) {
    config.body = JSON.stringify(json);
  }

  // console.log(`Fetching data from: ${API_BASE_URL}/${endpoint}`);
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, config);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Something went wrong' }));
      throw new Error(errorData.message || `API error: ${response.statusText}`);
    }

    const json = await response.json();
    console.log('Fetched data:', json);
    return json;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return null;
  }
}