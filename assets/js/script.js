/* NEO-BRUTALISM WIREFRAME SCRIPT */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // NAVBAR & MOBILE MENU
  // ==========================================
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileClose = document.getElementById('mobile-close');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  // Solid background on scroll is handled by CSS, but we can do border stuff if needed.
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 4px 0 var(--border)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });

  const floatingWA = document.querySelector('.floating-wa');

  // Toggle mobile menu
  hamburger.addEventListener('click', () => {
    mobileNav.classList.add('active');
    document.body.style.overflow = 'hidden';
    if(floatingWA) floatingWA.style.display = 'none';
  });

  mobileClose.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    document.body.style.overflow = '';
    if(floatingWA) floatingWA.style.display = 'flex';
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
      if(floatingWA) floatingWA.style.display = 'flex';
    });
  });

  // ==========================================
  // TYPING EFFECT (Mechanic)
  // ==========================================
  const textElement = document.getElementById('typing-text');
  const words = ['UMKM', 'KORPORAT', 'MAKSIMAL', 'OTENTIK', 'MINIMALIS', 'MODERN'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      textElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      textElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? 40 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
      speed = 1500; // Pause at full word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      speed = 400; // Pause before typing new word
    }

    setTimeout(typeEffect, speed);
  }

  if (textElement) {
    typeEffect();
  }

  // ==========================================
  // SCROLL REVEAL (Wireframe Block effect)
  // ==========================================
  const revealElements = document.querySelectorAll('.reveal');

  const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    });
  }, revealOptions);

  revealElements.forEach(el => revealObserver.observe(el));

  // ==========================================
  // FAQ ACCORDION (Blocky)
  // ==========================================
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-q');
    const ans = item.querySelector('.faq-a');

    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all others
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq-a').style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        ans.style.maxHeight = ans.scrollHeight + "px";
      } else {
        item.classList.remove('active');
        ans.style.maxHeight = null;
      }
    });
  });
});
