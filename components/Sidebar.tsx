import NavLink from './NavLink'

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen border-r p-5">

      <h2 className="font-bold text-lg mb-6">
        Menu
      </h2>

      <nav className="flex flex-col gap-4">
        <NavLink href="/dashboard">
          Dashboard
        </NavLink>

        <NavLink href="/dashboard/profile">
          Profile
        </NavLink>

        <NavLink href="/dashboard/settings">
          Settings
        </NavLink>
      </nav>

    </aside>
  );
}