import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function EMICalculator() {
  
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(10);
  const [loanTenure, setLoanTenure] = useState(1);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, loanTenure]);

  const calculateEMI = () => {
    const principal = loanAmount;
    const rate = interestRate / 12 / 100;
    const time = loanTenure * 12;

    const emiAmount =
      (principal * rate * Math.pow(1 + rate, time)) /
      (Math.pow(1 + rate, time) - 1);
    const totalAmt = emiAmount * time;
    const totalInt = totalAmt - principal;

    setEmi(Math.round(emiAmount));
    setTotalInterest(Math.round(totalInt));
    setTotalAmount(Math.round(totalAmt));
  };

  const pieData = [
    { name: "Principal", value: loanAmount },
    { name: "Interest", value: totalInterest },
  ];

  const COLORS = ["#E0E7FF", "#2E7D32"];

  return (
    <div className="pt-32 mb-20 w-[90%] mx-auto">
      <div>
        <h1 className="text-[#292833] font-jakarta font-bold text-3xl sm:text-4xl lg:text-5xl">
          EMI Calculator
        </h1>
        <p className="text-[#292833] font-dmSans text-sm sm:text-base md:text-lg mt-3">
          Calculate your EMI and repayment details.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mt-10">
        <section className="bg-[#08AABD1A] p-6 rounded-2xl shadow-lg">
          <div className="mb-5">
            <label className="block text-[#292833] font-semibold mb-2">
              Loan Amount
            </label>
            <input
              type="range"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              max={1000000}
              step={1000}
              className="w-full accent"
            />
            <p className="text-right mt-2 font-semibold">
              ₹{loanAmount.toLocaleString()}
            </p>
          </div>

          <div className="mb-5">
            <label className="block text-[#292833] font-semibold mb-2">
              Interest Rate (p.a)
            </label>
            <input
              type="range"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              max={30}
              step={0.1}
              className="w-full "
            />
            <p className="text-right mt-2 font-semibold">{interestRate}%</p>
          </div>

          <div className="mb-5">
            <label className="block text-[#292833] font-semibold mb-2">
              Loan Tenure (years)
            </label>
            <input
              type="range"
              value={loanTenure}
              onChange={(e) => setLoanTenure(Number(e.target.value))}
              max={30}
              step={1}
              className="w-full"
            />
            <p className="text-right mt-2 font-semibold">{loanTenure} years</p>
          </div>

          <div className="space-y-3 mt-6 text-[#292833] font-semibold">
            <p>Monthly EMI: ₹{emi.toLocaleString()}</p>
            <p>Principal Amount: ₹{loanAmount.toLocaleString()}</p>
            <p>Total Interest: ₹{totalInterest.toLocaleString()}</p>
            <p>Total Payment: ₹{totalAmount.toLocaleString()}</p>
          </div>

          <button className="w-auto h-auto flex items-center gap-2 mt-6 bg-[#0159A5] hover:bg-[#0158a5ce] text-white px-6 py-2 rounded-2xl font-semibold">
            Apply Now <HiOutlineArrowNarrowRight size={20} />
          </button>
        </section>

        <section className="relative flex items-center justify-center bg-[#08AABD1A] p-6 rounded-2xl shadow-lg">
          <div className="absolute top-5 right-5 text-sm text-[#292833] font-semibold">
            <div className="mb-8">
              <span
                className="inline-block w-3 h-3 mr-2"
                style={{ backgroundColor: COLORS[0] }}
              ></span>
              <span className="mr-3">Principal Amount</span>

              <span
                className="inline-block w-3 h-3 mr-2"
                style={{ backgroundColor: COLORS[1] }}
              ></span>
              <span>Interest Amount</span>
            </div>
          </div>

          <PieChart width={350} height={350}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
              className="focus:outline-none"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => `₹${value.toLocaleString()}`}
              labelFormatter={(name) => `${name}`}
              separator=": "
            />
          </PieChart>
        </section>
      </div>
    </div>
  );
}

export default EMICalculator;
