const ProjectCard = ({ imgSrc, title, tags, projectLink, classes }) => {
  return (
    <div
      className={`relative p-4 rounded-xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors ${classes}`}
    >
      <figure className="img_box overflow-hidden aspect-square rounded-xs mb-4">
        <img
          src={imgSrc}
          alt="My work Perso"
          className="img_cover"
          loading="lazy"
        />
      </figure>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="title-1 mb-3">{title}</h3>
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, key) => (
              <span
                key={key}
                className="h-7 text-zinc-400 text-sm bg-zinc-50/5 grid items-center px-3 rounded-xl"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="h-11 w-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
          <span className="icon" aria-hidden="true">
            -
          </span>
        </div>
      </div>
      <a href={projectLink} target="_blank" className="absolute inset-0"></a>
    </div>
  );
};

export default ProjectCard;
