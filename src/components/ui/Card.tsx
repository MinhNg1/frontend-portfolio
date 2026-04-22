type Props = {
  title: string;
  id: string;
  variant?: "default" | "elevated" | "interactive";
  noBorder?: boolean;
  children: React.ReactNode;
};

export default function Card({
  title,
  id,
  variant = "default",
  noBorder = false,
  children,
}: Props) {
  const headingId = `${id}-title`;

  return (
    <section
      className={`card card--${variant} ${
        noBorder ? "card--no-border" : ""
      }`}
      aria-labelledby={headingId}
    >
      <h2 id={headingId}>{title}</h2>
      {children}
    </section>
  );
}