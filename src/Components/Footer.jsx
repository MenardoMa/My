import { ButtonPrymary } from "./Button";

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
    href: "https://www.linkedin.com/in/codewithsadee",
  },
  {
    label: "Twitter X",
    href: "https://x.com/codewithsadee_",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/codewithsadee",
  },
  {
    label: "GitHub",
    href: "https://www.github.com/codewithsadee-org",
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
            <h1 className="headline_1 mb-8 lg:max-w-[12ch]">
              Démarrons votre projet ensemble
            </h1>
            <ButtonPrymary
              href="mailto:menardotera@gmail.com"
              label="Démarré un project"
              icon="->"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div className="">
              <p className="mb-2">Liens</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <p className="mb-2">Social</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
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
          <p className="text-zinc-500 text-sm">
            &copy; 2025 <span className="text-zinc-300">Menardo Madiumba</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
