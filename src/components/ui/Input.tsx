import * as React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`
          h-10
          w-full
          rounded-lg
          border
          border-[var(--border)]
          bg-[var(--background)]
          px-3
          py-2
          text-sm
          text-[var(--foreground)]
          placeholder:text-[var(--muted-foreground)]
          outline-none
          transition-colors
          focus:border-[var(--foreground)]
          disabled:cursor-not-allowed
          disabled:opacity-50
          ${className}
        `}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";