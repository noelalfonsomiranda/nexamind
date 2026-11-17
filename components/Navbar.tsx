import Link from "next/link";
import { logout } from "@/actions/auth";

export default function Navbar() {
  return (
    <nav className="h-16 border-b flex items-center justify-between px-6">
      <Link href="/" className="font-bold text-xl">
        MyApp
      </Link>

      <div className="flex gap-6">
        <Link href="/dashboard">
          Dashboard
        </Link>

        <Link href="/dashboard/profile">
          Profile
        </Link>

        <Link href="/dashboard/settings">
          Settings
        </Link>

        <form action={logout}>
            <button>Logout</button>
        </form>
      </div>
    </nav>
  );
}