import Image from "next/image";

export default function TrustTransparency() {
  return (
  
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
         Donate with Confidence
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
          Every donation you make is used responsibly. Africa Access Water is
          committed to financial transparency and impact reporting, earning the
          trust of leading global organizations. 100% of your donation goes directly to clean water projects.  
          We publish annual reports and undergo independent audits to keep you informed.
        </p>

        {/* Logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-center">
          <div className="flex items-center justify-center">
            <Image
              src="/images/usaid.png"
              alt="USAID Logo"
              width={100}
              height={50}
              className="object-contain grayscale hover:grayscale-0 transition"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/unicef.png"
              alt="UNICEF Logo"
              width={80}
              height={40}
              className="object-contain grayscale hover:grayscale-0 transition"
            />
          </div>
          {/* <div className="flex items-center justify-center">
            <Image
              src="/images/charity-navigator.png"
              alt="Charity Navigator Logo"
              width={160}
              height={80}
              className="object-contain grayscale hover:grayscale-0 transition"
            />
          </div> */}
        </div>

       
      </div>
    
  );
}
