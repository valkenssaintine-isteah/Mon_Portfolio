import useTheme from "../hooks/useTheme";

export default function ThemeToggle() {

  const { theme, toggleTheme } = useTheme();

  return (

    <button

      onClick={toggleTheme}

      className="
      fixed
      bottom-8
      left-8
      w-14
      h-14
      rounded-full
      shadow-2xl
      bg-blue-600
      hover:bg-blue-700
      text-white
      text-2xl
      z-[999]
      transition-all
      duration-300
      "

    >

      {theme === "light"
        ? "🌙"
        : "☀️"}

    </button>

  );

}