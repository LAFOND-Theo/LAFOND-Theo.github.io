const processItems = document.querySelectorAll('.process-item');

window.addEventListener('scroll', () => {
  processItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    const itemBottom = item.getBoundingClientRect().bottom;

    if (itemTop < window.innerHeight && itemBottom > 0) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
});
