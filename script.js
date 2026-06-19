/* ============================================
   MediaProNamer Landing — i18n
   ============================================ */

const T = {
  es: {
    h1a: "Nombres ",
    h1b: "profesionales",
    h1c: "para workflows ",
    h1d: "audiovisuales",
    h1e: " reales.",
    sub: "Crea nombres claros, técnicos y consistentes para edición, color, VFX, sonido, delivery y archivo.",
    tag: '&gt; Nunca más <code>final_final_este_si.mov</code>',
    cta1: "ENTRAR A LA APP",
    cta2: "CÓMO FUNCIONA",

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

    "title-price": "PRICING",
    "credits-lbl": "CRÉDITOS GRATIS",
    "price-text": "Cada cuenta nueva recibe 10 créditos gratis al registrarse. ¿Necesitas más? Contáctanos desde tu cuenta dentro de la app.",

    "title-founder": "FOUNDER",
    "founder-role": "FOUNDER · POSTPRODUCCIÓN",
    "founder-bio": "Profesional chileno de postproducción. MediaProNamer nace después de años viendo el mismo problema: archivos audiovisuales sin estándar. Una herramienta hecha desde la sala de post, para la sala de post.",

    "footer-tag": "NAMING MATTERS."
  },

  en: {
    h1a: "Professional ",
    h1b: "file names",
    h1c: "for real ",
    h1d: "media",
    h1e: " workflows.",
    sub: "Create clear, technical, consistent names for editing, color, VFX, sound, delivery and archive.",
    tag: '&gt; Never again <code>final_final_this_one.mov</code>',
    cta1: "OPEN THE APP",
    cta2: "HOW IT WORKS",

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

    "title-price": "PRICING",
    "credits-lbl": "FREE CREDITS",
    "price-text": "Every new account gets 10 free credits at signup. Need more? Contact us from inside your account in the app.",

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
