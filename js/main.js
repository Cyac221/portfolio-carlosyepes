/* ==========================================================================
   main.js — Carlos Yepes Portfolio
   ========================================================================== */

// ─── 1. TRADUCCIONES ──────────────────────────────────────────────────────────
const TRANSLATIONS = {
  es: {
    nav_about: "Sobre mí", nav_projects: "Proyectos",
    nav_skills: "Skills",  nav_contact: "Contacto",
    nav_aria: "Navegación principal", theme_aria: "Cambiar tema",
    hero_greeting: "Hola, soy",
    hero_location: "Medellín, Colombia",
    hero_badge: "Data Analyst · Data Engineer · Marketing Analytics",
    hero_lead: "Construyo pipelines, dashboards y modelos que convierten datos crudos en decisiones de negocio. 3 años conectando el mundo técnico con el estratégico.",
    hero_cta_projects: "Ver proyectos", hero_cta_contact: "Hablemos",
    stat_years: "años exp.", stat_projects: "proyectos",
    about_title: "Sobre mí",
    about_p1: "Soy profesional en Marketing con 3 años evolucionando hacia el mundo de los datos. Empecé analizando campañas y audiencias, y terminé construyendo pipelines en AWS y automatizando reportes que antes tardaban días. Ese cruce entre negocio y tecnología es mi mayor diferenciador: entiendo qué pregunta hacerle al dato y cómo responderla con código.",
    about_p2: "He trabajado en telecomunicaciones, fintech y agencias de marketing — sectores donde los datos no son un lujo, son la operación. Hoy busco un equipo donde pueda construir infraestructura de datos sólida y traducirla en insight accionable.",
    about_card1_title: "¿Qué hago?",
    about_card1_body: "Diseño e implemento flujos de datos end-to-end: desde la ingesta hasta el dashboard. Automatizo reportes que liberan tiempo de equipos, construyo modelos predictivos y analizo el rendimiento de campañas con criterio de negocio.",
    about_card2_title: "Stack", about_card3_title: "Metodología",
    about_card3_body: "Pregunta de negocio → datos → hipótesis → experimento → decisión. Sin humo ni dashboards por complacer: cada análisis debe mover una aguja real.",
    projects_title: "Proyectos",
    filter_all: "Todos", filter_etl: "ETL / Data Eng.",
    filter_dashboard: "Dashboards", filter_ml: "ML / Modelos",
    proj1_title: "Pipeline de ingesta con Requests",
    proj1_desc: "Diseño e implementación de un pipeline ETL sobre el API de transporte público de Londres para centralizar y automatizar extracciones de datos. Redujo de horas a minutos la disponibilidad de datos para análisis. Posterior visualización en Looker Studio.",
    proj2_title: "Modelo predictivo de Churn",
    proj2_desc: "Construcción de un modelo de clasificación para anticipar el churn, permitiendo tomar decisiones proactivas en lugar de reactivas.",
    proj3_title: "ETL End-to-End Cloud (En construcción)",
    proj3_desc: "Pipeline ETL completo usando Psycopg2, PostgreSQL y SQL en Python. Diseño de un Datawarehouse en Redshift (AWS) para el modelado y almacenamiento de datos.",
    projects_note: "Ver todos en GitHub →",
    skills_title: "Skills",
    skills_cat1: "Análisis de datos", skills_cat2: "Ingeniería de datos",
    skills_cat3: "Visualización & Marketing",
    contact_title: "Hablemos",
    contact_desc: "Estoy abierto a roles 100% remotos en LATAM y globales, y presencial en Medellín. Si buscas alguien que entienda tanto los datos como el negocio, escríbeme.",
    form_name_label: "Nombre", form_email_label: "Email", form_message_label: "Mensaje",
    form_name_placeholder: "Tu nombre", form_email_placeholder: "tu@email.com",
    form_message_placeholder: "Cuéntame en qué puedo ayudarte...",
    form_submit: "Enviar mensaje", form_sending: "Enviando...",
    form_success: "¡Mensaje enviado! Te respondo pronto.",
    form_error: "Algo falló. Escríbeme directamente a tu email.",
    footer_back: "Volver arriba ↑",
    footer_copy: "Carlos Yepes · Medellín, Colombia",
    page_title: "Carlos Yepes | Data Analyst & Engineer",
    meta_desc: "Carlos Yepes — Data Analyst & Engineer. Transformo datos en decisiones de negocio. Python, SQL, AWS, Power BI.",
  },
  en: {
    nav_about: "About", nav_projects: "Projects",
    nav_skills: "Skills", nav_contact: "Contact",
    nav_aria: "Main navigation", theme_aria: "Toggle theme",
    hero_greeting: "Hi, I'm",
    hero_location: "Medellín, Colombia",
    hero_badge: "Data Analyst · Data Engineer · Marketing Analytics",
    hero_lead: "I build pipelines, dashboards, and models that turn raw data into business decisions. 3 years bridging the technical and strategic worlds.",
    hero_cta_projects: "View projects", hero_cta_contact: "Let's talk",
    stat_years: "yrs exp.", stat_projects: "projects",
    about_title: "About me",
    about_p1: "I'm a Marketing professional with 3 years growing into the data world. I started by analyzing campaigns and audiences, and ended up building AWS pipelines and automating reports that used to take days. That intersection of business and technology is my biggest differentiator: I know what question to ask the data — and how to answer it with code.",
    about_p2: "I've worked in telecommunications, fintech, and marketing agencies — industries where data isn't a luxury, it's the operation. I'm now looking for a team where I can build solid data infrastructure and translate it into actionable insight.",
    about_card1_title: "What I do",
    about_card1_body: "I design and implement end-to-end data flows: from ingestion to dashboard. I automate reports that free up team time, build predictive models, and analyze campaign performance with a business lens.",
    about_card2_title: "Stack", about_card3_title: "Methodology",
    about_card3_body: "Business question → data → hypothesis → experiment → decision. No smoke and mirrors or vanity dashboards: every analysis must move a real needle.",
    projects_title: "Projects",
    filter_all: "All", filter_etl: "ETL / Data Eng.",
    filter_dashboard: "Dashboards", filter_ml: "ML / Models",
    proj1_title: "Requests Ingestion Pipeline",
    proj1_desc: "Design and implementation of an ETL pipeline on the London public transport API to centralize and automate data extraction. Reduced data availability from hours to minutes. Visualization built in Looker Studio.",
    proj2_title: "Churn Prediction Model",
    proj2_desc: "Built a classification model to anticipate customer churn, enabling proactive decisions rather than reactive ones.",
    proj3_title: "End-to-End Cloud ETL (In progress)",
    proj3_desc: "Full ETL pipeline using Psycopg2, PostgreSQL, and SQL in Python. Datawarehouse design in AWS Redshift for data modeling and storage.",
    projects_note: "View all on GitHub →",
    skills_title: "Skills",
    skills_cat1: "Data Analysis", skills_cat2: "Data Engineering",
    skills_cat3: "Visualization & Marketing",
    contact_title: "Let's talk",
    contact_desc: "I'm open to 100% remote roles across LATAM and globally, and on-site in Medellín. If you're looking for someone who understands both data and business — let's connect.",
    form_name_label: "Name", form_email_label: "Email", form_message_label: "Message",
    form_name_placeholder: "Your name", form_email_placeholder: "you@email.com",
    form_message_placeholder: "Tell me how I can help...",
    form_submit: "Send message", form_sending: "Sending...",
    form_success: "Message sent! I'll get back to you soon.",
    form_error: "Something went wrong. Email me directly.",
    footer_back: "Back to top ↑",
    footer_copy: "Carlos Yepes · Medellín, Colombia",
    page_title: "Carlos Yepes | Data Analyst & Engineer",
    meta_desc: "Carlos Yepes — Data Analyst & Engineer. Turning data into business decisions. Python, SQL, AWS, Power BI.",
  }
};

function applyLang(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = t[el.dataset.i18n]; if (v !== undefined) el.innerHTML = v;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const v = t[el.dataset.i18nPlaceholder]; if (v !== undefined) el.placeholder = v;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    const v = t[el.dataset.i18nAria]; if (v !== undefined) el.setAttribute("aria-label", v);
  });
  document.getElementById("htmlRoot")?.setAttribute("lang", lang);
  const langBtn = document.getElementById("langToggle");
  if (langBtn) langBtn.textContent = lang === "es" ? "EN" : "ES";
  if (t.page_title) document.title = t.page_title;
  const meta = document.getElementById("metaDesc");
  if (meta && t.meta_desc) meta.setAttribute("content", t.meta_desc);
  localStorage.setItem("lang", lang);
}

const langToggle = document.getElementById("langToggle");
applyLang(localStorage.getItem("lang") || "es");
langToggle?.addEventListener("click", () => {
  applyLang((localStorage.getItem("lang") || "es") === "es" ? "en" : "es");
});


// ─── 2. TEMA ──────────────────────────────────────────────────────────────────
const themeToggle = document.getElementById("themeToggle");
const themeIcon   = themeToggle?.querySelector(".theme-toggle__icon");

function applyTheme(theme, animate) {
  document.documentElement.classList.toggle("light", theme === "light");
  if (themeIcon) themeIcon.textContent = theme === "light" ? "☾" : "☀";
  if (animate && themeIcon) {
    themeIcon.classList.add("spin");
    themeIcon.addEventListener("animationend", () => themeIcon.classList.remove("spin"), { once: true });
  }
  localStorage.setItem("theme", theme);
}

applyTheme(localStorage.getItem("theme") || "dark", false);
themeToggle?.addEventListener("click", () => {
  applyTheme(document.documentElement.classList.contains("light") ? "dark" : "light", true);
});


// ─── 3. NAV MÓVIL ─────────────────────────────────────────────────────────────
const navToggle = document.getElementById("navToggle");
const navMenu   = document.getElementById("navMenu");

function closeMenu() {
  navMenu?.classList.remove("is-open");
  navToggle?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
}

navToggle?.addEventListener("click", (e) => {
  e.stopPropagation();
  const opening = !navMenu.classList.contains("is-open");
  navMenu.classList.toggle("is-open", opening);
  navToggle.classList.toggle("is-open", opening);
  navToggle.setAttribute("aria-expanded", String(opening));
});

navMenu?.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
document.addEventListener("click", (e) => {
  if (!navMenu?.contains(e.target) && !navToggle?.contains(e.target)) closeMenu();
});


// ─── 4. NAV SCROLL SHRINK + SECCIÓN ACTIVA ───────────────────────────────────
const header   = document.querySelector(".header");
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav__menu a[href^='#']");

window.addEventListener("scroll", () => {
  header?.classList.toggle("header--scrolled", window.scrollY > 20);
}, { passive: true });

new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle("is-active", link.getAttribute("href") === "#" + entry.target.id);
      });
    }
  });
}, { threshold: 0.4 }).observe !== undefined &&
  sections.forEach(s => new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting)
        navLinks.forEach(l => l.classList.toggle("is-active", l.getAttribute("href") === "#" + s.id));
    });
  }, { threshold: 0.4 }).observe(s));


// ─── 5. SCROLL REVEAL ─────────────────────────────────────────────────────────
new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" })
  .observe !== undefined &&
  document.querySelectorAll(".reveal").forEach(el =>
    new IntersectionObserver((entries, obs) => {
      entries.forEach(e => { if (e.isIntersecting) { el.classList.add("is-visible"); obs.unobserve(el); }});
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }).observe(el)
  );


// ─── 6. SKILL BARS ────────────────────────────────────────────────────────────
document.querySelectorAll(".bar div").forEach(fill => {
  const target = fill.style.width;
  fill.style.width = "0%";
  new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        fill.style.transition = "width .8s cubic-bezier(.4,0,.2,1)";
        fill.style.width = target;
        obs.unobserve(fill);
      }
    });
  }, { threshold: 0.3 }).observe(fill);
});


// ─── 7. FILTRO PROYECTOS ──────────────────────────────────────────────────────
document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach(c => c.classList.remove("is-active"));
    chip.classList.add("is-active");
    const filter = chip.dataset.filter;
    document.querySelectorAll(".project").forEach(p => {
      p.style.display = (filter === "all" || (p.dataset.tags || "").split(" ").includes(filter)) ? "" : "none";
    });
  });
});


// ─── 8. FORMULARIO ────────────────────────────────────────────────────────────
const contactForm = document.getElementById("contactForm");
const formHint    = document.getElementById("formHint");

contactForm?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector("button[type=submit]");
  const t   = TRANSLATIONS[localStorage.getItem("lang") || "es"];
  btn.textContent = t.form_sending;
  btn.disabled    = true;
  try {
    const res = await fetch("https://formspree.io/f/xgodgzkn", {
      method: "POST", body: new FormData(contactForm),
      headers: { "Accept": "application/json" }
    });
    if (res.ok) {
      formHint.textContent = t.form_success;
      formHint.style.color = "var(--accent)";
      contactForm.reset();
    } else throw new Error();
  } catch {
    formHint.textContent = t.form_error;
    formHint.style.color = "#e05252";
  }
  btn.textContent = t.form_submit;
  btn.disabled    = false;
});


// ─── 9. FOOTER AÑO ────────────────────────────────────────────────────────────
document.getElementById("year").textContent = new Date().getFullYear();


// ─── TYPEWRITER ───────────────────────────────────────────────────────────────
(function() {
  const target = document.getElementById("typewriterTarget");
  const cursor = document.querySelector(".typewriter-cursor");
  if (!target || !cursor) return;

  // El nombre cambia según el idioma — escuchamos el botón de idioma
  function getName() {
    return "Carlos";  // El nombre no cambia con el idioma
  }

  let currentText = "";
  let charIndex   = 0;
  let isDeleting  = false;
  let loopCount   = 0;
  const PAUSE_END   = 2200;  // pausa al terminar de escribir
  const PAUSE_START = 400;   // pausa antes de empezar
  const SPEED_TYPE  = 95;    // ms por letra al escribir
  const SPEED_DEL   = 55;    // ms por letra al borrar
  const MAX_LOOPS   = 1;     // solo escribe 1 vez, sin loop infinito

  function type() {
    const word = getName();

    if (!isDeleting) {
      // Escribiendo
      currentText = word.slice(0, charIndex + 1);
      target.textContent = currentText;
      charIndex++;

      if (charIndex === word.length) {
        // Terminó de escribir — quita el cursor parpadeante
        if (loopCount >= MAX_LOOPS - 1) {
          setTimeout(() => {
            cursor.classList.add("cursor-hide");
          }, PAUSE_END);
          return;
        }
        isDeleting = true;
        setTimeout(type, PAUSE_END);
        return;
      }
    } else {
      // Borrando (solo si hay más loops)
      currentText = word.slice(0, charIndex - 1);
      target.textContent = currentText;
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        loopCount++;
        setTimeout(type, PAUSE_START);
        return;
      }
    }

    setTimeout(type, isDeleting ? SPEED_DEL : SPEED_TYPE);
  }

  // Esperar a que la animación fadeUp del h1 termine antes de arrancar
  setTimeout(type, 750);
})();


// ─── RIPPLE EN BOTONES ────────────────────────────────────────────────────────
document.querySelectorAll(".btn, .chip, .lang-toggle, .theme-toggle, .nav__toggle").forEach(btn => {
  btn.addEventListener("click", function(e) {
    // Evitar doble ripple si el elemento ya tiene uno activo
    const existing = this.querySelector(".ripple-wave");
    if (existing) existing.remove();

    const rect   = this.getBoundingClientRect();
    const size   = Math.max(rect.width, rect.height) * 2;
    const x      = e.clientX - rect.left - size / 2;
    const y      = e.clientY - rect.top  - size / 2;

    const wave = document.createElement("span");
    wave.className = "ripple-wave";
    wave.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px;`;
    this.appendChild(wave);

    wave.addEventListener("animationend", () => wave.remove(), { once: true });
  });
});


// ─── PARALLAX AVATAR ──────────────────────────────────────────────────────────
(function() {
  const avatar = document.querySelector(".avatar");
  if (!avatar) return;

  // Solo desktop — en móvil el parallax se siente raro con scroll vertical
  const mq = window.matchMedia("(min-width: 861px) and (prefers-reduced-motion: no-preference)");
  if (!mq.matches) return;

  window.addEventListener("scroll", () => {
    // Factor 0.15: suficiente para sentirlo, sin marear
    avatar.style.transform = `translateY(${window.scrollY * 0.15}px)`;
  }, { passive: true });

  // Limpiar al salir del hero
  const hero = document.querySelector(".hero");
  new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) avatar.style.transform = "";
  }, { threshold: 0 }).observe(hero);
})();


// ─── PARTÍCULAS FLOTANTES ─────────────────────────────────────────────────────
(function() {
  const canvas = document.getElementById("particlesCanvas");
  if (!canvas) return;

  // Desactivar en móvil y en prefers-reduced-motion
  if (window.matchMedia("(max-width: 860px), (prefers-reduced-motion: reduce)").matches) return;

  const ctx = canvas.getContext("2d");
  const COUNT = 38;
  const COLOR = getComputedStyle(document.documentElement)
    .getPropertyValue("--accent").trim() || "#b8f060";

  let W, H, particles;

  function resize() {
    const hero = canvas.parentElement;
    W = canvas.width  = hero.offsetWidth;
    H = canvas.height = hero.offsetHeight;
  }

  function rand(min, max) { return Math.random() * (max - min) + min; }

  function createParticle() {
    return {
      x:     rand(0, W),
      y:     rand(0, H),
      r:     rand(1, 2.5),        // radio pequeño — sutiles
      vx:    rand(-0.18, 0.18),   // velocidad horizontal
      vy:    rand(-0.22, -0.08),  // siempre suben levemente
      alpha: rand(0.08, 0.28),    // muy transparentes
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: COUNT }, createParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = COLOR;
      ctx.globalAlpha = p.alpha;
      ctx.fill();

      // Mover
      p.x += p.vx;
      p.y += p.vy;

      // Reborde: si sale por arriba reaparece abajo
      if (p.y < -p.r)  p.y = H + p.r;
      if (p.x < -p.r)  p.x = W + p.r;
      if (p.x > W + p.r) p.x = -p.r;
    });

    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }

  // Actualizar color si cambia el tema
  const themeBtn = document.getElementById("themeToggle");
  themeBtn?.addEventListener("click", () => {
    setTimeout(() => {
      const c = getComputedStyle(document.documentElement)
        .getPropertyValue("--accent").trim();
      particles.forEach(() => {}); // referencia viva via COLOR var abajo
      // Actualizar con nuevo color — redefinir COLOR localmente
      Object.defineProperty(window, "__particleColor", { value: c, writable: true, configurable: true });
    }, 320); // después de que el tema cambie
  });

  window.addEventListener("resize", () => { resize(); }, { passive: true });

  init();
  draw();
})();