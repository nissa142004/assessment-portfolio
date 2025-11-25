// src/pages/chapter/Chapter8.jsx
// Emotional Intelligence – dark / glass theme, portfolio style

import React from "react";

const chips = [
  "Emotions",
  "Brain & EQ vs IQ",
  "Hard-wired vs learned",
  "Understanding emotions",
  "Managing emotions",
  "Health & decisions",
  "Self-reflection",
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

export default function Chapter8Section() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-slate-100">
      {/* Header */}
      <header className="mb-6 md:mb-8">
        <p className="text-xs uppercase tracking-wide text-slate-400">Chapter 08</p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-50">
          Emotional Intelligence (EI)
        </h1>
        <p className="mt-2 text-slate-300">
          This lesson discussed the nature of emotions and the way the brain processes them, and how emotional
          intelligence helps us to study, work, and maintain relationships and make our daily decisions.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <Chip key={c} label={c} />
          ))}
        </div>
      </header>

      {/* 1. Emotions basics – what they are + 3 parts */}
      <SectionCard tone="cyan" title="What are emotions – and what do they include?">
        <p className="mb-3 text-sm md:text-base">
          A feeling is a complicated mental condition. It is not only a mood but it encompasses our internal feelings, body processes and our external behaviors.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>
            <span className="font-semibold">Feeling / subjective experience</span> – the inner feeling (sad, happy, angry, afraid, etc.).
          </li>
          <li>
            <span className="font-semibold">Physiological response</span> – body actions like heartbeats, sweat or tight muscles or butterflies in the stomach.
          </li>
          <li>
            <span className="font-semibold">Behavioural / social response</span> – Facial expression, tone of voice, posture, actions we perform.
          </li>
        </ul>
      </SectionCard>

      {/* 2. Hard-wired vs learned emotions – side-by-side */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard tone="emerald" title="Hard-wired emotions">
          <p className="mb-2 text-sm">
            There are emotions that are inbuilt. They are present in every culture and assisted the humans to survive.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <span className="font-semibold">Basic/ hard-wired:</span> sadness, joy, disgust, anger, surprise, fear.
            </li>
            <li>
              These are quick and overwhelming reactions particularly during a crisis or intense social circumstances.
            </li>
          </ul>
        </SectionCard>

        <SectionCard tone="slate" title="Taught & social emotions">
          <p className="mb-2 text-sm">
            Family, culture, religion and personal experience influence other emotions.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <span className="font-semibold">The learned / social emotions:</span> humility, forgiveness, empathy, optimism, compassion, shame, pride, gratitude.
            </li>
            <li>
              You can become emotional when we see role models and consider what should we do or what are our values.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* 3. Brain + EQ vs IQ */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard tone="amber" title="The emotional brain – who is driving?">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <span className="font-semibold">Limbic system and amygdala:</span> emotion centre of the brain; forms fast reactions of fighting, fleeing or freezing.
            </li>
            <li>
              <span className="font-semibold">Prefrontal cortex:</span> the “CEO- planning, judging and controlling.
            </li>
            <li>
              Amygdala may be more active than prefrontal cortex during teenage years. That is the reason that moods and behaviour at times do fluctuate rapidly.
            </li>
          </ul>
        </SectionCard>

        <SectionCard tone="slate" title="EQ vs IQ – both matter">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <span className="font-semibold">IQ</span> – thinking skills: logic, memory and problem solving. It assists us to study scholarly information.
            </li>
            <li>
              <span className="font-semibold">EQ / EI</span> – the possibility to detect, perceive, and cope with feelings in others and ourselves to achieve healthy results.
            </li>
            <li>IQ tends to introduce us into a field, whereas EI tends to develop, guide, and manage people.</li>
            <li>The EI can be trained and developed at any age through practice.</li>
          </ul>
        </SectionCard>
      </div>

      {/* 4. EI abilities – re-framed list */}
      <SectionCard tone="emerald" title="Four Emotional Intelligence core competencies">
        <ol className="list-decimal pl-5 space-y-1 text-sm">
          <li>
            <span className="font-semibold">Recognizing emotions</span> – seeing how someone feels and the way they express it: on their face, in their voice, their body language, and their words.
          </li>
          <li>
            <span className="font-semibold">Feeling emotions</span> – trying to employ them to make you focused, motivated, and creative (e.g. having slightly more stress to study).
          </li>
          <li>
            <span className="font-semibold">Becoming aware of emotions</span> – learning what provokes some feelings, ways in which feelings combine, and their development.
          </li>
          <li>
            <span className="font-semibold">Dealing with emotions</span> – always being willing to feel but responding rationally with restraint rather than blindly.
          </li>
        </ol>
      </SectionCard>

      {/* 5. Health, others, and decisions */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard tone="cyan" title="Emotions, health & people around us">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Long-term negative states (such as anger, fear, or stress) lasting over the long term may harm the heart and even the immune system.
            </li>
            <li>Favorable feelings contribute to improved physical well-being and relationships.</li>
            <li>
              Feelings are also infectious, and our mood can be transferred to friends, relatives, and peers (emotional contagion).
            </li>
          </ul>
        </SectionCard>

        <SectionCard tone="amber" title="Gut feelings and decision making">
          <p className="mb-2 text-sm">
            There is a great deal of work done behind the scenes in the brain before we settle our mind. A gut feeling is usually a quick emotional overview of the risks, rewards and past experiences.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>The brain is fast to evaluate the past performance and the feel of each choice.</li>
            <li>
              Each of the options has an emotion, good, bad, dangerous or exciting, and it is emotion that determines our ultimate decision.
            </li>
            <li>
              Good decisions tend to be amalgamation of both emotion and thought: neither all feeling, nor all logic.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* 6. Managing emotions – steps + EI at uni/work */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard tone="violet" title="Managing strong emotions – step-by-step">
          <ol className="list-decimal pl-5 space-y-1 text-sm">
            <li>
              <span className="font-semibold">Pause</span> – notice the feeling and name it (e.g. “I feel angry and embarrassed”).
            </li>
            <li>
              <span className="font-semibold">Breathe & ground</span> – slow breathing, take a stroll, stretch or drink water.
            </li>
            <li>
              <span className="font-semibold">Think</span> – ask: what is the cause of this? what is the actual problem? what do I want to achieve?
            </li>
            <li>
              <span className="font-semibold">Make a choice</span> – talk medicine, take a break or say I instead of blame.
            </li>
            <li>
              <span className="font-semibold">Reflect afterwards</span> – what did I know and what will I do better the next time?
            </li>
          </ol>
        </SectionCard>

        <SectionCard tone="slate" title="Why EI matters at university and work">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Improves collaboration, conflict resolution, and relations with customers.</li>
            <li>Supports leadership – knowledge of people, how to motivate them and remain calm when there is pressure.</li>
            <li>
              Allows a person to deal with stress related to exams, deadlines, internships and new settings in a safer and more effective way.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* 7. Self-reflection */}
      <SectionCard tone="emerald" title="My Self-Reflection (Chapter 08)">
        <p className="text-sm">
          The chapter made me understand that emotions are not haphazard, they have patterns in the brain and the body. I realised that at times I use emotion first and then think later particularly when I feel stressed or criticised. I would like to stop now and label my emotions and react more effectively than I did before, becoming outbursting or closing down. I would also like to empathize by putting myself in the other individual mindset and inquiring about what the person may be thinking prior to uttering a word. The development of emotional intelligence will enable me to become more effective in teams, cope with exam stress, and better prepared to real-life situations at the workplace in the future.
        </p>
      </SectionCard>
    </div>
  );
}
