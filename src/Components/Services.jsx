import React from "react";
import { useParams } from "react-router-dom";
import houseimage1 from "../assets/HomeLoanImages/closeup-shot-person-thinking-buying-selling-house.jpg";
import houseimage2 from "../assets/HomeLoanImages/6091463.jpg";
import houseimage3 from "../assets/HomeLoanImages/4300991.jpg";
import houseimage4 from "../assets/HomeLoanImages/6126682.jpg";
import vehicleimage1 from "../assets/VehicleLoanImages/car-model-calculator-coins-white-table.jpg";
import vehicleimage2 from "../assets/VehicleLoanImages/6428429.jpg";
import vehicleimage3 from "../assets/VehicleLoanImages/tiny_man_and_woman_buying_car_via_internet_shop.jpg";
import vehicleimage4 from "../assets/VehicleLoanImages/6514377.jpg";
import personalloan1 from "../assets/PersonalLoanImages/224.jpg";
import personalloan2 from "../assets/PersonalLoanImages/Personal-Loan-Interest-Rates-Guide-1-1.jpg";
import personalloan3 from "../assets/PersonalLoanImages/account-assets-audit-bank-bookkeeping-finance-concept.jpg";
import personalloan4 from "../assets/PersonalLoanImages/20943913.jpg";
import pocketloan1 from "../assets/PocketLoanImages/person-holding-change-purse-with-some-cash-it-wooden-surface.jpg";
import pocketloan2 from "../assets/PocketLoanImages/509021-PIL9KK-582.jpg";
import pocketloan3 from "../assets/PocketLoanImages/49231.jpg";
import pocketloan4 from "../assets/PocketLoanImages/1200x630wa.png";

const serviceData = {
  "household-emergency": {
    title: "Household Emergency",
    description:
      "A household emergency loan is a short-term financial assistance designed to help cover unexpected home-related expenses. Whether it’s a sudden plumbing issue, electrical failure, or urgent appliance repair, this loan provides immediate relief, ensuring that essential household functions remain uninterrupted.",
    paragraph1:
      "Household emergency loans are particularly beneficial when facing urgent home-related crises. These loans offer rapid financial relief without disrupting long-term financial plans. Many lenders provide online applications with minimal documentation, ensuring quick access to funds. Borrowers should carefully review terms, interest rates, and repayment conditions before applying to avoid unnecessary financial burdens.",
    image1: houseimage1,
    image2: houseimage2,
    image3: houseimage3,
    image4: houseimage4,
    point1: "Quick access to funds for urgent home repairs",
    point2: "Flexible repayment options",
    point3: "Suitable for tenants and homeowners alike",
    point4: "Online application and fast approval process",
    point5: "Home maintenance and repair costs",
    point6: "Competitive interest rates based on creditworthiness",
    point7: "No collateral required for smaller loan amounts",
    point8: "Plumbing, electrical, roofing",
    point9: "Avoid financial strain due to home-related emergency",
    heading1: "Features of a Household Emergency Loan",
    heading_bullet1:
      "Unsecured Loan – No need to pledge assets like a home or car",
    heading_bullet2:
      "Flexible Repayment Options – Loan tenure ranges from 3 months to 5 years",
    heading_bullet3:
      "Minimal Documentation – Requires basic KYC, income proof, and bank statements",
  },
  "vehicle-loan": {
    title: "Vehicle Loan",
    description:
      "A vehicle loan is a financial product designed to help individuals purchase a new or used vehicle. These loans are provided by banks, credit unions, or auto financing companies, allowing borrowers to repay the amount in fixed installments over a predetermined period.",
    paragraph1:
      "Vehicle loans are an excellent option for those looking to buy a car without paying the full amount upfront. The interest rate and loan tenure significantly impact monthly payments, so it’s crucial to compare various lenders before committing. Some lenders provide pre-approved loans for individuals with a strong credit history, simplifying the process.",
    image1: vehicleimage1,
    image2: vehicleimage2,
    image3: vehicleimage3,
    image4: vehicleimage4,
    point1: "Designed for purchasing new or used vehicles",
    point2: "Requires a down payment depending on policy",
    point3: "Interest rates vary based on credit score, loan tenure",
    point4: "Loan terms can range from 12 to 84 months",
    point5: "May include additional costs – processing fees",
    point6: "Early repayment may have penalties or incentives",
    point7: "Car and Two-Wheeler Loan",
    point8: "Commercial Vehicle and Electric Vehicle (EV) Loan",
    point9: "Improves credit score when repaid responsibly",
    heading1: "Features of a Vehicle Loan",
    heading_bullet1: "Secured Loan – The vehicle itself serves as collateral",
    heading_bullet2:
      "High Loan-to-Value (LTV) Ratio – Up to 90%–100% of the vehicle's on-road price can be financed",
    heading_bullet3: "Repayment Tenure – Typically from 12 months to 7 years.",
  },
  "personal-loan": {
    title: "Personal Loan",
    description:
      "A personal loan is a versatile financial product that allows individuals to borrow money for various needs without requiring collateral. It is typically unsecured and can be used for emergencies, vacations, or immediate financial requirements.",
    paragraph1:
      "To apply for a personal loan, applicants must meet certain eligibility criteria, including age (typically 21–60 years), employment type (salaried or self-employed), and minimum income (₹15,000–₹25,000 per month). Lenders require basic documentation, including identity proof (Aadhaar, PAN, Passport), income proof (salary slips, bank statements, ITR), and address proof (utility bills, rental agreement, Aadhaar card, etc.).",
    image1: personalloan1,
    image2: personalloan2,
    image3: personalloan3,
    image4: personalloan4,
    point1: "Can be used for any personal financial need",
    point2: "No collateral required for most personal loans",
    point3: "Fixed interest rates and flexible repayment options",
    point4: "Online application with minimal documentation",
    point5: "Quick approval process for eligible borrowers",
    point6: "Used for medical emergency, urgent expenses",
    point7: "Offers pre-approved personal loans",
    point8: "Can improve credit score with timely repayments",
    point9: "Loan amounts depend on creditworthiness and income",
    heading1: "Types of Personal Loan",
    heading_bullet1:
      "Medical Emergency Loan – provides quick financial assistance for urgent healthcare expenses",
    heading_bullet2:
      "Travel & Leisure Loan – finance vacations, covering flights, accommodations, and activities",
    heading_bullet3:
      "Immediate Loan – financial needs, ensuring quick access to funds with minimal paperwork and fast approval",
  },
  "pocket-loan": {
    title: "Pocket Loan",
    description:
      "Pocket loans are small, flexible loans designed for short-term financial requirements. They come in various forms, catering to different borrower needs with adjustable repayment options. They are ideal for covering emergency expenses, utility bills, small purchases, or unexpected shortfalls before the next paycheck.",
    paragraph1:
      "Pocket loans are often unsecured, meaning no collateral is required, but they come with higher interest rates compared to traditional personal loans due to their short duration and quick approval process. ",
    image1: pocketloan1,
    image2: pocketloan2,
    image3: pocketloan3,
    image4: pocketloan4,
    point1: "Small, short-term loans for daily expenses",
    point2: "Quick approval and disbursement process",
    point3: "Can be repaid in small, manageable installments",
    point4: "Low-interest rates compared to payday loans",
    point5: "Suitable for individuals with stable income",
    point6: "Flexible repayment tenures",
    point7: "For minor financial gaps or emergency expenses",
    point8: "Online application with minimal documentation",
    point9: "No collateral required",
    heading1: "Types of Pocket Loan",
    heading_bullet1:
      "Mini Pocket Loan – very small financial needs, such as grocery shopping, bill payments, or daily expenses",
    heading_bullet2:
      "Flex Pocket Loan – adjust their repayment schedules based on their financial situations",
    heading_bullet3:
      "Pro Pocket Loan – larger, more structured short-term loan suitable for individuals with higher financial needs",
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
      <img
        src={service.image1}
        alt="QR Code"
        className="rounded-3xl h-40 sm:h-72 md:h-96 xl:h-[450px] w-full object-fill"
      />

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
        <div className="rounded-3xl h-40 sm:h-72 md:h-96 flex-1">
          <img
            src={service.image2}
            alt="QR Code"
            className="w-full rounded-3xl h-40 sm:h-72 md:h-96 flex-1"
          />
        </div>
        <div className="rounded-3xl h-40 sm:h-72 md:h-96 flex-1">
          <img
            src={service.image3}
            alt="QR Code"
            className="w-full rounded-3xl h-40 sm:h-72 md:h-96 flex-1"
          />
        </div>
      </div>

      {/* Paragraph Section */}
      <div className="w-full lg:mt-10 sm:mt-10 border-b border-gray-300 pb-5 pt-4">
        <p className="text-[#292833] text-sm sm:text-base lg:text-lg">
          {service.paragraph1}
        </p>
      </div>

      {/* Bullet Points & Right-Side Cards in 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 mb-20 border-b border-gray-300 pb-5">
        {/* Bullet Points Section */}

        <div className="grid grid-cols-3 gap-5 text-sm sm:text-base">
          <p>➤ {service.point1}</p>
          <p>➤ {service.point2}</p>
          <p>➤ {service.point3}</p>
          <p>➤ {service.point4}</p>
          <p>➤ {service.point5}</p>
          <p>➤ {service.point6}</p>
          <p>➤ {service.point7}</p>
          <p>➤ {service.point8}</p>
          <p>➤ {service.point9}</p>

          <div className="col-span-3">
            <h2 className="text-2xl font-bold mt-6">{service.heading1}</h2>
            <div className="grid grid-cols-2 gap-4 text-sm sm:text-base">
              <div className="rounded-3xl w-full overflow-hidden h-42 sm:h-50 mt-6">
                <img
                  src={service.image4}
                  alt=""
                  className="rounded-3xl w-full h-42 sm:h-50 mt-6"
                />
              </div>

              <ul className="mt-6 space-y-4 text-sm sm:text-base">
                <li>➤ {service.heading_bullet1} </li>
                <li>➤ {service.heading_bullet2} </li>
                <li>➤ {service.heading_bullet3}</li>
              </ul>
            </div>

            {/* <h2 className="text-2xl font-bold mt-6">Proin Non Eros Vehicula</h2>
            <p className="text-sm sm:text-base mt-4">
              Vestibulum in Ipsum Velit. Aliquam Libero Sem Asfds Asf...
            </p> */}

            <h2 className="text-2xl font-bold mt-10">Documents Required</h2>
            <ul className="mt-6 space-y-4 text-sm sm:text-base">
              <li>
                ➤ Identity Proof – Aadhaar Card, PAN Card, Voter ID, or Passport
              </li>
              <li>
                ➤ Address Proof – Utility bill, rental agreement, or Aadhaar
                Card
              </li>
              <li>
                ➤ Income Proof – Salary slips (for salaried), ITR or bank
                statements (for self-employed)
              </li>
              <li>
                ➤ Bank Statements – Last 3 to 6 months of bank transactions
              </li>
              <li>
                ➤ Quotation or Invoice of the Vehicle (Required for new car/bike
                loans)
              </li>
            </ul>
          </div>
        </div>

        {/* Right Sidebar Cards */}
        <div className="space-y-6">
          <div className="bg-[#292833] text-white p-6 ">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center border border-red-500 rounded-full text-lg font-semibold">
                1
              </div>
              <h2 className="text-2xl font-bold">
                Immediate Financial Assistance
              </h2>
            </div>
            <p className="text-sm mt-2">
              Quick access to funds for urgent needs such as medical
              emergencies, home repairs, or business expansion without requiring
              large upfront savings
            </p>
          </div>
          <div className="bg-[#292833] text-white p-6 ">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center border border-red-500 rounded-full text-lg font-semibold">
                2
              </div>
              <h2 className="text-2xl font-bold">Flexible Repayment Options</h2>
            </div>
            <p className="text-sm mt-2">
              Borrowers can choose repayment plans that suit their financial
              situation, with various tenure options and installment structures
              available
            </p>
          </div>
          <div className="bg-[#292833] text-white p-6 ">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center border border-red-500 rounded-full text-lg font-semibold">
                3
              </div>
              <h2 className="text-2xl font-bold">Builds Credit Score</h2>
            </div>
            <p className="text-sm mt-2">
              Timely repayment of loans helps improve credit scores, making it
              easier to secure future financial assistance with better interest
              rates
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
