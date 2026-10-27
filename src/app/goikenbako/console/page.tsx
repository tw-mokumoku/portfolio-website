"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";

type Entry = {
  id: string;
  name: string;
  role: string;
  body: string;
  created_at: string;
};

export default function GoikenbakoConsolePage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [entries, setEntries] = useState<Entry[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const loadEntries = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/goikenbako/list");
      if (res.status === 401) {
        setAuthed(false);
        setEntries([]);
        setLoading(false);
        return;
      }
      const data = (await res.json()) as { entries?: Entry[]; error?: string };
      if (!res.ok) {
        setError(data.error || "取得に失敗しました");
        setLoading(false);
        return;
      }
      setAuthed(true);
      setEntries(data.entries || []);
    } catch {
      setError("取得に失敗しました");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadEntries();
  }, [loadEntries]);

  async function onLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/goikenbako/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        setError(data.error || "ログインに失敗しました");
        return;
      }
      setPassword("");
      await loadEntries();
    } catch {
      setError("ログインに失敗しました");
    }
  }

  async function onLogout() {
    await fetch("/api/goikenbako/login", { method: "DELETE" });
    setAuthed(false);
    setEntries([]);
  }

  return (
    <main className="console-root">
      <div className="console-card">
        <div className="console-head">
          <h1>意見箱コンソール</h1>
          {authed ? (
            <button type="button" className="ghost" onClick={() => void onLogout()}>
              ログアウト
            </button>
          ) : null}
        </div>

        {!authed ? (
          <form onSubmit={onLogin} className="login-form">
            <label>
              <span>パスワード</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
            </label>
            <button type="submit">入る</button>
          </form>
        ) : null}

        {error ? (
          <p className="error" role="alert">
            {error}
          </p>
        ) : null}

        {authed ? (
          loading ? (
            <p>読み込み中…</p>
          ) : entries.length === 0 ? (
            <p className="empty">まだ投稿はありません。</p>
          ) : (
            <ul className="list">
              {entries.map((entry) => (
                <li key={entry.id}>
                  <div className="meta">
                    <time dateTime={entry.created_at}>
                      {new Date(entry.created_at).toLocaleString("ja-JP")}
                    </time>
                    <span>
                      {entry.name || "（名前なし）"}
                      {entry.role ? ` / ${entry.role}` : ""}
                    </span>
                  </div>
                  <p className="body">{entry.body}</p>
                </li>
              ))}
            </ul>
          )
        ) : null}
      </div>

      <style jsx>{`
        .console-root {
          min-height: 100vh;
          margin: 0;
          padding: 32px 16px 64px;
          background: #111513;
          color: #f2f0ea;
          font-family: "Hiragino Sans", "Noto Sans JP", sans-serif;
        }
        .console-card {
          max-width: 720px;
          margin: 0 auto;
        }
        .console-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 24px;
        }
        h1 {
          font-size: 1.5rem;
          margin: 0;
        }
        .login-form {
          display: grid;
          gap: 14px;
          max-width: 360px;
        }
        label {
          display: grid;
          gap: 8px;
        }
        input {
          border: 1px solid #3a4540;
          border-radius: 8px;
          padding: 12px 14px;
          background: #1a211e;
          color: inherit;
          font: inherit;
        }
        button {
          justify-self: start;
          border: 0;
          border-radius: 999px;
          padding: 10px 22px;
          background: #6fbfa8;
          color: #102019;
          font: inherit;
          font-weight: 600;
          cursor: pointer;
        }
        button.ghost {
          background: transparent;
          color: #c9d5cf;
          border: 1px solid #3a4540;
        }
        .error {
          color: #ffb4a8;
          margin-top: 16px;
        }
        .empty {
          color: #aeb8b2;
        }
        .list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 14px;
        }
        li {
          border: 1px solid #2c3833;
          border-radius: 12px;
          padding: 16px;
          background: #171e1b;
        }
        .meta {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 16px;
          margin-bottom: 10px;
          color: #aeb8b2;
          font-size: 0.9rem;
        }
        .body {
          margin: 0;
          white-space: pre-wrap;
          line-height: 1.7;
        }
      `}</style>
    </main>
  );
}
