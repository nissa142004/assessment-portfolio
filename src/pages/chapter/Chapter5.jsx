// src/pages/chapter/Chapter5.jsx
// Dark / glass theme. Speaking skills + meetings: types, planning, facilitation, evaluation, reflection.

import React from "react";

// Import images
import imgTeamDiscussion from "../../assets/c52.jpg"; // Team discussion
import imgCommunication from "../../assets/c53.jpg"; // Communication


const chips = [
  "Meeting types",
  "Terminology",
  "Preparation checklist",
  "Agenda & roles",
  "Facilitation",
  "Participation",
  "Challenges",
  "Evaluation",
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

export default function Chapter5Section() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-slate-100">
      {/* Header */}
      <header className="mb-6 md:mb-8">
        <p className="text-xs uppercase tracking-wide text-slate-400">Chapter 05</p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-50">
          Meetings &amp; Speaking Skills
        </h1>
        <p className="mt-2 text-slate-300">
          How to plan, run, and take part in meetings using clear language, good roles, and focused agendas.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <Chip key={c} label={c} />
          ))}
        </div>
      </header>

      {/* Terminology + Types merged in one card */}
      <SectionCard tone="cyan" title="Meeting language & types">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-1 text-cyan-100">Key terminology</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <span className="font-semibold">Agenda</span> – agenda of subjects and schedule.
              </li>
              <li>
                <span className="font-semibold">Minutes</span> – record of course of action.
              </li>
              <li>
                <span className="font-semibold">Action item</span> – task which has a clear owner and date.
              </li>
              <li>
                <span className="font-semibold">Quorum</span> – fewest number of persons needed to make decisions.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1 text-cyan-100">Example meeting types</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Stand-up / progress update</li>
              <li>Planning / strategy</li>
              <li>Problem-solving / retrospective.</li>
              <li>Training / briefing</li>
            </ul>
          </div>
        </div>
      </SectionCard>

      {/* Add Image for Meeting Discussion */}
      <SectionCard tone="violet" >
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <img
              src={imgTeamDiscussion}
              alt="Team Discussion"
              className="w-95 h-auto rounded-2xl border border-slate-600/70 bg-slate-900/60 shadow-lg"
            />
          </div>
          <div>
            <img
              src={imgCommunication}
              alt="Communication"
              className="w-95 h-auto rounded-2xl border border-slate-600/70 bg-slate-900/60 shadow-lg"
            />
          </div>
        </div>
      </SectionCard>

      {/* Preparation */}
      <div className="mt-6">
        <SectionCard tone="amber" title="Planning a meeting – checklist">
          <ul className="list-disc pl-5 space-y-1">
            <li>State objective and result (decision, information, brainstorm?).</li>
            <li>Decision on who to attend to, stakeholders and key positions.</li>
            <li>Online chain and facilities or location needed, time and date required.</li>
            <li>Choose length and style as formal, semi-formal or informal.</li>
            <li>
              Compile documents: invitation, an agenda, past minutes, working papers.
            </li>
            <li>
              Think of potential risks or issues that might come about and what to avoid or do to solve them.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* Roles + Agenda combined */}
      <div className="mt-6">
        <SectionCard tone="slate" title="Roles, agenda & time">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-1 text-slate-50">Common roles</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Chair / Facilitator- keeps on track, time management, make people talk.</li>
                <li>Secretary / Minute-taker - records decisions and action items.</li>
                <li>Timekeeper - records timings in all the agenda items.</li>
                <li>
                  Participants - think, be punctual and accountable in actions.
                </li>
                <li>Observer (optional) - oversees the process and gives feedback in the future.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-slate-50">Project agenda progress sample.</h4>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Welcome & objectives (2 min)</li>
                <li>Check or check up past steps- closed/open (5 min)</li>
                <li>Design (10 min) QA Team updates: Dev (10 min) Design</li>
                <li>Risks & blockers (5 min)</li>
                <li>Decisions & new actions (5 min)</li>
                <li>The next steps and next meeting date (3 min) will be discussed at this stage.</li>
              </ol>
            </div>
          </div>
        </SectionCard>
      </div>

      {/* Facilitation + Speaking skills combined */}
      <div className="mt-6">
        <SectionCard tone="violet" title="Facilitation & speaking skills in meetings">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-1 text-violet-100">Facilitation – keep people involved</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>State purpose and timeboxes; put aside out of topic things.</li>
                <li>Make calls to members who speak in very low tones by their names and alternate.</li>
                <li>Summarize key points on a regular basis and legitimize determination and the owners.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-violet-100">Speaking skills during the meeting</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Be brief and to the point; compliment like Could I add or I agree because.</li>
                <li>Be a good listener: listen, paraphrase and clarifying questions.</li>
                <li>Appear professional, be neutral and non-intrusive.</li>
              </ul>
            </div>
          </div>
        </SectionCard>
      </div>

      {/* Challenges & fixes */}
      <div className="mt-6">
        <SectionCard tone="cyan" title="Common challenges → fixes">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <span className="font-semibold">Minimal participation</span> → round-robin sharing and soft, direct invitations.
            </li>
            <li>
              <span className="font-semibold">Time overruns</span> → empower the timekeeper further; put the items in a list on the parking lot to be discussed during another meeting.
            </li>
            <li>
              <span className="font-semibold">Digressionary discussion space</span> → paraphrase the purpose, summarize and get the group back on track.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* Evaluation */}
      <div className="mt-6">
        <SectionCard tone="slate" title="Evaluate the meeting (quick form)">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Were the objectives met? (rate 1–5)</li>
            <li>Was it a right of speech to you all? (Yes/No)</li>
            <li>Are next steps and owners unambiguous? (Yes/No)</li>
            <li>What was not covered in the last meeting that needs to be improved?</li>
          </ul>
        </SectionCard>
      </div>

      {/* Class / Group activities */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard title="Group activity – roles & agenda" tone="amber">
          <ol className="list-decimal pl-5 space-y-1 text-sm">
            <li>List 3–4 different meeting types, and give 2 objectives on meeting.</li>
            <li>Assign roles and write down the roles.</li>
            <li>To such functions, prepare a 6-item agenda to a progress meeting.</li>
          </ol>
        </SectionCard>
        <SectionCard title="Facilitation & challenges" tone="amber">
          <ol className="list-decimal pl-5 space-y-1 text-sm">
            <li>Write 3 ways how your group can become more participatory.</li>
            <li>Explain why time management is important; give an example, either real or imagined.</li>
            <li>Identify 3 most common issues during meetings and suggest a solution to each of them.</li>
          </ol>
        </SectionCard>
      </div>

      {/* Self-Reflection */}
      <SectionCard tone="emerald" title="My Self-Reflection (Chapter 05)">
        <p>
          This chapter assisted me in rehearsing my meeting planning and role selection as well as speaking. I now understand the effect of facilitation, listening and time management to change the whole atmosphere of a meeting. I will apply to a short agenda, request members to be more silent, and sum up my meeting by taking measures and owners before ensuring that every meeting is even greater than the last one in the future by applying a simple evaluation checklist.
        </p>
      </SectionCard>
    </div>
  );
}

// Usage: import Chapter5Section from './Chapter5.jsx' and render <Chapter5Section /> where Chapter 05 should appear.
