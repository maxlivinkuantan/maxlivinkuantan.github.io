document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector("#navToggle");
  const navLinks = document.querySelector("#navLinks");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", navLinks.classList.contains("is-open"));
    });

    navLinks.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  document.querySelectorAll(".count-up").forEach((item) => {
    const target = Number(item.dataset.target || item.textContent || 0);
    const duration = 900;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      item.textContent = Math.round(target * eased).toString();
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  });

  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const button = item.querySelector(".faq-question");
    if (!button) return;

    button.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      faqItems.forEach((other) => other.classList.remove("is-open"));
      if (!isOpen) item.classList.add("is-open");
    });
  });

  const venueSelect = document.querySelector("#f-venue");
  document.querySelectorAll("[data-venue]").forEach((link) => {
    link.addEventListener("click", () => {
      if (venueSelect) venueSelect.value = link.dataset.venue || "";
    });
  });

  const bookingForm = document.querySelector("#bookingForm");
  const formSuccess = document.querySelector("#formSuccess");
  if (bookingForm) {
    bookingForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const action = bookingForm.getAttribute("action");
      const isConfigured = action && !action.includes("YOUR_FORM_ID");

      if (!isConfigured) {
        if (formSuccess) {
          formSuccess.classList.add("is-visible");
          formSuccess.querySelector("span").textContent =
            "This form is not connected yet. Please contact us by WhatsApp, or set up Formspree to receive email enquiries.";
        }
        return;
      }

      const submitButton = bookingForm.querySelector('button[type="submit"]');
      if (submitButton) submitButton.disabled = true;

      try {
        const response = await fetch(action, {
          method: "POST",
          body: new FormData(bookingForm),
          headers: { Accept: "application/json" },
        });

        if (!response.ok) throw new Error("Form submission failed");

        if (formSuccess) {
          formSuccess.classList.add("is-visible");
          formSuccess.querySelector("span").textContent =
            formSuccess.dataset.successMessage || "Your enquiry has been received. We will contact you soon.";
        }
        bookingForm.reset();
      } catch (error) {
        if (formSuccess) {
          formSuccess.classList.add("is-visible");
          formSuccess.querySelector("span").textContent =
            "Sorry, the form could not be sent. Please contact us by WhatsApp.";
        }
      } finally {
        if (submitButton) submitButton.disabled = false;
      }
    });
  }
});
