// src/pages/chapter/Chapter2.jsx
// Dark / glass theme. Restructured layout + multiple image sections.

import React from "react";

// 🔁 Update these paths/names to match your real files in src/assets
import imgCvClass from "../../assets/c2.jpg";        // in-class CV activity
import imgResumeStack from "../../assets/c2_2.jpg";  // stack of resumes    // CV on desk with clock
import imgCvReview from "../../assets/c2_6.jpg";     // recruiters reviewing CVs
import imgCoverTemplate from "../../assets/c2_5.jpg"; // cover letter template

const chips = [
  "CV purpose",
  "Resume vs CV",
  "Structure",
  "ATS keywords",
  "Tailoring",
  "Achievements",
  "Cover letter",
  "Do & Don't",
];

const chipTone = {
  wrapper:
    "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium border-emerald-500/40 bg-emerald-500/10 text-emerald-100",
  dot: "h-2 w-2 rounded-full bg-emerald-400",
};

function Chip({ label }) {
  return (
    <span className={chipTone.wrapper}>
      <span className={chipTone.dot} />
      {label}
    </span>
  );
}

function SectionCard({ title, tone = "emerald", children }) {
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
    slate: {
      wrap: "border-slate-600/60 bg-slate-900/60",
      title: "text-slate-100",
    },
  };
  const t = tones[tone] || tones.slate;

  return (
    <div
      className={`rounded-2xl border ${t.wrap} p-5 md:p-6 backdrop-blur-xl`}
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

export default function Chapter2Section() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-slate-100">
      {/* HEADER */}
      <header className="mb-6 md:mb-8">
        <p className="text-xs uppercase tracking-wide text-slate-400">
          Chapter 02
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-50">
          CV &amp; Cover Letter Writing
        </h1>
        <p className="mt-2 text-slate-300">
          What a CV is, how it differs from a resume, how to structure and
          tailor it, and how to write a short, effective cover letter.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <Chip key={c} label={c} />
          ))}
        </div>
      </header>

      {/* PART 1 – CV BASICS (what + why) */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="cyan" title="What is a CV?">
          <p>
            A CV (Curriculum Vitae) is a one to two page document that will
            outline your education, experience, skills and achievements. It
            allows recruiters to focus on whether you fit a role very fast. A
            resume is more compact sometimes even shorter and some countries
            refer to the same words using different terms.
          </p>
        </SectionCard>

        <SectionCard tone="emerald" title="Why your CV matters">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Impress the audience with proper and impeccable writing.
            </li>
            <li>Present applicable evidence of impact by the use of numbers and results.</li>
            <li>
              Apply Pass Applicant Tracking Systems (ATS) by applying the job description keywords in a natural manner.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* PART 2 – IMAGE + REAL-LIFE CONNECTION */}
      <SectionCard
        tone="slate"
        title="CV moment in class- theory into practice"
      >
        <div className="grid md:grid-cols-[1.5fr,1fr] gap-4 items-center">
          <div className="text-sm md:text-base text-slate-100/90">
            We were also shown sample CVs in our CV lesson during which we
            identified strong bullet points and then crossed weak ones. Another
            aspect that we have compared is that of CVs and resumes that were
            used in the various countries. It allowed me to realise what should
            be expected of real recruiters and what mistakes can be avoided. The
            photo demonstrates the type of efficient and concentrated conversation
            we experienced in the process of going through layouts and content
            collectively.
          </div>
          <div className="flex items-center justify-center">
            <img
              src={imgCvClass}
              alt="Students analysing CV layouts during class"
              className="w-40 sm:w-52 md:w-60 lg:w-64 h-auto rounded-2xl border border-slate-600/70 bg-slate-900/60 shadow-lg"
            />
          </div>
        </div>
      </SectionCard>

      {/* PART 2b – VISUAL EXAMPLES OF CVS */}
      <SectionCard
        tone="slate"
        title="CVs & resumes- the real-life appearance."
      >
        <div className="grid md:grid-cols-[1.4fr,1fr] gap-4 items-center">
          <div className="text-sm md:text-base text-slate-100/90">
            In most organizations, applicants are put in the tall stack of
            applications and the recruiters have only a few seconds to go through
            each one of them. Their name, job titles and important skills are
            easier to find since they have clean visual layout, simple fonts and
            good spacing. Such images make me think that my CV is not only the
            text but the design that should be simple to read at the same time.
          </div>
          <div className="flex flex-col gap-3 items-center">
            <div className="rounded-2xl overflow-hidden border border-slate-600/70 bg-slate-900/60 shadow-md">
              <img
                src={imgResumeStack}
                alt="Stack of printed resumes"
                className="w-40 sm:w-48 md:w-56 h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </SectionCard>

      {/* PART 3 – CV STRUCTURE */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard tone="amber" title="CV structure – the key areas.">
          <ol className="list-decimal pl-5 space-y-1">
            <li>
              <span className="font-semibold">Header:</span> Name, phone, email,
              city; optional LinkedIn, GitHub or portfolio link.
            </li>
            <li>
              <span className="font-semibold">Profile / Summary:</span> 23 lines
              about your strengths and career objectives that are specific to the
              job.
            </li>
            <li>
              <span className="font-semibold">Experience:</span> reverse-chronological
              list Title Company Dates impact-oriented bullets.
            </li>
            <li>
              <span className="font-semibold">Education:</span> degree, institute,
              year and key work (not mandatory).
            </li>
            <li>
              <span className="font-semibold">Skills:</span> technical and soft
              skills - tell the truth about yourself.
            </li>
            <li>
              <span className="font-semibold">Projects / Achievements:</span> brief
              bullets displaying results and figures.
            </li>
            <li>
              <span className="font-semibold">Extra:</span> certifications,
              extra-curriculars, languages, and referees (not compulsory or by
              request).
            </li>
          </ol>
        </SectionCard>

        <SectionCard tone="slate" title="Layout, length & tailoring">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Use fonts the same way and make sufficient white space to read.
            </li>
            <li>
              In the case of the majority of students and fresh graduates, 12-2
              pages suffice; pay attention to the most topical information.
            </li>
            <li>
              Include action verbs and quantifiable outcomes in your bullets (e.g.,
              by 35% faster page load time).
            </li>
            <li>
              Align each CV to the job based on important skills and keywords
              posted in the job.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* PART 4 – DOs & DON'Ts */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard title="CV – things to do" tone="emerald">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Use verbs that are strong at the start and use metrics where feasible.
            </li>
            <li>
              Use plain simple layout which is both onscreen and printed.
            </li>
            <li>
              Customize every CV to the position; provide the most topical
              projects and abilities in the first place.
            </li>
            <li>Limit the document to one or two pages.</li>
          </ul>
        </SectionCard>

        <SectionCard title="CV – things to avoid" tone="slate">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Wrong spelling or grammar mistakes, extremely long paragraphs or
              small fonts.
            </li>
            <li>
              Unless it is explicitly asked, irrelevant personal information (NIC,
              marital status, photo).
            </li>
            <li>
              Ensuring that you list his responsibilities but do not demonstrate
              results or actual accomplishments.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* PART 5 – COVER LETTER (TEXT + IMAGE) */}
      <SectionCard tone="cyan" title="Cover letter – purpose & simple design">
        <div className="grid md:grid-cols-[1.6fr,1fr] gap-4 items-start">
          <div>
            <p>
              A cover letter is placed alongside your CV and details the reason
              as to why you would be in this particular position. It needs to be
              concise (one page or so) and to the point.
            </p>
            <ol className="list-decimal pl-5 mt-2 space-y-1">
              <li>
                <span className="font-semibold">Header:</span> your contact
                information, date and the information of the employer.
              </li>
              <li>
                <span className="font-semibold">Introduction:</span> state the
                job, where it was advertised and one sentence that will make the
                reader continue to read.
              </li>
              <li>
                <span className="font-semibold">Fit paragraph:</span> put the
                emphasis on 1-2 accomplishments that obviously fit the job
                requirements.
              </li>
              <li>
                <span className="font-semibold">Why them:</span> demonstrate that
                you are familiar with their products, mission or culture and
                relate it to your mission.
              </li>
              <li>
                <span className="font-semibold">Close:</span> courteous
                call-to-action with availability and an easy sign-off.
              </li>
            </ol>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={imgCoverTemplate}
              alt="Simple professional cover letter template"
              className="w-44 sm:w-52 md:w-60 lg:w-64 h-auto rounded-2xl border border-slate-600/70 bg-slate-900/60 shadow-lg"
            />
          </div>
        </div>
      </SectionCard>

      {/* PART 6 – EXAMPLES */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard title="Impact bullet examples" tone="amber">
          <ul className="list-disc pl-5 space-y-1">
            <li>Innovated React functionality that minimized user attrition by 18 percent.</li>
            <li>Selenium-based automated test suite, 40 percent faster manual QA.</li>
            <li>Headed a 4-member team in developing an e-commerce MVP within 3 weeks.</li>
          </ul>
        </SectionCard>

        <SectionCard
          title="Keywords (ATS) – sample of frontend role"
          tone="emerald"
        >
          <p>
            React, JavaScript/TypeScript, Tailwind CSS, REST/JSON, Git, CI/CD,
            Jest, Accessibility, Responsive design, API integration.
          </p>
        </SectionCard>
      </div>

      {/* PART 6b – RECRUITER VIEW IMAGE */}
      <SectionCard
        tone="slate"
        title="Recruiter perspective - going through large numbers of CVs in a short time."
      >
        <div className="grid md:grid-cols-[1.5fr,1fr] gap-4 items-center">
          <div className="text-sm md:text-base text-slate-100/90">
            Another topic that we touched upon is the fact that recruiters tend
            to compare numerous applications simultaneously. Before determining
            which CVs to retain, they search according to job titles, dates and
            key skills. This image is prompting me that my CV must be able to
            pass through this initial filter: concise subheadings, bold job titles
            and shrub points in the bullet points, would keep my document alive.
          </div>
          <div className="flex items-center justify-center">
            <img
              src={imgCvReview}
              alt="Recruiters reviewing several CVs on a desk"
              className="w-44 sm:w-52 md:w-60 lg:w-64 h-auto rounded-2xl border border-slate-600/70 bg-slate-900/60 shadow-lg"
            />
          </div>
        </div>
      </SectionCard>

      {/* PART 7 – ACTIVITIES */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard title="Activity – Career ambitions" tone="slate">
          <p className="mb-2">
            List three roles that you would prefer to perform and three that you
            would not prefer to perform and briefly justify.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>I like to be: ____________</li>
            <li>I don’t like to be: ____________</li>
          </ul>
        </SectionCard>

        <SectionCard title="Activity – Cover letter gap-fill" tone="slate">
          <p className="mb-2">
            Practice using words such as: advertised, candidate, contribute,
            apply, enclosed, opportunity.
          </p>
          <p className="text-sm">
            There is a worksheet of our class in which you are provided with a
            sample paragraph and you need to fill these words into the right
            spots.
          </p>
        </SectionCard>
      </div>

      {/* PART 8 – SELF-REFLECTION */}
      <SectionCard tone="emerald" title="My Self-Reflection (Chapter 02)">
        <p>
          Further I now know how to demonstrate my abilities and make an impact
          with figures. I would use a clean and simple design and personalize my
          CV to the job. In the case of cover letters, I will state the position,
          provide one or two good fits based on my work experience and why I
          desire that company. I will start by updating my CV with the new projects
          and requesting a friend to go through it and then apply.
        </p>
      </SectionCard>
    </div>
  );
}

// Usage: import Chapter2Section from "./Chapter2.jsx" and render <Chapter2Section /> where Chapter 02 should appear.
