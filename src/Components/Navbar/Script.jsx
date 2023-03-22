const navLinks = document.querySelectorAll('.nav-link');
const contents = document.querySelectorAll('.content');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    contents.forEach(content => {
      content.classList.remove('active');
      if (content.getAttribute('id') === target.slice(1)) {
        content.classList.add('active');
      }
    });
  });
});
