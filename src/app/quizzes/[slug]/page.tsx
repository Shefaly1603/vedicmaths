// src/app/quizzes/[slug]/page.tsx
"use client";

import { useMemo, useState } from "react";
import { notFound, useParams } from "next/navigation";
import { getQuiz, Question } from "@/lib/quizzes";

export default function QuizRunner() {
  const params = useParams<{ slug: string }>();
  const quiz = useMemo(() => getQuiz(params.slug), [params.slug]);

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  if (!quiz) return notFound();

  const question = quiz.questions[index];

  const select = (q: Question, choiceId: string) =>
    setAnswers((prev) => ({ ...prev, [q.id]: choiceId }));

  const next = () => setIndex((i) => Math.min(i + 1, quiz.questions.length - 1));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  const submit = () => setSubmitted(true);

  const score = submitted
    ? quiz.questions.reduce((sum, q) => {
        const picked = answers[q.id];
        const correct = q.choices.find((c) => c.correct)?.id;
        return sum + (picked === correct ? 1 : 0);
      }, 0)
    : 0;

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{quiz.title}</h1>

      {!submitted ? (
        <>
          <div className="mb-2 text-gray-600">
            Question {index + 1} of {quiz.questions.length}
          </div>

          <div className="border rounded p-4 mb-4">
            <p className="font-medium mb-3">{question.text}</p>
            <ul className="space-y-2">
              {question.choices.map((c) => {
                const picked = answers[question.id] === c.id;
                return (
                  <li key={c.id}>
                    <button
                      onClick={() => select(question, c.id)}
                      className={`w-full text-left border rounded p-2 ${
                        picked ? "border-purple-600 bg-purple-50" : "hover:bg-gray-50"
                      }`}
                    >
                      {c.text}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex gap-2">
            <button onClick={prev} disabled={index === 0} className="px-3 py-1 border rounded">
              Back
            </button>
            {index < quiz.questions.length - 1 ? (
              <button onClick={next} className="px-3 py-1 rounded bg-purple-600 text-white">
                Next
              </button>
            ) : (
              <button onClick={submit} className="px-3 py-1 rounded bg-green-600 text-white">
                Submit
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="border rounded p-6">
          <p className="text-xl font-semibold mb-2">Your Score</p>
          <p className="text-3xl font-bold">
            {score} / {quiz.questions.length}
          </p>
        </div>
      )}
    </main>
  );
}
