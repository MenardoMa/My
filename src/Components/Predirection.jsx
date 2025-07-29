import PredirectionCard from "./PredirectionCard/PredirectionCard";

const PredirectionResources = [
  {
    imgSrc: "",
    title: "Intégration",
    desc: "Je peux m'intégrer de manière transparente à votre équipe de développement, de produits et apporter des solutions à vos défis de conception et ou dévoloppement.",
    tags: "Recommandé pour les créateurs indépendants",
  },
  {
    imgSrc: "",
    title: "Refonte du produit",
    desc: "Nous travaillerons ensemble à la refonte de votre produit grâce à une approche centrée sur l'utilisateur qui améliorera l'engagement, la fidélisation et les revenus. Dites adieu à une expérience utilisateur médiocre et bonjour à un produit qui se démarque sur le marché.",
    tags: "",
  },
  {
    imgSrc: "",
    title: "Audit UX",
    desc: "Je peux vous aider à repérer les goulots d'étranglement de votre produit pour libérer son plein potentiel.",
    tags: "Recommandé pour les créateurs indépendants",
  },
];

/**
 *
 * Composant Predirection
 *
 */
const Predirection = () => {
  return (
    <section className="section">
      <div className="container ">
        <div className="flex flex-col items-center gap-5">
          <div className="mb-10 max-w-2xl">
            <h2 className="headline_2 mb-5 predirection">
              Comment puis-je t'aider
            </h2>
            <p className="text-2xl leading-relaxed text-zinc-300">
              Je suis embauché pour concevoir, réparer ou faire évoluer des
              produit, application web.
            </p>
          </div>
          {PredirectionResources.map(({ imgSrc, title, desc, tags }, key) => (
            <PredirectionCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              desc={desc}
              tags={tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Predirection;
