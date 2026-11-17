import { cookies } from "next/headers";

export async function getCurrentUser() {

  const cookieStore = await cookies();

  const session =
    cookieStore.get("session");

  if (!session) {
    throw new Error("Unauthorized");
  }

  // temporary user
  // later this will come from PostgreSQL
  return {
    id: 1,
    name: "Noel",
    email: "admin@test.com",
    role: "admin",
  };
}