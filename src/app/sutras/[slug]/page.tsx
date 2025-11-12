// src/app/sutras/[slug]/page.tsx
import { notFound } from "next/navigation";
import { SUTRAS } from "@/lib/sutras";

type Props = { params: { slug: string } };

export default function SutraDetail({ params }: Props) {
  const sutra = SUTRAS.find(s => s.slug === params.slug);
  if (!sutra) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{sutra.title}</h1>
      <p className="text-slate-600 mb-6">{sutra.summary}</p>

      {/* Replace with your thorough explanation & step-by-step examples */}
      <section className="prose prose-slate max-w-none">
        <h2>What this means</h2>
        <p>
          Write a clear meaning of the sutra in simple words. Add a few examples to show how it
          works. Keep it approachable for first-time readers.
        </p>

        <h3>Example</h3>
        <p>Demonstrate at least one worked example with steps.</p>

        <h3>Practice</h3>
        <ul>
          <li>Practice problem 1</li>
          <li>Practice problem 2</li>
        </ul>
      </section>
    </main>
  );
}
