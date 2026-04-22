type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = "primary",
  size = "md",
  ...props
}: Props) {
  return (
    <button className={`btn btn--${variant} btn--${size}`} {...props}>
      {children}
    </button>
  );
}