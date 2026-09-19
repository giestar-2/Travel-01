/** Animate later arrivals without delaying content in the initial viewport. */
export function revealOnScroll(selector = ".gs-fade, .gs-card") {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};
  const seen = new WeakSet<Element>();
  const animations = new Set<Animation>();
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        if (seen.has(entry.target)) {
          const animation = entry.target.animate(
            [{ opacity: 0, transform: "translateY(24px)" }, { opacity: 1, transform: "translateY(0)" }],
            { duration: 500, easing: "cubic-bezier(.2,.7,.2,1)" },
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        }
        observer.unobserve(entry.target);
      }
      seen.add(entry.target);
    }
  }, { threshold: 0.05 });
  document.querySelectorAll(selector).forEach((element) => observer.observe(element));
  return () => {
    observer.disconnect();
    animations.forEach((animation) => animation.cancel());
  };
}
