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
          Understand the academic research process, structure, and major aspects, systematic ways of writing a solid research paper.
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
          This session was taken by <strong>Ms. Ishadi Nilawerese</strong>, which was centered on the basics of research writing.
          The lecture included the structure of research, principles of writing an academic paper, and the methods of presenting the findings in a professional and understandable manner.
        </p>
      </SectionCard>

      {/* Mastering Research */}
      <SectionCard tone="emerald" title="Mastering Research Writing">
        <p>
          Scholarly as well as professional success depends on research writing. It entails the processing of information, comprehensive research,
          and communicating the results in an orderly, plausible and scholarly way.
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

      {/* Real Life Research */}
      <SectionCard tone="amber" title="The Research in the Real Results.">
        <ul className="list-disc pl-5 space-y-1">
          <li>Comparison of the smartphones prior to purchase.</li>
          <li>Software development testing algorithms.</li>
          <li>Monitoring the behavior of the customers in stores.</li>
          <li>Determining student preferences of food or services.</li>
        </ul>
      </SectionCard>

      {/* Components */}
      <SectionCard tone="slate" title="Different Major Elements of a research paper.">
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
      <SectionCard tone="cyan" title="How to write a research paper in 8 steps.">
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
      <SectionCard tone="violet" title="How to write a successful research paper.">
        <ul className="list-disc pl-5 space-y-1">
          <li>Write in a distinctive and distinct manner.</li>
          <li>Avoid unnecessary jargon.</li>
          <li>Describe scientific terms in an understandable way.</li>
          <li>Apply factual arguments.</li>
          <li>Adhere to all publication guidelines.</li>
          <li>Proofread from top to bottom.</li>
        </ul>
      </SectionCard>

      {/* Reflection */}
      <SectionCard tone="emerald" title="Reflection">
        <p>
          I have done a research project on the topic of the influence of EI on team performance.
          This experience enhanced my skills in the area of proper academic research and reporting my findings in a professional manner.
        </p>
      </SectionCard>
    </div>
  );
}
