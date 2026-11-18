export function Label({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="block text-sm font-medium mb-1">
      {children}
    </div>
  );
}