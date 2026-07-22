import { useNavigate } from "react-router-dom";

/**
 * Hook for page transition with fade effect.
 * Returns a navigate function that fades out before navigating.
 */
export function usePageTransition() {
  const navigate = useNavigate();

  const transitionNavigate = (to) => {
    // Create or get overlay
    let overlay = document.getElementById("__page-transition");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "__page-transition";
      overlay.style.cssText = [
        "position:fixed",
        "inset:0",
        "z-index:9999",
        "background:#fff",
        "opacity:0",
        "pointer-events:none",
        "transition:opacity 200ms ease",
      ].join(";");
      document.body.appendChild(overlay);
    }

    // Fade out
    overlay.style.pointerEvents = "all";
    overlay.style.opacity = "1";

    // Navigate after fade
    setTimeout(() => {
      navigate(to);
      // Fade in after navigation
      setTimeout(() => {
        overlay.style.opacity = "0";
        overlay.style.pointerEvents = "none";
      }, 50);
    }, 200);
  };

  return transitionNavigate;
}
