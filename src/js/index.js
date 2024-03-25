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

// Language
const $langBtn = document.querySelector('.lang-btn');
const $langModal = document.querySelector('.lang-modal');
const $langLists = document.querySelectorAll('.lang-list li');

window.addEventListener('click', (e) => {
  if ($langBtn.contains(e.target)) {
    console.log('click');
    $langBtn.classList.toggle('active');
    $langModal.classList.toggle('active');
  } else if (!$langModal.contains(e.target)) {
    $langBtn.classList.remove('active');
    $langModal.classList.remove('active');
  }
});

$langLists.forEach((el) => {
  el.addEventListener('click', () => {
    $langLists.forEach((lang) => {
      lang.classList.remove('active');
    });
    el.classList.add('active');
    localStorage.setItem('lang', el.dataset.lang);
  });
});

function initLangSetting() {
  const lang = localStorage.getItem('lang') || 'ko';
  localStorage.setItem('lang', lang);

  $langLists.forEach((el) => {
    if (el.dataset.lang === lang) {
      el.classList.add('active');
    }
  });
}
initLangSetting();
