/* eslint-disable no-unused-vars */
const prismicLinkResolver = (doc, ctx) => {
  let path = '/';

  if (doc) {
    if (doc.type === 'landing') {
      path = '/';
    }
    if (doc.type === 'portfolio') {
      path = '/portfolio';
    }
    if (doc.type === 'project') {
      path = `/portfolio/${doc.uid}`;
    }
    if (doc.type === 'about') {
      path = '/about';
    }
    if (doc.type === 'contact') {
      path = '/contact';
    }
  }

  return path;
};

export default prismicLinkResolver;
