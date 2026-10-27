// Theme toggle: cycles light/dark and remembers the choice per browser.
const root = document.documentElement;
document.querySelector(".theme-toggle").addEventListener("click", () => {
  const current = root.dataset.theme ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const next = current === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) {}
});

// Copy buttons on BibTeX blocks.
document.querySelectorAll(".pub-links pre").forEach((pre) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "copy-btn";
  btn.textContent = "Copy";
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(pre.querySelector("code").textContent);
      btn.textContent = "Copied";
    } catch (e) {
      btn.textContent = "Select & copy";
    }
    setTimeout(() => (btn.textContent = "Copy"), 1500);
  });
  pre.appendChild(btn);
});

// Highlight the nav link of the section in view.
const links = new Map(
  [...document.querySelectorAll(".nav a")].map((a) => [a.getAttribute("href").slice(1), a])
);
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => a.classList.remove("active"));
      links.get(entry.target.id)?.classList.add("active");
    });
  },
  { rootMargin: "-30% 0px -60% 0px" }
);
links.forEach((_, id) => {
  const section = document.getElementById(id);
  if (section) observer.observe(section);
});

document.getElementById("year").textContent = new Date().getFullYear();
