import { NextResponse } from "next/server";
import { insertEntry } from "@/lib/goikenbako";

export const runtime = "nodejs";

type Body = {
  name?: unknown;
  role?: unknown;
  body?: unknown;
};

function asTrimmedString(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export async function POST(request: Request) {
  let payload: Body;
  try {
    payload = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "不正なリクエストです" }, { status: 400 });
  }

  const name = asTrimmedString(payload.name, 100);
  const role = asTrimmedString(payload.role, 100);
  const body = asTrimmedString(payload.body, 5000);

  if (!body) {
    return NextResponse.json(
      { error: "内容物は必須です" },
      { status: 400 }
    );
  }

  try {
    const entry = await insertEntry({ name, role, body });
    return NextResponse.json({ ok: true, id: entry.id });
  } catch (error) {
    console.error("goikenbako submit failed", error);
    return NextResponse.json(
      { error: "保存に失敗しました" },
      { status: 500 }
    );
  }
}
