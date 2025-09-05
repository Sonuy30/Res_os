import 'server-only';
import { cookies } from 'next/headers';
import { User } from '@/types';
import { mockUsers } from './data';

export async function signIn(email: string) {
  const user = mockUsers.find(u => u.email === email);
  if (!user) {
    return { error: 'Invalid credentials' };
  }

  const session = {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar: user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=random`,
    },
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
  };

  const cookieStore = cookies();
  cookieStore.set('session', JSON.stringify(session), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: session.expires,
    sameSite: 'lax',
    path: '/',
  });

  return { user: session.user };
}

export async function getSession() {
  const cookieStore = cookies();
  const sessionCookie = cookieStore.get('session')?.value;
  if (!sessionCookie) return null;

  try {
    const session = JSON.parse(sessionCookie);
    if (new Date(session.expires) < new Date()) {
      // Optionally, delete the expired cookie
      cookieStore.delete('session');
      return null;
    }
    return session.user as User;
  } catch (error) {
    return null;
  }
}

export async function signOut() {
  const cookieStore = cookies();
  cookieStore.delete('session');
}
