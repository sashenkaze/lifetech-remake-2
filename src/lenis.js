// Singleton Lenis instance
let _lenis = null;

export function setLenis(instance) {
  _lenis = instance;
}

export function getLenis() {
  return _lenis;
}

/**
 * Scroll to hash target with smooth animation.
 * Uses custom RAF animation for precise, fast scrolling without drift.
 *
 * @param {string} hash          e.g. "#about" or "about"
 * @param {number} navbarHeight  actual navbar height in px (pass dynamically)
 */
export function scrollToHash(hash, navbarHeight = 72) {
  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  const el = document.getElementById(id);
  if (!el) return;

  // Calculate exact target position
  const targetY = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
  const startY = window.scrollY;
  const distance = targetY - startY;
  const duration = 400; // 400ms — cepat tapi smooth
  let startTime = null;

  // Pause Lenis so it doesn't fight with our RAF animation
  if (_lenis) _lenis.stop();

  // Easing function: easeInOutCubic — smooth acceleration & deceleration
  const easing = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const animate = (currentTime) => {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easing(progress);

    window.scrollTo(0, startY + distance * easedProgress);

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      // Animation done — resume Lenis for normal smooth wheel scrolling
      if (_lenis) _lenis.start();
    }
  };

  requestAnimationFrame(animate);
}
