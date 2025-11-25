// src/pages/chapter/Chapter9.jsx
// Dining Etiquette & Table Manners – dark glass, reorganised structure.

import React from "react";

const chips = [
  "Why table manners",
  "Place settings",
  "Bread & drinks",
  "Napkins & soup",
  "Cutlery styles",
  "Do & Don’t at table",
  "Thank-you notes",
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
    emerald: { wrap: "border-emerald-500/40 bg-emerald-950/40", title: "text-emerald-100" },
    cyan: { wrap: "border-cyan-500/40 bg-cyan-950/40", title: "text-cyan-100" },
    amber: { wrap: "border-amber-500/40 bg-amber-950/40", title: "text-amber-100" },
    slate: { wrap: "border-slate-600/60 bg-slate-950/60", title: "text-slate-100" },
    violet: { wrap: "border-violet-500/40 bg-violet-950/40", title: "text-violet-100" },
  };
  const t = tones[tone] || tones.slate;

  return (
    <div className={`rounded-2xl border ${t.wrap} p-5 md:p-6 backdrop-blur-xl shadow-lg shadow-black/40`}>
      <h3 className={`text-lg md:text-xl font-bold mb-3 ${t.title}`}>{title}</h3>
      <div className="text-slate-100/90 leading-7 text-sm md:text-base">{children}</div>
    </div>
  );
}

export default function Chapter9Section() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-slate-100">
      {/* Header */}
      <header className="mb-6 md:mb-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Chapter 09
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-50">
              Dining Etiquette & Table Manners
            </h1>
            <p className="mt-2 text-slate-300 max-w-2xl">
              Why table manners matter in professional and social settings, how to
              read a place setting, use cutlery correctly, behave politely at the
              table, and close the meal with confidence.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {chips.map((c) => (
              <Chip key={c} label={c} />
            ))}
          </div>
        </div>
      </header>

      {/* PART 1 – PURPOSE & FIRST IMPRESSIONS */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="cyan" title="Why table manners matter">
          <p className="mb-2 text-sm">
            Spending a meal is not merely eating. It is a tiny social ceremony in which we respect, put others at ease and depict our professionalism and upbringing. Individuals silently monitor our sitting position, way of talking and eating utensils.
          </p>
          <p className="text-sm">
            Dining etiquette can make us feel at ease during formal dinners, business meetings and family meetings. It exhibits courtesy to the host, the wait staff as well as all the guests at the table.
          </p>
        </SectionCard>

        <SectionCard tone="emerald" title="Reading the place setting">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Tables in the modern world are characterized by multiple dishes, glasses, and cutlery of various courses.
            </li>
            <li>
              One easy rule is to eat outwards and make her way in with every course.
            </li>
            <li>
              In most places (e.g. US style), the salad fork is positioned as far left as possible since the salad is often the first served.
            </li>
            <li>
              The charger or place plate primarily serves to shield the tablecloth and also forms an attractive and decorative undercarriage to other plates.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* PART 2 – BREAD, DRINKS, NAPKINS & SOUP */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard tone="slate" title="Bread & drinks – left or right?">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Using thumb and index finger, make a lowercase b with your left hand and a d with your right hand.
            </li>
            <li>
              This is to remind you: b = bread and d = drink on the left and right respectively.
            </li>
            <li>
              Take bread or rolls and cut them into small ones. Butter your piece, not your roll in one go.
            </li>
            <li>
              Salt and pepper are considered to be a couple. Give them with each other, by the bottom of the shakers.
            </li>
          </ul>
        </SectionCard>

        <SectionCard tone="amber" title="Napkins, soup & small details">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Wait till the host unfolds his or her napkin. and then put yours on your lap, not folded all to pieces.
            </li>
            <li>
              When eating, in informal meals, leave your napkin on the left side of your plate in stepping out. On a formal occasion, put it on your chair.
            </li>
            <li>Do not use the napkin as a tissue or conceal any undesirable food in it.</li>
            <li>
              When working with soup, the spoon should be moved softly and noiselessly away.
            </li>
            <li>
              One should only drink soup that has been served in a small cup and that has no more than clear broth left.
            </li>
            <li>
              On completion, put the spoon on the plate underneath the bowl and not the empty bowl.
            </li>
            <li>
              When one uses lemon in tea, squeeze it with one hand and shield it with the other, otherwise the juice will spurt into other guests.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* PART 3 – CUTLERY BASICS */}
      <SectionCard tone="emerald" title="Grips and dining styles for cutlery">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-1 text-sm">Two main grips</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <span className="font-semibold">Scalpel technique</span> – a knife or fork is held similar to a scalpel in the hands of a surgeon, with the tines downwards to the plate.
              </li>
              <li>
                <span className="font-semibold">Pencil method</span> – this is in form of a pencil and is placed in an easy manner between fingers.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-1 text-sm">Two dining styles</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <span className="font-semibold">Continental/ European style:</span> slice food and hold the fork in the left hand and the knife in the right hand. Eat with a downward facing fork tines.
              </li>
              <li>
                <span className="font-semibold">American style:</span> take some bites, put the knife aside, take the fork in the right hand and eat with tines up.
              </li>
            </ul>
          </div>
        </div>
      </SectionCard>

      {/* PART 4 – BEHAVIOUR AT THE TABLE */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard tone="slate" title="Good practice at the table">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Bring food, condiments and salt and pepper to the right, unless the requesting party is evidently on your left.
            </li>
            <li>
              In case of any hair or a foreign object in what you are eating, just inform the server and request another plate.
            </li>
            <li>
              Should the service be bad then talk to the manager and not yell at the server.
            </li>
            <li>
              In case you sneeze or burp, do it gently, covering the mouth, and turning away a bit. Do not attract attention to yourself.
            </li>
            <li>
              When somebody does something wrong, do not cling on that but leave it alone instead of holding him/her responsible in front of the entire table.
            </li>
          </ul>
        </SectionCard>

        <SectionCard tone="amber" title="Common mistakes to avoid">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Please, do not place knives that have been used on the table cloth. Instead rest them on the plate.
            </li>
            <li>
              Do not pick your teeth or demand a tooth pick in the presence of others. Go to the restroom if needed.
            </li>
            <li>
              Do not creep on the floor under the table to pick up dropped knives and forks. Request the server to clean the replacement.
            </li>
            <li>
              Do not shuffle place cards: the host has already decided where to sit people.
            </li>
            <li>
              There is no need to leave after you have eaten. Wait till the host has made it clear that the meal is finished.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* PART 5 – SIGNALS & ENDING THE MEAL */}
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <SectionCard tone="cyan" title="Cutlery signals – done or continuing to eat?">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <span className="font-semibold">Not finished (European style):</span> knives and forks slightly crossed, the fork tines downwards, the handles facing different sides of the plate.
            </li>
            <li>
              <span className="font-semibold">Not finished (American style):</span> the knife and fork will cut a small V with the handles on the same side lying on the same side.
            </li>
            <li>
              <span className="font-semibold">Finished (both forms):</span> knife and fork should be put in the plate (at position 4:25), with the blade turned toward the plate. This is a silent message to the waiter to empty your dish.
            </li>
          </ul>
        </SectionCard>

        <SectionCard tone="slate" title="Thank-you notes – closing with class">
          <p className="mb-2 text-sm">
            A short and genuine note of thanks is a great way to end the experience and particularly when one has gone out of his/her way to host a formal meal or assist in an event.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Start with a pleasant greeting and a definite thank you.</li>
            <li>Talk about some particular detail you liked about the meal or event.</li>
            <li>
              Send,--as soon as you can--but a late post is preferable to a letter which says nothing.
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* Self-reflection */}
      <SectionCard tone="emerald" title="My Self-Reflection (Chapter 09)">
        <p className="text-sm">
          Prior to this lesson I was familiar only with the simple manners at the table. Now I know that even minor things such as the placement of napkins, the manner in which I pass the salt and the manner in which I hold my cutlery can predetermine the perception of other people. I also understood that good etiquette does not focus on demonstrating the rules but making every person at the table feel at ease. I will be more confident using the right utensils, napkin regulations and cues on when to eat, as well as when to stop eating, in future formal dinners and company functions. I will also use short thank you messages upon sending important invitations to expressing gratitude and professionalism.
        </p>
      </SectionCard>
    </div>
  );
}
