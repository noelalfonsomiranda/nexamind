"use client";

import { useState } from "react";
import { login } from "@/actions/auth";
import { Button, Input, Card, Label } from "@/components"

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

      <Card>

        <h1 className="text-2xl font-bold mb-6 text-center">
          Login
        </h1>


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
            className="
              w-full
            "
          >
            Login
          </Button>

        </form>

      </Card>

    </div>
  );
}