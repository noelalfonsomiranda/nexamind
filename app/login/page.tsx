"use client";

import { useState } from "react";
import { login } from "@/actions/auth";

export default function LoginPage() {

  const [error, setError] = useState("");

  async function handleLogin(formData: FormData) {
    setError("");

    const result = await login(formData);

    if (result?.error) {
      setError(result.error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">

        <h1 className="text-2xl font-bold mb-6 text-center">
          Login
        </h1>


        <form action={handleLogin} className="space-y-4">

          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>

            <input
              name="email"
              type="email"
              placeholder="Email"
              className="
                w-full
                border
                rounded-md
                px-3
                py-2
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />
          </div>


          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>

            <input
              name="password"
              type="password"
              placeholder="Password"
              className="
                w-full
                border
                rounded-md
                px-3
                py-2
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />
          </div>


          {error && (
            <p className="text-sm text-red-500">
              {error}
            </p>
          )}


          <button
            type="submit"
            className="
              w-full
              bg-blue-600
              text-white
              py-2
              rounded-md
              hover:bg-blue-700
              transition
            "
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}