export function Card({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        rounded-lg
        border
        border-[var(--border)]
        bg-[var(--surface)]
        p-8
        shadow-md
        w-full
        max-w-md
        bg-white
      "
    >
      {children}
    </div>
  );
}