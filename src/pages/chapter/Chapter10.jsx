// // src/pages/chapter/Chapter10.jsx
// // Email & Online Etiquette – dark glass, reorganised, simple English.

// import React from "react";

// const chips = [
//   "Why etiquette",
//   "Subject lines",
//   "Greetings & closings",
//   "Confidential info",
//   "Tone & grammar",
//   "Reply / Reply all",
//   "Online & social media",
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

// export default function Chapter10Section() {
//   return (
//     <div className="max-w-5xl mx-auto px-4 py-8 text-slate-100">
//       {/* Header */}
//       <header className="mb-6 md:mb-8">
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
//           <div>
//             <p className="text-xs uppercase tracking-wide text-slate-400">
//               Chapter 10
//             </p>
//             <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-50">
//               Email & Online Etiquette
//             </h1>
//             <p className="mt-2 text-slate-300 max-w-2xl">
//               This lesson covered the basic rules for writing professional
//               emails and behaving wisely online. It showed how even one careless
//               message or post can affect our studies, career and long–term
//               reputation.
//             </p>
//           </div>
//           <div className="flex flex-wrap gap-2">
//             {chips.map((c) => (
//               <Chip key={c} label={c} />
//             ))}
//           </div>
//         </div>
//       </header>

//       {/* PART 1 – WHY ETIQUETTE & DIGITAL IMAGE */}
//       <div className="grid md:grid-cols-2 gap-4 mb-6">
//         <SectionCard tone="cyan" title="Why email & online etiquette matter">
//           <p className="text-sm">
//             Etiquette means the expected rules of behaviour in a given time and
//             place. In email and online spaces, people often see our words
//             <span className="font-semibold"> before they meet us in person</span>.
//             Lecturers, employers and team-mates form opinions from how we write
//             and what we share. Good etiquette shows that we are respectful,
//             mature and ready for the workplace.
//           </p>
//         </SectionCard>

//         <SectionCard tone="slate" title="Your digital first impression">
//           <ul className="list-disc pl-5 space-y-1 text-sm">
//             <li>
//               Emails, posts and comments can be saved, screenshotted and
//               forwarded.
//             </li>
//             <li>
//               A single unprofessional message can damage trust with lecturers or
//               future managers.
//             </li>
//             <li>
//               A clear, polite email or post, on the other hand, can build a
//               strong, professional image.
//             </li>
//           </ul>
//         </SectionCard>
//       </div>

//       {/* PART 2 – 7 BASIC EMAIL RULES */}
//       <SectionCard tone="emerald" title="Seven basic rules for professional email">
//         <ul className="list-disc pl-5 space-y-1 text-sm">
//           <li>
//             <span className="font-semibold">Always include a subject</span> and
//             use the person’s name and correct title in the greeting.
//           </li>
//           <li>
//             <span className="font-semibold">Avoid writing in ALL CAPITALS</span>;
//             it looks like shouting and feels aggressive.
//           </li>
//           <li>
//             <span className="font-semibold">
//               Do not send confidential information
//             </span>{" "}
//             such as bank details, ID numbers or medical data.
//           </li>
//           <li>
//             <span className="font-semibold">
//               Use abbreviations and emoticons carefully
//             </span>{" "}
//             – they may be misunderstood and look unprofessional in formal emails.
//           </li>
//           <li>
//             <span className="font-semibold">THINK before sending</span>: could
//             this email hurt, embarrass or offend someone if they read it later?
//           </li>
//           <li>
//             <span className="font-semibold">Keep grammar and spelling correct</span>;
//             email is not the same as a quick text message.
//           </li>
//           <li>
//             <span className="font-semibold">
//               Avoid forwarding unnecessary emails
//             </span>{" "}
//             and chain messages that waste other people’s time.
//           </li>
//         </ul>
//       </SectionCard>

//       {/* PART 3 – STRUCTURE + TONE & ADDRESS */}
//       <div className="grid md:grid-cols-2 gap-4 my-6">
//         <SectionCard tone="slate" title="Professional email structure (simple template)">
//           <ul className="list-disc pl-5 space-y-1 text-sm">
//             <li>
//               <span className="font-semibold">To:</span> use the correct email
//               address of the person you are writing to.
//             </li>
//             <li>
//               <span className="font-semibold">Subject line:</span> short phrase
//               that clearly summarises the main purpose.
//             </li>
//             <li>
//               <span className="font-semibold">Greeting:</span> formal greetings
//               such as “Dear Ms./Mr./Dr. …” in academic and work emails.
//             </li>
//             <li>
//               <span className="font-semibold">Body:</span> clear paragraphs,
//               full sentences, no slang or angry language.
//             </li>
//             <li>
//               <span className="font-semibold">Closing:</span> “Best regards,”
//               “Kind regards,” “Sincerely,” and similar phrases.
//             </li>
//             <li>
//               <span className="font-semibold">Signature:</span> your full name
//               and, if needed, course, phone number and a professional email
//               address.
//             </li>
//           </ul>
//         </SectionCard>

//         <SectionCard tone="amber" title="Tone, address and checks before you send">
//           <div className="space-y-3">
//             <div>
//               <h4 className="font-semibold mb-1 text-sm">Tone & address</h4>
//               <ul className="list-disc pl-5 space-y-1 text-sm">
//                 <li>
//                   Use a professional email ID (for example{" "}
//                   <span className="italic">
//                     firstname.lastname@gmail.com
//                   </span>
//                   ), not a funny nickname.
//                 </li>
//                 <li>
//                   Be polite and respectful – ask for help instead of demanding.
//                 </li>
//                 <li>
//                   In formal emails, avoid lots of exclamation marks and emotional
//                   language.
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-1 text-sm">Before pressing “Send”</h4>
//               <ul className="list-disc pl-5 space-y-1 text-sm">
//                 <li>
//                   Run spell-check and read the email once more from top to
//                   bottom.
//                 </li>
//                 <li>
//                   Check that the subject, greeting, closing and attachments are
//                   all correct.
//                 </li>
//                 <li>
//                   Make sure you chose{" "}
//                   <span className="font-semibold">“Reply”</span> or{" "}
//                   <span className="font-semibold">“Reply all”</span> correctly.
//                 </li>
//                 <li>
//                   If you wrote the email while feeling angry, save it, take a
//                   break and read it again later before sending.
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </SectionCard>
//       </div>

//       {/* PART 4 – ONLINE / CLASSROOM & SOCIAL MEDIA */}
//       <div className="grid md:grid-cols-2 gap-4 my-6">
//         <SectionCard tone="cyan" title="Online classroom & office etiquette">
//           <ul className="list-disc pl-5 space-y-1 text-sm">
//             <li>
//               Use respectful language in chats, forums and group emails – as if
//               you are speaking in front of the class.
//             </li>
//             <li>
//               Do not spam academic or work group chats with memes or unrelated
//               messages.
//             </li>
//             <li>
//               In online meetings, follow camera and microphone rules; avoid
//               multitasking and side conversations.
//             </li>
//           </ul>
//         </SectionCard>

//         <SectionCard tone="violet" title="Social media & your digital footprint">
//           <ul className="list-disc pl-5 space-y-1 text-sm">
//             <li>
//               Universities and employers may look at public social media before
//               offering scholarships, internships or jobs.
//             </li>
//             <li>
//               Inappropriate photos, posts or comments can harm your reputation or
//               even cost you an opportunity.
//             </li>
//             <li>
//               Use social media to build a positive personal brand – share
//               projects, achievements and interests in a responsible way.
//             </li>
//           </ul>
//         </SectionCard>
//       </div>

//       {/* Self-reflection */}
//       <SectionCard tone="emerald" title="My Self-Reflection (Chapter 10)">
//         <p className="text-sm">
//           From this session I understood that email and online posts are not
//           private chats that disappear – they can be saved and read again in the
//           future. Earlier I did not always pay attention to subject lines,
//           greetings or how my tone might sound to a lecturer or manager. Now I
//           see that a single careless email or social media post can affect my
//           relationships with lecturers, friends and future employers. Going
//           forward, I plan to use clear subjects, formal greetings and proper
//           grammar in academic and work emails. Before I send or post anything, I
//           want to pause and ask myself whether I would be comfortable if a
//           lecturer, manager or parent read it later.
//         </p>
//       </SectionCard>
//     </div>
//   );
// }
