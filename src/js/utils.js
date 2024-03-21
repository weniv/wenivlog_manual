const dateFormat = () => {
  // yyyy-mm-dd-hh-mm-ss korean time
  const date = new Date();
  let format = '';
  format += date.getFullYear();
  format += date.getMonth() + 1;
  format += date.getDate();
  return format;
};

// 위니브 사업자 정보 버튼 토글
const infoToggleButton = document.querySelector('.info-toggle-btn');

infoToggleButton?.addEventListener('click', () => {
  infoToggleButton.classList.toggle('active');
});
