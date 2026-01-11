import { NextRequest, NextResponse } from 'next/server';
 
export function middleware(request: NextRequest) {
 
  const protectedRoutes = ['/home', '/overview'];
  const { pathname } = request.nextUrl;
  
  console.log("next request: "+pathname)
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    const token = request.cookies.get('session')?.value;
    

  console.log("token: "+token)
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    
    // TODO: Optionally, verify token validity and user permissions
  }
  
  return NextResponse.next();
}
 
export const config = {
  matcher: ['/home/:path*', '/overview/:path*'],
};