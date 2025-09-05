import { User } from '@/types';

// Mock user data. In a real application, this would come from a database.
export const mockUsers: User[] = [
  { id: '1', name: 'Admin User', email: 'admin@example.com', role: 'admin' },
  { id: '2', name: 'Staff User', email: 'staff@example.com', role: 'staff' },
  { id: '3', name: 'Customer User', email: 'customer@example.com', role: 'customer' },
];
