// src/pages/chapter/Chapter4.jsx
// Dark / glass theme. Overview + key points + short paras + checklist + self-reflection.

import React from "react";

// Image imports
import imgPortfolioTypes from "../../assets/c4.jpg"; // Portfolio types
import imgPEAKS from "../../assets/c44.png"; // PEAKS checklist
import imgNegotiation from  "../../assets/c55.png"; // Negotiation

const chips = [
  "Portfolio types",
  "PEAKS",
  "Master vs Targeted",
  "Organization",
  "Assessment portfolio",
  "Reflection (WSN)",
  "Platforms",
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
    <div className={`rounded-2xl border ${t.wrap} p-5 md:p-6 backdrop-blur-xl`}>
      <h3 className={`text-lg md:text-xl font-bold mb-3 ${t.title}`}>{title}</h3>
      <div className="text-slate-100/90 leading-7 text-sm md:text-base">{children}</div>
    </div>
  );
}

export default function Chapter4Section() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-slate-100">
      {/* Header */}
      <header className="mb-6 md:mb-8">
        <p className="text-xs uppercase tracking-wide text-slate-400">Chapter 04</p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-50">
          Portfolio Management
        </h1>
        <p className="mt-2 text-slate-300">
          What to include in a portfolio to reflect you in the real world, arrange in a logical, and redefinable way as needed.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <Chip key={c} label={c} />
          ))}
        </div>
      </header>

      {/* What a portfolio is */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="cyan" title="What is a portfolio?">
          <p>
            Portfolio is a structured presentation of who you are, what you do and what you have accomplished. It must be real and provide the real image of you, not a perfect one.
          </p>
          <div className="mt-12 flex justify-center">
            <img
              src={imgPortfolioTypes}
              alt="Portfolio types"
              className="w-72 h-auto rounded-2xl border border-slate-600/70 bg-slate-900/60 shadow-lg"
            />
          </div>
        </SectionCard>
        <SectionCard tone="emerald" title="Why keep one?">
          <ul className="list-disc pl-5 space-y-1">
            <li>Assists you to be distinctive and support your statements with actual evidence.</li>
            <li>Brings the invisible forces such as teamwork or leadership to sight.</li>
            <li>Develops self-confidence and opens a new avenue.</li>
          </ul>
          <div className="mt-4 flex justify-center">
            <img
              src={imgPEAKS}
              alt="PEAKS checklist"
              className="w-72 h-auto rounded-2xl border border-slate-600/70 bg-slate-900/60 shadow-lg"
            />
          </div>
        </SectionCard>
      </div>

      {/* Types & PEAKS */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="amber" title="Types of portfolios">
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-semibold">Personal</span> – demonstrates innovativeness, hobbies and flair.</li>
            <li><span className="font-semibold">Career / Dossier</span> – CV, letters, awards and records.</li>
            <li><span className="font-semibold">Employment</span> – work samples, performance reviews, training.</li>
            <li><span className="font-semibold">Assessment</span> – monitors your learning and development.</li>
          </ul>
        </SectionCard>
        <SectionCard tone="emerald" title="PEAKS checklist">
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-semibold">P</span>ersonal characteristics</li>
            <li><span className="font-semibold">E</span>xperience</li>
            <li><span className="font-semibold">A</span>ccomplishments</li>
            <li><span className="font-semibold">K</span>nowledge</li>
            <li><span className="font-semibold">S</span>kills</li>
          </ul>
          <p className="mt-2 text-sm text-slate-200/90">
            Use PEAKS as a quick filter during the collection and selection of items to your portfolio.
          </p>
        </SectionCard>
      </div>

      {/* Master vs Targeted (structure changed: combined card with two columns) */}
      <SectionCard tone="slate" title="Master vs Targeted portfolios">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-1 text-slate-50">Master portfolio – your vault</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Huge amount of documents clustered by PEAKS.</li>
              <li>Includes bio data, people skills, learning skills, self-management, tasks and community service.</li>
              <li>New evidence is extremely strong; mark the gaps so that you can add to them in the future.</li>
            </ul>  
          </div>
          <div>
            <h4 className="font-semibold mb-1 text-slate-50">Targeted portfolio – for a specific role</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Begin by giving an honest and clear description of the opportunity.</li>
              <li>Find out what PEAKS the assessor or employer is actually seeking.</li>
              <li>Only the items that will directly show that you have those PEAKS need to be selected.</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 flex justify-center gap-20">
          <img
            src={imgNegotiation}
            alt="Job hunting guide"
            className="w-72 max-h-80 border-slate-600/70 bg-slate-900/60 shadow-lg"
          />
        </div>
      </SectionCard>

      {/* Organizing & After */}
      <div className="grid md:grid-cols-2 gap-4 mb-6 mt-6">
        <SectionCard tone="violet" title="Organising your portfolio">
          <ul className="list-disc pl-5 space-y-1">
            <li>Cover page with name, date, professional photograph and contact information.</li>
            <li>Headings and distinct or tabular sections.</li>
            <li>Make everything clean, precise and professional.</li>
            <li>Decoration or design should be added after structuring the contents.</li>
          </ul>
        </SectionCard>
        <SectionCard tone="emerald" title="After you build it">
          <ul className="list-disc pl-5 space-y-1">
            <li>Look back and reconsider: what did get better, what has been overlooked?</li>
            <li>Keep it up to date; a binder or a case should be used in case it is a hard copy.</li>
            <li>As a grading tool, be sure that the criteria of assessment are shared.</li>
          </ul>
        </SectionCard>
      </div>

      {/* Assessment portfolio + Reflection model in a new layout */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="amber" title="Assessment portfolio – purpose & benefits">
          <ul className="list-disc pl-5 space-y-1">
            <li>Demonstrates actual work, development and the level of accountability of the learner.</li>
            <li>Promotes learning not only memorisation but also reflective and creative learning.</li>
            <li>Provides good support of teacher-student discussions and decisions.</li>
            <li>Pros: promotes development, encourages other learning styles, fosters motivation and meta-cognition, appreciates individuals, enhances communication.</li>
            <li>Difficulties: time consuming to develop and sustain; requires much student participation.</li>
          </ul>
        </SectionCard>
        <SectionCard tone="cyan" title="Reflection model – What? So what? Now what?">
          <ol className="list-decimal pl-5 space-y-1">
            <li><span className="font-semibold">What?</span> Explain what happened or what did take place?</li>
            <li><span className="font-semibold">So what?</span> Inquire about meaning and feelings, what did you see or get to know?</li>
            <li><span className="font-semibold">Now what?</span> Make decisions - what will you do with this learning in the future?</li>
          </ol>
        </SectionCard>
      </div>

      {/* Platforms */}
      <SectionCard tone="slate" title="Popular platforms for digital portfolios">
        <p className="mb-2">
          Select one or two large formats and maintain them regularly as opposed to scattering work all over.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>LinkedIn, GitHub Pages (as a developer), WordPress, Google Sites.</li>
          <li>Behance, Adobe Portfolio (creative work), Wix, Squarespace.</li>
          <li>Personal blogs/websites or just a quick PPT/PDF to distribute.</li>
        </ul>
      </SectionCard>

      {/* Self-Reflection */}
      <SectionCard tone="emerald" title="My Self-Reflection (Chapter 04)">
        <p>
          The portfolio allowed me to more clearly see my progress and reminded me about some forgotten skills. I will maintain one big master file and create specific ones depending on various jobs or courses. I am going to include a brief reflection after each big project with the help of the What -So what -Now what approach. The next thing I am going to do is to post my recent work, attach every possible thing to PEAKS and create a clean cover page and contents to make my portfolio look like it is going to an assessment and real interviews.
        </p>
      </SectionCard>
    </div>
  );
}

// Usage: import Chapter4Section from './Chapter4.jsx' and render <Chapter4Section /> where Chapter 04 should appear.
