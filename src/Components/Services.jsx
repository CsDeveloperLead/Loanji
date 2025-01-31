import React from "react";
import { useParams } from "react-router-dom";

const serviceData = {
  "household-emergency": {
    title: "Household Emergency",
    description: "Household emergency Realted Loan",
  },
  "vehicle-loan": {
    title: "Vehicle Loan",
    description: "Vehicle Loan Related Loan",
  },
  "personal-loan": {
    title: "Personal Loan",
    description: "Personal Loan Related Loan",
  },
  "pocket-loan": {
    title: "Pocket Loan",
    description: "Pocket loan Related Loan",
  },
};

function Services() {
  const { serviceName } = useParams();
  const service = serviceData[serviceName] || {
    title: "Service Not Found",
    description: "The selected service does not exist.",
  };

  return (
    <div className="pt-32 w-[90%] mx-auto">
      {/* Header Image */}
      <div className="w-full h-auto mx-auto">
        <div className="bg-[#F1F1F9] rounded-3xl h-40 sm:h-72 md:h-96 xl:h-[450px] w-full" />
      </div>

      {/* Service Title and Description */}
      <div className="mt-10">
        <h1 className="text-[#292833] font-bold text-3xl md:text-4xl lg:text-5xl">
          {service.title}
        </h1>
        <p className="text-[#292833] text-sm sm:text-base lg:text-lg mt-4">
          {service.description}
        </p>
      </div>

      {/* Two Column Image Section */}
      <div className="flex sm:flex-row gap-6 mt-10">
        <div className="bg-[#F1F1F9] rounded-3xl h-40 sm:h-72 md:h-96 flex-1"></div>
        <div className="bg-[#F1F1F9] rounded-3xl h-40 sm:h-72 md:h-96 flex-1"></div>
      </div>

      {/* Paragraph Section */}
      <div className="w-full lg:mt-10 border-b border-gray-300 pb-5 pt-4">
        <p className="text-[#292833] text-sm sm:text-base lg:text-lg">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at H
          ichard McClintock, a Latin professor at Hampden Sydney College in
          Virginia.
        </p>
      </div>

      {/* Bullet Points & Right-Side Cards in 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 mb-20 border-b border-gray-300 pb-5">
        
        {/* Bullet Points Section */}
        <div className="grid grid-cols-3 gap-3 text-sm sm:text-base">
          {Array(9)
            .fill("➤ Lorem Ipsum is Not")
            .map((item, index) => (
              <p key={index}>{item}</p>
            ))}

          <div className="col-span-3">
            <h2 className="text-2xl font-bold mt-6">Proin Non Eros Vehicula</h2>
            <p className="text-sm sm:text-base mt-4">
              Vestibulum in Ipsum Velit. Aliquam Libero Sem Asfds Asf...
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm sm:text-base">
              <div className="bg-[#F1F1F9] rounded-3xl h-40 sm:h-52 md:h-76 mt-6"></div>
              <ul className="mt-6 space-y-4 text-sm sm:text-base">
                <li>
                  ➤ Elevate Your Business With Our Cutting-Edge Digital
                  Marketing
                </li>
                <li>➤ Skyrocket Your ROI With Expert Digital Marketing</li>
                <li>
                  ➤ Generate Leads And Dominate Online With Our All-In-One
                  Solutions
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-6">Proin Non Eros Vehicula</h2>
            <p className="text-sm sm:text-base mt-4">
              Vestibulum in Ipsum Velit. Aliquam Libero Sem Asfds Asf...
            </p>

            <h2 className="text-2xl font-bold mt-10">
              Proin Non Eros Elementumtubulum Vehicula
            </h2>
            <ul className="mt-6 space-y-4 text-sm sm:text-base">
              <li>
                ➤ Elevate Your Business With Our Cutting-Edge Digital Marketing
              </li>
              <li>➤ Skyrocket Your ROI With Expert Digital Marketing</li>
              <li>
                ➤ Generate Leads And Dominate Online With Our All-In-One
                Solutions
              </li>
            </ul>
          </div>
        </div>

        {/* Right Sidebar Cards */}
        <div className="space-y-6">
          {[1, 2, 3].map((num) => (
            <div key={num} className="bg-[#292833] text-white p-6 ">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex items-center justify-center border border-red-500 rounded-full text-lg font-semibold">
                  {num}
                </div>
                <h2 className="text-2xl font-bold">Comprehensive Solar High</h2>
              </div>
              <p className="text-sm mt-2">
                Vestibulum in Ipsum Velit. Aliquam Libero Sem Asfds Asf...
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
