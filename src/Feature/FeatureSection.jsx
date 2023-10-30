import React from "react";
import tv from "../assets/star.svg";
import chat from "../assets/chat.svg";
import taskboard from "../assets/electric.svg";

const FeaturesData = [
  {
    image: tv,
    background: "bg-[#5138EE]/10",
    title: "Live classes",
    description: "We are providing live classes with the best tutor for you",
  },
  {
    image: chat,
    background: "bg-[#5EC6E8]/10",
    title: "Discussions",
    description: "Conversations with teachers or another students about tasks",
  },
  {
    image: taskboard,
    background: "bg-[#F9BD64]/10",
    title: "Tasks",
    description:
      "We give every of our students task for gathering knowledge at home",
  },
];

function FeatureSection() {
  return (
    <section className="feature__section max-w-5xl px-7 lg:px-10 py-14 mx-auto ">
      <div className="flex flex-col items-center justify-center gap-y-3">
        <h2 className="text-3xl md:text-3xl lg:text-4xl md:max-w-md mx-auto text-center font-bold text-zinc-800">
          Simple steps to get your next job
        </h2>
        <p className="md:max-w-lg mx-auto text-center">
          Get to know our awesome features that are absolutely suit for
          everyone.Explore the features and know the best
        </p>
      </div>
      <div className="w-full pt-10 lg:w-full relative isolate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {FeaturesData.map(({ image, title, description, background }) => (
          <div
            key={title}
            className="flex flex-col items-tvt justify-tvt gap-y-3 w-full border border-stone-300/30 p-5 rounded-lg"
          >
            <div className={`w-fit ${background} p-2 px-3 rounded`}>
              <img className="w-8 h-8" src={image} alt="" />
            </div>
            <div className="flex flex-col gap-y-1">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-slate-700/70 max-w-[15rem] ">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;
