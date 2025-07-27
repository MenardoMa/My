/**
 *
 * Component skillCard import
 *
 */
import { SkillCard, SkillWork, SkillScholl } from "./SkillCard/SkillCard";

import { figma, nodeJs, css, certificat } from "../assets/skill";

const flash = "->";

/**
 * Tabs Skill
 */
const skillItem = [
  {
    imgSrc: figma,
    label: "Html",
    desc: "Design tool",
    tag: "skill",
  },
  {
    imgSrc: css,
    label: "CSS",
    desc: "Bootstrap, TailwindCss",
    tag: "skill",
  },
  {
    imgSrc: nodeJs,
    label: "JavaScript",
    desc: "Stack Mern, React.Js Next.JS Node.Js et Express",
    tag: "skill",
  },

  {
    imgSrc: css,
    label: "Database",
    desc: "Sql, Mysql, Postgrel, MongoBD",
    tag: "skill",
  },
  {
    imgSrc: nodeJs,
    label: "Design",
    desc: "Figma, Photoshop",
    tag: "skill",
  },
  {
    imgSrc: figma,
    label: "PHP",
    desc: "Laravel",
    tag: "skill",
  },
];

const skillWork = [
  {
    imgSrc: figma,
    label: "Darketing",
    desc: "Fullstack web développeur",
    tag: "skillWork",
    yeah: "2020 - 2021",
  },
  {
    imgSrc: nodeJs,
    label: "Optisme tech",
    desc: "Front-end web développeur",
    tag: "skillWork",
    yeah: "2022 - 2023",
  },
  {
    imgSrc: css,
    label: "Mosala digital",
    desc: "Fullstack web développeur",
    tag: "skillWork",
    yeah: "2024 - 2025",
  },
];

const skillSchool = [
  {
    imgSrc: certificat,
    label: "Certificat de compétences en bureautique",
    desc: "Cecontec Kinshasa",
    tag: "skillWork",
    yeah: "2016 - 2017",
  },
  {
    imgSrc: certificat,
    label: "Diplôme d'Etat en Mécanique-général",
    desc: "institut technique professionnel passio (ITPP)",
    tag: "skillWork",
    yeah: "2012 - 2018",
  },
  {
    imgSrc: certificat,
    label: "Graduat en Sciences informatique",
    desc: "Université de Kinshasa (UNIKIN)",
    tag: "skillWork",
    yeah: "2018 - 2021",
  },
  {
    imgSrc: certificat,
    label: "Licence en Génie informatique",
    desc: "Université de Kinshasa (UNIKIN)",
    tag: "skillWork",
    yeah: "2022 - 2025",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container grid gap-2 lg:grid-cols-2 lg:gap-10">
        <div className="">
          <h2 className="headline_2">
            outils essentiels que j'utilise
            <span className="ml-1">{flash}</span>
          </h2>
          <div className="cardSkill grid gap-3">
            {skillItem.map(({ label, desc, imgSrc, tag }, key) => (
              <SkillCard
                key={key}
                label={label}
                desc={desc}
                tag={tag}
                imgSrc={imgSrc}
              />
            ))}
          </div>
        </div>
        <div className="">
          <div className="">
            <h2 className="headline_2">
              Parcours professionnel <span className="ml-1">{flash}</span>
            </h2>
            <div className="cardSkill grid gap-3">
              {skillWork.map(({ label, desc, imgSrc, tag, yeah }, key) => (
                <SkillWork
                  key={key}
                  label={label}
                  desc={desc}
                  tag={tag}
                  imgSrc={imgSrc}
                  yeah={yeah}
                />
              ))}
            </div>
          </div>
          <div>
            <h2 className="headline_2">
              diplômes et formations <span className="ml-1">{flash}</span>
            </h2>
            <div className="cardSkill grid gap-3">
              {skillSchool.map(({ label, desc, imgSrc, tag, yeah }, key) => (
                <SkillScholl
                  key={key}
                  label={label}
                  desc={desc}
                  tag={tag}
                  imgSrc={imgSrc}
                  yeah={yeah}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
