import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { corsHeaders } from "@/lib/cors";

export function middleware(request: NextRequest) {
  // Handle CORS preflight requests
  if (request.method === "OPTIONS") {
    return new NextResponse(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  // For other requests, continue to the route handler
  // but add CORS headers to the response
  const response = NextResponse.next();

  // Add CORS headers to all API responses
  if (request.nextUrl.pathname.startsWith("/api/")) {
    Object.entries(corsHeaders).forEach(([key, value]) => {
      response.headers.set(key, value);
    });
  }

  return response;
}

// Only run middleware on API routes
export const config = {
  matcher: "/api/:path*",
};
