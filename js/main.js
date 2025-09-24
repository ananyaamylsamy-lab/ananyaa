// Simple navbar highlighting functionality
function highlightActiveNavItem() {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (
      link.getAttribute("href") === currentPage ||
      (currentPage === "" && link.getAttribute("href") === "index.html")
    ) {
      link.classList.add("active");
    }
  });
}

// Smooth scrolling for internal links
function enableSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// Add fade-in animation to sections
function animateSections() {
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 },
  );

  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
  });
}

// Graduation Countdown Feature
function initializeGraduationCountdown() {
  const graduationDate = new Date("2027-05-08");

  function updateCountdown() {
    const now = new Date();
    const timeDiff = graduationDate - now;

    if (timeDiff > 0) {
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

      return `${days} days, ${hours} hours, ${minutes} minutes until graduation`;
    } else {
      return "Graduated!";
    }
  }

  // Create countdown element and insert into timeline
  const graduateStudentItem = document.querySelector(
    '[data-timeline="graduate-student"]',
  );
  if (graduateStudentItem) {
    const countdownElement = document.createElement("div");
    countdownElement.className = "graduation-countdown";
    countdownElement.innerHTML = `
            <div class="countdown-label">Graduation Countdown</div>
            <div class="countdown-time">${updateCountdown()}</div>
        `;
    graduateStudentItem.appendChild(countdownElement);

    // Update every minute
    setInterval(() => {
      const timeElement = countdownElement.querySelector(".countdown-time");
      timeElement.textContent = updateCountdown();
    }, 60000);
  }
}

// Initialize all functionality
document.addEventListener("DOMContentLoaded", function () {
  highlightActiveNavItem();
  enableSmoothScrolling();
  animateSections();
  initializeGraduationCountdown();
});

export { highlightActiveNavItem, enableSmoothScrolling, animateSections };
