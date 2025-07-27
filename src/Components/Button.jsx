const ButtonPrymary = ({ href, target = "_self", label, icon, classes }) => {
  if (href) {
    return (
      <a href={href} target={target} className={`btn btn-primary ${classes}`}>
        {label} {icon ? <span>{icon}</span> : undefined}
      </a>
    );
  } else {
    return (
      <button className={`btn btn-primary ${classes}`}>
        {label} {icon ? <span>{icon}</span> : undefined}
      </button>
    );
  }
};

const ButtonOutline = ({ href, target = "_self", label, icon, classes }) => {
  if (href) {
    return (
      <a href={href} target={target} className={`btn btn-outline ${classes}`}>
        {label} {icon ? <span>{icon}</span> : undefined}
      </a>
    );
  } else {
    return (
      <button className={`btn btn-outline ${classes}`}>
        {label} {icon ? <span>{icon}</span> : undefined}
      </button>
    );
  }
};

export { ButtonPrymary, ButtonOutline };
