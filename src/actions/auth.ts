"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export async function login(formData: FormData) {

  const email = formData.get("email");
  const password = formData.get("password");


  if (
    email === "admin@test.com" &&
    password === "admin"
  ) {

    const cookieStore = await cookies();

    cookieStore.set(
      "session",
      "logged-in",
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
      }
    );

    redirect("/dashboard");
  }


  return {
    error: "Invalid email or password"
  };
}

export async function logout() {

  const cookieStore = await cookies();

  cookieStore.delete("session");

  redirect("/login");

}