gsap.from(".main h1", { opacity: 0, y: -50, duration: 1, delay: 0.5 });
gsap.from(".main h2", { opacity: 0, y: -50, duration: 1, delay: 1 });
gsap.from(".main .btn", { opacity: 0, y: 50, duration: 1, delay: 1.5 });

gsap.from(".services h2", {
  opacity: 0,
  y: -50,
  duration: 1,
  scrollTrigger: ".services h2",
});
gsap.from(".services .card", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: ".services .card",
});

gsap.from(".projects h2", {
  opacity: 0,
  y: -50,
  duration: 1,
  scrollTrigger: ".projects h2",
});
gsap.from(".projects .project-card", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: ".projects .project-card",
});

gsap.from(".official-accounts h2", {
  opacity: 0,
  y: -50,
  duration: 1,
  scrollTrigger: ".official-accounts h2",
});
gsap.from(".official-accounts .card", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: ".official-accounts .card",
});

gsap.from(".developer-section h2", {
  opacity: 0,
  y: -50,
  duration: 1,
  scrollTrigger: ".developer-section h2",
});
gsap.from(".programmer-card", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: ".programmer-card",
});

// Navigation Drawer Toggle
const menuIcon = document.getElementById("menu-icon");
const navigationDrawer = document.getElementById("navigation-drawer");
const overlay = document.getElementById("overlay");
const closeIcon = document.getElementById("close-icon");

menuIcon.addEventListener("click", () => {
  navigationDrawer.classList.toggle("active");
  overlay.classList.toggle("active");
});

closeIcon.addEventListener("click", () => {
  navigationDrawer.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  navigationDrawer.classList.remove("active");
  overlay.classList.remove("active");
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    // Close the navigation drawer
    navigationDrawer.classList.remove("active");
    overlay.classList.remove("active");

    // Smooth scroll to the target section
    gsap.to(window, {
      duration: 1,
      scrollTo: targetSection,
      ease: "power2.inOut",
    });
  });
});

function toggleVideoImage(videoElement, imageElement) {
  videoElement.addEventListener("ended", () => {
    videoElement.style.display = "none";
    imageElement.style.display = "block";

    setTimeout(() => {
      imageElement.style.display = "none";
      videoElement.style.display = "block";
      videoElement.play();
    }, 7000);
  });
}

document.querySelectorAll(".game-card").forEach((gameCard) => {
  const video = gameCard.querySelector("video");
  const image = gameCard.querySelector("img");
  toggleVideoImage(video, image);
});

document.addEventListener("DOMContentLoaded", () => {
  const footerYear = document.querySelector(".footer");
  const currentYear = new Date().getFullYear();
  footerYear.innerHTML = footerYear.innerHTML.replace(
    /\d{4}/,
    currentYear
  );
});