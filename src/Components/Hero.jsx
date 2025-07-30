import heroBanner from "../assets/images/hero-banner.png";
import My from "../assets/images/My.jpg";
import doc from "../../public/doc/CV_2025_Menardo_MADIUMBA_Mayimona.pdf";
import { ButtonPrymary, ButtonOutline } from "./Button";

const Hero = () => {
  return (
    <section className="pt-28 lg:pt-36" id="home">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative h-2 w-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Disponible pour de nouveaux projets
            </div>
          </div>
          <h2 className="headline_1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Hé, c'est Menardo Développeur Web Passionné.
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            <ButtonPrymary
              href={doc}
              target="_blank"
              label="Telecharger mon cv"
            />
            <ButtonOutline
              href="mailto:menardotera@gmail.com"
              label="Travailler avec moi"
              icon="->"
            />
          </div>
        </div>
        <div className="hidden lg:block borde">
          <div className="overflow-hidden h-[500px] flex items-center justify-end">
            <div className="relative  drop-shadow-lg overflow-hidden w-[300px] h-[300px] bg-zinc-50/10 ring-inset ring-1 ring-zinc-50/5 transition-[opacity,transform,filter] backdrop-blur-2xl rounded-2xl">
              <figure className="w-full max-w-[480px] ml-auto overflow-hidden">
                <img
                  src={heroBanner}
                  alt="Menardo | Madiumba"
                  className="w-full"
                  width={200}
                  height={200}
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
