import { ButtonOutline } from "./Button";

const aboutItems = [
  {
    label: "Projets realisés",
    number: 20,
  },
  {
    label: "Années d'expérience",
    number: 4,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 up-reveal">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-lg md:max-w-[60ch]">
            Bonjour, Je suis Menardo Madiumba, développeur web congolais de 25
            ans. Passionné d'automatisation, d'optimisation et d'efficacité
            d'applications web, j'aime apprendre des nouvelles façons de
            résoudre les problèmes et de trouver des solutions à tous les
            besoins.
          </p>
          <div className="flex items-center flex-wrap gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-zinc-300 md:text-xl">+</span>
                  <span className="text-xl font-bold md:text-4xl">
                    {number}
                  </span>
                </div>
                <p className="text-zinc-400 text-sm">{label}</p>
              </div>
            ))}
            <ButtonOutline
              classes="ml-auto"
              href="#contact"
              label="Ecrit moi"
              icon="->"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
