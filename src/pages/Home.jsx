// src/pages/Home.jsx
import React, { useEffect, useState } from "react";

const chips = [
  "Professional Skills",
  "CV & Cover Letter",
  "Job Hunting & Interview Skills",
  "Portfolio Management",
  "Research Writing",
  "Project Proposal Writing & Evaluation",
  "Food Festival – Ralahami Kadé",
  "Emotional Intelligence (EI)",
  "Dining Etiquette & Table Manners",

];

// 🔹 Data for interactive Chapter Preview box (1–9)
const chapterPreviews = [
  {
    id: 1,
    title: "Chapter 01 – Professional Skills",
    tag: "Values, beliefs & employability",
    text:
      "Understanding how professional skills, values, beliefs and attitudes shape our character and behaviour in university, work and everyday life.",
  },
  {
    id: 2,
    title: "Chapter 02 – CV & Cover Letter",
    tag: "Presenting yourself on paper",
    text:
      "Learning how to structure a clear CV, add impact with achievements and write focused cover letters that match real job descriptions.",
  },
  {
    id: 3,
    title: "Chapter 03 – Job Hunting & Interviews",
    tag: "Finding roles & answering with STAR",
    text:
      "Searching for suitable roles, researching companies and using STAR stories, non-verbal skills and active listening to handle interviews.",
  },
  {
    id: 4,
    title: "Chapter 04 – Portfolio Management",
    tag: "PEAKS & evidence of skills",
    text:
      "Building master and targeted portfolios using PEAKS, collecting real evidence and reflecting on growth with the What–So what–Now what model.",
  },
  {
  id: 5,
  title: "Chapter 05 – Research Writing",
  tag: "Plagiarism-free academic work",
  text:
    "Learning how to plan, research and write academic work using clear structure, reliable sources, correct citations and paraphrasing to avoid plagiarism.",
},

  {
    id: 6,
    title: "Chapter 06 – Project Proposal & Evaluation",
    tag: "From problem to project plan",
    text:
      "Turning a problem into objectives, activities, budgets and indicators, then evaluating results with lessons and next steps.",
  },
  {
    id: 7,
    title: "Chapter 07 – Food Festival – Ralahami Kadée",
    tag: "Team project & event management",
    text:
      "Applying professional skills in a real event: planning the food festival, dividing roles, managing time and reflecting on what worked well.",
  },
  {
    id: 8,
    title: "Chapter 08 – Emotional Intelligence (EI)",
    tag: "Understanding and managing emotions",
    text:
      "Exploring self-awareness, self-control, empathy and relationship skills, and how EI supports teamwork, leadership and conflict handling.",
  },
  {
    id: 9,
    title: "Chapter 09 – Dining Etiquette & Table Manners",
    tag: "Professional behaviour in formal spaces",
    text:
      "Learning how to behave in formal meals: place settings, body language, polite conversation and cultural awareness in business dining.",
  },
];

export default function Home({ onEnterPortfolio }) {
  const [activePreview, setActivePreview] = useState(0);

  // 🔁 Auto-rotate chapter preview every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePreview((prev) => (prev + 1) % chapterPreviews.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = chapterPreviews[activePreview];

  return (
    <div
      id="top"
      className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex flex-col"
    >
      {/* Top bar */}
      <header className="w-full px-4 md:px-10 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-emerald-400 via-cyan-400 to-sky-500 flex items-center justify-center text-xs font-bold text-slate-950 shadow-md shadow-emerald-400/40">
            PS
          </div>
          <div>
            <h1 className="text-sm md:text-base font-semibold tracking-tight">
              Professional Skills – Assessment Portfolio
            </h1>
            <p className="text-[10px] md:text-xs text-slate-400">
              Designed &amp; written by NISINDU SATHSARA (Assessment portfolio)
            </p>
          </div>
        </div>

        <button
          onClick={onEnterPortfolio}
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-emerald-400/90 text-slate-950 px-4 py-1.5 text-xs font-semibold shadow-lg shadow-emerald-400/40 hover:bg-emerald-300 transition"
        >
          View Portfolio
          <span>↗</span>
        </button>
      </header>

      {/* Main hero */}
      <main className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-10 px-6 md:px-12 pb-10">
        {/* Left: text */}
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-300 mb-3">
            Assessment Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-50 mb-4">
            My journey through{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-300">
              Professional Skills
            </span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-5">
            This portfolio brings together my work, reflections, and activities from
            the Professional Skills module. It covers employability skills, CV and
            interview prep, portfolio building, project proposals, and more.
          </p>

          {/* Chips */}
          <div className="flex flex-wrap gap-2 mb-6">
            {chips.map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] md:text-xs text-emerald-100"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {chip}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={onEnterPortfolio}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 px-4 md:px-6 py-2 text-xs md:text-sm font-semibold shadow-lg shadow-emerald-400/40 hover:brightness-110 transition"
            >
              Start reading chapters
              <span>📖</span>
            </button>
          </div>
        </div>

        {/* Right: interactive Chapter Preview card (no images) */}
        <div className="w-full max-w-md">
          <div className="rounded-3xl bg-white/5 border border-slate-700/70 shadow-xl shadow-emerald-500/20 backdrop-blur-2xl p-5 md:p-6">
            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400 mb-3">
              Chapter Preview
            </p>

            {/* Simple gradient chip instead of image */}
            <div className="mb-4 rounded-2xl border border-emerald-400/40 bg-gradient-to-r from-emerald-500/20 via-cyan-500/10 to-sky-500/20 px-4 py-3">
              <p className="text-emerald-200 text-[11px] uppercase tracking-wide mb-1">
                {current.tag}
              </p>
              <p className="text-sm md:text-base font-semibold text-slate-50">
                {current.title}
              </p>
            </div>

            <div className="space-y-2 text-sm md:text-[15px] leading-relaxed text-slate-100/90 mb-3">
              <p>{current.text}</p>
            </div>

            {/* Small stats row */}
            <div className="mt-2 grid grid-cols-2 gap-2 text-[11px] text-slate-300">
              <div className="rounded-2xl border border-slate-700/70 bg-slate-900/60 px-3 py-2">
                <p className="text-[10px] uppercase tracking-wide text-slate-400">
                  Chapter
                </p>
                <p className="font-semibold text-slate-100">
                  {current.id.toString().padStart(2, "0")} /{" "}
                  {chapterPreviews.length.toString().padStart(2, "0")}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700/70 bg-slate-900/60 px-3 py-2">
                <p className="text-[10px] uppercase tracking-wide text-slate-400">
                  Module
                </p>
                <p className="font-semibold text-slate-100">Professional Skills</p>
              </div>
            </div>

            {/* Controls: dots + arrows */}
            <div className="mt-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-1.5">
                {chapterPreviews.map((ch, index) => (
                  <button
                    key={ch.id}
                    onClick={() => setActivePreview(index)}
                    className={
                      "h-2.5 w-2.5 rounded-full transition-all " +
                      (index === activePreview
                        ? "bg-emerald-400 w-5"
                        : "bg-slate-600 hover:bg-emerald-300/70")
                    }
                    aria-label={`Show ${ch.title}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setActivePreview(
                      (prev) =>
                        (prev - 1 + chapterPreviews.length) %
                        chapterPreviews.length
                    )
                  }
                  className="h-7 w-7 rounded-full border border-slate-600 bg-slate-900/70 flex items-center justify-center text-xs hover:border-emerald-400 hover:text-emerald-300 transition"
                >
                  ←
                </button>
                <button
                  onClick={() =>
                    setActivePreview((prev) => (prev + 1) % chapterPreviews.length)
                  }
                  className="h-7 w-7 rounded-full border border-slate-600 bg-slate-900/70 flex items-center justify-center text-xs hover:border-emerald-400 hover:text-emerald-300 transition"
                >
                  →
                </button>
              </div>
            </div>

            <button
              onClick={onEnterPortfolio}
              className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-400/90 text-slate-950 py-2.5 text-xs md:text-sm font-semibold hover:bg-emerald-300 transition"
            >
              Open Assessment Portfolio
            </button>
          </div>
        </div>
      </main>

      {/* Small footer */}
      <footer className="w-full px-4 md:px-10 py-3 text-[10px] md:text-xs text-slate-500 flex justify-between items-center">
        <span>© {new Date().getFullYear()} Nisindu Sathsara – Assessment Portfolio</span>
        <span>StudentID: SA24610016</span>
      </footer>
    </div>
  );
}
