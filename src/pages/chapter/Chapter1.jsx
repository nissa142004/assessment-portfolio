// src/pages/chapter/Chapter1.jsx
// Dark glass theme. Same layout, chapter text replaced with your exact content.

import React from "react";

// If you already use ChapterLayout, uncomment the next line and wrap <Chapter1Section /> below with it.
// import ChapterLayout from "../../layouts/ChapterLayout.jsx";
import c1 from "../../assets/c1.jpg";

const chips = [
  "Professional skills",
  "Employability",
  "Communication",
  "Teamwork",
  "Problem-solving",
  "Adaptability",
  "Time management",
  "Leadership",
  "Values",
  "Beliefs",
  "Attitudes",
  "Character",
  "Johari Window",
];

const chipStyles = {
  "Professional skills": {
    wrapper: "border-emerald-500/40 bg-emerald-500/10 text-emerald-100",
    dot: "bg-emerald-400",
  },
  Employability: {
    wrapper: "border-cyan-500/40 bg-cyan-500/10 text-cyan-100",
    dot: "bg-cyan-400",
  },
  Communication: {
    wrapper: "border-amber-500/40 bg-amber-500/10 text-amber-100",
    dot: "bg-amber-400",
  },
  Teamwork: {
    wrapper: "border-indigo-500/40 bg-indigo-500/10 text-indigo-100",
    dot: "bg-indigo-400",
  },
  "Problem-solving": {
    wrapper: "border-rose-500/40 bg-rose-500/10 text-rose-100",
    dot: "bg-rose-400",
  },
  Adaptability: {
    wrapper: "border-violet-500/40 bg-violet-500/10 text-violet-100",
    dot: "bg-violet-400",
  },
  "Time management": {
    wrapper: "border-sky-500/40 bg-sky-500/10 text-sky-100",
    dot: "bg-sky-400",
  },
  Leadership: {
    wrapper: "border-teal-500/40 bg-teal-500/10 text-teal-100",
    dot: "bg-teal-400",
  },
  Values: {
    wrapper: "border-fuchsia-500/40 bg-fuchsia-500/10 text-fuchsia-100",
    dot: "bg-fuchsia-400",
  },
  Beliefs: {
    wrapper: "border-lime-500/40 bg-lime-500/10 text-lime-100",
    dot: "bg-lime-400",
  },
  Attitudes: {
    wrapper: "border-pink-500/40 bg-pink-500/10 text-pink-100",
    dot: "bg-pink-400",
  },
  Character: {
    wrapper: "border-slate-500/40 bg-slate-500/10 text-slate-100",
    dot: "bg-slate-300",
  },
  "Johari Window": {
    wrapper: "border-amber-500/40 bg-amber-500/10 text-amber-100",
    dot: "bg-amber-400",
  },
};

function Chip({ label }) {
  const s =
    chipStyles[label] || {
      wrapper: "border-gray-500/40 bg-gray-500/10 text-gray-100",
      dot: "bg-gray-400",
    };
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium ${s.wrapper}`}
    >
      <span className={`h-2 w-2 rounded-full ${s.dot}`} />
      {label}
    </span>
  );
}

function SectionCard({ tone = "emerald", title, children }) {
  const tones = {
    emerald: {
      wrap: "border-emerald-500/40 bg-emerald-900/40",
      title: "text-emerald-100",
    },
    cyan: {
      wrap: "border-cyan-500/40 bg-cyan-900/40",
      title: "text-cyan-100",
    },
    amber: {
      wrap: "border-amber-500/40 bg-amber-900/40",
      title: "text-amber-100",
    },
    violet: {
      wrap: "border-violet-500/40 bg-violet-900/40",
      title: "text-violet-100",
    },
    slate: {
      wrap: "border-slate-600/60 bg-slate-900/60",
      title: "text-slate-100",
    },
  };
  const t = tones[tone] || tones.slate;
  return (
    <div
      className={`rounded-2xl border ${t.wrap} p-5 md:p-6 backdrop-blur-xl shadow-lg shadow-black/40`}
    >
      <h3 className={`text-lg md:text-xl font-bold mb-3 ${t.title}`}>
        {title}
      </h3>
      <div className="text-slate-100/90 leading-7 text-sm md:text-base">
        {children}
      </div>
    </div>
  );
}

export default function Chapter1Section() {
  return (
    // If using ChapterLayout, wrap children with it instead of the outer div
    <div className="max-w-5xl mx-auto px-4 py-8 text-slate-100">
      {/* Header */}
      <header className="mb-6 md:mb-8">
        <p className="text-xs uppercase tracking-wide text-slate-400">
          Chapter 01
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-50">
          Introduction to Professional Skills
        </h1>
        <p className="mt-2 text-slate-300 max-w-2xl">
          This chapter provides a brief summary of employability skills, their
          relationship to our values and behavior, and ends with my own
          reflection.
        </p>

        {/* Chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <Chip key={c} label={c} />
          ))}
        </div>
      </header>

      {/* PART 1 – Professional / Employability Skills */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="cyan" title="Professional / Employability Skills - simply put.">
          <p>
            Professional skills or employability skills are inter-personal
            skills which enable us to get along with people. They can be
            transferred and this implies that we can apply them in numerous
            types of jobs and life circumstances.
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Communication</li>
            <li>Teamwork &amp; collaboration</li>
            <li>Problem solving and critical thinking.</li>
            <li>Adaptability &amp; flexibility</li>
            <li>Time management</li>
            <li>Leadership</li>
          </ul>
        </SectionCard>

        <SectionCard tone="emerald" title="Skills in the work place.">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Technical skills: the equipment, programs and procedures required
              in a certain work (such as the coding languages or laboratory
              techniques).
            </li>
            <li>
              Soft skills: the way we speak, hear, act good and collaborate with
              other people.
            </li>
            <li>
              Transferable skills: skills that are useful in any work,
              including solving a problem, organising tasks or remaining
              organized.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* PART 2 – In-class moment */}
      <SectionCard
        tone="slate"
        title="In-class moment In-class moment- Relating theory to our personal experience."
      >
        <div className="grid md:grid-cols-[1.4fr,1fr] gap-4 items-center">
          <div className="text-sm md:text-base text-slate-100/90 space-y-2">
            <p>
              During our first lesson we gave examples of group projects,
              volunteering and part-time jobs and connected them with such
              professional skills as teamwork, time management, and leadership.
              This made me aware of the fact that I already apply most of these
              skills in my day to day life, not just in my future career.
            </p>
            <p>Students talked about professional competencies in the classroom.</p>
          </div>

          <div className="flex items-center justify-center">
            <img
              src={c1}
              alt="Students talking about professional competencies in the classroom."
              className="w-40 sm:w-52 md:w-60 lg:w-64 h-auto rounded-2xl border border-slate-600/70 bg-slate-900/60 shadow-lg"
            />
          </div>
        </div>
      </SectionCard>

      {/* PART 3 – Values, Beliefs, Attitudes, Character */}
      <div className="mt-6 space-y-4 mb-6">
        <SectionCard
          title="Values, Beliefs, Attitudes & Character - the motivation of our behaviour."
        >
          <p className="mb-3">
            All these four areas combined are the reason why we behave in right
            ways at university, work and in our personal lives.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Values */}
            <div>
              <h4 className="font-semibold mb-1 text-emerald-100">Values</h4>
              <p className="mb-2 text-slate-100/90">
                Strong values that influence our decisions - such as a sense of
                morals.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-slate-100/90">
                <li>Honesty, Integrity, Respect</li>
                <li>Accountability, Generosity, Justice.</li>
                <li>Courage, Excellence</li>
              </ul>
            </div>

            {/* Beliefs */}
            <div>
              <h4 className="font-semibold mb-1 text-cyan-100">Beliefs</h4>
              <p className="mb-2 text-slate-100/90">
                Concepts we have of ourselves, those of other people and the
                world.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-slate-100/90">
                <li>Self-efficacy, Growth mindset and Optimism.</li>
                <li>Locus of control, Self-worth</li>
                <li>Bigotry, Fatalism (and this is what we must fight).</li>
              </ul>
            </div>

            {/* Attitudes */}
            <div>
              <h4 className="font-semibold mb-1 text-amber-100">Attitudes</h4>
              <p className="mb-2 text-slate-100/90">
                Good or bad things that colour our reaction in response to
                people and things.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-slate-100/90">
                <li>Positive attitude, Tolerance, Open-mindedness.</li>
                <li>Confidence, Empathy</li>
              
              </ul>
            </div>

            {/* Character */}
            <div>
              <h4 className="font-semibold mb-1 text-indigo-100">Character</h4>
              <p className="mb-2 text-slate-100/90">
                The trend of our behaviour with the passage of time- what we
                become when we are alone.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-slate-100/90">
                <li>Trustworthiness, Respectfulness</li>
                <li>Caring, Citizenship, Responsibility.</li>
                <li>Fairness, Courage</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        {/* PART 4 – Johari Window */}
        <SectionCard
          tone="violet"
          title="A self-awareness tool (1955) Johari Window."
        >
          <p className="mb-3">
            This little strycture is called the Johari Window and assists us in
            reflecting on the extent of sharing our selves and how much more is
            yet to be discovered.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-100/90">
            <li>Open: What we and others know about myself.</li>
            <li>Blind: things people see in me but I do not.</li>
            <li>Hidden: things I am aware of, but I do not display them.</li>
            <li>Unknown: the things that that me or other people do not know.</li>
          </ul>
          <p className="mt-2 text-slate-100/90">
            The aim is the progressive expansion of Open area through sharing
            and openness to the other people and their feedback.
          </p>
        </SectionCard>

        {/* PART 5 – Professional growth ways */}
        <SectionCard tone="slate" title="Professional growth ways.">
          <ul className="list-disc pl-5 space-y-1 text-slate-100/90">
            <li>
              Continue education: enroll in short courses, tutorials,
              workshops.
            </li>
            <li>
              Application in actual work: apply these skills in projects, clubs,
              volunteering and part-time work.
            </li>
            <li>
              Request feedback: discuss with friends, lecturers and mentors and
              implement their advice.
            </li>
            <li>
              Push yourself: accept new challenges and use the opportunity to
              look back on what was good and what should be improved.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* Self-Reflection */}
      <SectionCard tone="emerald" title="My Self-Reflection (Chapter 01)">
        <p className="text-slate-100/90">
          The chapter made me realize that professional skills are not inferior
          to technical knowledge When the communication, teamwork and time
          management are good, the projects turn easier and less stressful. I
          also did not find many blind spots in my reaction towards being under
          pressure. Henceforth, I would like to write more clearly, participate
          more actively in teamwork, and often request feedback to ensure the
          sphere of the Open type in my Johari Window will be expanded with
          time.
        </p>
      </SectionCard>
    </div>
  );
}

// Usage examples:
// 1) Standalone page: export default Chapter1Section and render in a route.
// 2) Inside your AllChapters page, import { default as Chapter1Section } from './Chapter1.jsx' and place <Chapter1Section />.
