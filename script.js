function initGoogleAnalytics() {
  const measurementId = document
    .querySelector('meta[name="google-analytics-id"]')
    ?.content?.trim();

  if (!/^G-[A-Z0-9]+$/.test(measurementId || "")) {
    return;
  }

  window.dataLayer = window.dataLayer || [];

  function gtag() {
    window.dataLayer.push(arguments);
  }

  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", measurementId);

  const analyticsScript = document.createElement("script");
  analyticsScript.async = true;
  analyticsScript.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(analyticsScript);
}

initGoogleAnalytics();

function initGoogleTranslateLinks() {
  const select = document.getElementById("google_translate_select");

  if (!select) {
    return;
  }

  select.addEventListener("change", () => {
    if (!select.value) {
      return;
    }

    const isLocalPreview = ["localhost", "127.0.0.1", "0.0.0.0"].includes(window.location.hostname);
    const sourceUrl = isLocalPreview ? "https://alphasource.com.mx/" : window.location.href;
    const translateUrl = new URL("https://translate.google.com/translate");

    translateUrl.searchParams.set("sl", document.documentElement.lang || "en");
    translateUrl.searchParams.set("tl", select.value);
    translateUrl.searchParams.set("u", sourceUrl);

    window.open(translateUrl.toString(), "_blank", "noopener,noreferrer");
    select.value = "";
  });
}

const copy = {
  en: {
    brandTag: "AI governance for real operations",
    navServices: "Services",
    navFit: "Best fit",
    navApproach: "Approach",
    navContact: "Contact",
    translateMore: "More languages",
    translatePlaceholder: "Google Translate",
    eyebrow: "Mexico-based boutique advisory",
    heroTitle: "Control before AI scale.",
    heroLead: "We help companies in Mexico implement the security, governance, and operating controls they need to use AI without improvisation.",
    heroPrimary: "Request an assessment",
    heroSecondary: "View services",
    heroSignal1: "Focused on AI governance, AI security controls, and implementation assurance",
    heroSignal2: "Adapted to Mexico's legal and operational context",
    heroSignal3: "Built for executive teams, security leaders, and regulated businesses",
    proofA: "Governance",
    proofB: "Security",
    proofC: "Assurance",
    panelLabel: "What changes when controls come first",
    panelA: "Known usage",
    panelAText: "Inventory of use cases, vendors, and internal ownership.",
    panelB: "Lower exposure",
    panelBText: "Practical control design for leakage, prompt injection, and weak approvals.",
    panelC: "Stronger evidence",
    panelCText: "Executive-ready outputs for legal, security, customers, and audits.",
    panelD: "Ongoing discipline",
    panelDText: "A repeatable governance layer instead of ad hoc decisions.",
    problemEyebrow: "Why companies call us",
    problemTitle: "Governance and security for AI in real operations",
    problemBody: "Most companies turn AI on before they build the controls around it. That is where problems begin: unauthorized usage, data leakage, weak vendor review, untested workflows, and no evidence package for legal, security, or enterprise customers. Alpha Source solves that with a practical model: usage inventory, control design, technical assessment, and ongoing governance support.",
    risk1Title: "Shadow adoption",
    risk1Body: "Tools are already in use, but nobody has a reliable inventory or ownership model.",
    risk2Title: "Data exposure",
    risk2Body: "Sensitive information enters copilots and chat workflows without clear control boundaries.",
    risk3Title: "Weak governance",
    risk3Body: "New AI use cases go live without approval logic, vendor review, or testing discipline.",
    servicesEyebrow: "Services",
    servicesTitle: "Focused offers built for control, not AI hype",
    service1Title: "AI Control Plan Sprint",
    service1Body: "We design the control plan for your AI use cases, vendors, risks, and internal ownership model.",
    service1Bullet1: "AI use-case inventory",
    service1Bullet2: "Vendor inventory and risk review",
    service1Bullet3: "Control matrix and acceptable-use direction",
    service1Bullet4: "Executive action plan",
    service2Title: "AI Security Assessment",
    service2Body: "We assess copilots, chatbots, and AI workflows for prompt injection exposure, data leakage, misconfiguration, and monitoring gaps.",
    service2Bullet1: "Prompt injection review",
    service2Bullet2: "Data handling and identity controls",
    service2Bullet3: "Logging, monitoring, and vendor configuration gaps",
    service2Bullet4: "Remediation priorities",
    service3Title: "Fractional AI Governance",
    service3Body: "We act as your external AI governance function to review new use cases, vendors, and ongoing control risks.",
    service3Bullet1: "Ongoing use-case review",
    service3Bullet2: "Vendor due diligence",
    service3Bullet3: "Policy and control updates",
    service3Bullet4: "Executive risk summaries and governance check-ins",
    fitEyebrow: "Best fit",
    fitTitle: "Designed for organizations already feeling AI risk",
    fitBody: "We work best with mid-market companies, regulated firms, legal and security teams, and businesses that are already using AI but do not yet have a disciplined control model.",
    buyersTitle: "Typical buyers",
    buyers1: "Founders and executive teams",
    buyers2: "CIOs and CISOs",
    buyers3: "Heads of Legal and Compliance",
    buyers4: "Operations and security leaders",
    sectorsTitle: "Strong-fit sectors",
    sectors1: "Fintech and insurance",
    sectors2: "Healthcare and legal services",
    sectors3: "BPO and outsourcing",
    sectors4: "Software and SaaS selling into enterprise buyers",
    approachEyebrow: "Approach",
    approachTitle: "A control-first operating model",
    approach1Title: "Framework backbone",
    approach1Body: "Aligned to NIST AI RMF, the NIST Generative AI Profile, ISO/IEC 42001, and related control models.",
    approach2Title: "Mexico context",
    approach2Body: "Adapted to local privacy, operational, procurement, and enterprise-customer expectations.",
    approach3Title: "Executive-ready outputs",
    approach3Body: "Clear action plans, control matrices, risk summaries, and governance checkpoints built for decisions.",
    pathEyebrow: "Recommended path",
    pathTitle: "Start with clarity, move into risk reduction, then establish discipline",
    path1: "AI Control Plan Sprint",
    path2: "AI Security Assessment or remediation support",
    path3: "Fractional AI Governance retainer",
    pricingEyebrow: "Commercial starting points",
    pricingTitle: "Launch anchors for initial conversations",
    price1Label: "AI Control Plan Sprint",
    price1Value: "From MXN 125,000",
    price2Label: "AI Security Assessment",
    price2Value: "From MXN 95,000",
    price3Label: "Fractional AI Governance",
    price3Value: "From MXN 60,000 / month",
    pricingNote: "Final pricing depends on scope, complexity, systems involved, and stakeholder needs.",
    ctaEyebrow: "Next step",
    ctaTitle: "If your company is already using AI, it already needs controls.",
    ctaBody: "We can help you organize current usage, reduce risk, and create a real foundation for responsible growth.",
    ctaPrimary: "Book an intro call",
    ctaSecondary: "Request an assessment",
    contactNote: "Replace the default email address in this page when your final mailbox is ready.",
    footerTag: "AI adoption with control, clarity, and operational discipline."
  },
  es: {
    brandTag: "Gobernanza de IA para operación real",
    navServices: "Servicios",
    navFit: "Ideal para",
    navApproach: "Enfoque",
    navContact: "Contacto",
    translateMore: "Más idiomas",
    translatePlaceholder: "Traducir con Google",
    eyebrow: "Boutique de asesoría en México",
    heroTitle: "Control antes de escalar la IA.",
    heroLead: "Ayudamos a empresas en México a implementar los controles de seguridad, gobernanza y operación que necesitan para usar IA sin improvisación.",
    heroPrimary: "Solicitar diagnóstico",
    heroSecondary: "Ver servicios",
    heroSignal1: "Enfoque específico en gobernanza de IA, controles de seguridad y aseguramiento de implementación",
    heroSignal2: "Adaptado al contexto legal y operativo de México",
    heroSignal3: "Diseñado para equipos ejecutivos, líderes de seguridad y negocios regulados",
    proofA: "Gobernanza",
    proofB: "Seguridad",
    proofC: "Aseguramiento",
    panelLabel: "Qué cambia cuando los controles llegan primero",
    panelA: "Uso conocido",
    panelAText: "Inventario de casos de uso, proveedores y responsables internos.",
    panelB: "Menor exposición",
    panelBText: "Diseño práctico de controles para fuga de datos, prompt injection y aprobaciones débiles.",
    panelC: "Mejor evidencia",
    panelCText: "Entregables ejecutivos para legal, seguridad, clientes y auditorías.",
    panelD: "Disciplina continua",
    panelDText: "Una capa repetible de gobernanza en lugar de decisiones improvisadas.",
    problemEyebrow: "Por qué nos buscan",
    problemTitle: "Gobernanza y seguridad para IA en operación real",
    problemBody: "La mayoría de las empresas activan IA antes de construir los controles alrededor. Ahí empiezan los problemas: uso no autorizado, fuga de datos, revisión débil de proveedores, flujos no probados y falta de evidencia para legal, seguridad o clientes empresariales. Alpha Source resuelve eso con un modelo práctico: inventario de uso, diseño de controles, evaluación técnica y acompañamiento continuo.",
    risk1Title: "Adopción en sombra",
    risk1Body: "Las herramientas ya se usan, pero nadie tiene un inventario confiable ni un modelo claro de responsables.",
    risk2Title: "Exposición de datos",
    risk2Body: "Información sensible entra en copilotos y flujos conversacionales sin límites de control claros.",
    risk3Title: "Gobernanza débil",
    risk3Body: "Nuevos casos de uso de IA salen a producción sin lógica de aprobación, revisión de proveedor ni disciplina de pruebas.",
    servicesEyebrow: "Servicios",
    servicesTitle: "Ofertas enfocadas en control, no en hype de IA",
    service1Title: "AI Control Plan Sprint",
    service1Body: "Diseñamos el plan de control para tus casos de uso de IA, proveedores, riesgos y modelo interno de responsables.",
    service1Bullet1: "Inventario de casos de uso de IA",
    service1Bullet2: "Inventario de proveedores y revisión de riesgo",
    service1Bullet3: "Matriz de controles y lineamientos de uso aceptable",
    service1Bullet4: "Plan de acción ejecutivo",
    service2Title: "AI Security Assessment",
    service2Body: "Evaluamos copilotos, chatbots y flujos con IA para detectar exposición a prompt injection, fuga de datos, errores de configuración y brechas de monitoreo.",
    service2Bullet1: "Revisión de prompt injection",
    service2Bullet2: "Controles de datos e identidad",
    service2Bullet3: "Brechas de logging, monitoreo y configuración de proveedores",
    service2Bullet4: "Prioridades de remediación",
    service3Title: "Fractional AI Governance",
    service3Body: "Actuamos como tu función externa de gobernanza de IA para revisar nuevos casos de uso, proveedores y riesgos continuos.",
    service3Bullet1: "Revisión continua de casos de uso",
    service3Bullet2: "Debida diligencia de proveedores",
    service3Bullet3: "Actualización de políticas y controles",
    service3Bullet4: "Resúmenes ejecutivos de riesgo y check-ins de gobernanza",
    fitEyebrow: "Ideal para",
    fitTitle: "Diseñado para organizaciones que ya sienten el riesgo de IA",
    fitBody: "Trabajamos mejor con empresas medianas, firmas reguladas, equipos legales y de seguridad, y negocios que ya usan IA pero todavía no tienen un modelo disciplinado de control.",
    buyersTitle: "Compradores típicos",
    buyers1: "Founders y equipos ejecutivos",
    buyers2: "CIOs y CISOs",
    buyers3: "Responsables de Legal y Compliance",
    buyers4: "Líderes de operaciones y seguridad",
    sectorsTitle: "Sectores con mejor encaje",
    sectors1: "Fintech y seguros",
    sectors2: "Salud y servicios legales",
    sectors3: "BPO y outsourcing",
    sectors4: "Software y SaaS con clientes enterprise",
    approachEyebrow: "Enfoque",
    approachTitle: "Un modelo operativo con control primero",
    approach1Title: "Base de frameworks",
    approach1Body: "Alineado con NIST AI RMF, NIST Generative AI Profile, ISO/IEC 42001 y modelos relacionados.",
    approach2Title: "Contexto México",
    approach2Body: "Adaptado a expectativas locales de privacidad, operación, compras y clientes empresariales.",
    approach3Title: "Entregables ejecutivos",
    approach3Body: "Planes claros de acción, matrices de control, resúmenes de riesgo y checkpoints de gobernanza para tomar decisiones.",
    pathEyebrow: "Ruta recomendada",
    pathTitle: "Primero claridad, luego reducción de riesgo y después disciplina continua",
    path1: "AI Control Plan Sprint",
    path2: "AI Security Assessment o apoyo de remediación",
    path3: "Retainer de Fractional AI Governance",
    pricingEyebrow: "Puntos de partida comerciales",
    pricingTitle: "Anclas iniciales para conversaciones comerciales",
    price1Label: "AI Control Plan Sprint",
    price1Value: "Desde MXN 125,000",
    price2Label: "AI Security Assessment",
    price2Value: "Desde MXN 95,000",
    price3Label: "Fractional AI Governance",
    price3Value: "Desde MXN 60,000 / mes",
    pricingNote: "El precio final depende del alcance, la complejidad, los sistemas involucrados y las necesidades de stakeholders.",
    ctaEyebrow: "Siguiente paso",
    ctaTitle: "Si tu empresa ya está usando IA, ya necesita controles.",
    ctaBody: "Podemos ayudarte a ordenar el uso actual, reducir riesgos y construir una base real para crecer con confianza.",
    ctaPrimary: "Agenda una llamada inicial",
    ctaSecondary: "Solicitar diagnóstico",
    contactNote: "Reemplaza el correo por tu buzón final cuando lo tengas listo.",
    footerTag: "Adopción de IA con control, claridad y disciplina operativa."
  }
};

const buttons = document.querySelectorAll(".lang-btn");
const nodes = document.querySelectorAll("[data-i18n]");

function setLanguage(lang) {
  const dictionary = copy[lang] || copy.en;

  document.documentElement.lang = lang;

  nodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  buttons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });

  window.localStorage.setItem("alphasource-language", lang);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

const preferred = window.localStorage.getItem("alphasource-language") || "en";
setLanguage(preferred);
initGoogleTranslateLinks();
