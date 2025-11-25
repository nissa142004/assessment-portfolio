// src/pages/chapter/Chapter3.jsx
// Dark / glass theme. Restructured layout + multiple image sections.

import React from "react";

import imgJobHunt from "../../assets/c3.jpg"; // Job hunting guide
import imgResumeInterview from "../../assets/c31.jpg"; // Resume interview
import imgInterviewProcess from "../../assets/c34.jpg"; // Interview process
import imgContractReview from "../../assets/c37.jpg"; // Contract review
import imgNegotiation from "../../assets/c32.jpg"; // Negotiation

const chips = [
  "Job search",
  "Company research",
  "Interview basics",
  "Non-verbal",
  "Active listening",
  "6/7 Cs",
  "STAR answers",
  "Mock interview",
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

export default function Chapter3Section() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-slate-100">
      {/* Header */}
      <header className="mb-6 md:mb-8">
        <p className="text-xs uppercase tracking-wide text-slate-400">Chapter 03</p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-50">
          Job Hunting &amp; Interview Skills
        </h1>
        <p className="mt-2 text-slate-300">
          Learn how to search for roles that match you, explore companies in advance, and handle interviews with confident, clear communication.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <Chip key={c} label={c} />
          ))}
        </div>
      </header>

      {/* Job hunting basics */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="cyan" title="What’s out there? (Job search)">
          <ul className="list-disc pl-5 space-y-1">
            <li>Search everywhere: on company websites, LinkedIn, job portals, referrals and career fairs.</li>
            <li>Maintain a mini tracker: role, company, connection, deadline, and status.</li>
            <li>Make sure you tailor your CV to each position and use relevant phrases in the advert in a natural manner.</li>
          </ul>
          <div className="mt-4 flex justify-center">
            <img
              src={imgJobHunt}
              alt="Job hunting guide"
              className="w-72 h-auto rounded-2xl border border-slate-600/70 bg-slate-900/60 shadow-lg"
            />
          </div>
          <div className="mt-4 flex justify-center">
            <img
              src={imgContractReview}
              alt="Job hunting guide"
              className="w-72 h-auto rounded-2xl border border-slate-600/70 bg-slate-900/60 shadow-lg"
            />
          </div>
        </SectionCard>

        <SectionCard tone="emerald" title="Research the company">
          <ul className="list-disc pl-5 space-y-1">
            <li>Examine their products, services, mission, values and new news.</li>
            <li>In tech work, include the stack and teams as well as the primary clients or markets.</li>
            <li>Write down 1–2 reflective questions that demonstrate the fact that you have conducted this research.</li>
          </ul>
          <div className="mt-4 flex justify-center">
            <img
              src={imgInterviewProcess}
              alt="Job hunting guide"
              className="w-72 h-auto rounded-2xl border border-slate-600/70 bg-slate-900/60 shadow-lg"
            />
          </div>
        </SectionCard>
      </div>

      {/* Interview basics */}
      <SectionCard tone="amber" title="Job interview basics">
        <p className="mb-2">
          An interview is a two-way conversation that is about fit. You exchange actual information on what you can do and they on what the job and the place of work is like.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Determine the message that you want to have at the heart of things, the things you would want them to remember about you.</li>
          <li>Address weaknesses candidly, but in a very short time; concentrate on the progress that you are making.</li>
          <li>Write a couple of stories with the help of STAR - Situation, Task, Action, Result.</li>
        </ul>
        <div className="mt-4 flex justify-center gap-20">
          <img
            src={imgResumeInterview}
            alt="Job hunting guide"
            className="w-72 h-auto rounded-2xl border border-slate-600/70 bg-slate-900/60 shadow-lg"
          />
          <img
            src={imgNegotiation}
            alt="Job hunting guide"
            className="w-72 h-auto rounded-2xl border border-slate-600/70 bg-slate-900/60 shadow-lg"
          />
        </div>
      </SectionCard>

      {/* Communication focus */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard title="Non-verbal & verbal communication" tone="emerald">
          <ul className="list-disc pl-5 space-y-1">
            <li>Half-hearted welcome, natural smiling, constant eye contact, free position, and measured speech rate.</li>
            <li>Pay attention to the body language of the interviewer; be interested and professional.</li>
            <li>Active listening: listen fully, demonstrate that you are listening, seek clarification, do not judge quickly and reply thoughtfully.</li>
          </ul>
        </SectionCard>
        <SectionCard title="6/7 Cs for answers" tone="slate">
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-semibold">Concise</span> &amp; <span className="font-semibold">Concise</span>: no additional narratives.</li>
            <li><span className="font-semibold">Right</span>: include valid facts and the required information.</li>
            <li><span className="font-semibold">Concrete</span>: include examples, results and numbers where feasible.</li>
            <li><span className="font-semibold">Courteous/Confident</span>: be polite and look forward to it.</li>
          </ul>
        </SectionCard>
      </div>

      {/* Successful vs unsuccessful cues */}
      <SectionCard tone="cyan" title="What successful candidates do">
        <ul className="list-disc pl-5 space-y-1">
          <li>Talk fluently on the position and refer to the company name in the response in a natural manner.</li>
          <li>Demonstrate they have done research on the organisation, and track changes of topics easily.</li>
          <li>Be able to back up their arguments with concrete examples, pose pertinent questions, and discuss a little more than the interviewer, without being overly wordy.</li>
        </ul>
      </SectionCard>

      {/* Sample Q&A */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard title="Common interview questions (prepare with STAR)" tone="amber">
          <ul className="list-disc pl-5 space-y-1">
            <li>Tell me about yourself.</li>
            <li>Explain a problem that you encountered and how you managed it.</li>
            <li>Share an experience with you and a conflict within the team.</li>
            <li>Discuss one of your mistakes and the lesson you learnt.</li>
            <li>Why do you desire to be employed with this company and in this position?</li>
          </ul>
        </SectionCard>
        <SectionCard title="Example STAR answer (challenge)" tone="emerald">
          <p className="mb-1"><span className="font-semibold">S/T:</span> Our project was lagging behind schedule, the deadline was 5 PM and the team head was absent.</p>
          <p className="mb-1"><span className="font-semibold">A:</span> I have been able to do it by organising four of my teammates according to their strengths, dedicating my own time to my high-priority tasks, and making the client informed.</p>
          <p><span className="font-semibold">R:</span> I had time-management and leadership skills as I was able to lead more projects after being trusted, as a result of being on time.</p>
        </SectionCard>
      </div>

      {/* Practical checklist */}
      <div className="grid md:grid-cols-3 gap-4 my-6">
        <SectionCard title="What to wear / take" tone="slate">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Wear simple and clean clothes that fit the job and corporate culture.</li>
            <li>Bring additional copies of CV, portfolio links, a notebook and pen and ID.</li>
            <li>Arrange your schedule and get to arrive between 10 and 15 minutes ahead of schedule.</li>
          </ul>
        </SectionCard>
        <SectionCard title="Language support (quick)" tone="slate">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Strengths: “I’m good at… / My main strength is…”</li>
            <li>Education: “I have completed… / I recently graduated…”</li>
            <li>Experience: “From 2023–2024 I worked as… / I volunteered as…”</li>
            <li>Future aspirations: “I want to expand my capabilities in...”</li>
          </ul>
        </SectionCard>
        <SectionCard title="Your questions to ask" tone="slate">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Ask about the daily tools and priorities of the team.</li>
            <li>“What would success on the first 90 days be like?”</li>
            <li>The possibilities of development, mentorship, and feedback methods.</li>
          </ul>
        </SectionCard>
      </div>

      {/* Activities */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard title="Activity – Mock interview (pair/group)" tone="cyan">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Use your actual CV and take the roles of an interviewer, an interviewee, and an observer.</li>
            <li>Non-verbal (eye contact, posture, voice) and verbal (clarity, examples, structure) 1-5 rate.</li>
            <li>On the basis of feedback, write two strengths and two areas to improve.</li>
          </ul>
        </SectionCard>
        <SectionCard title="Activity – Q lists" tone="cyan">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Make two lists one of the possible questions which interviewers might ask or questions you are going to ask interviewers.</li>
            <li>Out loud practice (approximately 1-2 minutes per question).</li>
          </ul>
        </SectionCard>
      </div>

      {/* Self-Reflection */}
      <SectionCard tone="emerald" title="My Self-Reflection (Chapter 03)">
        <p>
          This chapter demonstrated to me the strength of structured responses and body language during interviews. I have learned to provide narrowed down examples using STAR, and to be an active listener rather than hurrying to reply. To do the interviews in future, I will research about each company appropriately, prepare three good stories in advance and rehearse on maintaining constant eye contact and asking two good questions at the end.
        </p>
      </SectionCard>
    </div>
  );
}

// Usage: import Chapter3Section from './Chapter3.jsx' and render <Chapter3Section /> where Chapter 03 should appear.
