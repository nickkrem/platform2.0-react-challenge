// We need to set the pathname to headers and export it through middelware
//We will need it to CatImage component
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

//Middleware will intercept incoming requests and run code before
// the request is completed
export function middleware(request: NextRequest) {
  // Add a new header x-pathname which passes the path to downstream components
  const headers = new Headers(request.headers);
  headers.set("x-pathname", request.nextUrl.pathname);
  return NextResponse.next({ headers });
}

export const config = {
  matcher: [
    // match all routes except static files and APIs
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
