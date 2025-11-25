// src/pages/chapter/Chapter6.jsx
// Dark / glass theme. Proposal writing + food-fest evaluation.
// Overview, proposal structure, internal vs external, activity/resource plan,
// indicators, budget, evaluation/report, and self-reflection.

import React from "react";

const chips = [
  "External vs Internal",
  "Executive summary",
  "Problem → Objectives",
  "Methods & timeline",
  "Activity & Resource plan",
  "Budget & M&E",
  "Evaluation report",
  "Lessons & Next steps",
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

export default function Chapter6Section() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-slate-100">
      {/* Header */}
      <header className="mb-6 md:mb-8">
        <p className="text-xs uppercase tracking-wide text-slate-400">Chapter 06</p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-50">
          Project Proposal Writing &amp; Evaluation
        </h1>
        <p className="mt-2 text-slate-300">
          How to turn a problem into a clear plan: objectives, activities, budget, and indicators – and how to
          evaluate the project after it is completed.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <Chip key={c} label={c} />
          ))}
        </div>
      </header>

      {/* Project vs Proposal */}
      <SectionCard tone="cyan" title="Project vs. Proposal – what’s the difference?">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-1 text-cyan-100">What is a project?</h4>
            <p className="text-sm md:text-base">
              A project is simply a collection of connected actions that have an objective, a tight deadline, a team, as well as scarce resources. It tends to follow a cycle, idea, design, finance, implement, evaluate.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1 text-cyan-100">What is a proposal?</h4>
            <p className="text-sm md:text-base">
              This plan is in form of a proposal. It describes the problem, your solution, who will benefit, the plan of work, the team, the budget and you will never be able to measure success at the end.
            </p>
          </div>
        </div>
      </SectionCard>

      {/* Types of proposals + Prep */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard tone="amber" title="External vs Internal proposals">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <span className="font-semibold">External proposals</span> – used to offer contracts or grants. They typically consist of executive summary, management section and financials.
            </li>
            <li>
              <span className="font-semibold">Internal proposals</span> – used within an organisation to make decision-makers agree with an idea.
            </li>
          </ul>
          <p className="text-sm mt-2">
            Regarding internal proposals, put a lot of consideration on the audience, the visual layout as well as the 4 questions: What is the problem? What solution do you suggest? Can we implement it? Should we implement it now?
          </p>
        </SectionCard>

        <SectionCard tone="slate" title="Before you write – preparation">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Discussion with beneficiaries and examination of previous suggestions or assessment reports.</li>
            <li>Check available data, seek the advice of specialists or conduct a survey/focus group.</li>
            <li>Choose indicators in advance - what is going to be considered evidence that the project was successful?</li>
          </ul>
        </SectionCard>
      </div>

      {/* Proposal structure */}
      <SectionCard tone="emerald" title="Proposal structure – simple template">
        <ol className="list-decimal pl-5 space-y-1">
          <li>
            <span className="font-semibold">Title and Abstract</span> – overview of the problem, core objectives, core activities and a brief budget overview.
          </li>
          <li>
            <span className="font-semibold">Background, Data, and Reasoning</span> – Why the project is required.
          </li>
          <li>
            <span className="font-semibold">Problem → Objectives</span> – one primary objective, objectives that can be clearly measured and a target population.
          </li>
          <li>
            <span className="font-semibold">Methods & Activities</span> – what specifically will you do to achieve each goal.
          </li>
          <li>
            <span className="font-semibold">Implementation plan</span> – schedule, duties and milestones.
          </li>
          <li>
            <span className="font-semibold">Resource plan & Budget</span> – direct costs/ operational costs/ overhead costs, and any anticipated revenues.
          </li>
          <li>
            <span className="font-semibold">Team</span> – team members, management roles, and capacity.
          </li>
          <li>
            <span className="font-semibold">Monitoring & Evaluation (M&E)</span> – indicators, sources of data, reporting schedule.
          </li>
          <li>
            <span className="font-semibold">Annexes</span> – CVs, more detailed data tables, charts, forms or letters of support.
          </li>
        </ol>
      </SectionCard>

      {/* Indicators & M&E */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard tone="slate" title="Indicators – make them specific">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Reflect on: the quality (what change), target group (who), place (where), quantity (how much), and time (by when).
            </li>
            <li>
              Example: “Ticket sales exceed 500 within 18 Oct and the average satisfaction level is at least 4/5.”
            </li>
          </ul>
        </SectionCard>
        <SectionCard tone="emerald" title="Monitoring & reporting">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Compare the progress to your schedule and budget, at least monthly.</li>
            <li>Gather information including numbers, questionnaires, images, and invoices.</li>
            <li>Have a reporting timetable: mid-term review, final report, and annexes.</li>
          </ul>
        </SectionCard>
      </div>

      {/* Evaluation report (after the event) */}
      <SectionCard tone="cyan" title="Evaluation report – food-fest style outline">
        <ol className="list-decimal pl-5 space-y-1">
          <li>
            <span className="font-semibold">Executive summary</span> – short note of objectives, main results, and key takeaways.
          </li>
          <li>
            <span className="font-semibold">Objectives &amp; goals</span> – what you planned to achieve.
          </li>
          <li>
            <span className="font-semibold">Planning process</span> – roles, timeline, and preparation steps.
          </li>
          <li>
            <span className="font-semibold">Execution</span> – what actually happened and what challenges appeared.
          </li>
          <li>
            <span className="font-semibold">Budget</span> – estimated vs. actual spending, revenue, and profit or loss.
          </li>
          <li>
            <span className="font-semibold">Lessons learned</span> – specific points to change next time.
          </li>
          <li>
            <span className="font-semibold">Recommendations</span> – practical suggestions for future events.
          </li>
          <li>
            <span className="font-semibold">Conclusion</span> – overall success and impact of the project.
          </li>
        </ol>
      </SectionCard>

      {/* Mini templates */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard tone="slate" title="One-page proposal (mini template)">
          <p className="mb-2 text-sm">
            For small projects or quick approvals, you can use this shorter structure:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Title and 3-line abstract</li>
            <li>Problem statement and target group</li>
            <li>Objectives (2–3, clearly measurable)</li>
            <li>Activities and timeline (small table)</li>
            <li>Budget summary</li>
            <li>Key indicators and main risks</li>
          </ul>
        </SectionCard>

        <SectionCard tone="amber" title="Budget totals – quick view">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Total expenses: ______</li>
            <li>Total revenue / income: ______</li>
            <li>Profit or Loss: revenue − costs = ______</li>
          </ul>
        </SectionCard>
      </div>

      {/* Self-Reflection */}
      <SectionCard tone="emerald" title="My Self-Reflection (Chapter 06)">
        <p>
          In this chapter, I was able to relate every element of a project, starting with the problem, then objectives, activities and lastly, budget and indicators. Now I understand how crucial it is to plan monitoring and evaluation at the outset, as well as at the end. In my future project, I will write one-page proposal, develop it to a full project with an activity and resource plan. I will maintain all the receipts and the results that were given in the surveys so that I will be able to compare the estimated and actual budget and compose a great evaluation report with at least three clear lessons and improvement measures.
        </p>
      </SectionCard>
    </div>
  );
}

// Usage: import Chapter6Section from "./Chapter6.jsx" and render <Chapter6Section /> where Chapter 06 should appear.
