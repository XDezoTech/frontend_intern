import React from "react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

const cards = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
    title: "Bali Highlands Trek",
    description: "Explore emerald rice terraces and volcanic highlands.",
    link: "/treks/bali",
    price: 1299,
    duration: 10,
    region: "Asia · Indonesia",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800",
    title: "Serengeti Safari",
    description:
      "Witness the Great Migration on the golden plains of Tanzania.",
    link: "/treks/serengeti",
    price: 3499,
    duration: 8,
    region: "Africa · Tanzania",
  },
];

export default function ComponentDemo() {
  return (
    <main className="min-h-screen bg-[#0d1b2a] px-8 py-10">
      <h1 className="font-['Cormorant_Garamond'] text-4xl text-[#f5edd8] mb-1">
        Component Demo
      </h1>
      <p className="text-[#9bb0c5] text-sm mb-10">
        TravelCo Design System — G1.3 Evidence
      </p>

      <section className="mb-12">
        <h2 className="text-[#e8d5b7] text-xs uppercase tracking-widest border-b border-[#243b55] pb-3 mb-8">
          Button.jsx — Primary · Secondary · Outline
        </h2>
        <div className="flex gap-4 flex-wrap">
          <Button variant="primary">Book Now</Button>
          <Button variant="secondary">Learn More</Button>
          <Button variant="outline">View Tours</Button>
        </div>
      </section>

      <section>
        <h2 className="text-[#e8d5b7] text-xs uppercase tracking-widest border-b border-[#243b55] pb-3 mb-8">
          Card.jsx — imageUrl · title · description
        </h2>
        <div className="grid grid-cols-2 gap-6 max-w-2xl">
          {cards.map((c) => (
            <Card key={c.title} type="destination" {...c} />
          ))}
        </div>
      </section>
    </main>
  );
}
