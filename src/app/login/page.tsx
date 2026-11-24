"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { login } from "@/actions/auth";
import { Button, Input, Card, Label } from "@/components";

export default function LoginPage() {
  const [error, setError] = useState("");

  const searchParams = useSearchParams();
  const registered = searchParams.get("registered");

  async function handleLogin(formData: FormData) {
    setError("");

    const result = await login(formData);

    if (result?.error) {
      setError(result.error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card>
        <h1 className="text-2xl font-bold mb-6 text-center">
          Login
        </h1>
        
        {registered && (
          <p className="mb-4 text-sm text-green-600 text-center">
            Registration successful. You can now login.
          </p>
        )}

        <form action={handleLogin} className="space-y-4">
          <div>
            <Label>
              Email
            </Label>

            <Input
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
            <Label>
              Password
            </Label>

            <Input
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

          <Button
            type="submit"
            className="w-full"
          >
            Login
          </Button>

          <p className="text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-blue-600 hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </Card>
    </div>
  );
}