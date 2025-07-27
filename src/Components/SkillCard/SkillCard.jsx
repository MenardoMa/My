const SkillCard = ({ label, desc, imgSrc, tag }) => {
  return (
    <div className="flex items-center p-3 gap-4 cursor-pointe hover:bg-zinc-800 active:bg-zinc-700 cursor-pointer hover:ring hover:ring-inset hover:ring-zinc-50/10 transition-colors rounded-xl group">
      <figure className="overflow-hidden bg-zinc-700/50 relative h-10 w-10 flex items-center justify-center text-center rounded-md group-hover:bg-zinc-900">
        <img src={imgSrc} alt={tag} width={24} height={24} />
      </figure>
      <div className="flex flex-col flex-wrap">
        <span className="text-base text-zinc-200 capitalize">{label}</span>
        <span className="text-sm text-zinc-300">{desc}</span>
      </div>
    </div>
  );
};

const SkillWork = ({ label, desc, imgSrc, tag, yeah }) => {
  return (
    <div className="w-full flex items-center p-3 gap-4 cursor-pointe hover:bg-zinc-800 active:bg-zinc-700 cursor-pointer hover:ring hover:ring-inset hover:ring-zinc-50/10 transition-colors rounded-xl group">
      <figure className="overflow-hidden bg-zinc-700/50 relative h-10 w-10 flex items-center justify-center text-center rounded-md group-hover:bg-zinc-900">
        <img src={imgSrc} alt={tag} width={24} height={24} />
      </figure>
      <div className="w-full flex flex-col flex-wrap">
        <span className="text-base text-zinc-200 capitalize">{label}</span>
        <div className="flex items-center justify-between flex-wrap w-full">
          <span className="text-sm text-zinc-300">{desc}</span>
          <span className="text-sm text-zinc-300">{yeah}</span>
        </div>
      </div>
    </div>
  );
};

const SkillScholl = ({ label, desc, imgSrc, tag, yeah }) => {
  return (
    <div className="w-full flex items-center p-3 gap-4 cursor-pointe hover:bg-zinc-800 active:bg-zinc-700 cursor-pointer hover:ring hover:ring-inset hover:ring-zinc-50/10 transition-colors rounded-xl group">
      <figure className="overflow-hidden bg-zinc-700/50 relative h-10 w-10 flex items-center justify-center text-center rounded-md group-hover:bg-zinc-900">
        <img src={imgSrc} alt={tag} width={24} height={24} />
      </figure>
      <div className="w-full flex flex-col flex-wrap">
        <span className="text-base text-zinc-200 capitalize">{label}</span>
        <div className="flex items-center justify-between flex-wrap w-full">
          <span className="text-sm text-zinc-300">{desc}</span>
          <span className="text-sm text-zinc-300">{yeah}</span>
        </div>
      </div>
    </div>
  );
};

export { SkillCard, SkillWork, SkillScholl };
