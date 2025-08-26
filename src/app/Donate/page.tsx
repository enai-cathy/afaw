// 'use client';
// import { useState } from "react";
// import Image from "next/image";

// export default function Donate() {
//   const [amount, setAmount] = useState("50");
//   const [monthly, setMonthly] = useState(false);

//   return (
//     <div className="relative min-h-screen flex flex-col bg-gray-50">
      
//       {/* Hero Section */}
//       <div className="relative w-full h-[50vh] md:h-[60vh]">
//         <Image
//           src="/images/donate-hero.jpg"
//           alt="Donate"
//           fill
//           className="object-cover"
//           priority
//         />
//         <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">       </div>
//       </div>

//       {/* Donation Card */}
//       <div className="relative -mt-20 w-full px-4 flex justify-center">
//         <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full">
          
//           {/* Header */}
//           <div className="text-center mb-6">
//             <h2 className="text-2xl font-bold text-[#004e64]">
//               Your Gift Makes an Impact
//             </h2>
//             <p className="mt-2 text-gray-600 text-sm">
//               Choose your donation type and amount below.
//             </p>
//           </div>

//           {/* Frequency Toggle */}
//           <div className="flex rounded-lg overflow-hidden border border-gray-300 mb-6">
//             <button
//               className={`w-1/2 py-3 font-medium transition ${
//                 !monthly ? "bg-[#f5c06c] text-white" : "bg-white text-gray-700"
//               }`}
//               onClick={() => setMonthly(false)}
//             >
//               One-Time
//             </button>
//             <button
//               className={`w-1/2 py-3 font-medium transition ${
//                 monthly ? "bg-[#f5c06c] text-white" : "bg-white text-gray-700"
//               }`}
//               onClick={() => setMonthly(true)}
//             >
//               Monthly
//             </button>
//           </div>

//           {/* Donation Amounts */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
//             {[25, 50, 100, 250].map((val) => (
//               <button
//                 key={val}
//                 onClick={() => setAmount(val.toString())}
//                 className={`px-6 py-4 text-lg font-semibold rounded-xl border transition ${
//                   amount === val.toString()
//                     ? "bg-[#f5c06c] text-white border-[#f5c06c]"
//                     : "bg-white text-gray-700 border-gray-300 hover:border-[#f5c06c]"
//                 }`}
//               >
//                 ${val}
//               </button>
//             ))}
//             <input
//               type="number"
//               placeholder="Other"
//               className="col-span-2 sm:col-span-3 border border-gray-300 rounded-xl px-4 py-3 text-center"
//               onChange={(e) => setAmount(e.target.value)}
//             />
//           </div>

//           {/* Donor Info */}
//           <div className="space-y-3 mb-6">
//             <input
//               type="text"
//               placeholder="Full Name"
//               className="w-full border border-gray-300 px-4 py-3 rounded-xl"
//             />
//             <input
//               type="email"
//               placeholder="Email Address"
//               className="w-full border border-gray-300 px-4 py-3 rounded-xl"
//             />
//           </div>

//           {/* Donate Button */}
//           <button className="w-full bg-[#004e64] text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 transition">
//             Donate ${amount} {monthly ? "Monthly" : ""}
//           </button>

//           {/* Trust Badge */}
//           <p className="text-xs text-gray-500 text-center mt-5">
//             🔒 Secure donation. 100% of your gift goes to water projects.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// app/donate/page.tsx
"use client";

import { useState } from "react";
import { Droplet, LockIcon } from "lucide-react";

import TrustTransparency from "../ui/TrustTransparency";
import ProjectsSection from "../ui/ProjectsSection";

const donationOptions = {
  monthly: [
    { amount: 25, description: "Provides clean drinking water to a family for a month." },
    { amount: 50, description: "Funds the installation of water filters in a school." },
    { amount: 100, description: "Helps build a community well for villages in need." },
    { amount: 250, description: "Supports water infrastructure for an entire community." },
  ],
  oneTime: [
    { amount: 50, description: "Provides emergency clean water kits." },
    { amount: 100, description: "Helps install handwashing stations in schools." },
    { amount: 250, description: "Funds a small solar-powered water pump." },
    { amount: 500, description: "Contributes to drilling a deep borehole for sustainable water." },
  ],
};

export default function DonationPage() {
  const [frequency, setFrequency] = useState<"monthly" | "oneTime">("monthly");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const handleSelect = (amount: number) => {
    setSelectedAmount(amount);
  };

  return (

    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative w-full h-[300px] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('images/donate-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        
      >
        <div className="absolute inset-0 bg-black/30"/>
       
        <div className="relative z-10 px-4">
        <div className="flex justify-center mb-4">
          <div className="bg-blue-400 rounded-full p-3 shadow-lg">
            <Droplet className="w-6 h-6 text-white" />
          </div>
        </div>
        <h1 className=" text-center text-4xl md:text-5xl font-bold mb-4">
           Clean Water. Health. Opportunity.
          </h1>
       </div>
      </section>
   <section>
 <div className=" p-6 rounded-lg">
          {/* <h1 className="text-center text-4xl md:text-5xl font-bold mb-4">
           Clean Water. Health. Opportunity.
          </h1> */}
          
          
          <p className="text-lg md:text-md text-gray-900 max-w-2xl mx-auto">Africa Access Water is dedicated to transforming lives by providing safe and sustainable water solutions to underserved communities. With every project, we break the cycle of water scarcity, unlocking better health, education, and opportunity for generations to come.</p>
        <br/>
        <p className="text-lg md:text-md max-w-2xl text-gray-900 mx-auto">
            
            Your donation helps bring clean, safe water to communities in need across Africa.  
            Together, we can transform lives.
          </p>
        </div>
   </section>

     
   <section className="max-w-3xl mx-auto p-6">
     {/* Frequency Toggle */}
      <div className="flex items-center  justify-center mb-6 space-x-2">
        <button
          onClick={() => setFrequency("monthly")}
          className={`px-6 py-2 rounded-l-full border flex items-center gap-1
            ${frequency === "monthly" ? "bg-blue-400 text-white" : "bg-gray-200 text-gray-700"}
          `}
        >
         <Droplet className="w-6 h-5"/>Monthly
        </button>
        <button
          onClick={() => setFrequency("oneTime")}
          className={`px-6 py-2 rounded-r-full border border-blue-300
            ${frequency === "oneTime" ? "bg-blue-400 text-white" : "bg-gray-200 text-gray-700"}
          `}
        >
          One-Time
        </button>
      </div>

      {/* Donation Amount Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {donationOptions[frequency].map((option) => (
          <div
            key={option.amount}
            onClick={() => handleSelect(option.amount)}
            className={`p-6 border rounded-xl text-xl font-bold cursor-pointer transition 
              ${selectedAmount === option.amount  ? "bg-blue-400 text-gray-50 border-blue-300"
                  : "border-gray-300 text-gray-800 bg-white"}
            `}
          >
            <p className="text-2xl font-bold">${option.amount}</p>
          </div>
        ))}
      </div>

      {/* Conditional Description */}
      {selectedAmount && (
        <div className="mb-6 text-gray-700 text-md max-w-md mx-auto">
          {
            donationOptions[frequency].find((opt) => opt.amount === selectedAmount)
              ?.description
          }
        </div>
      )}

      {/* Donate Button */}
      <div className="text-center">
      <button
        disabled={!selectedAmount}
        className="px-8 py-3 m-auto bg-blue-400 text-white rounded-full font-semibold 
          hover:bg-blue-500 transition disabled:opacity-50"
      >
        Donate {selectedAmount ? `$${selectedAmount}` : "" } Now
      </button>
       {/* Trust Badge */}
          <p className="flex items-center gap-1 text-xs text-gray-500 mt-5">
          <LockIcon className="w-4 h-4"/> 100% Secure donation and encrypted transactions. 100% of your gift goes to water projects.
         </p>
         </div>
  
      </section>
      <section className="w-full py-12 bg-gray-50">
      <TrustTransparency />
      </section>
      <ProjectsSection />
    </div>
  );
}
