{section.items.map((item) => {
  const Icon = item.icon;

  if (item.locked) {
    return (
      <button
        key={item.name}
        onClick={() =>
          toast("🔒 Confidential module. Available only after release.", {
            icon: <ShieldAlert size={18} />,
          })
        }
        className="
          w-full
          flex
          items-center
          justify-between
          px-4
          py-3
          rounded-xl
          text-slate-400
          dark:text-slate-500
          hover:bg-slate-100
          dark:hover:bg-slate-800
          transition
          cursor-pointer
        "
      >
        <div className="flex items-center gap-4">
          <Icon size={20} />
          <span>{item.name}</span>
        </div>

        <Lock size={16} />
      </button>
    );
  }

  return (
    <NavLink
      key={item.path}
      to={item.path}
      className={({ isActive }) =>
        `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
          isActive
            ? "bg-blue-600 text-white shadow-lg"
            : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
        }`
      }
    >
      <Icon size={20} />
      <span className="font-medium">{item.name}</span>
    </NavLink>
  );
})}