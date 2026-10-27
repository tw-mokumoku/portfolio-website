import { NextResponse } from "next/server";
import {
  COOKIE_NAME,
  authCookieValue,
  passwordMatches,
} from "@/lib/goikenbako";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let password = "";
  try {
    const payload = (await request.json()) as { password?: unknown };
    if (typeof payload.password === "string") password = payload.password;
  } catch {
    return NextResponse.json({ error: "不正なリクエストです" }, { status: 400 });
  }

  if (!passwordMatches(password)) {
    return NextResponse.json(
      { error: "パスワードが違います" },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: COOKIE_NAME,
    value: authCookieValue(),
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 14,
  });
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: COOKIE_NAME,
    value: "",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
  return response;
}
