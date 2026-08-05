function Button({
  text,
  href,
  className = "",
  onClick,
  type = "button",
}) {

  const classes = `
    inline-flex
    items-center
    justify-center
    px-7
    py-3
    rounded-xl
    font-semibold
    text-white
    no-underline
    bg-blue-600
    hover:bg-blue-700
    hover:shadow-xl
    hover:-translate-y-1
    active:scale-95
    focus:outline-none
    focus:ring-4
    focus:ring-blue-300
    transition-all
    duration-300
    ease-in-out
    ${className}
  `;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={text}
      >
        {text}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={text}
      className={classes}
    >
      {text}
    </button>
  );
}

export default Button;