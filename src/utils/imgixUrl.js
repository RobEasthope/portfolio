const imgixUrl = (url) => {
  if (url) {
    return url.replace('https://codex.cdn.prismic.io/codex/', 'https://rob-easthope.imgix.net/');
  }
};

export default imgixUrl;
