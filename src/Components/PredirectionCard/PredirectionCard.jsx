const PredirectionCard = ({ imgSrc, title, desc, tags }) => {
  return (
    <div className="relative p-8 rounded-xl max-w-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-[background-colors]">
      <div className="">
        <figure className="overflow-hidden bg-zinc-700/50 relative h-15 w-15 flex items-center justify-center text-center rounded-md">
          <img
            src={imgSrc}
            alt="Predirection"
            width={38}
            height={38}
            loading="lazy"
            className=""
          />
        </figure>
      </div>
      <div className="">
        <div className="my-4">
          <p className="text-sm">{title}</p>
        </div>
        <div className="">
          <p className="text-zinc-400 text-base leading-relaxed">{desc}</p>
        </div>
        <div className="">
          {tags != "" ? (
            <p className="mt-4 bg-violet-200 inline-block px-5 py-1 rounded-full">
              <span className="text-zinc-900 text-sm">{tags}</span>
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default PredirectionCard;
