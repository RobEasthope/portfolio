function fontSizing(
  minFontSize = 16,
  maxFontSize = 21,
  minViewport = 320,
  maxViewport = 1680
) {
  return `calc(${minFontSize}px + (${maxFontSize} - ${minFontSize}) * ((100vw - ${minViewport}px) / (${maxViewport} - ${minViewport})))`;
}

export default fontSizing;
