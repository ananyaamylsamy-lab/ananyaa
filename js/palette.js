// Palette Page Interactive Effects

// Create floating particles effect
function createFloatingParticles() {
  const particleContainer = document.createElement("div");
  particleContainer.className = "particle-container";
  particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
  document.body.appendChild(particleContainer);

  // Create multiple particles
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3);
            border-radius: 50%;
            animation: floatParticle ${Math.random() * 10 + 10}s linear infinite;
            left: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 5}s;
        `;
    particleContainer.appendChild(particle);
  }
}

// Add CSS for particle animation
function addParticleStyles() {
  const style = document.createElement("style");
  style.textContent = `
        @keyframes floatParticle {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
  document.head.appendChild(style);
}

// Parallax scroll effect for hero section
function addParallaxEffect() {
  const heroSection = document.querySelector(".gallery-hero");
  const colorBar = document.querySelector(".color-bar");

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const parallax = scrolled * 0.3;

    if (heroSection) {
      heroSection.style.transform = `translateY(${parallax}px)`;
    }

    if (colorBar) {
      const hueRotate = scrolled * 0.5;
      colorBar.style.filter = `hue-rotate(${hueRotate}deg)`;
    }
  });
}

// Initialize all effects when page loads
document.addEventListener("DOMContentLoaded", () => {
  addParticleStyles();
  createFloatingParticles();
  addParallaxEffect();
});
