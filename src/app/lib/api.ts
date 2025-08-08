// lib/api.ts
// const API_BASE_URL =  'http://localhost:5000'; // Replace with your actual backend URL
// const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ; // Replace with your actual backend URL
// interface ApiOptions extends Omit<RequestInit, 'body'> {
//   headers?: Record<string, string>;
//   token?: string;
//   json?: Record<string, any>; // use this instead of body
// }


// export async function apiFetch<T>(
//   endpoint: string,
//   options?: ApiOptions
// ): Promise<T> {
//   const { headers, token, json, ...rest } = options || {};

//   const config: RequestInit = {
//     ...rest,
//     headers: {
//       'Content-Type': 'application/json',
//       ...headers,
//     },
//   };

//   if (token) {
//     (config.headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
//   }

//   if (json) {
//     config.body = JSON.stringify(json); // only assign JSON string here
//   }

//   const response = await fetch(`${API_BASE_URL}/${endpoint}`, config);

//   if (!response.ok) {
//     const errorData = await response.json().catch(() => ({ message: 'Something went wrong' }));
//     throw new Error(errorData.message || `API error: ${response.statusText}`);
//   }

//   return response.json();
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

/**
 * A simple, general-purpose API wrapper for making fetch calls.
 * This function does not handle Next.js-specific caching options.
 * @param endpoint The API endpoint to call.
 * @param options An object conforming to the ApiOptions interface, including headers and a JSON payload.
 * @returns A Promise that resolves to the fetched JSON data.
 */
export async function apiFetch<T>(
  endpoint: string,
  options?: ApiOptions
): Promise<T> {
  const { headers, token, json, ...rest } = options || {};

  const config: RequestInit = {
    ...rest,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  if (token) {
    (config.headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
  }

  if (json) {
    config.body = JSON.stringify(json); // only assign JSON string here
  }

  const response = await fetch(`${API_BASE_URL}/${endpoint}`, config);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Something went wrong' }));
    throw new Error(errorData.message || `API error: ${response.statusText}`);
  }

  return response.json();
}

/**
 * A Next.js-aware data fetching wrapper for server components.
 * This function is now fully typed and can accept all Next.js fetch options,
 * including `cache` and `next`.
 * @param endpoint The API endpoint to call.
 * @param options An object conforming to the ApiOptions interface, including headers, body, and Next.js caching options.
 * @returns A Promise that resolves to the fetched JSON data, or null if an error occurs.
 */


