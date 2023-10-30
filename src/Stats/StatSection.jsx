import React from "react";

const stats = [
  { value: "500+", label: "Ideas delivered" },
  { value: "100+", label: "Experienced Mentor" },
  { value: "2 M+", label: "Increased sales" },
];
function StatsSection() {

  return (
    <section className="stats__section max-w-5xl mx-auto px-10 pt-10 flex flex-col gap-y-10">
      <div className="flex flex-col md:flex-row gap-y-2 items-center justify-center py-10 flex-wrap">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-y-0.5 py-5 lg:gap-y-2 items-center justify-center flex-1 border-zinc-800  last:pb-0 ax-w-[15rem] md:max-w-full"
          >
            <p className="text-zinc-800 font-semibold text-4xl lg:text-4xl">
              {item.value}
            </p>
            <p className="text-base lg:text-lg text-zinc-700">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );

}

export default StatsSection;
