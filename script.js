const navLinks = document.querySelectorAll('.nav-link');
const content = document.getElementById('content');

// Load default page (portfolio)
loadPage('home.html');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const page = link.getAttribute('data-page');

    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    loadPage(page);
  });
});

function loadPage(page) {
  fetch(page)
    .then(res => res.text())
    .then(html => {
      content.innerHTML = html;
    });
}

function styler(attr){
  var href;
  switch(attr){
      case'1':href = "terminal.css";break;
      case'2':href = "resume.css";break;
      case'3':href = "blog.css";break;
      default:;break;
  }
  document.getElementById('myStyleSheet').href = href;
}