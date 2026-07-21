// Singleton Lenis instance — import `getLenis()` anywhere to scroll programmatically
let _lenis = null;

export function setLenis(instance) {
  _lenis = instance;
}

export function getLenis() {
  return _lenis;
}

/**
 * Smoothly scroll to a hash target using the Lenis instance.
 * Falls back to native scrollIntoView if Lenis isn't ready.
 * @param {string} hash  e.g. "#about" or "about"
 * @param {number} [offset=80]  px offset from top (for fixed navbar)
 */
export function scrollToHash(hash, offset = 80) {
  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  const el = document.getElementById(id);
  if (!el) return;

  if (_lenis) {
    _lenis.scrollTo(el, { offset: -offset, duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
