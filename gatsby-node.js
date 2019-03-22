exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createPageDependency } = actions;

  const result = await graphql(`
    {
      allSanityProject(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            title
            description
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const projects = result.data.allSanityProject.edges || [];
  projects.forEach((edge, index) => {
    const path = `/project/${edge.node.slug.current}`;

    createPage({
      path,
      component: require.resolve("./src/templates/project.js"),
      context: { slug: edge.node.slug.current }
    });

    createPageDependency({ path, nodeId: edge.node.id });
  });
};
