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
  btn.textContent = "Enviando...";
  btn.disabled = true;

  // Formspree — reemplaza YOUR_FORM_ID con el ID de formspree.io
  const res = await fetch("https://formspree.io/f/xgodgzkn", {
    method: "POST",
    body: new FormData(contactForm),
    headers: { "Accept": "application/json" }
  });

  if (res.ok) {
    formHint.textContent = "¡Mensaje enviado! Te respondo pronto.";
    formHint.style.color = "var(--accent)";
    contactForm.reset();
  } else {
    formHint.textContent = "Algo falló. Escríbeme directamente a tu email.";
    formHint.style.color = "#ff6b6b";
  }

  btn.textContent = "Enviar mensaje";
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