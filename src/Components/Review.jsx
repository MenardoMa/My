/**
 *
 * Reviews Ressources
 *
 */

import { project_1 } from "../assets/skill";

import ReviewCard from "./ReviewCard/ReviewCard";

const reviews = [
  {
    content:
      "Je n'ai jamais vu quelqu'un livrer aussi vite et avec une qualité aussi incroyable. Son souci du détail et sa créativité étaient incomparables. Le processus a été fluide, efficace et rapide. Je suis absolument ravi du résultat final.",
    name: "Sophia Ramirez",
    imgSrc: project_1,
    company: "PixelForge",
  },
  {
    content:
      "Menardo est un designer talentueux et professionnel, qui livre rapidement sans jamais compromettre la qualité. Il aborde le design avec une approche critique et centrée sur l'utilisateur, créant des solutions qui trouvent un écho réel. Je suis plus que satisfait de son travail.",
    name: "Ethan Caldwell",
    imgSrc: project_1,
    company: "NexaWave",
  },
  {
    content:
      "J'ai travaillé avec Menardo sur un projet de landing page. Il est très attentif aux détails et très ouvert aux commentaires. Il a rapidement réitéré les designs pour livrer le résultat final.",
    name: "Liam Bennett",
    imgSrc: project_1,
    company: "CodeCraft",
  },
  {
    content:
      "Nous avons eu le plaisir de collaborer avec Menardo pour le développement de notre application web. Dès le début, il a démontré une compréhension approfondie de nos besoins et a su proposer des solutions adaptées.",
    name: "Noah Williams",
    imgSrc: project_1,
    company: "BrightWeb",
  },
  {
    content:
      "Son expertise en technologies front-end et back-end a été déterminante dans la création d'une plateforme à la fois intuitive et performante. Il a respecté les délais tout en garantissant une qualité de code exceptionnelle.",
    name: "Ava Thompson",
    imgSrc: project_1,
    company: "TechMosaic",
  },
  {
    content:
      "Nous recommandons vivement Menardo à toute entreprise à la recherche d'un développeur web full stack talentueux et fiable.",
    name: "Jonathan",
    imgSrc: project_1,
    company: "Skyline Digital",
  },
];

/**
 *
 * Component Reviews
 *
 */

const Review = () => {
  return (
    <section id="reviews" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline_2 mb-4">Temoignages de clients</h2>
        <div className="mb-8 max-w-xl pl-4">
          <p className="text-zinc-200">
            Voici ce que les personnes avec lesquelles je me suis associé disent
            de notre collaboration.
          </p>
        </div>
        <div className="flex items-stretch gap-3 w-fit">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key}
              content={content}
              name={name}
              imgSrc={imgSrc}
              company={company}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
