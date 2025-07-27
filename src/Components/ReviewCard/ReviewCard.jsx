const ReviewCard = ({ content, name, imgSrc, company }) => {
  return (
    <div className="relative p-5 rounded-xl bg-zinc-800 min-w-[320px] lg:min-w-[400px] flex flex-col hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 ">
      <p className="text-zinc-300 mb-8">"{content}"</p>
      <div className="flex items-center gap-2 mt-auto">
        <figure className="img-box overflow-hidden rounded-lg">
          <img
            src={imgSrc}
            alt={name}
            width={40}
            height={40}
            loading="lazy"
            className="img-cover"
          />
        </figure>
        <div>
          <p>{name}</p>
          <p className="text-xs text-zinc-400 tracking-wider">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
