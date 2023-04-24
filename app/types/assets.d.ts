// Styles
declare module '*.scss' {
  const content: any;
  export default content;
}
declare module '*.css' {
  const content: any;
  export default content;
}

// Images
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
declare module '*.gif';

// Videos
declare module '*.mp4';
declare module '*.mov';
