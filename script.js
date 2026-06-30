/* ---------- Speaker filter ---------- */
const filterButtons = document.querySelectorAll(".filter-button");
const speakerCards = document.querySelectorAll(".speaker-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));

    speakerCards.forEach((card) => {
      const topics = card.dataset.topic.split(" ");
      card.classList.toggle("is-hidden", filter !== "all" && !topics.includes(filter));
    });
  });
});

/* ---------- Shared UI (menu, reveal, nav highlight, back-to-top) ---------- */
initMobileMenu();
initReveal();
initBackToTop();
initCountdown();
initNavHighlight();

function initMobileMenu() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".mobile-menu");
  if (!toggle || !menu) return;

  const setOpen = (open) => {
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.classList.toggle("is-open", open);
    if (open) {
      menu.hidden = false;
    } else {
      // allow transition before hiding
      setTimeout(() => { if (!menu.classList.contains("is-open")) menu.hidden = true; }, 220);
    }
  };

  toggle.addEventListener("click", () => setOpen(!menu.classList.contains("is-open")));
  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
}

function initReveal() {
  const targets = document.querySelectorAll(".section, .profile-hero, .profile-pager, .site-footer");
  if (!("IntersectionObserver" in window) || !targets.length) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  targets.forEach((el) => el.classList.add("reveal"));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  targets.forEach((el) => observer.observe(el));
}

function initBackToTop() {
  const btn = document.querySelector("#to-top");
  if (!btn) return;
  const onScroll = () => {
    const show = window.scrollY > 600;
    btn.hidden = !show;
    btn.classList.toggle("is-visible", show);
  };
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initCountdown() {
  const root = document.querySelector("#countdown");
  if (!root) return;
  const daysEl = root.querySelector('[data-unit="days"]');
  if (!daysEl) return;
  const target = new Date(root.dataset.date).getTime();

  const tick = () => {
    const diff = target - Date.now();
    if (diff <= 0) {
      root.classList.add("is-live");
      root.innerHTML = '<p class="countdown-live">Happening now. Welcome!</p>';
      clearInterval(timer);
      return;
    }
    daysEl.textContent = Math.ceil(diff / 86400000);
  };

  tick();
  const timer = setInterval(tick, 60000);
}

function initNavHighlight() {
  const sections = document.querySelectorAll("main section[id]");
  const links = document.querySelectorAll(".nav-links a[href^='#']");
  if (!sections.length || !links.length || !("IntersectionObserver" in window)) return;

  const map = {};
  links.forEach((link) => { map[link.getAttribute("href").slice(1)] = link; });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((l) => l.classList.remove("is-current"));
        const active = map[entry.target.id];
        if (active) active.classList.add("is-current");
      }
    });
  }, { threshold: 0.5 });

  sections.forEach((section) => observer.observe(section));
}
