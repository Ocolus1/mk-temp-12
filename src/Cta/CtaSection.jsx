import React from "react";

function CtaSection() {
  return (
    <section className="cta__section max-w-5xl mx-auto rounded-xl py-14 lg:py-20 px-5 lg:px-0">
      <div className="rounded-2xl p-5 py-14 bg-[#864BD8]/10 mx-auto flex flex-col gap-y-5 justify-center items-center">
        <h3 className="text-3xl md:text-4xl lg:text-5xl max-w-xl lg:max-w-3xl mx-auto font-bold text-black text-center">
          Ready to get going
        </h3>
        <p className="text-base md:text-lg lg:text-xl text-center">
          Create our account and boost you knowledge
        </p>
        <button className="bg-[#6738EE] w-1/2 md:w-1/3 hover:shadow-lg border border-transparent hover:drop-shadow transition duration-200 lg:w-1/3 text-white font-semibold text-sm lg:text-base rounded px-4 py-2">
          Sign up
        </button>
      </div>
    </section>
  );
}

export default CtaSection;
