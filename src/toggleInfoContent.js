import SweetScroll from 'sweet-scroll';

const infoContent = document.getElementById('info-content');
const transitionDurationStr = window
  .getComputedStyle(infoContent)
  .getPropertyValue('transition-duration');
const transitionDuration = parseFloat(transitionDurationStr) * 1000;

const scroller = SweetScroll.create({
  duration: transitionDuration,
})

export function toggleInfoVisibility() {
  if (+infoContent.style.opacity) {
    infoContent.style.opacity = 0;
    scroller.toTop(0)
    setTimeout(() => {
      infoContent.style.display = 'none';
      document.body.style.overflow = 'hidden';
    }, transitionDuration);
  } else {
    infoContent.style.display = 'block';
    document.body.style.overflow = 'auto';
    setTimeout(() => {
      infoContent.style.opacity = 1;
    }, 0);
  }
}
