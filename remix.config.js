module.exports = {
  ignoredRouteFiles: ['**/.*'],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  future: {
    unstable_tailwind: true,
    v2_errorBoundary: true,
    v2_routeConvention: true,
  },
  serverDependenciesToBundle: ['classname-variants'],
};
