import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("middleware executed");
  // return NextResponse.redirect(new URL("/home",request.url));

  const authToken = request.cookies.get("loginToken")?.value;

  const currentPathname = request.nextUrl.pathname;
  console.log("Current pathname : ", currentPathname);

  if(request.nextUrl.pathname === "/api/login"){
    return
  }

  const accessPath =
    request.nextUrl.pathname == "/login" ||
    request.nextUrl.pathname == "/register" ;

  console.log("faizan :", accessPath);
  if (accessPath) {
    // accessing not secured route with token
    if (authToken) {
      return NextResponse.redirect(new URL("/profile/user", request.url));
    }
  } else {
    // accessing secured route without token
    if (!authToken) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  //   console.log(authToken)
}

export const config = {
  matcher: [
    "/api/:path*",
    "/create",
    "/",
    "/view",
    "/profile/:path*",
    "/login",
    "/register",
  ],
};
