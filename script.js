const navLinks = document.querySelectorAll('.nav-link');
const content = document.getElementById('content');

// Load default page (portfolio)
loadPage('terminal.html');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const page = link.getAttribute('data-page');

    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    loadPage(page + '.html');
    document.getElementById('myStyleSheet').href = page + '.css';
  });
});

function loadPage(page) {
  fetch(page)
    .then(res => res.text())
    .then(html => {
      content.innerHTML = html;
    });
}
