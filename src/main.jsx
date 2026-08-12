import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  BookOpenCheck,
  BrainCircuit,
  Building2,
  Check,
  ChevronDown,
  FileCheck2,
  Globe2,
  LockKeyhole,
  Menu,
  ShieldCheck,
  Sparkles,
  X
} from "lucide-react";
import heroImage from "../assets/alpha-source-governance-hero.webp";
import "./styles.css";

const copy = {
  en: {
    nav: ["Services", "Control model", "Proof", "Contact"],
    eyebrow: "Mexico-based AI governance boutique",
    headline: "Alpha Source",
    subhead: "AI governance, security controls, and implementation assurance for companies adopting AI in real operations.",
    primary: "Request an AI control assessment",
    secondary: "Open the labs console",
    intro:
      "We help executive, legal, security, and operations teams move from improvised AI usage to a governed operating model with owners, approvals, evidence, and measurable controls.",
    problem: "The risk is not using AI. The risk is scaling it without a control system.",
    contact: "Book a focused introduction",
    email: "contacto@alphasource.com.mx",
    translate: "Auto translate",
    choose: "Choose language"
  },
  es: {
    nav: ["Servicios", "Modelo de control", "Evidencia", "Contacto"],
    eyebrow: "Boutique mexicana de gobernanza de IA",
    headline: "Alpha Source",
    subhead: "Gobernanza de IA, controles de seguridad y aseguramiento de implementación para empresas que adoptan IA en operación real.",
    primary: "Solicitar diagnóstico de control",
    secondary: "Abrir consola labs",
    intro:
      "Ayudamos a equipos ejecutivos, legales, de seguridad y operación a pasar de un uso improvisado de IA a un modelo gobernado con responsables, aprobaciones, evidencia y controles medibles.",
    problem: "El riesgo no es usar IA. El riesgo es escalarla sin un sistema de control.",
    contact: "Agenda una introducción enfocada",
    email: "contacto@alphasource.com.mx",
    translate: "Traducir",
    choose: "Elegir idioma"
  }
};

const services = [
  {
    icon: ShieldCheck,
    title: "AI Control Plan Sprint",
    text: "A 2-4 week operating-control package for AI use-case inventory, ownership, approvals, and executive action planning.",
    points: ["Use-case inventory", "Risk and control matrix", "Approval lanes", "Executive roadmap"]
  },
  {
    icon: LockKeyhole,
    title: "AI Security Assessment",
    text: "Technical review for copilots, chatbots, agents, and AI workflows with data, identity, prompt-injection, and vendor exposure.",
    points: ["Prompt-injection review", "Data handling", "Identity posture", "Remediation priorities"]
  },
  {
    icon: FileCheck2,
    title: "Fractional AI Governance",
    text: "Ongoing governance operations for new use cases, vendors, exceptions, customer assurance, and leadership reporting.",
    points: ["Use-case review", "Vendor diligence", "Evidence packs", "Monthly risk posture"]
  }
];

const frameworkRows = [
  ["NIST AI RMF", "Govern, Map, Measure, Manage"],
  ["ISO/IEC 42001", "AI management-system controls"],
  ["ISO/IEC 27001", "Security control integration"],
  ["NIST GenAI Profile", "Generative-AI abuse and content risks"]
];

function initAnalytics() {
  const measurementId = document.querySelector('meta[name="google-analytics-id"]')?.content?.trim();
  if (!/^G-[A-Z0-9]+$/.test(measurementId || "")) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", measurementId);
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);
}

function App() {
  const [language, setLanguage] = useState("en");
  const [open, setOpen] = useState(false);
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    initAnalytics();
  }, []);

  const translateOptions = useMemo(
    () => [
      ["ru", "Русский"],
      ["pt", "Português"],
      ["fr", "Français"],
      ["de", "Deutsch"],
      ["it", "Italiano"],
      ["ja", "日本語"],
      ["ko", "한국어"],
      ["zh-CN", "中文简体"],
      ["zh-TW", "中文繁體"]
    ],
    []
  );

  function openTranslate(targetLanguage) {
    if (!targetLanguage) return;
    const url = new URL("https://translate.google.com/translate");
    url.searchParams.set("sl", language);
    url.searchParams.set("tl", targetLanguage);
    url.searchParams.set("u", window.location.hostname === "localhost" ? "https://alphasource.com.mx/" : window.location.href);
    window.open(url.toString(), "_blank", "noopener,noreferrer");
  }

  return (
    <div className="site">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Alpha Source home">
          <span className="brand-mark">AS</span>
          <span>
            <strong>Alpha Source</strong>
            <small>AI governance control room</small>
          </span>
        </a>

        <button className="icon-button menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={open ? "nav is-open" : "nav"} aria-label="Primary navigation">
          <a href="#services">{t.nav[0]}</a>
          <a href="#model">{t.nav[1]}</a>
          <a href="#proof">{t.nav[2]}</a>
          <a href="#contact">{t.nav[3]}</a>
        </nav>

        <div className="tools">
          <div className="segmented" aria-label="Language">
            <button className={language === "en" ? "active" : ""} type="button" onClick={() => setLanguage("en")}>
              EN
            </button>
            <button className={language === "es" ? "active" : ""} type="button" onClick={() => setLanguage("es")}>
              ES
            </button>
          </div>
          <label className="translate">
            <Globe2 size={16} />
            <span>{t.translate}</span>
            <select aria-label="Translate this site with Google Translate" defaultValue="" onChange={(event) => openTranslate(event.target.value)}>
              <option value="">{t.choose}</option>
              {translateOptions.map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <img className="hero-media" src={heroImage} alt="" />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.headline}</h1>
            <p className="hero-lead">{t.subhead}</p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                {t.primary}
                <ArrowRight size={18} />
              </a>
              <a className="button secondary" href="https://labs.alphasource.com.mx/#dashboard">
                {t.secondary}
                <Blocks size={18} />
              </a>
            </div>
            <div className="hero-status" aria-label="Control signals">
              <span>
                <BadgeCheck size={16} /> Governance
              </span>
              <span>
                <ShieldCheck size={16} /> Security
              </span>
              <span>
                <BookOpenCheck size={16} /> Evidence
              </span>
            </div>
          </div>
        </section>

        <section className="thesis">
          <p>{t.intro}</p>
          <strong>{t.problem}</strong>
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <p className="eyebrow">Productized advisory</p>
            <h2>Focused offers for companies that already feel AI risk</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service" key={service.title}>
                <service.icon size={26} />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul>
                  {service.points.map((point) => (
                    <li key={point}>
                      <Check size={15} /> {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section model" id="model">
          <div className="section-heading">
            <p className="eyebrow">Control model</p>
            <h2>From inventory to board-ready evidence</h2>
          </div>
          <div className="operating-line" aria-label="Alpha Source control model">
            {["Discover", "Classify", "Control", "Approve", "Evidence"].map((step, index) => (
              <div className="step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="section proof" id="proof">
          <div>
            <p className="eyebrow">Framework backbone</p>
            <h2>Aligned to governance and security standards without turning delivery into paperwork</h2>
          </div>
          <div className="framework-table">
            {frameworkRows.map(([name, focus]) => (
              <div className="framework-row" key={name}>
                <strong>{name}</strong>
                <span>{focus}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div>
            <p className="eyebrow">Next step</p>
            <h2>{t.contact}</h2>
            <p>Start with one AI Control Plan Sprint, then convert the control model into a repeatable governance operating rhythm.</p>
          </div>
          <a className="button primary" href={`mailto:${t.email}?subject=Alpha%20Source%20AI%20control%20assessment`}>
            <Sparkles size={18} />
            {t.email}
          </a>
        </section>
      </main>

      <footer className="footer">
        <span>Alpha Source</span>
        <span>Mexico-based AI governance and security controls</span>
        <a href="https://labs.alphasource.com.mx/#dashboard">
          Labs <ChevronDown size={14} />
        </a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
