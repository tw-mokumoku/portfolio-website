import { NextResponse } from "next/server";
import { isConsoleAuthed, listEntries } from "@/lib/goikenbako";

export const runtime = "nodejs";

export async function GET() {
  if (!(await isConsoleAuthed())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  try {
    const entries = await listEntries();
    return NextResponse.json({ entries });
  } catch (error) {
    console.error("goikenbako list failed", error);
    return NextResponse.json(
      { error: "取得に失敗しました" },
      { status: 500 }
    );
  }
}
