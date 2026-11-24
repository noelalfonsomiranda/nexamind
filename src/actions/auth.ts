"use server";

import { prisma } from "@/lib/prisma";
import { hashPassword, verifyPassword } from "@/lib/password";
import { registerSchema } from "@/lib/validation";
import { createSession } from "@/lib/auth";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export async function register(formData: FormData) {
  const parsed = registerSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.issues[0].message,
    };
  }

  const { name, email, password } = parsed.data;

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    return {
      success: false,
      error: "Email already exists.",
    };
  }

  const passwordHash = await hashPassword(password);

  const slug = `${name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")}-${crypto.randomUUID().slice(0, 8)}`;


  const organization = await prisma.organization.create({
    data: {
      name: `${name}'s Workspace`,
      slug,
    },
  });


  const user = await prisma.user.create({
    data: {
      name,
      email,
      passwordHash,
    },
  });


  await prisma.organizationMember.create({
    data: {
      userId: user.id,
      organizationId: organization.id,
      role: "OWNER",
    },
  });


  return {
    success: true,
  };
}


export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;


  if (!email || !password) {
    return {
      success: false,
      error: "Email and password are required.",
    };
  }


  const user = await prisma.user.findUnique({
    where: {
      email: email.toLowerCase(),
    },
  });


  if (!user) {
    return {
      success: false,
      error: "Invalid email or password.",
    };
  }


  const isPasswordValid = await verifyPassword(
    password,
    user.passwordHash
  );


  if (!isPasswordValid) {
    return {
      success: false,
      error: "Invalid email or password.",
    };
  }


  // Create session
  const token = await createSession(user.id);

  const cookieStore = await cookies();


  cookieStore.set("session", token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  maxAge: 60 * 60 * 24 * 7,
  path: "/",
});

console.log("SESSION CREATED:", token);

return {
  success: true,
};
}


export async function logout() {
  const cookieStore = await cookies();

  cookieStore.delete("session");

  redirect("/login");
}