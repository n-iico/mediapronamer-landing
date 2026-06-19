/* ============================================
   MediaProNamer Landing — i18n
   ============================================ */

const T = {
  es: {
    "st-1": "Nunca más",
    h1: "De nombres caóticos a archivos listos para postproducción.",
    sub: "Genera nombres técnicos y consistentes para edición, color, VFX, sonido, delivery y archivo.",
    cta1: "GENERAR NOMBRE AHORA",
    cta2: "CÓMO FUNCIONA",

    "st-file": "final_final_este_si.mov",

    "title-before": "BEFORE / AFTER",
    bad: "✕ CAOS",
    good: "✓ ORDEN",

    "title-what": "WHAT IS IT",
    "about-1": "<strong>MediaProNamer</strong> es una herramienta profesional para crear nombres de archivos audiovisuales claros, técnicos y consistentes.",
    "about-2": "Diseñada para edición, postproducción, VFX, broadcast, delivery y archivo. No es un MAM. No es un DAM. Es naming profesional. Liviano, específico, directo.",

    "title-feat": "CORE FEATURES",
    "f1-t": "CAMPOS TÉCNICOS AUDIOVISUALES",
    "f1-d": "Resolución, espacio de color, códec, frame rate, aspect ratio, audio, fecha y más.",
    "f2-t": "ORDEN CONFIGURABLE",
    "f2-d": "Tú decides cómo se estructura cada nombre según tu pipeline.",
    "f3-t": "PRIVACIDAD REAL",
    "f3-d": "No recolectamos datos. Tu material confidencial sigue siendo tuyo.",
    "f4-t": "LIVIANO Y ESPECÍFICO",
    "f4-d": "Hecho desde la sala de post. Sin curva de aprendizaje absurda.",

    "title-edu": "EDUCATION",
    "edu-head": "Aprende a nombrar archivos como se trabaja en la industria.",
    "edu-body": "Un acceso pensado para estudiantes, docentes, escuelas de cine, universidades y programas audiovisuales que quieren enseñar flujos de trabajo profesionales desde el aula.",
    "edu-cta": "SOLICITAR ACCESO EDUCATIVO",

    "title-price": "PRICING",
    "plan-free-name": "FREE",
    "plan-free-price": "10 créditos gratis",
    "plan-free-desc": "Ideal para probar la herramienta.",
    "plan-pro-badge": "POPULAR",
    "plan-pro-name": "PRO",
    "plan-pro-price": "Créditos adicionales · mensual · lifetime",
    "plan-pro-desc": "Para editores, freelancers y postproductoras.",
    "plan-teams-name": "TEAMS",
    "plan-teams-price": "Licencias o créditos por equipo",
    "plan-teams-desc": "Para productoras, agencias y equipos de post.",
    "plan-edu-name": "EDUCATION",
    "plan-edu-price": "Acceso educativo para estudiantes, docentes e instituciones",
    "plan-edu-desc": "Ideal para aprender y enseñar flujos de naming profesional.",
    "plans-note": "&gt; Planes Pro, Teams y Education: contáctanos desde tu cuenta dentro de la app.",

    "title-founder": "FOUNDER",
    "founder-role": "FOUNDER · POSTPRODUCCIÓN",
    "founder-bio": "Profesional chileno de postproducción. MediaProNamer nace después de años viendo el mismo problema: archivos audiovisuales sin estándar. Una herramienta hecha desde la sala de post, para la sala de post.",

    "footer-tag": "NAMING MATTERS."
  },

  en: {
    "st-1": "Never again",
    h1: "From chaotic names to files ready for post-production.",
    sub: "Generate technical, consistent names for editing, color, VFX, sound, delivery and archive.",
    cta1: "GENERATE A NAME NOW",
    cta2: "HOW IT WORKS",

    "st-file": "final_final_this_one.mov",

    "title-before": "BEFORE / AFTER",
    bad: "✕ CHAOS",
    good: "✓ ORDER",

    "title-what": "WHAT IS IT",
    "about-1": "<strong>MediaProNamer</strong> is a professional tool to create clear, technical and consistent file names for audiovisual workflows.",
    "about-2": "Built for editing, post-production, VFX, broadcast, delivery and archive. It's not a MAM. It's not a DAM. It's professional naming. Lightweight, specific, direct.",

    "title-feat": "CORE FEATURES",
    "f1-t": "AUDIOVISUAL TECHNICAL FIELDS",
    "f1-d": "Resolution, color space, codec, frame rate, aspect ratio, audio, date and more.",
    "f2-t": "CONFIGURABLE ORDER",
    "f2-d": "You decide how each name is structured to match your pipeline.",
    "f3-t": "REAL PRIVACY",
    "f3-d": "We don't collect data. Your confidential material stays yours.",
    "f4-t": "LIGHTWEIGHT & SPECIFIC",
    "f4-d": "Built from inside the post room. No absurd learning curve.",

    "title-edu": "EDUCATION",
    "edu-head": "Learn to name files the way the industry works.",
    "edu-body": "Access designed for students, teachers, film schools, universities and audiovisual programs that want to teach professional workflows from the classroom.",
    "edu-cta": "REQUEST EDUCATIONAL ACCESS",

    "title-price": "PRICING",
    "plan-free-name": "FREE",
    "plan-free-price": "10 free credits",
    "plan-free-desc": "Ideal to try the tool.",
    "plan-pro-badge": "POPULAR",
    "plan-pro-name": "PRO",
    "plan-pro-price": "Extra credits · monthly · lifetime",
    "plan-pro-desc": "For editors, freelancers and post houses.",
    "plan-teams-name": "TEAMS",
    "plan-teams-price": "Licenses or credits per team",
    "plan-teams-desc": "For production companies, agencies and post teams.",
    "plan-edu-name": "EDUCATION",
    "plan-edu-price": "Educational access for students, teachers and institutions",
    "plan-edu-desc": "Ideal to learn and teach professional naming workflows.",
    "plans-note": "&gt; Pro, Teams and Education plans: contact us from inside your account in the app.",

    "title-founder": "FOUNDER",
    "founder-role": "FOUNDER · POST-PRODUCTION",
    "founder-bio": "Chilean post-production professional. MediaProNamer was born after years seeing the same problem: audiovisual files with no standard. A tool built from inside the post room, for the post room.",

    "footer-tag": "NAMING MATTERS."
  }
};

function setLang(lang) {
  if (!T[lang]) return;

  try { localStorage.setItem("mpn-lang", lang); } catch (e) {}

  document.documentElement.lang = lang;

  document.querySelectorAll(".lang button").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.getAttribute("data-i18n");
    if (T[lang][k] !== undefined) el.innerHTML = T[lang][k];
  });
}

// Init: cargar preferencia guardada o usar ES por defecto
(function init() {
  let saved = "es";
  try { saved = localStorage.getItem("mpn-lang") || "es"; } catch (e) {}
  if (saved !== "es") setLang(saved);
})();
