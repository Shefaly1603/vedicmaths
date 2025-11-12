import React from "react";

export default function LoginPage() {
  return (
    <main className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-6 text-purple-700 text-center">
        Login
      </h1>

      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Enter email"
          className="border p-2 rounded focus:outline-purple-500"
        />

        <input
          type="password"
          placeholder="Enter password"
          className="border p-2 rounded focus:outline-purple-500"
        />

        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded"
        >
          Login
        </button>
      </form>

      <p className="text-center text-sm text-gray-600 mt-4">
        New here? <a href="#" className="text-purple-600 font-medium">Register</a>
      </p>
    </main>
  );
}

