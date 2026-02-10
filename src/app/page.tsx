"use client";

import { useState } from "react";
import { joinWaitlist } from "@/lib/api/waitlist";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function submit() {
    try {
      setStatus("loading");
      await joinWaitlist(email);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main>
      <h1>RISE</h1>

      <input
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={submit}>Join waitlist</button>

      {status === "success" && <p>You're on the list.</p>}
      {status === "error" && <p>Something went wrong.</p>}
    </main>
  );
}
