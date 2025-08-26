
import Link from "next/link";

export default function Home() {
return (
<div className="font-sans text-gray-900">



{/* Hero Section */}
<section
className="relative w-full h-[60vh] flex flex-col justify-center items-center text-center bg-cover bg-center"
style={{ backgroundImage: "url('images/water-hero.jpg')" }}
>
    <div className="absolute inset-0 bg-black/30"/>

<h1 className="text-5xl md:text-4xl font-bold text-white drop-shadow-lg">
Where Water Flows, Opportunity Grows
</h1>
<p className="mt-4 text-lg text-white max-w-xl drop-shadow">
Every donation helps provide solar powered-water infrastructure, to communities in need.
</p>
<Link 
href= '/Donate'
className="relative z-10 mt-6 bg-blue-400 text-white px-6 py-3 rounded-xl shadow-lg text-lg hover:bg-blue-500 transition">
Donate Now
</Link>

</section>


{/* Impact Section */}
<section className="py-16 bg-gray-50 text-center">
<h2 className="text-3xl font-bold mb-10">Our Impact</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
<div>
<p className="text-4xl font-bold text-blue-500">200+</p>
<p>Communities Reached</p>
</div>
<div>
<p className="text-4xl font-bold text-blue-500">500k+</p>
<p>People Served</p>
</div>
<div>
<p className="text-4xl font-bold text-blue-500">1M+</p>
<p>Liters of Water</p>
</div>
<div>
<p className="text-4xl font-bold text-blue-500">300+</p>
<p>Volunteers</p>
</div>
</div>
</section>


{/* Footer */}
<footer className="bg-blue-500 text-white py-10 text-center">
<p>&copy; {new Date().getFullYear()} Africa Access Water. All rights reserved.</p>
</footer>
</div>
);
}