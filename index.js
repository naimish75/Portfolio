// Existing Code
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont');
const smallMenu = document.querySelector('.header__sm-menu');
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu');
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
);
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link');

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active');
  } else {
    smallMenu.classList.add('header__sm-menu--active');
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none');
    headerHamMenuCloseBtn.classList.add('d-none');
  } else {
    headerHamMenuBtn.classList.add('d-none');
    headerHamMenuCloseBtn.classList.remove('d-none');
  }
});

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active');
    headerHamMenuBtn.classList.remove('d-none');
    headerHamMenuCloseBtn.classList.add('d-none');
  });
}

const headerLogoConatiner = document.querySelector('.header__logo-container');

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html';
});

// New Code for Experience Section
document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".experience__item-toggle");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const experienceItem = toggle.closest(".experience__item");
      experienceItem.classList.toggle("expanded");
    });
  });

  // Handle project pagination
  const allDots = document.querySelectorAll(".experience__dots");

  allDots.forEach((dotContainer) => {
    const dots = dotContainer.querySelectorAll(".experience__dot");
    const projects = dotContainer.previousElementSibling.querySelectorAll(
      ".experience__project"
    );

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        // Get the index of the clicked dot
        const index = parseInt(dot.dataset.index);

        // Update active dot
        dots.forEach((d) => d.classList.remove("active"));
        dot.classList.add("active");

        // Update visible project
        projects.forEach((project, i) => {
          project.classList.toggle("active", i === index);
        });
      });
    });
  });
});

function toggleDetails(id) {
  const details = document.getElementById(id);
  details.style.display = details.style.display === 'none' ? 'block' : 'none';
}


// document.addEventListener("DOMContentLoaded", function () {
//   const sections = document.querySelectorAll(".section");

//   const observer = new IntersectionObserver(
    
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           // Add 'active' class to the focused section
//           entry.target.classList.add("active");
//         } else {
//           // Remove 'active' class from other sections
//           entry.target.classList.remove("active");
//         }
        
//       });
//     },
//     { threshold: 0.5 } // Trigger when 50% of the section is visible
//   );

//   sections.forEach((section) => observer.observe(section));
// });
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault();

//     const target = document.querySelector(this.getAttribute('href'));
//     if (target) {
//       target.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start', // Aligns the top of the section with the top of the viewport
//       });
//     }
//   });
// });

// document.querySelectorAll('.experience__item-more-btn').forEach(button => {
//   button.addEventListener('click', function () {
//     const parent = this.closest('.experience__item');
//     const moreDetails = parent.querySelector('.experience__item-more');

//     if (moreDetails.style.display === 'block') {
//       // Collapse
//       moreDetails.style.display = 'none';
//     } else {
//       // Expand
//       moreDetails.style.display = 'block';
//       // Scroll smoothly to the parent container
//       parent.scrollIntoView({
//         behavior: 'smooth',
//         block: 'center', // Scrolls the section to the center of the viewport
//       });
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section"); // Target all sections with class "section"

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active"); // Highlight the visible section
        } else {
          entry.target.classList.remove("active"); // Remove the active class for non-visible sections
        }
      });
    },
    {
      root: null, // Use the viewport as the container
      threshold: 0.1, // Adjusted to trigger even if a small portion of the section is visible
      rootMargin: "0px 0px -50px 0px", // Ensures the last section is triggered even near the bottom
    }
  );

  sections.forEach((section) => observer.observe(section));
});