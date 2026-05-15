// ─── i18n: sistema de idiomas ────────────────────────────────────────────────
const TRANSLATIONS = {
  es: {
    // Nav
    nav_about: "Sobre mí",
    nav_projects: "Proyectos",
    nav_skills: "Skills",
    nav_contact: "Contacto",

    // Hero
    hero_badge: "Data Analyst · Data Engineer · Marketing Analytics",
    hero_lead: "Construyo pipelines, dashboards y modelos que convierten datos crudos en decisiones de negocio. 3 años conectando el mundo técnico con el estratégico.",
    hero_cta_projects: "Ver proyectos",
    hero_cta_contact: "Hablemos",
    stat_years: "años exp.",
    stat_projects: "proyectos",
    stat_clouds: "clouds",

    // About
    about_title: "Sobre mí",
    about_p1: "Soy profesional en Marketing con 3 años evolucionando hacia el mundo de los datos. Empecé analizando campañas y audiencias, y terminé construyendo pipelines en AWS y automatizando reportes que antes tardaban días. Ese cruce entre negocio y tecnología es mi mayor diferenciador: entiendo qué pregunta hacerle al dato y cómo responderla con código.",
    about_p2: "He trabajado en telecomunicaciones, fintech y agencias de marketing — sectores donde los datos no son un lujo, son la operación. Hoy busco un equipo donde pueda construir infraestructura de datos sólida y traducirla en insight accionable.",
    about_card1_title: "¿Qué hago?",
    about_card1_body: "Diseño e implemento flujos de datos end-to-end: desde la ingesta hasta el dashboard. Automatizo reportes que liberan tiempo de equipos, construyo modelos predictivos y analizo el rendimiento de campañas con criterio de negocio.",
    about_card2_title: "Stack",
    about_card3_title: "Metodología",
    about_card3_body: "Pregunta de negocio → datos → hipótesis → experimento → decisión. Sin humo ni dashboards por complacer: cada análisis debe mover una aguja real.",

    // Projects
    projects_title: "Proyectos",
    filter_all: "Todos",
    filter_etl: "ETL / Data Eng.",
    filter_dashboard: "Dashboards",
    filter_ml: "ML / Modelos",
    proj1_title: "Pipeline de ingesta con Requests",
    proj1_desc: "Diseño e implementación de un pipeline ETL sobre el API de transporte público de London para centralizar y automatizar extracciones de datos. Redujo de horas a minutos la disponibilidad de datos para análisis. Posterior visualización en Looker Studio.",
    proj2_title: "Modelo predictivo de Churn",
    proj2_desc: "Construcción de un modelo de clasificación para anticipar el churn, permitiendo tomar decisiones proactivas en lugar de reactivas.",
    proj3_title: "ETL End to End Cloud (En construcción)",
    proj3_desc: "ETL End to end usando Psycopg2, PostgreSQL y SQL en Python. Diseño de un Datawarehouse en Redshift (AWS) para el modelado y almacenamiento de datos.",
    projects_note: "Ver todos en GitHub",

    // Skills
    skills_title: "Skills",
    skills_cat1: "Análisis de datos",
    skills_cat2: "Ingeniería de datos",
    skills_cat3: "Visualización & Marketing",

    // Contact
    contact_title: "Hablemos",
    contact_desc: "Estoy abierto a roles remotos en LATAM y globales, y a posiciones presenciales en Medellín o Bogotá. Si buscas alguien que entienda tanto los datos como el negocio, escríbeme.",
    form_name_placeholder: "Tu nombre",
    form_email_placeholder: "tu@email.com",
    form_message_placeholder: "Cuéntame en qué puedo ayudarte...",
    form_submit: "Enviar mensaje",
    form_success: "¡Mensaje enviado! Te respondo pronto.",
    form_error: "Algo falló. Escríbeme directamente a tu email.",
    form_sending: "Enviando...",

    // Footer
    footer_back: "Volver arriba ↑",
  },

  en: {
    // Nav
    nav_about: "About",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_contact: "Contact",

    // Hero
    hero_badge: "Data Analyst · Data Engineer · Marketing Analytics",
    hero_lead: "I build pipelines, dashboards, and models that turn raw data into business decisions. 3 years bridging the technical and strategic worlds.",
    hero_cta_projects: "View projects",
    hero_cta_contact: "Let\'s talk",
    stat_years: "yrs exp.",
    stat_projects: "projects",
    stat_clouds: "clouds",

    // About
    about_title: "About me",
    about_p1: "I\'m a Marketing professional with 3 years growing into the data world. I started analyzing campaigns and audiences, and ended up building AWS pipelines and automating reports that used to take days. That intersection of business and technology is my biggest differentiator: I know what question to ask the data and how to answer it with code.",
    about_p2: "I\'ve worked in telecommunications, fintech, and marketing agencies — industries where data isn\'t a luxury, it\'s the operation. Today I\'m looking for a team where I can build solid data infrastructure and translate it into actionable insight.",
    about_card1_title: "What I do",
    about_card1_body: "I design and implement end-to-end data flows: from ingestion to dashboard. I automate reports that free up team time, build predictive models, and analyze campaign performance with a business lens.",
    about_card2_title: "Stack",
    about_card3_title: "Methodology",
    about_card3_body: "Business question → data → hypothesis → experiment → decision. No smoke and mirrors or vanity dashboards: every analysis must move a real needle.",

    // Projects
    projects_title: "Projects",
    filter_all: "All",
    filter_etl: "ETL / Data Eng.",
    filter_dashboard: "Dashboards",
    filter_ml: "ML / Models",
    proj1_title: "Ingestion Pipeline with Requests",
    proj1_desc: "Design and implementation of an ETL pipeline on the London public transport API to centralize and automate data extraction. Reduced data availability for analysis from hours to minutes. Subsequent visualization in Looker Studio.",
    proj2_title: "Churn Prediction Model",
    proj2_desc: "Built a classification model to anticipate churn, enabling proactive rather than reactive decision-making.",
    proj3_title: "End-to-End Cloud ETL (In progress)",
    proj3_desc: "End-to-end ETL using Psycopg2, PostgreSQL, and SQL in Python. Datawarehouse design in Redshift (AWS) for data modeling and storage.",
    projects_note: "View all on GitHub",

    // Skills
    skills_title: "Skills",
    skills_cat1: "Data Analysis",
    skills_cat2: "Data Engineering",
    skills_cat3: "Visualization & Marketing",

    // Contact
    contact_title: "Let\'s talk",
    contact_desc: "I\'m open to remote roles across LATAM and globally, and on-site positions in Medellín or Bogotá. If you\'re looking for someone who understands both data and business, reach out.",
    form_name_placeholder: "Your name",
    form_email_placeholder: "you@email.com",
    form_message_placeholder: "Tell me how I can help...",
    form_submit: "Send message",
    form_success: "Message sent! I\'ll get back to you soon.",
    form_error: "Something went wrong. Email me directly.",
    form_sending: "Sending...",

    // Footer
    footer_back: "Back to top ↑",
  }
};

const applyLang = (lang) => {
  const t = TRANSLATIONS[lang];
  if (!t) return;

  // Textos normales
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Atributo lang del html
  document.getElementById("htmlRoot")?.setAttribute("lang", lang);

  // Botón de idioma
  const btn = document.getElementById("langToggle");
  if (btn) btn.textContent = lang === "es" ? "EN" : "ES";

  // Guardar preferencia
  localStorage.setItem("lang", lang);
};

// Lang toggle
const langToggle = document.getElementById("langToggle");
const savedLang = localStorage.getItem("lang") || "es";
applyLang(savedLang);

langToggle?.addEventListener("click", () => {
  const current = localStorage.getItem("lang") || "es";
  applyLang(current === "es" ? "en" : "es");
});

// ─── Formulario: usar claves i18n para mensajes ───────────────────────────────
// Año dinámico en el footer
document.getElementById("year").textContent = new Date().getFullYear();

// TEMA: modo claro / oscuro
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle?.querySelector(".theme-toggle__icon");

const applyTheme = (theme) => {
  document.documentElement.classList.toggle("light", theme === "light");
  if (themeIcon) themeIcon.textContent = theme === "light" ? "☾" : "☀";
};

const savedTheme = localStorage.getItem("theme") || "dark";
applyTheme(savedTheme);

themeToggle?.addEventListener("click", () => {
  const isLight = document.documentElement.classList.contains("light");
  const next = isLight ? "dark" : "light";
  localStorage.setItem("theme", next);
  applyTheme(next);
});

// Menú móvil
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle?.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Cerrar menú al hacer click en un enlace
navMenu?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

// Filtro de proyectos (por data-tags)
const chips = document.querySelectorAll(".chip");
const projects = document.querySelectorAll(".project");

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach(c => c.classList.remove("is-active"));
    chip.classList.add("is-active");
    const filter = chip.dataset.filter;
    projects.forEach((p) => {
      const tags = (p.dataset.tags || "").split(" ");
      const show = filter === "all" || tags.includes(filter);
      p.style.display = show ? "" : "none";
    });
  });
});

// Formulario de contacto (apunta a Formspree — reemplaza YOUR_ID)
const contactForm = document.getElementById("contactForm");
const formHint = document.getElementById("formHint");

contactForm?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const btn = contactForm.querySelector("button[type=submit]");
  const langNow = localStorage.getItem("lang") || "es";
  btn.textContent = TRANSLATIONS[langNow].form_sending;
  btn.disabled = true;

  // Formspree — reemplaza YOUR_FORM_ID con el ID de formspree.io
  const res = await fetch("https://formspree.io/f/xgodgzkn", {
    method: "POST",
    body: new FormData(contactForm),
    headers: { "Accept": "application/json" }
  });

  const lang = localStorage.getItem("lang") || "es";
  const t = TRANSLATIONS[lang];
  if (res.ok) {
    formHint.textContent = t.form_success;
    formHint.style.color = "var(--accent)";
    contactForm.reset();
  } else {
    formHint.textContent = t.form_error;
    formHint.style.color = "#ff6b6b";
  }

  btn.textContent = t.form_submit;
  btn.disabled = false;
});

// Animación suave de entrada para las skill bars
const bars = document.querySelectorAll(".bar div");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.transition = "width .8s cubic-bezier(.4,0,.2,1)";
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

bars.forEach(bar => {
  const targetWidth = bar.style.width;
  bar.style.width = "0%";
  observer.observe(bar);
  setTimeout(() => { bar.style.width = targetWidth; }, 100);
});