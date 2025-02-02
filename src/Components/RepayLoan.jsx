import React, { useEffect } from "react";
import { LuMoveRight } from "react-icons/lu";
import QRCode from "../assets/upi_payment_qr.png";

function RepayLoan() {

  return (
    <div className="pt-32 w-[90%] mx-auto mb-20">
      <div className="">
        <h1 className="text-[#292833] font-jakarta font-bold text-3xl sm:text-4xl lg:text-5xl">
          Repay Loan
        </h1>
        <p className="text-[#292833] font-dmSans text-sm sm:text-base md:text-lg mt-3">
          Repay Your Loan Amount Through The Following Details:
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mt-10">
        <section>
          <div className="flex flex-col">
            <h2 className="text-[#292833] font-jakarta font-semibold text-2xl sm:text-3xl mb-2">
              Bank Details
            </h2>
            <div className="w-auto h-5 flex items-center relative mb-5">
              <span className="w-24 h-0.5 bg-[#00B30F] rounded-sm"></span>
              <LuMoveRight
                size={25}
                className="absolute left-[92px] text-[#00B30F]"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#08AABD1A] p-6 rounded-2xl shadow-lg">
              <p className="mb-2">
                <span className="font-bold">Company Name:</span> XXXXXXXXX
              </p>
              <p className="mb-2">
                <span className="font-bold">Bank Name:</span> XXXXXXXXX
              </p>
              <p className="mb-2">
                <span className="font-bold">Account Number:</span> XXXXXXXXX
              </p>
              <p className="mb-2">
                <span className="font-bold">IFSC Code:</span> XXXXXXXXX
              </p>
              <p className="mb-2">
                <span className="font-bold">Branch Name:</span> XXXXXXXXX
              </p>
              <p>
                <span className="font-bold">Account Type:</span> XXXXXXXXX
              </p>
            </div>

            <div className="bg-[#08AABD1A] p-6 rounded-2xl shadow-lg">
              <p className="mb-2">
                <span className="font-bold">Company Name:</span> XXXXXXXXX
              </p>
              <p className="mb-2">
                <span className="font-bold">Bank Name:</span> XXXXXXXXX
              </p>
              <p className="mb-2">
                <span className="font-bold">Account Number:</span> XXXXXXXXX
              </p>
              <p className="mb-2">
                <span className="font-bold">IFSC Code:</span> XXXXXXXXX
              </p>
              <p className="mb-2">
                <span className="font-bold">Branch Name:</span> XXXXXXXXX
              </p>
              <p>
                <span className="font-bold">Account Type:</span> XXXXXXXXX
              </p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h2 className="text-[#292833] font-jakarta font-semibold text-2xl sm:text-3xl mb-12 text-center">
              Scan and Pay Your Loan Amount
            </h2>
          </div>

          <div className="bg-[#08AABD1A] p-6 rounded-2xl shadow-lg flex flex-col items-center">
            <img
              src={QRCode}
              alt="QR Code"
              className=" w-[50%] h-[50%] rounded-lg"
            />
            <p className="text-lg text-black mt-3">
              <span className="font-bold">UPI ID:</span> XXXXXXXXX@icici
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default RepayLoan;
