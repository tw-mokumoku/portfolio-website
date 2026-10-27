import { createHash, timingSafeEqual } from "crypto";
import { neon } from "@neondatabase/serverless";
import { cookies } from "next/headers";

export type GoikenEntry = {
  id: string;
  name: string;
  role: string;
  body: string;
  created_at: string;
};

const COOKIE_NAME = "goikenbako_auth";

export function getConsolePassword(): string {
  return process.env.GOIKENBAKO_PASSWORD || "1234qwer";
}

function sql() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL is not set");
  }
  return neon(url);
}

export function authTokenForPassword(password: string): string {
  return createHash("sha256")
    .update(`goikenbako:${password}`)
    .digest("hex");
}

export function passwordMatches(input: string): boolean {
  const expected = Buffer.from(getConsolePassword());
  const actual = Buffer.from(input);
  if (expected.length !== actual.length) return false;
  return timingSafeEqual(expected, actual);
}

export async function isConsoleAuthed(): Promise<boolean> {
  const jar = await cookies();
  const token = jar.get(COOKIE_NAME)?.value;
  if (!token) return false;
  const expected = authTokenForPassword(getConsolePassword());
  try {
    const a = Buffer.from(token);
    const b = Buffer.from(expected);
    if (a.length !== b.length) return false;
    return timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

export function authCookieValue(): string {
  return authTokenForPassword(getConsolePassword());
}

export { COOKIE_NAME };

export async function insertEntry(input: {
  name: string;
  role: string;
  body: string;
}): Promise<GoikenEntry> {
  const id = crypto.randomUUID();
  const rows = await sql()`
    INSERT INTO goikenbako_entries (id, name, role, body)
    VALUES (${id}, ${input.name}, ${input.role}, ${input.body})
    RETURNING id, name, role, body, created_at
  `;
  const row = rows[0] as GoikenEntry;
  return {
    ...row,
    created_at:
      typeof row.created_at === "string"
        ? row.created_at
        : new Date(row.created_at).toISOString(),
  };
}

export async function listEntries(): Promise<GoikenEntry[]> {
  const rows = await sql()`
    SELECT id, name, role, body, created_at
    FROM goikenbako_entries
    ORDER BY created_at DESC
  `;
  return (rows as GoikenEntry[]).map((row) => ({
    ...row,
    created_at:
      typeof row.created_at === "string"
        ? row.created_at
        : new Date(row.created_at).toISOString(),
  }));
}
