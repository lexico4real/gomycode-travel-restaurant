'use strict';

// Add a solid navigation background after the hero starts scrolling out of view.
const travelNav = document.querySelector('.travel-nav');
const updateNavigation = () => {
  travelNav?.classList.toggle('nav-scrolled', window.scrollY > 35);
};
window.addEventListener('scroll', updateNavigation, { passive: true });
updateNavigation();

// Close the mobile navigation after a visitor chooses a section.
document.querySelectorAll('#travelNavbar .nav-link, #travelNavbar .nav-cta').forEach((link) => {
  link.addEventListener('click', () => {
    const menu = document.querySelector('#travelNavbar');
    if (menu?.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});

// Carry the selected destination or tour into the enquiry form.
const destinationSelect = document.querySelector('#destinationSelect');
document.querySelectorAll('[data-destination]').forEach((link) => {
  link.addEventListener('click', () => {
    if (destinationSelect) destinationSelect.value = link.dataset.destination;
  });
});
document.querySelectorAll('[data-tour]').forEach((link) => {
  link.addEventListener('click', () => {
    if (destinationSelect) destinationSelect.value = link.dataset.tour;
  });
});

// Demonstration form: validates fields locally; no enquiry is sent to a server.
const enquiryForm = document.querySelector('#enquiryForm');
const formFeedback = document.querySelector('#formFeedback');
enquiryForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  event.stopPropagation();

  if (!enquiryForm.checkValidity()) {
    enquiryForm.classList.add('was-validated');
    formFeedback?.classList.add('d-none');
    return;
  }

  enquiryForm.classList.add('was-validated');
  formFeedback?.classList.remove('d-none');
  formFeedback?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  enquiryForm.reset();
  enquiryForm.classList.remove('was-validated');
});

// Keep the footer year current.
const currentYear = document.querySelector('#currentYear');
if (currentYear) currentYear.textContent = new Date().getFullYear();
