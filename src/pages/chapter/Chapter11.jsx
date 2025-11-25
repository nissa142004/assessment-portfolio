// // src/pages/chapter/Chapter11.jsx
// // Telephone Etiquette & Customer Service – dark glass, reorganised.

// import React from "react";

// const chips = [
//   "First impressions",
//   "Answering calls",
//   "Holding & transfers",
//   "Messages & callbacks",
//   "Professional language",
//   "Handling complaints",
//   "Customer service mindset",
//   "Self-reflection",
// ];

// function Chip({ label }) {
//   return (
//     <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium border-emerald-500/40 bg-emerald-500/10 text-emerald-100">
//       <span className="h-2 w-2 rounded-full bg-emerald-400" />
//       {label}
//     </span>
//   );
// }

// function SectionCard({ title, tone = "emerald", children }) {
//   const tones = {
//     emerald: {
//       wrap: "border-emerald-500/40 bg-emerald-950/40",
//       title: "text-emerald-100",
//     },
//     cyan: {
//       wrap: "border-cyan-500/40 bg-cyan-950/40",
//       title: "text-cyan-100",
//     },
//     amber: {
//       wrap: "border-amber-500/40 bg-amber-950/40",
//       title: "text-amber-100",
//     },
//     slate: {
//       wrap: "border-slate-600/60 bg-slate-950/60",
//       title: "text-slate-100",
//     },
//     violet: {
//       wrap: "border-violet-500/40 bg-violet-950/40",
//       title: "text-violet-100",
//     },
//   };
//   const t = tones[tone] || tones.slate;

//   return (
//     <div
//       className={`rounded-2xl border ${t.wrap} p-5 md:p-6 backdrop-blur-xl shadow-lg shadow-black/40`}
//     >
//       <h3 className={`text-lg md:text-xl font-bold mb-3 ${t.title}`}>{title}</h3>
//       <div className="text-slate-100/90 leading-7 text-sm md:text-base">
//         {children}
//       </div>
//     </div>
//   );
// }

// export default function Chapter11Section() {
//   return (
//     <div className="max-w-5xl mx-auto px-4 py-8 text-slate-100">
//       {/* Header */}
//       <header className="mb-6 md:mb-8">
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
//           <div>
//             <p className="text-xs uppercase tracking-wide text-slate-400">
//               Chapter 11
//             </p>
//             <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-50">
//               Telephone Etiquette & Customer Service
//             </h1>
//             <p className="mt-2 text-slate-300 max-w-2xl">
//               A single phone call can build or damage the image of an
//               organisation. This chapter walks through how to answer, handle and
//               end calls in a polite, organised and customer-focused way.
//             </p>
//           </div>
//           <div className="flex flex-wrap gap-2">
//             {chips.map((c) => (
//               <Chip key={c} label={c} />
//             ))}
//           </div>
//         </div>
//       </header>

//       {/* PART 1 – FIRST IMPRESSION & MINDSET */}
//       <div className="grid md:grid-cols-2 gap-4 mb-6">
//         <SectionCard tone="cyan" title="Why telephone behaviour matters">
//           <ul className="list-disc pl-5 space-y-1 text-sm">
//             <li>
//               For many customers, the phone is the{" "}
//               <span className="font-semibold">first contact</span> with a
//               company.
//             </li>
//             <li>
//               In a few seconds, callers decide if we sound friendly, organised
//               and ready to help.
//             </li>
//             <li>
//               Good manners and clear support can turn a casual caller into a
//               loyal customer; weak etiquette often makes them look elsewhere.
//             </li>
//           </ul>
//         </SectionCard>

//         <SectionCard tone="emerald" title="Professional attitude on the phone">
//           <ul className="list-disc pl-5 space-y-1 text-sm">
//             <li>
//               Answer with a relaxed smile – it naturally makes your voice sound
//               warmer.
//             </li>
//             <li>
//               Sit upright and avoid eating, drinking or chewing gum during the
//               call.
//             </li>
//             <li>
//               Give the caller your full attention instead of focusing on other
//               screens or side conversations.
//             </li>
//             <li>
//               Remember that every call shapes how people see the organisation you
//               represent.
//             </li>
//           </ul>
//         </SectionCard>
//       </div>

//       {/* PART 2 – ANSWERING, GREETING & ATTENTION */}
//       <div className="grid md:grid-cols-2 gap-4 mb-6">
//         <SectionCard tone="amber" title="Answering & greeting correctly">
//           <ul className="list-disc pl-5 space-y-1 text-sm">
//             <li>
//               Try to answer the phone within{" "}
//               <span className="font-semibold">three rings</span> when possible.
//             </li>
//             <li>
//               Use a simple pattern: greeting + organisation + your name + offer
//               of help.
//               <br />
//               <span className="italic text-slate-200/90">
//                 “Good morning, SLIIT City Uni support desk, this is Senal. How
//                 may I help you?”
//               </span>
//             </li>
//             <li>
//               Speak clearly into the mouthpiece or headset, not too loud and not
//               too soft.
//             </li>
//           </ul>
//         </SectionCard>

//         <SectionCard tone="slate" title="Staying fully present on the call">
//           <ul className="list-disc pl-5 space-y-1 text-sm">
//             <li>
//               Avoid chatting with co-workers while the caller is on the line; if
//               you must check something, use the hold function and explain.
//             </li>
//             <li>
//               Keep a small notepad or message pad near you to record names,
//               numbers and key details.
//             </li>
//             <li>
//               Listen without interrupting, then summarise to confirm:
//               <span className="italic"> “So what I’m hearing is…”</span>
//             </li>
//           </ul>
//         </SectionCard>
//       </div>

//       {/* PART 3 – HOLD, TRANSFERS, MESSAGES & CALLBACKS */}
//       <div className="grid md:grid-cols-2 gap-4 mb-6">
//         <SectionCard tone="violet" title="Putting callers on hold & transfers">
//           <ol className="list-decimal pl-5 space-y-1 text-sm">
//             <li>
//               Ask first: “May I put you on hold for a moment while I check that
//               for you?”
//             </li>
//             <li>
//               Wait for their answer before pressing the hold button. Do not drop
//               them into hold without warning.
//             </li>
//             <li>
//               Check back every 30–45 seconds, thank them for waiting and offer
//               choices: continue holding, receive a call-back, or leave a message.
//             </li>
//           </ol>
//           <ol className="list-decimal pl-5 space-y-1 text-sm mt-3">
//             <li>
//               When transferring, briefly explain the reason:
//               <span className="italic">
//                 {" "}
//                 “I’ll transfer you to our finance desk who can access your
//                 account.”
//               </span>
//             </li>
//             <li>
//               If possible, speak to the next person first, confirm they can take
//               the call and share the caller’s name and issue.
//             </li>
//             <li>
//               Tell the caller who they are going to (name and extension) in case
//               the line disconnects.
//             </li>
//           </ol>
//         </SectionCard>

//         <SectionCard tone="amber" title="Messages, callbacks & voicemail">
//           <ul className="list-disc pl-5 space-y-1 text-sm">
//             <li>
//               Use a message pad so you don’t forget details when someone is
//               unavailable.
//             </li>
//             <li>
//               Record: who the message is for, caller’s name, organisation, phone
//               number, date/time and a short, clear message.
//             </li>
//             <li>
//               Mark the required action – for example “Please call”, “Will call
//               back” or “Urgent”.
//             </li>
//             <li>
//               Read back names and numbers to confirm spelling and digits.
//             </li>
//           </ul>
//           <ul className="list-disc pl-5 space-y-1 text-sm mt-3">
//             <li>
//               Try to return calls within one working day whenever possible.
//             </li>
//             <li>
//               When leaving voicemail, say your name, department, phone number,
//               brief reason for calling and the best time to reach you.
//             </li>
//             <li>
//               Keep the message short and clear so it is easy for them to call you
//               back.
//             </li>
//           </ul>
//         </SectionCard>
//       </div>

//       {/* PART 4 – LANGUAGE & TONE */}
//       <SectionCard tone="slate" title="Professional telephone language">
//         <div className="grid md:grid-cols-2 gap-4">
//           <div>
//             <h4 className="font-semibold mb-1 text-sm">Helpful phrases to use</h4>
//             <ul className="list-disc pl-5 space-y-1 text-sm">
//               <li>“How may I help you today?”</li>
//               <li>“May I put you on hold for a moment?”</li>
//               <li>“Let me check that for you.”</li>
//               <li>“Thank you for waiting.”</li>
//               <li>“I understand your concern.”</li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-semibold mb-1 text-sm">Phrases and tones to avoid</h4>
//             <ul className="list-disc pl-5 space-y-1 text-sm">
//               <li>“Hang on.” / “What?” / “Yeah…?” in a rough tone.</li>
//               <li>“That’s not my job.”</li>
//               <li>“You have to…” or “Why didn’t you…?” in a blaming way.</li>
//               <li>“It’s your problem.”</li>
//               <li>Slang, sarcasm or a bored, uninterested voice.</li>
//             </ul>
//           </div>
//         </div>
//       </SectionCard>

//       {/* PART 5 – DIFFICULT CALLERS & SERVICE MINDSET */}
//       <div className="grid md:grid-cols-2 gap-4 my-6">
//         <SectionCard tone="emerald" title="Handling angry or upset callers">
//           <ol className="list-decimal pl-5 space-y-1 text-sm">
//             <li>Stay calm and let them talk without interrupting at first.</li>
//             <li>
//               Show empathy: “I’m sorry this happened; let’s see what we can do
//               about it.”
//             </li>
//             <li>
//               Take notes and repeat back the main points so they know you have
//               understood.
//             </li>
//             <li>
//               Focus on possible solutions and next steps instead of blaming other
//               staff or departments.
//             </li>
//             <li>
//               If you need help, clearly explain what you will do and who you will
//               contact on their behalf.
//             </li>
//           </ol>
//         </SectionCard>

//         <SectionCard tone="violet" title="Customer service mindset on the phone">
//           <ul className="list-disc pl-5 space-y-1 text-sm">
//             <li>
//               Try to go one step further – do not just transfer; guide or solve
//               as much as you can.
//             </li>
//             <li>
//               Treat every caller as important, even if the question is very
//               simple.
//             </li>
//             <li>
//               If you do not know something, be honest, then promise to find out
//               and call back.
//             </li>
//             <li>
//               End with a positive closing: “Thank you for calling, have a nice
//               day.”
//             </li>
//           </ul>
//         </SectionCard>
//       </div>

//       {/* Self-reflection */}
//       <SectionCard tone="emerald" title="My Self-Reflection (Chapter 11)">
//         <p className="text-sm">
//           This lesson changed how I think about phone calls. Earlier I picked up
//           the phone without paying much attention to my tone, greeting or follow
//           up. Now I realise that the caller forms a picture of me and my
//           organisation in the first few seconds. I learned concrete habits such
//           as asking before putting someone on hold, using respectful phrases
//           instead of blaming language, and taking complete, accurate messages. In
//           my future work I want to practise smiling before I answer, listening
//           fully, and closing each call with a clear action plan and a polite
//           thank you so that callers feel respected and well supported.
//         </p>
//       </SectionCard>
//     </div>
//   );
// }
