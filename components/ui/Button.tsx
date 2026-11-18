type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        rounded-lg
        px-4
        py-2
        font-medium
        transition-colors
        bg-[var(--primary)]
        text-[var(--primary-foreground)]
        hover:bg-[var(--foreground)]
        ${className}
      `}
      {...props}
    />
  );
}