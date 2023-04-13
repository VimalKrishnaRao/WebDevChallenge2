const signinForm = document.getElementById('signin-form');
const signupForm = document.getElementById('signup-form');
const signinLink = document.getElementById('signin-link');
const signupLink = document.getElementById('signup-link');
const signinIcon = document.getElementById('signin-icon');
const signupIcon = document.getElementById('signup-icon');
const signinOverlay = document.getElementById('signin-overlay');
const signupOverlay = document.getElementById('signup-overlay');
const signinOverlayButton = document.getElementById('signin-overlay-button');
const signupOverlayButton = document.getElementById('signup-overlay-button');

function showForm(formToShow, formToHide) {
  formToHide.classList.add('hidden');
  formToShow.classList.remove('hidden');
}

function showOverlay(overlayToShow, overlayToHide) {
  overlayToHide.style.display = 'none';
  overlayToShow.style.display = 'flex';
}

signinLink.addEventListener('click', () => {
  showForm(signinForm, signupForm);
  showOverlay(signinOverlay, signupOverlay);
});

signupLink.addEventListener('click', () => {
  showForm(signupForm, signinForm);
  showOverlay(signupOverlay, signinOverlay);
});

signinIcon.addEventListener('click', () => {
  showForm(signinForm, signupForm);
  showOverlay(signinOverlay, signupOverlay);
});

signupIcon.addEventListener('click', () => {
  showForm(signupForm, signinForm);
  showOverlay(signupOverlay, signinOverlay);
});

signinOverlayButton.addEventListener('click', () => {
  showForm(signinForm, signupForm);
  showOverlay(signinOverlay, signupOverlay);
});

signupOverlayButton.addEventListener('click', () => {
  showForm(signupForm, signinForm);
  showOverlay(signupOverlay, signinOverlay);
});
