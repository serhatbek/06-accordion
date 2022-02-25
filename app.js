const accordItems = document.querySelectorAll('.accordion__item');

accordItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    showContent(e);
  });
});

function showContent(e) {
  let target = e.currentTarget;
  if (!target.classList.contains('active')) {
    accordItems.forEach((item) => {
      item.classList.remove('active');
    });
    target.classList.add('active');
  } else {
    target.classList.remove('active');
  }
}
