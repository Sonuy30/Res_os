import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import type { User } from '@/types';

// Function to get session from cookie, specifically for middleware
function getSessionFromCookie(request: NextRequest): { user: User, expires: string } | null {
  const sessionCookie = request.cookies.get('session')?.value;
  if (!sessionCookie) {
    return null;
  }
  try {
    const session = JSON.parse(sessionCookie);
    // Basic validation
    if (session && session.user && session.expires) {
      return session;
    }
    return null;
  } catch (error) {
    return null;
  }
}

export function middleware(request: NextRequest) {
  const sessionData = getSessionFromCookie(request);
  const user = sessionData?.user;
  const isSessionExpired = sessionData ? new Date(sessionData.expires) < new Date() : true;
  
  const { pathname } = request.nextUrl;
  const publicRoutes = ['/', '/login', '/register'];

  // If session is expired or doesn't exist, treat as logged out
  if (!user || isSessionExpired) {
    // Allow access to public routes
    if (publicRoutes.includes(pathname)) {
      return NextResponse.next();
    }
    // For any other route, redirect to login
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If user is logged in, prevent access to login/register pages
  if (pathname.startsWith('/login') || pathname.startsWith('/register')) {
    switch (user.role) {
      case 'admin':
        return NextResponse.redirect(new URL('/admin', request.url));
      case 'staff':
        return NextResponse.redirect(new URL('/staff', request.url));
      case 'customer':
        return NextResponse.redirect(new URL('/customer', request.url));
      default:
        return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // Role-based access control for protected routes
  if (pathname.startsWith('/admin') && user.role !== 'admin') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (pathname.startsWith('/staff') && user.role !== 'staff' && user.role !== 'admin') {
    return NextResponse.redirect(new URL('/', request.url));
  }
  
  if (pathname.startsWith('/customer') && user.role !== 'customer') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
