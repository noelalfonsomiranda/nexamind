import { getCurrentUser } from "@/lib/auth";

export default async function DashboardPage(){
  const user = await getCurrentUser();

  return (
    <div>
      <h1>
        Hello {user.name}
      </h1>
      <p>
        Email: {user.email}
      </p>
      <p>
        Role: {user.role}
      </p>
    </div>
  );
}