import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const stateCityMap = {
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra", "Meerut"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane"],
  Delhi: ["New Delhi"],
  Karnataka: ["Bangalore", "Mysore", "Hubli", "Belgaum", "Mangalore"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"],
};

const ApplyNow = () => {
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setCities(stateCityMap[state] || []);
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto py-10 pt-32 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Form Section */}
        <div className="lg:col-span-2 bg-white p-8 shadow-lg rounded-xl">
          <h2 className="text-2xl font-bold mb-6">Loan Details:-</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <input
              type="text"
              placeholder="Loan Amount"
              className="input-field p-3 bg-gray-100 rounded-lg border-none focus:outline-none "
            />
            <input
              type="text"
              placeholder="Monthly Income"
              className="input-field p-3 bg-gray-100 rounded-lg border-none focus:outline-none "
            />
            <select className="input-field p-3 bg-gray-100 rounded-lg border-none focus:outline-none ">
              <option>Select Purpose</option>
              <option>Household Emergency</option>
              <option>Vehicle</option>
              <option>Personal</option>
              <option>Pocket</option>
              <option>Wedding</option>
              <option>Education</option>
              <option>Medical Emergency</option>
              <option>Business</option>
              <option>Other</option>
            </select>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">Personal Details:-</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="input-field p-3 bg-gray-100 rounded-lg border-none focus:outline-none "
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input-field p-3 bg-gray-100 rounded-lg border-none focus:outline-none "
            />
            <input
              type="date"
              className="input-field p-3 bg-gray-100 rounded-lg border-none focus:outline-none "
            />
            <input
              type="text"
              placeholder="PAN Card"
              className="input-field p-3 bg-gray-100 rounded-lg border-none focus:outline-none "
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="input-field p-3 bg-gray-100 rounded-lg border-none focus:outline-none "
            />
            <input
              type="text"
              placeholder="Aadhaar Number"
              className="input-field p-3 bg-gray-100 rounded-lg border-none focus:outline-none "
            />
            <select className="input-field p-3 bg-gray-100 rounded-lg border-none focus:outline-none ">
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>

            {/* State Dropdown */}
            <select
              className="input-field p-3 bg-gray-100 rounded-lg border-none focus:outline-none "
              onChange={handleStateChange}
            >
              <option value="">Select State</option>
              {Object.keys(stateCityMap).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>

            {/* City Dropdown (updates dynamically) */}
            <select
              className="input-field p-3 bg-gray-100 rounded-lg border-none focus:outline-none"
              disabled={!selectedState}
            >
              <option>Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Pin Code"
              className="input-field p-3 bg-gray-100 rounded-lg border-none focus:outline-none"
            />
          </div>

          <div className="flex items-center mt-6">
            <input type="checkbox" className="mr-2" />
            <p className="text-sm">
              I agree to the EasyFincare{" "}
              <a href="#" className="text-blue-600">
                terms and conditions
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600">
                Privacy Policy
              </a>
              .
            </p>
          </div>

          <button className="flex items-center gap-2 mt-6 bg-[#0159A5] hover:bg-[#0158a5ce] text-white px-6 py-2 rounded-2xl font-semibold">
            Submit <HiOutlineArrowNarrowRight size={20} />
          </button>
        </div>

        {/* Sidebar Section */}
        <div className="flex flex-col gap-6">
          {/* Loan Information Card */}
          <div className="text-black p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold">
              Your Personal Loan is only a few steps away
            </h3>
            <p className="mt-4 text-sm">Annual Percentage Rate: 12.5% to 41%</p>
            <p className="text-sm">Repayment over: 12 to 84 Months</p>
            <p className="text-sm">
              Full/part repayment after 1st EMI is processed.
            </p>
          </div>

          {/* Contact Information Card */}
          <div className="text-black p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <p className="mt-4 text-lg font-bold">+91-7428-763-234</p>
            <p className="text-sm">info@easyfincare.com</p>
          </div>
        </div>
      </div>

      {/* Rates & Charges Section */}
      <div className="mt-10 p-6 rounded-xl shadow-lg mb-10">
        <h2 className="text-2xl font-bold mb-4">Rates & Charges</h2>
        <table className="border-collapse border border-gray-300">
          <tr>
            <td className="border p-2 font-bold">Minimum Loan Amount</td>
            <td className="border p-2">Rs. 5,000/-</td>
            <td className="border p-2 font-bold">Maximum Loan Amount</td>
            <td className="border p-2">Rs. 100,000/-</td>
          </tr>
          <tr>
            <td className="border p-2 font-bold">Processing Fee</td>
            <td className="border p-2">Upto 8% of loan amount</td>
            <td className="border p-2 font-bold">No Pre</td>
            <td className="border p-2">No pre-closure charges</td>
          </tr>
          <tr>
            <td className="border p-2 font-bold">Tenure Days</td>
            <td className="border p-2">Upto 36 Months</td>
            <td className="border p-2 font-bold">ROI (Rate of interest)</td>
            <td className="border p-2">Upto 0.8% Daily</td>
          </tr>
          <tr>
            <th className="border p-2 font-bold text-left" colSpan="2">
              APR (Annual Percentage Rate)
            </th>
            <td className="border p-2" colSpan="2">
              APR Range: 240% to 365%
            </td>
          </tr>
        </table>

        <h3 className="text-xl font-bold mt-10 mb-5">
          Monthly Payment Example
        </h3>
        <table className="hidden sm:block md:block w-full border-collapse border border-gray-300 mb-5">
          <thead>
            <tr className="font-bold">
              <th className="border p-2 text-left">Loan Amount</th>
              <th className="border p-2 text-left">APR</th>
              <th className="border p-2 text-left">Tenure</th>
              <th className="border p-2 text-left">Processing Fees</th>
              <th className="border p-2 text-left">GST on Processing Fees</th>
              <th className="border p-2 text-left">Amount Disbursed</th>
              <th className="border p-2 text-left">EMI</th>
              <th className="border p-2 text-left">Total Repayment Amount</th>
              <th className="border p-2 text-left">Total Interest</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Rs. 50,000</td>
              <td className="border p-2">240% to 365%</td>
              <td className="border p-2">1-3 Months</td>
              <td className="border p-2">Rs. 4,000-5,000</td>
              <td className="border p-2">18%</td>
              <td className="border p-2">Rs. 45,000 to 46,000</td>
              <td className="border p-2">Rs. 20,000</td>
              <td className="border p-2">Rs. 60,000</td>
              <td className="border p-2">Rs. 10,000</td>
            </tr>
          </tbody>
        </table>

        {/* Responsive table for small and medium screens */}
        <table className="w-full sm:hidden md:hidden">
          <tbody>
            <tr className="block">
              <td className="block border p-2 font-bold">Loan Amount:</td>
              <td className="block border p-2">Rs. 50,000</td>
            </tr>
            <tr className="block">
              <td className="block border p-2 font-bold">APR:</td>
              <td className="block border p-2">240% to 365%</td>
            </tr>
            <tr className="block">
              <td className="block border p-2 font-bold">Tenure:</td>
              <td className="block border p-2">1-3 Months</td>
            </tr>
            <tr className="block">
              <td className="block border p-2 font-bold">Processing Fees:</td>
              <td className="block border p-2">Rs. 4,000-5,000</td>
            </tr>
            <tr className="block">
              <td className="block border p-2 font-bold">
                GST on Processing Fees:
              </td>
              <td className="block border p-2">18%</td>
            </tr>
            <tr className="block">
              <td className="block border p-2 font-bold">Amount Disbursed:</td>
              <td className="block border p-2">Rs. 45,000 to 46,000</td>
            </tr>
            <tr className="block">
              <td className="block border p-2 font-bold">EMI:</td>
              <td className="block border p-2">Rs. 20,000</td>
            </tr>
            <tr className="block">
              <td className="block border p-2 font-bold">
                Total Repayment Amount:
              </td>
              <td className="block border p-2">Rs. 60,000</td>
            </tr>
            <tr className="block">
              <td className="block border p-2 font-bold">Total Interest:</td>
              <td className="block border p-2">Rs. 10,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplyNow;
