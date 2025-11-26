// src/pages/chapter/Chapter5.jsx
import React from "react";

// Dark glass theme – pastel chips not used here
const chips = [
  "Overview",
  "Mastering Research",
  "Research Process",
  "Real-Life Research",
  "Paper Components",
  "8-Step Method",
  "Guidelines",
  "Reflection",
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
    violet: { wrap: "border-violet-500/40 bg-violet-900/40", title: "text-violet-100" },
  };
  const t = tones[tone] || tones.slate;

  return (
    <div className={`rounded-2xl border ${t.wrap} p-5 md:p-6 backdrop-blur-xl shadow-lg shadow-black/40`}>
      <h3 className={`text-lg md:text-xl font-bold mb-3 ${t.title}`}>{title}</h3>
      <div className="text-slate-100/90 leading-7 text-sm md:text-base">{children}</div>
    </div>
  );
}

export default function Chapter5Section() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-slate-100">
      {/* Header */}
      <header className="mb-6 md:mb-8">
        <p className="text-xs uppercase tracking-wide text-slate-400">Chapter 05</p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-50">
          Research Writing
        </h1>
        <p className="mt-2 text-slate-300">
          Learn the academic research process, structure, key components, and systematic methods to write a strong research paper.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <Chip key={c} label={c} />
          ))}
        </div>
      </header>

      {/* Overview */}
      <SectionCard tone="cyan" title="Overview">
        <p>
          This session was conducted by <strong>Ms. Ishadi Nilawerese</strong>, focusing on the fundamentals of research writing.
          The lecture covered research structure, academic writing principles, and techniques for presenting findings clearly and professionally.
        </p>
      </SectionCard>

      {/* Mastering Research Writing */}
      <SectionCard tone="emerald" title="Mastering Research Writing">
        <p>
          Research writing is essential for academic and professional success. It involves analyzing information, conducting thorough research,
          and presenting findings in a structured, credible, and academically rigorous manner.
        </p>
      </SectionCard>

      {/* Research Process */}
      <SectionCard tone="violet" title="Research Writing Process">
        <ul className="list-disc pl-5 space-y-1">
          <li>Topic Selection</li>
          <li>Literature Review</li>
          <li>Methodology</li>
          <li>Data Collection</li>
          <li>Analysis</li>
          <li>Writing & Presentation</li>
        </ul>
      </SectionCard>

      {/* Real-Life Examples */}
      <SectionCard tone="amber" title="Real-Life Examples of Research">
        <ul className="list-disc pl-5 space-y-1">
          <li>Comparing smartphones before purchasing</li>
          <li>Testing algorithms in software development</li>
          <li>Observing customer behavior in shops</li>
          <li>Measuring student preferences for food or services</li>
        </ul>
      </SectionCard>

      {/* Key Components */}
      <SectionCard tone="slate" title="Key Components of a Research Paper">
        <ul className="list-disc pl-5 space-y-1">
          <li>Title</li>
          <li>Author information</li>
          <li>Table of Contents</li>
          <li>Declaration</li>
          <li>Acknowledgments</li>
          <li>Abstract</li>
          <li>Introduction</li>
          <li>Literature Review</li>
          <li>Methodology</li>
          <li>Results & Discussion</li>
          <li>Conclusion</li>
          <li>References</li>
        </ul>
      </SectionCard>

      {/* 8 Steps */}
      <SectionCard tone="cyan" title="8 Steps to Write a Research Paper">
        <ul className="list-disc pl-5 space-y-1">
          <li>Carry out Research</li>
          <li>Choose a Good Topic</li>
          <li>Write Down Notes</li>
          <li>Brainstorm the Outline</li>
          <li>Write Prospectus & Outline</li>
          <li>Write Good Introduction</li>
          <li>Write Proper Body</li>
          <li>Give Good Conclusion</li>
        </ul>
      </SectionCard>

      {/* Guidelines */}
      <SectionCard tone="violet" title="Guidelines for Writing a Successful Research Paper">
        <ul className="list-disc pl-5 space-y-1">
          <li>Use a unique, clear writing style.</li>
          <li>Avoid unnecessary jargon.</li>
          <li>Explain scientific terms clearly.</li>
          <li>Use evidence-based arguments.</li>
          <li>Follow all publication rules.</li>
          <li>Proofread from top to bottom.</li>
        </ul>
      </SectionCard>

      {/* Reflection */}
      <SectionCard tone="emerald" title="Reflection">
        <p>
          I completed a research project on <strong>“The Impact of Emotional Intelligence on Team Performance”</strong>.
          This experience improved my ability to conduct proper academic research and present my findings in a structured, professional way.
        </p>
      </SectionCard>
    </div>
  );
}
