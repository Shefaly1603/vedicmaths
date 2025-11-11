// src/lib/quizzes.ts
export type Choice = { id: string; text: string; correct?: boolean };
export type Question = { id: string; text: string; choices: Choice[] };
export type Quiz = {
  slug: string;
  title: string;
  description?: string;
  questions: Question[];
};

export const quizzes: Quiz[] = [
  {
    slug: "duplex-division",
    title: "Duplex Division Basics",
    description: "Quick practice set for duplex method.",
    questions: [
      {
        id: "q1",
        text: "What is the duplex of 23?",
        choices: [
          { id: "a", text: "13" },
          { id: "b", text: "10", correct: true },
          { id: "c", text: "12" },
          { id: "d", text: "8" },
        ],
      },
      {
        id: "q2",
        text: "Duplex(121) equals?",
        choices: [
          { id: "a", text: "4" },
          { id: "b", text: "6", correct: true },
          { id: "c", text: "8" },
          { id: "d", text: "10" },
        ],
      },
    ],
  },
  {
    slug: "vertically-crosswise",
    title: "Vertically & Crosswise",
    description: "Practice 2-digit multiplication tricks.",
    questions: [
      {
        id: "q1",
        text: "Using V&C, 12 × 13 = ?",
        choices: [
          { id: "a", text: "145" },
          { id: "b", text: "156", correct: true },
          { id: "c", text: "166" },
          { id: "d", text: "152" },
        ],
      },
    ],
  },
];

export function getQuizzes() {
  return quizzes.map(({ slug, title, description }) => ({ slug, title, description }));
}

export function getQuiz(slug: string) {
  return quizzes.find((q) => q.slug === slug) || null;
}
