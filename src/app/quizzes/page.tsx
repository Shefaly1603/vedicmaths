// src/app/quizzes/[slug]/page.tsx
import { notFound } from "next/navigation";

type PageProps = {
  params: { slug: string };
};

const QUIZZES = {
  "sutra-basics": { title: "Sutra Basics" },
  "digit-sum": { title: "Digit Sum Practice" },
} as const;

export default function QuizRunner({ params }: PageProps) {
  const quiz = QUIZZES[params.slug as keyof typeof QUIZZES];
  if (!quiz) notFound();

  return (
    <main className="p-6 max-w-3xl">
      <h1 className="text-2xl font-semibold mb-4">{quiz.title}</h1>
      <p>Quiz content coming soon…</p>
    </main>
  );
}




