interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({
  title,
  description,
}: PageHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-semibold tracking-tight text-[var(--foreground)]">
        {title}
      </h1>

      {description && (
        <p className="mt-2 text-sm text-[var(--muted-foreground)]">
          {description}
        </p>
      )}
    </div>
  );
}