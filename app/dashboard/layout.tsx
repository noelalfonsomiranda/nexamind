import { Navbar, Sidebar, Container } from "@/components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--background)]">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <main className="flex-1">
          <Container>
            {children}
          </Container>
        </main>

      </div>

    </div>
  );
}