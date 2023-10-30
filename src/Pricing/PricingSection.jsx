import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Pricingtoggle from "./Pricingtoggle";
import { useState } from "react";

function PricingSection() {
  const [enabled, setEnabled] = useState(false);
  const pricingOptions = [
    {
      name: "Basic",
      price: "Premium",
      yearlyPrice: "Free",
      features: [
        "Edit up to 10 hours of podcast audio files.",
        "Set your own CoreLoop Page",
      ],
      backgroundColor: "#FFFFFF",
      buttonColor: "bg-[#6738EE]/10",
      buttonTextColor: "text-black",
      tagColor: "bg-gray-200",
      tagTextColor: "text-black",
      textColor: "text-slate-900",
    },

    {
      name: " Pro-ultimate",
      price: "$499",
      yearlyPrice: "$1228",
      description:
        "Get your roles filled faster with unlimited access to Dribbble's Job Board and Designer search.",
      features: [
        "Edit up to 1,000 hours of podcast audio files.",
        "Set your own landing page",
        "24/7 support",
        "Advanced analytics",
      ],
      extraBenefits: "Everything in free plan, plus",
      backgroundColor: "[#ffffff]",
      buttonColor: "bg-[#6738EE]",
      buttonTextColor: "text-white",
      tagColor: "bg-gray-200",
      tagTextColor: "text-black",
      textColor: "text-black",
    },
  ];

  return (
    <section className="pricing__section max-w-5xl mx-auto py-20 px-10">
      <div className="pricing-headline flex flex-col lg:flex-row items-center justify-center gap-y-2">
        <div className="flex items-center lg:items-start justify-center lg:justify-start flex-col gap-y-3">
          <h3 className="text-3xl sm:text-4xl max-w-xs mx-auto md:max-w-full md:mx-0 text-center lg:text-left font-bold leading-[1.15] text-black">
            Better the pricing, better the business
          </h3>
          <p className="text-sm text-slate-700/70 text-center lg:text-left">
            We curate the best pricing for your business to give the ultimate
            career for you
          </p>
          <Pricingtoggle enabled={enabled} setEnabled={setEnabled} />
        </div>

        <div className="pricing-card max-w-3xl mx-auto w-full flex flex-col lg:flex-row items-end justify-start md:grid-cols-2 gap-6 py-8 lg:py-12 lg:pb-20 lg:pt-8">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className={`card pricing-card-box w-full h-fit border border-[#6738EE]/50 rounded-xl flex flex-col `}
              style={{ backgroundColor: option.backgroundColor }}
            >
              <div className="">
                <div className="p-5 flex flex-col gap-y-2">
                  <p
                    className={` rounded-full text-center py-[1px] w-fit text-base font-semibold ${option.textColor}`}
                  >
                    {option.name}
                  </p>
                  <h3 className={`mt-5 text-sm font-medium`}>
                    <span className={`text-3xl font-[620] ${option.textColor}`}>
                      {enabled ? option.yearlyPrice : option.price}
                      <span
                        className={`${option.textColor} text-sm font-medium`}
                      >
                        {enabled ? "/year" : "/month"}
                      </span>
                    </span>
                  </h3>
                </div>
              </div>

              <div className="pricing-features flex flex-col gap-y-5 p-5">
                {option.extraBenefits && (
                  <p className={`${option.textColor} text-sm font-medium`}>
                    {option.extraBenefits}
                  </p>
                )}
                {option.features.map((feature, index) => (
                  <div key={index} className="flex gap-x-3">
                    <p className={`${option.textColor} text-sm`}>{feature}</p>
                  </div>
                ))}
                <button
                  className={`my-2 flex text-base lg:text-lg items-center justify-center rounded-full h-12 w-full font-bold  border border-slate-500 hover:shadow-lg hover:drop-shadow-lg transition duration-200 ${option.buttonColor} ${option.buttonTextColor}`}
                >
                  <span
                    className="tracking-tight"
                    style={{ color: option.buttonTextColor }}
                  >
                    Choose Plan
                  </span>
                  <BsArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
