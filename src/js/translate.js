// utils.js
const translations = {
  ko: {
    manual: '매뉴얼',
    title: '위니블로그',
    intro: 'Wenivlog 소개',
    guide: '사용 방법',
    feature: '부가기능',
    'select-language': '언어 선택',
    'create-blog': '블로그 만들기',
    'banner-main-txt':
      '손쉽게 만드는 나만의 <span class="newline"> GitHub Blog</span>',
    'banner-sub-txt':
      'GitHub Pages를 이용하여 <span class="newline"> 나만의 정적 블로그를 쉽게 구현해 보세요!</span>',
    'target-sub-txt':
      'GitHub Blog 만들기에 어려움이 있으셨나요?<br />wenivlog를 사용해 보세요!',
    'target-main-txt':
      "<span class='light'> GitHub Pages를 이용하여 <br /></span>나만의 정적 블로그를 <br />쉽게 구현할 수 있어요",
    'target-list-1': '블로그 글도 쓰면서 깃헙 잔디도 심고 싶으신 분',
    'target-list-2':
      '지킬(Jekyll)을 이용해 블로그를 만드는데 어려움을 느끼셨던 분',
    'target-list-3': '나만의 개발 블로그를 만들어보고 싶었던 분',
    'target-list-4':
      '매일 공부한 것을 정리(TIL, Today I Learned)하고 싶으신 분',
    'target-list-5': '코드 하이라이팅이 가능한 블로그를 원하시는 분',
    'target-list-6': 'ipynb 파일을 블로그에 업로드하고 싶으신 분',
    'guide-main-txt': '사용 방법을 알려드릴게요',
    'guide-sub-txt': '"차근차근 따라하면 나만의 GitHub Blog 탄생!"',
    'lecture-sub': '더 자세한 내용은 영상 강의에서 확인하세요!',
    'lecture-btn': '강의 바로가기',
    'guide-item-1': '제공된 레포지토리를 fork 합니다.',
    'guide-link-btn': '링크 바로가기',
    'guide-item-2': '내 레포지토리의 github pages를 활성화합니다.',
    'guide-item-3': '레포지토리에 마크다운으로 블로그 글을 작성합니다.',
    'guide-item-3-sub-txt':
      'blog 폴더에 파일을 추가하며 파일 이름은 다음 양식으로 작성합니다.',
    'guide-item-3-filename':
      '[작성일]_[제목]_[카고테리]_[썸네일 이미지 링크]_[설명].md',
    'feature-main-txt': '이런 기능도 제공해요',
    'feature-sub-txt': '개성 넘치는 나만의 블로그를 만들어보세요!',
    'feature-tag-1': '#커스터마이징',
    'feature-description-1':
      'config.js를 이용하여 블로그의 제목과 사용자 정보를 변경할 수 있어요.',
    'feature-description-2':
      'Tailwind CSS를 이용하여 globalStyle.js를 수정하여 전반적인 블로그의 스타일을 수정할 수 있어요.',
    'feature-tag-2': '#에셋 제공',
    'feature-description-3':
      '위니브 프렌즈의 얼굴을 담은 프로필 이미지를 제공해요.',
    'feature-description-4':
      '기본 썸네일 이미지를 제공해요. 글 파일을 작성할 때 썸네일 이미지 링크를 비워두면 랜덤으로 이미지가 적용돼요.',
    'link-cont-main-txt': '지금 바로 나만의 GitHub Blog를 만들어 보세요',
    'link-cont-sub-txt': 'wenivlog와 함께라면 어렵지 않아요 :)',
    'footer-info-toggle-btn': '(주)위니브 사업자 정보',
    'company-name': '회사명',
    'company-name-value': '(주)위니브',
    ceo: '대표:',
    'ceo-value': '이호준',
    'business-license': '사업자 번호:',
    'business-license-value': '546-86-01737',
    industry: '업종',
    'industry-value': '정보통신업',
    address: '주소:',
    'address-value': '제주 제주시 첨단로 330 세미양빌딩 A동 1층 106호',
    'sponsor-cont': '스폰서 등록',
    'sponsor-main': '위니브의 교육 활동을 지원하세요',
    'sponsor-sub':
      'GitHub 스폰서를 등록하고 오픈소스 프로젝트, 책 집필 등 위니브의 교육 활동을 지원하고 기여자로 참여하세요!',
    'sponsor-title': '위니브 깃허브 스폰서 정보',
    'sponsor-corp': '주식회사 위니브',
    'sponsor-descript':
      '제주에 위치한 ICT 교육 콘텐츠 기업으로 청년들을 위한 다양한 교육 사업을 진행하고 있습니다.',
  },
  en: {
    manual: 'Manual',
    title: 'WENIVLOG',
    intro: 'About Wenivlog',
    guide: 'How to Use',
    feature: 'Features',
    'select-language': 'Select Language',
    'create-blog': 'Create Blog',
    'banner-main-txt':
      'Easily create your own <span class="newline"> GitHub Blog</span>',
    'banner-sub-txt':
      'Easily implement your own <span class="newline"> static blog using GitHub Pages!</span>',
    'target-sub-txt':
      'Did you have difficulty creating a GitHub Blog?<br />Try using wenivlog!',
    'target-main-txt':
      "<span class='light'>using GitHub Pages <br /></span> Make your own static blog",
    'target-list-1':
      'Those who want to write blog posts and grow their GitHub grass at the same time',
    'target-list-2':
      'Those who experienced difficulties creating a blog using Jekyll',
    'target-list-3': 'Those who wanted to create their own development blog',
    'target-list-4':
      'Those who want to organize what they study every day (TIL, Today I Learned)',
    'target-list-5':
      'Those who want a blog with code highlighting capabilities',
    'target-list-6': 'Those who want to upload ipynb files to their blog',
    'guide-main-txt': 'Let us guide you through',
    'guide-sub-txt': '"Follow step by step to create your own GitHub Blog!"',
    'lecture-sub': 'Check out the video lecture for more details!',
    'lecture-btn': 'Go to Lecture',
    'guide-item-1': 'Fork the provided repository.',
    'guide-link-btn': 'Go to Link',
    'guide-item-2': 'Enable GitHub Pages for your repository.',
    'guide-item-3': 'Write blog posts in markdown format in your repository.',
    'guide-item-3-sub-txt':
      'Add files to the blog folder and name the file according to the following format.',
    'guide-item-3-filename':
      '[Date]_[Title]_[Category]_[Thumbnail Image Link]_[Description].md',
    'feature-main-txt': 'We also provide these features',
    'feature-sub-txt': 'Create your own unique blog!',
    'feature-tag-1': '#Customization',
    'feature-description-1':
      'You can change the title and user information of the blog in the config.js.',
    'feature-description-2':
      'You can modify the overall style of the blog by editing globalStyle.js using Tailwind CSS.',
    'feature-tag-2': '#Asset',
    'feature-description-3': 'We provide profile images of Weniv Friends.',
    'feature-description-4':
      'We provide default thumbnail images. Leave the thumbnail image link empty when writing a blog file, and a random image will be applied.',
    'link-cont-main-txt': 'Create your own GitHub Blog right now',
    'link-cont-sub-txt': "It's not difficult with wenivlog :)",
    'footer-info-toggle-btn': 'WENIV Corporation Information',
    'company-name': 'Company Name',
    'company-name-value': 'Weniv Corp.',
    ceo: 'CEO:',
    'ceo-value': 'Hojun Lee',
    'business-license': 'Business License',
    'business-license-value': '546-86-01737',
    industry: 'Industry',
    'industry-value': 'ICT',
    address: 'Address',
    'address-value': '1F, A-106, 330, Cheomdan-ro, Jeju-si, Jeju-do',
    'sponsor-cont': 'Sponsor Registration',
    'sponsor-main': 'Support Weniv’s Educational Activities',
    'sponsor-sub':
      'Register as a GitHub Sponsor and support Weniv’s educational activities such as open source projects and book writing, and participate as a contributor!',
    'sponsor-title': 'Weniv GitHub Sponsor Information',
    'sponsor-corp': 'Weniv Corporation',
    'sponsor-descript':
      'An ICT education content company located in Jeju, conducting various education programs for young people.',
  },
};

function translate(key, lang) {
  if (translations[lang] && translations[lang][key]) {
    return translations[lang][key];
  }
  return key;
}

function translatePage(lang) {
  document.querySelector('html').setAttribute('lang', lang);
  document.querySelector('title').innerHTML = `${translate(
    'manual',
    lang,
  )} | ${translate('title', lang)}`;
  document.querySelectorAll('[data-lang]').forEach((el) => {
    const key = el.getAttribute('data-lang');
    el.innerHTML = translate(key, lang);
  });
}

// Language
const $langBtn = document.querySelector('.lang-btn');
const $langModal = document.querySelector('.lang-modal');
const $langLists = document.querySelectorAll('.lang-list li');

window.addEventListener('click', (e) => {
  if ($langBtn.contains(e.target)) {
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
    localStorage.setItem('lang', el.dataset.pagelang);
    translatePage(el.dataset.pagelang);
  });
});

function initLangSetting() {
  const lang = localStorage.getItem('lang') || 'ko';
  localStorage.setItem('lang', lang);

  translatePage(lang);

  $langLists.forEach((el) => {
    if (el.dataset.pagelang === lang) {
      el.classList.add('active');
    }
  });
  document.querySelector('body').style.opacity = 1;
}
window.addEventListener('load', initLangSetting);
