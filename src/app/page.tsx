export default function Home() {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold">Learn Vedic Mathematics</h1>
        <p className="text-lg text-neutral-600">
          Fast, intuitive methods explained with examples, practice, and quizzes.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <a href="/sutras" className="rounded-2xl border p-6 hover:shadow">
          <h3 className="text-xl font-semibold mb-2">Sutras</h3>
          <p>Explore the 16 core sutras with step-by-step examples.</p>
        </a>
        <a href="/sub-sutras" className="rounded-2xl border p-6 hover:shadow">
          <h3 className="text-xl font-semibold mb-2">Sub-Sutras</h3>
          <p>Complementary principles for deeper shortcuts.</p>
        </a>
        <a href="/quizzes" className="rounded-2xl border p-6 hover:shadow">
          <h3 className="text-xl font-semibold mb-2">Quizzes</h3>
          <p>Test your speed with timers and instant feedback.</p>
        </a>
      </div>
    </section>
  );
}




