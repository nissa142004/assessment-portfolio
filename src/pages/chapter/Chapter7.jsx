// src/pages/chapter/Chapter7.jsx
// Dark / glass theme. Photo gallery + simple lightbox for the Food Festival – Ralahami Kadé.

import React, { useState } from "react";

// ---- import your photos (put the files in src/assets/) ----
import F1 from "../../assets/F1.jpeg";
import F2 from "../../assets/F2.jpeg";
import F3 from "../../assets/F3.jpeg";
import F4 from "../../assets/F4.jpeg";
import F5 from "../../assets/F5.jpeg";
import F6 from "../../assets/F6.jpeg";
import F7 from "../../assets/F7.jpeg";
import F10 from "../../assets/F10.jpeg";
import F11 from "../../assets/F11.jpeg";

const photos = [
  { src: F1, alt: "Ralahami Kade stall front" },
  { src: F2, alt: "Team preparing the stall" },
  { src: F3, alt: "Group selfie at the stall" },
  { src: F4, alt: "Serving customers" },
  { src: F5, alt: "Crowd around the stall" },
  { src: F6, alt: "Team with flyers and cash" },
  { src: F11, alt: "Team group photo" },
  { src: F7, alt: "Busy time at counter" },
  { src: F10, alt: "Ralahami Kade table close-up" },
];

function Chip({ label }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium border-emerald-500/40 bg-emerald-500/10 text-emerald-100">
      <span className="h-2 w-2 rounded-full bg-emerald-400" />
      {label}
    </span>
  );
}

function SectionCard({ title, tone = "emerald", children }) {
  const tones = {
    emerald: { wrap: "border-emerald-500/40 bg-emerald-900/40", title: "text-emerald-100" },
    cyan: { wrap: "border-cyan-500/40 bg-cyan-900/40", title: "text-cyan-100" },
    amber: { wrap: "border-amber-500/40 bg-amber-900/40", title: "text-amber-100" },
    slate: { wrap: "border-slate-600/60 bg-slate-900/60", title: "text-slate-100" },
  };
  const t = tones[tone] || tones.slate;

  return (
    <div className={`rounded-2xl border ${t.wrap} p-5 md:p-6 backdrop-blur-xl`}>
      <h3 className={`text-lg md:text-xl font-bold mb-3 ${t.title}`}>{title}</h3>
      <div className="text-slate-100/90 leading-7 text-sm md:text-base">{children}</div>
    </div>
  );
}

export default function Chapter7Section() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openLightbox = (i) => {
    setIndex(i);
    setOpen(true);
  };
  const prev = () => setIndex((i) => (i - 1 + photos.length) % photos.length);
  const next = () => setIndex((i) => (i + 1) % photos.length);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-slate-100">
      {/* Header */}
      <header className="mb-6 md:mb-8">
        <p className="text-xs uppercase tracking-wide text-slate-400">Chapter 07</p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-50">
          Food Festival – Ralahami Kadé
        </h1>
        <p className="mt-2 text-slate-300">
          Our team planned and ran a food stall featuring hot dogs, sandwiches, and drinks.
          We practised event planning, teamwork, money handling, and customer service under
          time pressure.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {[ 
            "Event planning", 
            "Menu & pricing", 
            "Roles", 
            "Crowd handling", 
            "Sales", 
            "Reflection"
          ].map((c) => (
            <Chip key={c} label={c} />
          ))}
        </div>
      </header>

      {/* Key details */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="cyan" title="Objectives">
          <ul className="list-disc pl-5 space-y-1">
            <li>Manage and work a stall in a team.</li>
            <li>Training on real time budgeting, pricing and handling cash.</li>
            <li>Attend to customers in a hurry but in a polite manner and maintain a good hygiene.</li>
          </ul>
        </SectionCard>
        <SectionCard tone="emerald" title="Roles & tasks">
          <ul className="list-disc pl-5 space-y-1">
            <li>Lead and cash: establish prices, sales and change.</li>
            <li>Food preparation: sauces, buns, and assembly, food packaging.</li>
            <li>Front desk: welcoming, order taking and managing of the traffic.</li>
            <li>Logistics: inventory, ice, cleaning and photos/documentation.</li>
          </ul>
        </SectionCard>
      </div>

      {/* Gallery */}
      <SectionCard tone="slate" title="Photo Gallery">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {photos.map((p, i) => (
            <button
              key={i}
              className="group relative rounded-xl overflow-hidden border border-slate-700/70 bg-slate-900/70 hover:border-emerald-400/60 transition"
              onClick={() => openLightbox(i)}
              aria-label={`Open image ${i + 1}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="h-40 md:h-48 w-full object-cover transform group-hover:scale-105 transition-transform duration-200"
              />
              <span className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-black/40 text-white text-xs md:text-sm">
                Click to view
              </span>
            </button>
          ))}
        </div>
      </SectionCard>

      {/* Simple lightbox */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white text-2xl md:text-3xl"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            ×
          </button>
          <button
            className="absolute left-4 md:left-8 text-white text-2xl md:text-3xl"
            onClick={prev}
            aria-label="Previous"
          >
            ‹
          </button>
          <img
            src={photos[index].src}
            alt={photos[index].alt}
            className="max-h-[80vh] max-w-full rounded-xl shadow-2xl border border-slate-700/80"
          />
          <button
            className="absolute right-4 md:right-8 text-white text-2xl md:text-3xl"
            onClick={next}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}

      {/* Quick results */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard tone="emerald" title="What went well">
          <ul className="list-disc pl-5 space-y-1">
            <li>Beautiful booth branding and high energy in the team attracted the crowd.</li>
            <li>Serving speed was made considerably faster with fast “assembly line style.</li>
            <li>Having well-defined roles decreased the confusion when it happened during high rush hours.</li>
          </ul>
        </SectionCard>
        <SectionCard tone="amber" title="What to improve next time">
          <ul className="list-disc pl-5 space-y-1">
            <li>Make more transformation and cut ingredients in advance.</li>
            <li>Better queue arrangements; post a printed menu and prices.</li>
            <li>Monitor sales and inventory using a small sheet or simple application.</li>
          </ul>
        </SectionCard>
      </div>

      {/* Self-Reflection */}
      <SectionCard tone="emerald" title="My Self-Reflection (Chapter 07)">
        <p>
          This was a lesson on the actual teamwork and customer service. I was obliged to withstand pressure,
          talk to the customers in a proper way, and change prices and inventories on the spot. The following time,
          I will design a checklist prior to the event, define roles better, and a basic sales and expenses tracker in order to make our planning and assessment even more effective.
        </p>
      </SectionCard>
    </div>
  );
}

// Usage: import Chapter7Section from "./Chapter7.jsx" and render <Chapter7Section />
// where Chapter 07 should appear.
