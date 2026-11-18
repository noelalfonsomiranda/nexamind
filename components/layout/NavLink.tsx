"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {

  const pathname = usePathname();

  const active =
    pathname === href;

  return (
    <Link
      href={href}
      className={`
        flex items-center gap-3 rounded-lg px-3 py-2
        ${
          active
            ? "text-[var(--foreground)] bg-[var(--hover)] font-medium"
            : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
        }
      `}
    >
      {children}
    </Link>
  );
}