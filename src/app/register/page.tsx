"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { register } from "@/actions/auth";
import { Button, Input, Card, Label } from "@/components";

export default function RegisterPage() {
  const router = useRouter();

  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleRegister(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setError("");

    const formData = new FormData();

    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("password", form.password);

    const result = await register(formData);

    if (result?.error) {
      setError(result.error);
      return;
    }

    router.push("/login?registered=true");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card>
        <h1 className="text-2xl font-bold mb-6 text-center">
          Create Account
        </h1>

        <form
          onSubmit={handleRegister}
          className="space-y-4"
        >
          <div>
            <Label>Name</Label>

            <Input
              name="name"
              type="text"
              placeholder="Full name"
              value={form.name}
              onChange={handleChange}
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
            <Label>Email</Label>

            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
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
            <Label>Password</Label>

            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
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
            Create Account
          </Button>
        </form>
      </Card>
    </div>
  );
}