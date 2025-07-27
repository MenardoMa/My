/**
 *
 * Component skillCard import
 *
 */

import ProjectCard from "./ProjectCard/ProjectCard";

/**
 *
 * Import work depuis skill.js
 *
 */

import {
  project_1,
  project_2,
  project_3,
  project_4,
  project_5,
  project_6,
} from "../assets/skill";
import { ButtonOutline } from "./Button";

const works = [
  {
    imgSrc: project_1,
    title: "Full stack music app",
    tags: ["API", "MVC", "Development"],
    projectLink: "https://musify-5al0.onrender.com/",
  },
  {
    imgSrc: project_2,
    title: "Free stock photo app",
    tags: ["API", "SPA"],
    projectLink: "https://pixstock-official.vercel.app/",
  },
  {
    imgSrc: project_3,
    title: "Recipe app",
    tags: ["Development", "API"],
    projectLink: "",
  },
  {
    imgSrc: project_4,
    title: "Real state website",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/codewithsadee-org/wealthome",
  },
  {
    imgSrc: project_5,
    title: "eCommerce website",
    tags: ["eCommerce", "Development"],
    projectLink: "https://github.com/codewithsadee/anon-ecommerce-website",
  },
  {
    imgSrc: project_6,
    title: "vCard Personal portfolio",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/codewithsadee/vcard-personal-portfolio",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline_2 ml-0 mb-8">Work</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))] md:grid-cols-2 ">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes=""
            />
          ))}
        </div>
        <div className="relative w-full flex items-end justify-center h-25">
          <ButtonOutline
            label="voir la liste complete"
            icon="->"
            classes="text-zinc-300"
            href="#all"
          />
        </div>
      </div>
    </section>
  );
};

export default Work;
