/**
 *
 * Component skillCard import
 *
 */
import { SkillCard, SkillWork, SkillScholl } from "./SkillCard/SkillCard";

import {
  html,
  figma,
  nodeJs,
  css,
  database,
  design,
  certificat,
  php,
  darketing,
  optimist,
} from "../assets/skill";

const flash = "->";

/**
 * Tabs Skill
 */
const skillItem = [
  {
    imgSrc: html,
    label: "HTML",
    desc: "Structure",
    tag: "skill",
  },
  {
    imgSrc: css,
    label: "CSS",
    desc: "Bootstrap TailwindCss",
    tag: "skill",
  },
  {
    imgSrc: nodeJs,
    label: "JavaScript",
    desc: "Stack Mern, ReactJs NextJS NodesJs et Express",
    tag: "skill",
  },

  {
    imgSrc: database,
    label: "Database",
    desc: "Mysql Postgrel MongoBD Firebase",
    tag: "skill",
  },
  {
    imgSrc: php,
    label: "PHP",
    desc: "POO Laravel",
    tag: "skill",
  },
  {
    imgSrc: figma,
    label: "Design",
    desc: "Figma Photoshop",
    tag: "skill",
  },
];

const skillWork = [
  {
    imgSrc: darketing,
    label: "Darketing",
    href: "Darketing.com",
    desc: "Fullstack web développeur",
    tag: "skillWork",
    yeah: "2020 - 2021",
  },
  {
    imgSrc: optimist,
    label: "Optimist technologies",
    href: "",
    desc: "Front-end web développeur",
    tag: "skillWork",
    yeah: "2022 - 2023",
  },
  {
    imgSrc: design,
    label: "Mosala digital",
    href: "",
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
              {skillWork.map(
                ({ label, href, desc, imgSrc, tag, yeah }, key) => (
                  <SkillWork
                    key={key}
                    href={href}
                    label={label}
                    desc={desc}
                    tag={tag}
                    imgSrc={imgSrc}
                    yeah={yeah}
                  />
                )
              )}
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
