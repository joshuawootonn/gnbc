const path = require("path");
const stringToUrl = require('./src/utils').stringToUrl;
exports.createPages = ({ boundActionCreators, graphql }) => {

  const { createPage } = boundActionCreators;

  const detailTemplate = path.resolve(`src/templates/detail.js`);
  const ministryTemplate = path.resolve(`src/templates/ministry.js`);
  const peopleTemplate = path.resolve(`src/templates/people.js`);
  const mediaTemplate = path.resolve("src/templates/media.js");
  const contactTemplate = path.resolve("src/templates/contact.js");
  const messageTemplate = path.resolve("src/templates/message.js");
  graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              type
              title 
              date
              templateType
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      
      if (node.frontmatter.templateType === "Detail"){
        createPage({
          path: `/about/${node.frontmatter.path}/`,
          component: detailTemplate,
          context: {
            name: node.frontmatter.path
          },
          title: node.frontmatter.title
        });
      }

      if (node.frontmatter.templateType === "Ministry") {
        createPage({
          path: `/ministry/${node.frontmatter.path}/`,
          component: ministryTemplate,
          context: {
            name: node.frontmatter.path
          },
          title: node.frontmatter.title
        });
      }
      
      if (node.frontmatter.templateType === "People") {
        createPage({
          path: `/about/${node.frontmatter.path}`,
          component: peopleTemplate,
          context: {
            name: node.frontmatter.path
          },
          title: node.frontmatter.title
        });
      }

      if (node.frontmatter.templateType === "Media") {
        createPage({
          path: `/${node.frontmatter.path}`,
          component: mediaTemplate,
          context: {
            name: node.frontmatter.path
          },
          title: node.frontmatter.title
        });
      }
      if (node.frontmatter.templateType === "Message") {
       
        const messagePath = stringToUrl(node.frontmatter.title);
        createPage({
          path: `/media/${messagePath}`,
          component: messageTemplate,
          context: {
            name: node.frontmatter.date
          },
          title: node.frontmatter.title
        });
      }

      if (node.frontmatter.templateType === "Contact") {
        createPage({
          path: `/${node.frontmatter.path}`,
          component: contactTemplate,
          context: {
            name: node.frontmatter.path
          },
          title: node.frontmatter.title
        });
      }
      
    });
  });
};