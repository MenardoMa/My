import { ButtonOutline } from "./Button";

/**
 *
 * Ressources Footer
 *
 */
const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/me",
  },
  {
    label: "Twitter X",
    href: "https://x.com/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
  },
  {
    label: "GitHub",
    href: "https://www.github.com/MenardoMa",
  },
  {
    label: "+243 812799057",
    href: "tel:+243812799057",
  },
];

/**
 *
 * Component Footer
 *
 */
const Footer = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h1 className="headline_1 mb-8 lg:max-w-[12ch] up-reveal">
              Démarrons votre projet ensemble
            </h1>
            <ButtonOutline
              href="mailto:menardotera@gmail.com"
              label="Démarrer un project"
              icon="->"
              classes="up-reveal"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div className="">
              <p className="mb-2 up-reveal">Liens</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 up-reveal up-reveal"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <p className="mb-2 up-reveal">Social</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 up-reveal"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-10 mb-8">
          <p className="text-zinc-500 text-sm up-reveal">
            &copy; 2025{" "}
            <span className="text-zinc-300 up-reveal">Menardo Madiumba</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
