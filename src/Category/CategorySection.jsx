import React from "react";
import tv from "../assets/bag.svg";
import chat from "../assets/fire.svg";
import taskboard from "../assets/pc.svg";

const FeaturesData = [
  {
    image: tv,
    background: "bg-[#FFEAE0]",
    title: "Live classes",
    description: "We are providing live classes with the best tutor for you",
  },
  {
    image: chat,
    background: "bg-[#E4F7F1]",
    title: "Discussions",
    description: "Conversations with teachers or another students about tasks",
  },
  {
    image: taskboard,
    background: "bg-[#F8F0DE]",
    title: "Tasks",
    description:
      "We give every of our students task for gathering knowledge at home",
  },
];

function CategorySection() {
  return (
    <section className="feature__section max-w-5xl px-7 lg:px-10 py-14 mx-auto ">
      <div className="flex flex-col items-center justify-center gap-y-3">
        <h2 className="text-3xl md:text-3xl lg:text-4xl md:max-w-md mx-auto text-center font-bold text-zinc-800">
          Choose by category
        </h2>
        <p className="md:max-w-lg mx-auto text-center">
          Employee and employers way to find everything
        </p>
      </div>
      <div className="w-full pt-10 lg:w-full relative isolate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {FeaturesData.map(({ image, title, description, background }) => (
          <div
            key={title}
            className="flex flex-col items-center justify-center gap-y-3 w-full border border-stone-300/30 p-5 rounded-lg"
          >
            <div className={`w-fit ${background} p-2 px-3 rounded`}>
              <img className="w-8 h-8" src={image} alt="" />
            </div>
            <div className="flex flex-col items-center justify-center gap-y-1">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-slate-700/70 max-w-[15rem] text-center">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
