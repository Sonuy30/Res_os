'use server';
import { signIn } from '@/lib/auth';
import { redirect } from 'next/navigation';

export async function login(prevState: any, formData: FormData) {
  const email = formData.get('email') as string;

  if (!email) {
    return { error: 'Email is required' };
  }

  const result = await signIn(email);

  if (result.error) {
    return { error: result.error };
  }

  // Redirect based on role
  switch (result.user?.role) {
    case 'admin':
      redirect('/admin');
    case 'staff':
      redirect('/staff');
    case 'customer':
      redirect('/customer');
    default:
      // This should ideally not be reached if roles are correctly assigned
      redirect('/');
  }
}
