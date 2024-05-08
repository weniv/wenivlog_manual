document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll(`.content-nav .nav-list li a`);

  navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      navLinks.forEach((link) => link.closest('li').classList.remove('active'));
      this.closest('li').classList.add('active');
    });
  });
});

window.addEventListener('scroll', () => {
  const topHeight = window.scrollY + 70;
  const sections = [
    document.getElementById('intro'),
    document.getElementById('guide'),
    document.getElementById('feature'),
  ];

  sections.forEach((section) => {
    if (
      section.offsetTop <= topHeight + 2 &&
      section.offsetTop + section.offsetHeight > topHeight + 2
    ) {
      document
        .querySelector('.content-nav .nav-list li.active')
        .classList.remove('active');
      document
        .querySelector(`.content-nav .nav-list li a[href="#${section.id}"]`)
        .closest('li')
        .classList.add('active');
    }
  });
});

// 스폰서 이동
