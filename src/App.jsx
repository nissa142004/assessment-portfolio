import { useEffect, useMemo, useRef, useState } from "react";
import Home from "./pages/Home.jsx";
import Chapter1Section from "./pages/chapter/Chapter1.jsx";
import Chapter2Section from "./pages/chapter/Chapter2.jsx";
import Chapter3Section from "./pages/chapter/Chapter3.jsx";
import Chapter4Section from "./pages/chapter/Chapter4.jsx";
import Chapter5Section from "./pages/chapter/Chapter5.jsx";
import Chapter6Section from "./pages/chapter/Chapter6.jsx";
import Chapter7Section from "./pages/chapter/Chapter7.jsx";
import Chapter8Section from "./pages/chapter/Chapter8.jsx";
import Chapter9Section from "./pages/chapter/Chapter9.jsx";
// import Chapter10Section from "./pages/chapter/Chapter10.jsx";
// import Chapter11Section from "./pages/chapter/Chapter11.jsx";

// 🔹 Main app: switches between Home, Portfolio, and CV
function App() {
  const [view, setView] = useState("home"); // "home" | "portfolio" | "cv"

  if (view === "home") {
    return (
      <Home
        onEnterPortfolio={() => setView("portfolio")}
        onViewCV={() => setView("cv")}
      />
    );
  }

  // if (view === "cv") {
  //   return (
  //     <CVPage
  //       onBackHome={() => setView("home")}
  //       onGoPortfolio={() => setView("portfolio")}
  //     />
  //   );
  // }

  // portfolio view
  return (
    <AssessmentPortfolio
      onBackHome={() => setView("home")}
    />
  );
}

// 🌑 Dark transparent theme + Top Navigation Layout
function AssessmentPortfolio({ onBackHome, onGoCV }) {
  const chapters = useMemo(
    () => [
      { id: "ch1", title: "Introduction to Professional Skills", body: sampleIntro },
      { id: "ch2", title: "CV & Cover Letter", body: "/." },
      { id: "ch3", title: "Job Hunting & Interview Skills", body: "/" },
      { id: "ch4", title: "Portfolio Management", body: "/" },
      { id: "ch5", title: "Research Paper Writing", body: "/" },
      { id: "ch6", title: "Project Proposal Writing & Evaluation", body: "/" },
      { id: "ch7", title: "Food Festival – Ralahami Kadée", body: "/" },
      { id: "ch8", title: "Emotional Intelligence (EI)", body: "/" },
      { id: "ch9", title: "Dining Etiquette & Table Manners", body: "/" },
      // { id: "ch10", title: "Email & Online Etiquette", body: "Professional behaviour in formal settings." },
      // { id: "ch11", title: "Research Writing", body: "Plagiarism-free writing, citations, sources." },
    ],
    []
  );

  const [active, setActive] = useState("ch1");
  const [navOpen, setNavOpen] = useState(true); // collapsible nav
  const sectionRefs = useRef({});

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    chapters.forEach(
      (c) => sectionRefs.current[c.id] && obs.observe(sectionRefs.current[c.id])
    );

    return () => obs.disconnect();
  }, [chapters]);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div
      id="top"
      className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100"
    >
      {/* 🌟 TOP NAVIGATION BAR + COLLAPSIBLE CHAPTER BAR */}
      <header className="sticky top-0 z-40 bg-slate-950/30 backdrop-blur-2xl">
        {/* full-width container */}
        <div className="w-full px-3 md:px-6 pt-2 pb-1 flex flex-col gap-2">
          {/* Brand + small summary + chapter counter */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-emerald-400 via-cyan-400 to-sky-500 flex items-center justify-center text-xs font-bold text-slate-950 shadow-md shadow-emerald-400/40">
                PS
              </div>
              <div className="text-left">
                <h1 className="text-sm md:text-base font-semibold tracking-tight">
                  Assessment Portfolio – PS Module
                </h1>
                <p className="text-[10px] md:text-xs text-slate-300">
                  Scroll through each chapter to see  learnings, reflections and activities.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* 🔙 Back to Home button */}
              {onBackHome && (
                <button
                  onClick={onBackHome}
                  className="hidden sm:inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-[11px] font-medium text-slate-100 hover:border-emerald-400 hover:text-emerald-200 hover:bg-slate-900/90 transition-all"
                >
                  Home
                </button>
              )}

              {/* 📄 View CV button */}
              {onGoCV && (
                <button
                  onClick={onGoCV}
                  className="hidden sm:inline-flex items-center gap-1 rounded-full border border-emerald-500 bg-emerald-400/90 px-3 py-1 text-[11px] font-medium text-slate-950 hover:bg-emerald-300 hover:border-emerald-300 transition-all"
                >
                  View CV
                </button>
              )}

              <div className="hidden sm:flex flex-col items-end text-[10px] md:text-xs text-slate-300">
                <span className="font-semibold text-emerald-300">
                  {chapters.findIndex((c) => c.id === active) + 1} / {chapters.length}
                </span>
                <span>Active chapter</span>
              </div>

              {/* Collapse toggle */}
              <button
                onClick={() => setNavOpen((o) => !o)}
                className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-[11px] font-medium text-slate-100 hover:border-emerald-400 hover:text-emerald-200 hover:bg-slate-900/90 transition-all"
              >
                <span>Chapters</span>
                <span
                  className={
                    "transition-transform duration-200 text-xs " +
                    (navOpen ? "rotate-180" : "")
                  }
                >
                  ▲
                </span>
              </button>
            </div>
          </div>

          {/* Collapsible container */}
          <div
            className={
              "overflow-hidden transition-[max-height] duration-300 " +
              (navOpen ? "max-h-16 md:max-h-20 mt-2" : "max-h-0")
            }
          >
            {/* full-width “glass” chapter bar */}
            <nav className="nav-scroll w-full flex items-center gap-2 overflow-x-auto px-2 py-1.5 bg-slate-900/55 border-y border-slate-800/80 backdrop-blur-2xl shadow-xl shadow-black/40 ring-1 ring-emerald-400/10">
              {chapters.map((c, idx) => (
                <button
                  key={c.id}
                  onClick={() => scrollTo(c.id)}
                  className={
                    "snap-start flex items-center gap-1.5 px-3 md:px-4 py-1.5 rounded-full text-[11px] md:text-xs font-medium border transition-all whitespace-nowrap " +
                    (active === c.id
                      ? "bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 border-transparent shadow-md shadow-emerald-400/50 scale-[1.02]"
                      : "bg-white/5 text-slate-200 border-slate-700/70 hover:bg-white/10 hover:border-emerald-400/70 hover:text-emerald-200 hover:shadow-sm")
                  }
                >
                  {/* JUST SHOW CHAPTER X */}
                  <span className="uppercase tracking-wide">
                    CHAPTER {idx + 1}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* 🌟 CONTENT AREA */}
      <main className="mx-auto w-full max-w-[1600px] px-2 md:px-4 pb-24 pt-6 md:pt-8">
        {chapters.map((c) => {
          const setRef = (el) => (sectionRefs.current[c.id] = el);

          const cardClasses =
            "scroll-mt-40 md:scroll-mt-44 rounded-3xl bg-white/5 backdrop-blur-2xl border border-slate-800 " +
            "shadow-xl hover:shadow-2xl hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition-all p-4 md:p-8 mb-10 " +
            "min-h-[70vh] md:min-h-[80vh] flex flex-col text-slate-100";

          if (c.id === "ch1") {
            return (
              <article key="ch1" id="ch1" ref={setRef} className={cardClasses}>
                <Chapter1Section />
              </article>
            );
          }

          if (c.id === "ch2") {
            return (
              <article key="ch2" id="ch2" ref={setRef} className={cardClasses}>
                <Chapter2Section />
              </article>
            );
          }

          if (c.id === "ch3") {
            return (
              <article key="ch3" id="ch3" ref={setRef} className={cardClasses}>
                <Chapter3Section />
              </article>
            );
          }

          if (c.id === "ch4") {
            return (
              <article key="ch4" id="ch4" ref={setRef} className={cardClasses}>
                <Chapter4Section />
              </article>
            );
          }

          if (c.id === "ch5") {
            return (
              <article key="ch5" id="ch5" ref={setRef} className={cardClasses}>
                <Chapter5Section />
              </article>
            );
          }

          if (c.id === "ch6") {
            return (
              <article key="ch6" id="ch6" ref={setRef} className={cardClasses}>
                <Chapter6Section />
              </article>
            );
          }

          if (c.id === "ch7") {
            return (
              <article key="ch7" id="ch7" ref={setRef} className={cardClasses}>
                <Chapter7Section />
              </article>
            );
          }

          if (c.id === "ch8") {
            return (
              <article key="ch8" id="ch8" ref={setRef} className={cardClasses}>
                <Chapter8Section />
              </article>
            );
          }

          if (c.id === "ch9") {
            return (
              <article key="ch9" id="ch9" ref={setRef} className={cardClasses}>
                <Chapter9Section />
              </article>
            );
          }

          // if (c.id === "ch10") {
          //   return (
          //     <article key="ch10" id="ch10" ref={setRef} className={cardClasses}>
          //       <Chapter10Section />
          //     </article>
          //   );
          // }

          // if (c.id === "ch11") {
          //   return (
          //     <article key="ch11" id="ch11" ref={setRef} className={cardClasses}>
          //       <Chapter11Section />
          //     </article>
          //   );
          // }

          // Fallback (not really used)
          return (
            <article key={c.id} id={c.id} ref={setRef} className={cardClasses}>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{c.title}</h2>
              <p className="text-sm text-slate-300 mb-4">Chapter overview</p>
              <p className="text-sm md:text-base text-slate-100">{c.body}</p>
            </article>
          );
        })}
      </main>

      <ReadingProgress />
    </div>
  );
}

function ReadingProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const st = window.scrollY;
      const h =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setPct((st / h) * 100);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const size = Math.round(pct);

  return (
    <div className="fixed bottom-6 right-6 hidden md:flex items-center gap-3">
      <div className="flex items-center gap-2 rounded-full bg-slate-950/85 backdrop-blur-2xl border border-slate-700 shadow-xl shadow-emerald-500/30 px-3 py-2">
        <div className="h-2 w-40 rounded-full bg-slate-800 overflow-hidden">
          <div
            className="h-2 bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 transition-[width] duration-150"
            style={{ width: pct + "%" }}
          />
        </div>
        <span className="text-[11px] font-semibold text-slate-100">
          {size}% read
        </span>
      </div>
    </div>
  );
}

const sampleIntro = `Professional skills include teamwork, leadership, problem solving, and communication. These skills help us grow in any workplace because they are transferable. Our first lecture covered how values, beliefs, and attitudes shape our character and behaviour.`;

export default App;
