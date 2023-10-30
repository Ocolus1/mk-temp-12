import React from "react";
import company1 from "../assets/microsoft.svg";
import company2 from "../assets/ford.svg";
import company3 from "../assets/nike.svg";
import company4 from "../assets/apple.svg";
import company5 from "../assets/google.svg";
import company6 from "../assets/logitech.svg";

const serviceData = [
  {
    title: "Web-Design",
    image: company1,
    price: "$200",
    classes: "40 classes",
    timespan: "3 months",
  },
  {
    title: "Web-Development",
    image: company2,
    price: "$200",
    classes: "40 classes",
    timespan: "3 months",
  },
  {
    title: "UI/UX Design",
    image: company3,
    price: "$200",
    classes: "40 classes",
    timespan: "3 months",
  },
  {
    title: "UI/UX Design",
    image: company4,
    price: "$200",
    classes: "40 classes",
    timespan: "3 months",
  },
  {
    title: "UI/UX Design",
    image: company5,
    price: "$200",
    classes: "40 classes",
    timespan: "3 months",
  },
  {
    title: "UI/UX Design",
    image: company6,
    price: "$200",
    classes: "40 classes",
    timespan: "3 months",
  },
];

function ServiceSection() {
  return (
    <section className="feature__section bg-[#F4F4F7]">
      <div className=" max-w-5xl px-7 lg:px-10 py-14 mx-auto ">
        <div className="flex flex-col gap-y-3">
          <p className="text-sm text-[#1EBFC1]">COURSES</p>
          <h2 className="text-3xl md:text-3xl lg:text-4xl md:max-w-lg font-bold text-zinc-800">
            Featured Jobs
          </h2>
          <p className="md:max-w-lg">
            Employee and employers way to find everything
          </p>
        </div>
        <div className="w-full pt-10 lg:w-full relative isolate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceData.map(
            ({ title, description, price, classes, timespan, image }) => (
              <div
                key={title}
                className="grid grid-rows-1 p-5 bg-white rounded-xl gap-y-2 w-full border border-slate-500/50 hover:shadow-[5px_5px_0_rgba(0,0,0,0.5)] transition-shadow duration-150 ease-linear cursor-pointer"
              >
                <div className="flex flex-col gap-y-2.5">
                  <div className="flex items-center gap-x-3">
                    <div className="bg-[#F4F4F7] p-2 rounded-lg">
                      <img className="w-5 h-5" src={image} alt="" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{title}</h3>
                      <p className="text-sm text-slate-500/40">4days ago</p>
                    </div>
                  </div>
                  <p className="text-xl font-semibold">{price}</p>
                </div>
                <p className="text-slate-700/70 text-base">{description}</p>
                <div className="flex items-center justify-between pt-5 w-full">
                  <p className="bg-[#E0F7F6] px-2 py-0.5 text-sm rounded border border-cyan-500">
                    {classes}
                  </p>
                  <p className="bg-gray-200 px-2 py-0.5 text-sm rounded border border-gray-300">
                    {timespan}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
