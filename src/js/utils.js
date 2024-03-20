const dateFormat = () => {
  // yyyy-mm-dd-hh-mm-ss korean time
  const date = new Date();
  let format = '';
  format += date.getFullYear();
  format += date.getMonth() + 1;
  format += date.getDate();
  return format;
};

// 콘텐츠 더보기 드롭다운 박스 여닫기
const contentDropdown = document.querySelector('.content-dropdown');
const contentButton = document.querySelector('.btn-content');

window.addEventListener('click', (e) => {
  if (contentButton.contains(e.target)) {
    contentButton.classList.toggle('active');
  } else if (!contentDropdown.contains(e.target)) {
    contentButton.classList.remove('active');
  }
});

// tooltip 크기 조절
const resizeTooltip = (target, ratio) => {
  const targetWidth = target.clientWidth;
  const resizedWidth = targetWidth * ratio;

  target.style.width = `${resizedWidth - 24}px`;
};

const resizeIfHidden = (targetTooltip) => {
  const tooltipRect = targetTooltip.getBoundingClientRect();
  const containerRect = document.body.getBoundingClientRect();

  const isPartiallyHiddenOrFullyHidden =
    tooltipRect.right >= containerRect.right;

  if (isPartiallyHiddenOrFullyHidden) {
    const term = tooltipRect.right - containerRect.right;
    const visibleRatio = 1 - term / tooltipRect.width;
    resizeTooltip(targetTooltip, visibleRatio);
  } else {
    targetTooltip.style.width = 'max-content';
  }
};

const resizeObserver = new ResizeObserver(() => {
  const tooltip = document.querySelector('.tooltip');
  if (tooltip) {
    resizeIfHidden(tooltip);
  }
});

const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const intersectionRatio = entry.intersectionRatio;
      if (intersectionRatio < 1) {
        resizeTooltip(entry.target, intersectionRatio);
      }
    } else {
      entry.target.style.width = 'max-content';
    }
  });
};

// 위니브 사업자 정보 버튼 토글
const infoToggleButton = document.querySelector('.info-toggle-btn');

infoToggleButton?.addEventListener('click', () => {
  infoToggleButton.classList.toggle('active');
});
