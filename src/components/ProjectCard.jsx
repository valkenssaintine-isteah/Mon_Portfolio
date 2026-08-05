export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  github,
}) {
  return (
    <div className="
      bg-white dark:bg-slate-800
      rounded-3xl
      overflow-hidden
      shadow-lg
      hover:shadow-2xl
      hover:-translate-y-2
      transition
      duration-300
    ">

      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">

        <h3 className="
          text-2xl
          font-bold
          text-gray-900
          dark:text-white
          mb-3
        ">
          {title}
        </h3>

        <p className="
          text-gray-600
          dark:text-gray-300
          mb-5
        ">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="
                bg-blue-100
                dark:bg-blue-900/40
                text-blue-700
                dark:text-blue-300
                px-3
                py-1
                rounded-full
                text-sm
                font-medium
              "
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            justify-center
            bg-blue-600
            hover:bg-blue-700
            font-semibold
            no-underline
            text-white
            px-5
            py-3
            rounded-xl
            transition 300
            duration-300
          "
        >
          Voir sur GitHub
        </a>

      </div>

    </div>
  );
}