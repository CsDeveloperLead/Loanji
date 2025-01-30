// import React,  { useEffect } from "react";
// import { useParams } from "react-router-dom";

// const serviceData = {
//   "household-emergency": {
//     title: "Household emergency",
//     description:
//       "We provide modern web development services using the latest technologies...",
//   },
//   "vehicle-loan": {
//     title: "Vehicle Loan",
//     description:
//       "Our mobile development team builds responsive and scalable apps...",
//   },
//   "personal-loan": {
//     title: "Personal loan",
//     description:
//       "We help businesses deploy scalable and secure cloud solutions...",
//   },
//   "pocket-loan": {
//     title: "Pocket loan",
//     description:
//       "Protect your business with our advanced cyber security services...",
//   },
// };

// function Services() {

//   useEffect(() => {
//       window.scrollTo(0, 0)
//     }, [])

//   const { serviceName } = useParams();
//   const service = serviceData[serviceName] || {
//     title: "Service Not Found",
//     description: "The selected service does not exist.",
//   };

//   return (
//     <div className="pt-32 w-[90%] mx-auto">
//       <div className="w-full h-auto mx-auto">
//         <img
//           src=""
//           alt=""
//           className="bg-[#F1F1F9] rounded-3xl h-40 sm:h-72 md:h-96 xl:h-[450px]"
//         />
//       </div>
//       <div className="mt-10">
//         <h1 className="text-[#292833] font-bold font-jakarta text-3xl md:text-4xl lg:text-5xl">
//           {service.title}
//         </h1>
//         <p className="text-[#292833] font-dmSans text-sm sm:text-base lg:text-lg mt-4">
//           {service.description}
//         </p>
//       </div>

//       <div className="flex flex-col sm:flex-row gap-6 mt-10">
//         <div className="bg-[#F1F1F9] rounded-3xl h-40 sm:h-72 md:h-96 flex-1"></div>
//         <div className="bg-[#F1F1F9] rounded-3xl h-40 sm:h-72 md:h-96 flex-1"></div>
//       </div>

//       <div className="mt-10">
//         <p className="text-[#292833] text-sm sm:text-base lg:text-lg">
//           Contrary to popular belief, Lorem Ipsum is not simply random text. It
//           has roots in a piece of classical Latin literature from 45 BC, making
//           it over 2000 years old. Richard McClintock, a Latin professor at H
//           ichard McClintock, a Latin professor at Hampden Sydney College in
//           Virginia.
//         </p>
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 text-sm sm:text-base">
//           <p>➤ Lorem Ipsum is Not</p>
//           <p>➤ Lorem Ipsum is Not</p>
//           <p>➤ Lorem Ipsum is Not</p>
//           <p>➤ Lorem Ipsum is Not</p>
//           <p>➤ Lorem Ipsum is Not</p>
//           <p>➤ Lorem Ipsum is Not</p>
//           <p>➤ Lorem Ipsum is Not</p>
//           <p>➤ Lorem Ipsum is Not</p>
//           <p>➤ Lorem Ipsum is Not</p>
//         </div>
//       </div>
      
//     </div>
//   );
// }

// export default Services;
