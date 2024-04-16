import { NextRequest, NextResponse } from "next/server";

const middleware = (request: NextRequest) => {
  request.nextUrl.pathname.startsWith("/auth/login");
};

export default middleware;
