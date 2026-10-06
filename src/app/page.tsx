"use client";
import { useState } from "react";

const services = [
  { name: "Boda Boda", icon: "🏍️", price: "From 2k", phone: "256700000001" },
  { name: "Plumber", icon: "🔧", price: "From 20k", phone: "256700000002" },
  { name: "Electrician", icon: "⚡", price: "From 25k", phone: "256700000003" },
  { name: "Food Delivery", icon: "🍛", price: "From 5k", phone: "256700000004" },
  { name: "Cleaning", icon: "🧹", price: "From 15k", phone: "256700000005" },
  { name: "Mechanic", icon: "🚗", price: "From 30k", phone: "256700000006" },
];

export default function Home() {
  const [q, setQ] = useState("");
  const filtered = services.filter(s => s.name.toLowerCase().includes(q.toLowerCase()));
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="bg-yellow-400 text-black p-4 flex justify-between">
        <h1 className="font-black text-2xl">🇺🇬 UGANDA CONNECT</h1>
        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">KAMPALA</span>
      </header>
      <div className="p-6 text-center">
        <h2 className="text-4xl font-black">Find Services<br/><span className="text-yellow-400">Near You</span></h2>
        <div className="bg-white p-2 rounded-full max-w-md mx-auto flex mt-6">
          <input value={q} onChange={e=>setQ(e.target.value)} className="flex-1 px-4 outline-none text-black" placeholder="Search e.g. boda..." />
          <button className="bg-red-600 text-white px-6 py-2 rounded-full font-bold">Search</button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 p-6 max-w-2xl mx-auto">
        {filtered.map(s => (
          <div key={s.name} className="bg-zinc-900 border border-yellow-400/30 p-5 rounded-2xl">
            <div className="text-4xl mb-2">{s.icon}</div>
            <div className="font-bold">{s.name}</div>
            <div className="text-yellow-400 text-sm mb-3">{s.price}</div>
            <a href={`https://wa.me/${s.phone}?text=Hello, I need ${s.name} from Uganda Connect`} target="_blank" className="bg-green-500 text-white text-xs px-3 py-2 rounded-full font-bold">WhatsApp</a>
          </div>
        ))}
      </div>
      <footer className="text-center p-6 text-gray-500 text-sm">Built on Parrot OS • {filtered.length} services found</footer>
    </main>
  );
}
