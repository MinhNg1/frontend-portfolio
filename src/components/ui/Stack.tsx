export default function Stack({
  gap = 4,
  children,
}: {
  gap?: number;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: `var(--space-${gap})` }}>
      {children}
    </div>
  );
}