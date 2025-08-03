// lib/types.ts

export interface ProductFilter {
  color: string[];
  size: string[];
  // Add other filters as needed
}

export interface Product {
  _id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  price: number;
  discount: number;
  stock: number;
  mainImage: string;
  images?: string[];
  filters?: ProductFilter;
  createdAt: string;
  updatedAt: string;
  // These are derived on the frontend, but good to know they exist
  originalPrice: number;
  discountedPrice: number;
  mainImg: string; // Alias from API response
  visitCount?: number;
}

export interface ProductsApiResponse {
  total: number;
  page: number;
  pages: number;
  products: Product[];
}

export interface AuthResponse {
  message: string;
  token?: string;
}

// Add types for user, login/register payloads, etc.
export interface UserCredentials {
  email: string;
  password: string;
}


export interface OrderItem {
  product: string | Product; // Can be ID string or populated Product object
  quantity: number;
  // ... other order item fields like priceAtPurchase, etc.
}

export interface Order {
  _id: string;
  user: string; // User ID
  products: OrderItem[]; // Array of products in the order
  totalPrice: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  deliveryCharge: number;
  totalAmount: number;
  mobile:string;
  address: string;
  createdAt: string;
  // ... other order fields
}

export interface OrdersApiResponse {
  total: number;
  page: number;
  pages: number;
  orders: Order[];
}