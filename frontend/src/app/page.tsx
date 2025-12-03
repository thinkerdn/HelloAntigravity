"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";
    fetch(`${backendUrl}/api/hello`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Next.js + Python Backend</h1>
        <p>Message from backend: {message || "Loading..."}</p>
      </main>
    </div>
  );
}
