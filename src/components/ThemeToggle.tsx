import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button onClick={toggle} className="btn btn--ghost btn--sm">
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}