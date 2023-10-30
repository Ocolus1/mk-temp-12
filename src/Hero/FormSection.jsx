import React from "react";
import { useState } from "react";
import OptionMenu from "./FormListComponent";

function FormSection() {
  const [firstName, setFirstName] = useState("");

  const [email, setEmail] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const serviceOptions = [
    { name: "Service1" },
    { name: "Service2" },
    { name: "Service3" },
    { name: "Service4" },
  ];

  return (
    <div className="max-w-5xl mx-auto form-container p-5 lg:rounded-full border border-slate-500/50 bg-white">
      <div className="flex flex-col lg:flex-row gap-y-5 justify-between items-center gap-x-5 ">
        <div className="w-full">
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="flex w-full rounded-full border border-gray-300 p-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6469ff] placeholder:text-slate-500/40"
            placeholder="Name"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </div>
        <div className="w-full">
          <input
            type="email"
            id="email"
            name="email"
            className="flex w-full rounded-full border border-gray-300 p-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6469ff] placeholder:text-slate-500/40"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="w-full">
          <OptionMenu serviceOptions={serviceOptions} />
        </div>
        <div className="w-full">
          {" "}
          <button className="w-full flex items-center text-white justify-center rounded-full bg-[#864BD8] px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">
            <span>Let's go</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormSection;
