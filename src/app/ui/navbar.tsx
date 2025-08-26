'use client'
import { useState } from "react";
import { NavLinks } from "./navlinks";
import { Menu, X } from "lucide-react";
import Link from "next/link";


export function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);


return (
<nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md relative">
{/* Logo */}
<div className="text-2xl font-bold text-blue-500">Africa Access Water</div>


{/* Desktop Nav */}
<div className="hidden md:flex items-center space-x-6">
<NavLinks />
<Link
href = '/Donate'
className="bg-blue-400 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-300 transition">
Donate
</Link>
</div>


{/* Mobile */}
<div className="flex items-center space-x-4 md:hidden">
<Link 
href="/Donate"
 className="bg-blue-400 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-500 transition">
Donate
</Link>


<button onClick={() => setMenuOpen(!menuOpen)}>
{menuOpen ? <X size={28} /> : <Menu size={28} />}
</button>
</div>


{/* Mobile Menu */}
{menuOpen && (
<div className="absolute top-16 right-6 bg-white shadow-lg rounded-xl p-6 w-48 md:hidden">
<NavLinks onClick={() => setMenuOpen(false)} />
</div>
)}
</nav>
);
}