/* ==========================================================
   Garden Cafe
   main.js
========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* =====================================================
       Element
    ====================================================== */

  const navbar = document.getElementById("navbar");
  const menuButton = document.getElementById("menuButton");
  const mobileMenu = document.getElementById("mobileMenu");
  const topButton = document.getElementById("topButton");

  /* =====================================================
       Navbar Scroll
    ====================================================== */

  function navbarScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  }

  window.addEventListener("scroll", navbarScroll);

  navbarScroll();

  /* =====================================================
       Mobile Menu
    ====================================================== */

  if (menuButton) {
    menuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  /* =====================================================
       Close Mobile Menu
    ====================================================== */

  const mobileLinks = mobileMenu.querySelectorAll("a");

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });

  /* =====================================================
       Back To Top
    ====================================================== */

  function toggleTopButton() {
    if (window.scrollY > 400) {
      topButton.classList.remove("hidden");
    } else {
      topButton.classList.add("hidden");
    }
  }

  window.addEventListener("scroll", toggleTopButton);

  toggleTopButton();

  topButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  });

  /* =====================================================
       Fade Up Animation
    ====================================================== */

  const fadeItems = document.querySelectorAll(".fade-up");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    fadeItems.forEach((item) => observer.observe(item));
  }

  /* =====================================================
       Counter Animation
    ====================================================== */

  const counters = document.querySelectorAll("[data-counter]");

  counters.forEach((counter) => {
    const target = Number(counter.dataset.counter);

    let current = 0;

    const speed = Math.max(10, Math.floor(target / 80));

    function updateCounter() {
      current += speed;

      if (current >= target) {
        current = target;
      }

      counter.innerText = current;

      if (current < target) {
        requestAnimationFrame(updateCounter);
      }
    }

    updateCounter();
  });

  /* =====================================================
       Active Navbar
    ====================================================== */

  const currentPage = location.pathname.split("/").pop();

  document.querySelectorAll("nav a").forEach((link) => {
    const href = link.getAttribute("href");

    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("text-secondary", "font-bold");
    }
  });

  /* =====================================================
       Smooth Anchor Scroll
    ====================================================== */

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));

      if (!target) return;

      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  /* =====================================================
       Image Hover Effect
    ====================================================== */

  const images = document.querySelectorAll("img");

  images.forEach((img) => {
    img.setAttribute("draggable", "false");
  });
  /* ==========================================
   Menu Filter
========================================== */

  const filterButtons = document.querySelectorAll(".filter-btn");

  const menuItems = document.querySelectorAll(".menu-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => {
        btn.classList.remove("bg-primary", "text-white");

        btn.classList.add("border");
      });

      button.classList.add("bg-primary", "text-white");

      button.classList.remove("border");

      const category = button.dataset.filter;

      menuItems.forEach((item) => {
        if (category === "all") {
          item.style.display = "block";

          return;
        }

        item.style.display =
          item.dataset.category === category ? "block" : "none";
      });
    });
  });

  /* ==========================================
   Menu Search
========================================== */

  const searchInput = document.getElementById("searchMenu");

  if (searchInput) {
    searchInput.addEventListener("keyup", () => {
      const keyword = searchInput.value.toLowerCase();

      menuItems.forEach((item) => {
        const title = item.querySelector("h3").innerText.toLowerCase();

        item.style.display = title.includes(keyword) ? "block" : "none";
      });
    });
  }


  /* ==========================================
   Gallery Filter
========================================== */

const galleryButtons = document.querySelectorAll(".gallery-filter");
const galleryItems = document.querySelectorAll(".gallery-item");

if (galleryButtons.length > 0) {

    galleryButtons.forEach(button => {

        button.addEventListener("click", () => {

            galleryButtons.forEach(btn => {

                btn.classList.remove("bg-primary", "text-white");

                btn.classList.add("border");

            });

            button.classList.add("bg-primary", "text-white");

            button.classList.remove("border");

            const category = button.dataset.filter;

            galleryItems.forEach(item => {

                if (category === "all") {

                    item.style.display = "block";

                } else {

                    item.style.display =
                        item.dataset.category === category
                            ? "block"
                            : "none";

                }

            });

        });

    });

}

/* ==========================================
   Reservation Form Validation
========================================== */

const reservationForm = document.getElementById("reservationForm");

if (reservationForm) {

    reservationForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const requiredFields = reservationForm.querySelectorAll(
            "input[required], select, textarea"
        );

        let valid = true;

        requiredFields.forEach(field => {

            if (field.value.trim() === "") {

                field.classList.add("border-red-500");

                valid = false;

            } else {

                field.classList.remove("border-red-500");

            }

        });

        if (!valid) {

            alert("Please complete all required fields.");

            return;

        }

        alert("🎉 Thank you!\n\nYour reservation request has been submitted.");

        reservationForm.reset();

    });

}

  /* =====================================================
       Console
    ====================================================== */

  console.log("Garden Cafe Template Loaded");
});
