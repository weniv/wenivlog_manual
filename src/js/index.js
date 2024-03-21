// Nav Scroll
const $navItems = document.querySelectorAll('.nav-list li');
$navItems.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.add('active');
    $navItems.forEach((navItem) => {
      if (navItem !== item) {
        navItem.classList.remove('active');
      }
    });
  });
});

const intersectionObserver = new IntersectionObserver(
  (entries, observer) => {
    const activeId = entries[0].target.id;
    $navItems.forEach((item) => {
      if (item.firstElementChild.getAttribute('href') === `#${activeId}`) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  },
  { threshold: 0.6 },
);
const $intro = document.getElementById('intro');
const $guide = document.getElementById('guide');
const $feature = document.getElementById('feature');

intersectionObserver.observe($intro);
intersectionObserver.observe($guide);
intersectionObserver.observe($feature);
