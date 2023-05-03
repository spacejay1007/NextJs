import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  console.log("미들웨어 실행중");

  if (req.nextUrl.pathname.startsWith("/products/1004")) {
    return NextResponse.redirect(new URL("/products", req.url));
  }
}

export const config = {
  matcher: ["/products/:path*"], // 특정한 경로에서만 middleware를 실행 할 수 있게 설정
};
