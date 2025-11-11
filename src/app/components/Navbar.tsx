
// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            VedicMaths
          </Link>

          <button
            className="md:hidden p-2 border rounded"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            ☰
          </button>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/sutras" className="hover:underline">Sutras</Link>
            <Link href="/sub-sutras" className="hover:underline">Sub-Sutras</Link>
            <Link href="/quizzes" className="hover:underline">Quizzes</Link>
            <Link href="/login" className="hover:underline">Login</Link>
            <Link href="/about" className="hover:underline">About</Link>
          </nav>
        </div>

        {open && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <Link href="/sutras" onClick={() => setOpen(false)}>Sutras</Link>
            <Link href="/sub-sutras" onClick={() => setOpen(false)}>Sub-Sutras</Link>
            <Link href="/quizzes" onClick={() => setOpen(false)}>Quizzes</Link>
            <Link href="/login" onClick={() => setOpen(false)}>Login</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
