import React from "react";
import Navbar from "../Navbar";
import herosvg from "../assets/herosection-rightside.svg";
import heroleftsvg from "../assets/herosection-leftside.svg";
import FormSection from "../Hero/FormSection";

function HeroSection() {
  return (
    <section className="hero__section">
      <Navbar />
      <div className="hero__container px-7 lg:px-10 max-w-5xl relative mx-auto flex flex-col gap-y-10 lg:flex-row items-center gap-x-10 justify-center py-10 lg:py-14">
        <div className="hidden lg:block absolute top-0 right-0">
          <img src={herosvg} alt="" />
        </div>
        <div className="hidden lg:block absolute top-0 left-0">
          <img src={heroleftsvg} alt="" />
        </div>
        <div className="hero-content lg:w-1/2 lg:pr-5 flex flex-col gap-y-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center leading-[1.2] max-w-xl mx-auto lg:mx-0 lg:max-w-full font-semibold text-black">
            A place for your perfect <span>dream job</span>
          </h1>
          <p className="text-base md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-full text-center">
            Build skills with courses, certificates and get online knowledge
            from our world-class platform
          </p>
        </div>
      </div>
      <div>
        <FormSection />
      </div>
    </section>
  );
}

export default HeroSection;
