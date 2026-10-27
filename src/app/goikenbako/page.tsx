"use client";

import { FormEvent, useState } from "react";

export default function GoikenbakoPage() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [body, setBody] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!body.trim()) {
      setStatus("error");
      setMessage("内容物は必須です");
      return;
    }

    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/goikenbako/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, role, body }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "送信に失敗しました");
        return;
      }
      setStatus("done");
      setMessage("送信しました。ご協力ありがとうございます。");
      setName("");
      setRole("");
      setBody("");
    } catch {
      setStatus("error");
      setMessage("送信に失敗しました");
    }
  }

  return (
    <main className="goiken-root">
      <div className="goiken-card">
        <h1>意見箱</h1>
        <p className="goiken-lead">
          困っていること・あったら嬉しい機能など、自由に書いてください。
        </p>
        <p className="goiken-privacy">
          ここに記入された情報は、誰にも渡しません。この意見箱の確認用画面でのみ扱います。
        </p>

        <form onSubmit={onSubmit} className="goiken-form">
          <label>
            <span>
              名前 <em>（任意）</em>
            </span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={100}
              autoComplete="name"
            />
          </label>

          <label>
            <span>
              役職 <em>（任意）</em>
            </span>
            <input
              value={role}
              onChange={(e) => setRole(e.target.value)}
              maxLength={100}
              autoComplete="organization-title"
            />
          </label>

          <label>
            <span>
              内容物 <strong>（必須）</strong>
            </span>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
              maxLength={5000}
              rows={8}
            />
          </label>

          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "送信中…" : "送信する"}
          </button>
        </form>

        {message ? (
          <p
            className={
              status === "error" ? "goiken-msg error" : "goiken-msg ok"
            }
            role="status"
          >
            {message}
          </p>
        ) : null}
      </div>

      <style jsx>{`
        .goiken-root {
          min-height: 100vh;
          margin: 0;
          padding: 32px 16px 64px;
          background: #f6f4ef;
          color: #1c1b19;
          font-family: "Hiragino Sans", "Noto Sans JP", sans-serif;
        }
        .goiken-card {
          max-width: 560px;
          margin: 0 auto;
        }
        h1 {
          font-size: 1.75rem;
          font-weight: 700;
          margin: 0 0 12px;
          letter-spacing: 0.04em;
        }
        .goiken-lead {
          margin: 0 0 16px;
          line-height: 1.7;
          color: #3a3834;
        }
        .goiken-privacy {
          margin: 0 0 28px;
          padding: 14px 16px;
          border-left: 3px solid #2f5d50;
          background: #eef5f2;
          line-height: 1.7;
          font-size: 0.95rem;
        }
        .goiken-form {
          display: grid;
          gap: 18px;
        }
        label {
          display: grid;
          gap: 8px;
          font-size: 0.95rem;
        }
        label span em {
          font-style: normal;
          color: #6b6760;
          font-size: 0.85rem;
        }
        label span strong {
          font-weight: 600;
          color: #8a3b2b;
        }
        input,
        textarea {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid #cfc9bc;
          border-radius: 8px;
          padding: 12px 14px;
          font: inherit;
          background: #fffdf8;
          color: inherit;
        }
        input:focus,
        textarea:focus {
          outline: 2px solid #2f5d50;
          outline-offset: 1px;
        }
        button {
          justify-self: start;
          border: 0;
          border-radius: 999px;
          padding: 12px 28px;
          background: #2f5d50;
          color: #fff;
          font: inherit;
          font-weight: 600;
          cursor: pointer;
        }
        button:disabled {
          opacity: 0.6;
          cursor: wait;
        }
        .goiken-msg {
          margin-top: 18px;
          line-height: 1.6;
        }
        .goiken-msg.ok {
          color: #2f5d50;
        }
        .goiken-msg.error {
          color: #8a3b2b;
        }
      `}</style>
    </main>
  );
}
