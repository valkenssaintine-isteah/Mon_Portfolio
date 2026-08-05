function TeamCard({ name, role, bio, image }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-[#f3f6fb] shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900/95 overflow-hidden">

      {/* Photo */}
      <div className="flex justify-center mt-8">
        <img
          src={image}
          alt={name}
          className="w-36 h-36 rounded-full object-cover border-4 border-blue-600 shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="p-8 text-center">

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          {name}
        </h3>

        <span className="inline-block mt-3 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
          {role}
        </span>

        <p className="mt-6 leading-7 text-justify text-slate-800 dark:text-slate-100">
          {bio}
        </p>

      </div>

    </div>
  );
}

export default TeamCard;