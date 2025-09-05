import { getSession, signOut } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function StaffPage() {
    const session = await getSession();
    if (!session || (session.role !== 'staff' && session.role !== 'admin')) {
        redirect('/login');
    }

  return (
    <div>
      <h1 className="text-2xl font-bold">Staff Dashboard</h1>
      <p>Welcome, {session.name}!</p>
       <form action={async () => {
        'use server';
        await signOut();
        redirect('/login');
      }}>
        <button type="submit">Sign Out</button>
      </form>
    </div>
  );
}
