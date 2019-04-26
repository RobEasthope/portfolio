import { contentWidth } from '../styles/theme';

function fontSizing(minFontSize = 16, maxFontSize = 21) {
  return `calc(${minFontSize}px + (${maxFontSize} - ${minFontSize}) * ((100vw - ${
    contentWidth.min
  }px) / (${contentWidth.max} - ${contentWidth.min})))`;
}

export default fontSizing;
