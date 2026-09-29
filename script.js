const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.08 });

document.querySelectorAll(".skill-card,.career-item,.education-card,.highlight-list div").forEach(el => {
  el.style.transition = "opacity .6s ease, transform .6s ease";
  el.style.opacity = "0";
  el.style.transform = "translateY(18px)";
  observer.observe(el);
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".visible").forEach(el => {
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
  });
});

const style = document.createElement("style");
style.textContent = ".visible{opacity:1!important;transform:translateY(0)!important}";
document.head.appendChild(style);
