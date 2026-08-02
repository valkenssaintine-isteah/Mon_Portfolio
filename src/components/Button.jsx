function Button({ text, className }) {
  return (
    <button
      aria-label={text}
      className={`px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;