import { scrollIt } from './smoothScroll';

const infoContent = document.getElementById('info-content');
const transitionDurationStr = window
  .getComputedStyle(infoContent)
  .getPropertyValue('transition-duration');
const transitionDuration = parseFloat(transitionDurationStr) * 1000;

export function toggleInfoVisibility() {
  if (+infoContent.style.opacity) {
    infoContent.style.opacity = 0;
    scrollIt(0, transitionDuration);
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
