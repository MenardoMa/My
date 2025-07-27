import heroBanner from "../assets/images/hero-banner.png";
import { ButtonPrymary, ButtonOutline } from "./Button";

const Hero = () => {
  return (
    <section className="pt-28 lg:pt-36" id="home">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            {/* <figure>
              <img
                src="./"
                alt="Menardo Madiumba"
                width={40}
                height={40}
                className="image-cover"
              />
            </figure> */}
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative h-2 w-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Disponible pour de nouveaux projets
            </div>
          </div>
          <h2 className="headline_1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building Scalable Modern Websites for the future.
          </h2>
          <div className="flex items-center gap-3">
            <ButtonPrymary href="#" label="Telecharger cv" icon="->" />
            <ButtonOutline
              href="#contact"
              label="Travailler avec moi"
              icon="->"
            />
          </div>
        </div>
        <div className="hidden lg:block">
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
    </section>
  );
};

export default Hero;
