import React from "react";
import { ArrowDown } from "lucide-react";
import { hero } from "../constants/constants";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="conatiner max-w-4x mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4x md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">{hero.prefix}</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {hero.fname}
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {hero.lname}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto opacity-0 animate-fade-in-delay-3">
            {hero.desc}
          </p>

          <div className=" pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              view my projects
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary"></ArrowDown>
      </div>
    </section>
  );
};

export default HeroSection;
