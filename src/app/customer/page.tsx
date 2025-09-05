import { getSession, signOut } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function CustomerPage() {
    const session = await getSession();
    if (!session) {
        redirect('/login');
    }

  return (
    <div>
      <h1 className="text-2xl font-bold">Customer Dashboard</h1>
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
