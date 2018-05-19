import React from "react";
import Helmet from "react-helmet";


export default function Template({ data }) {
  const {frontmatter} = data.markdownRemark;
  return (
    <div>
      <Helmet title={`About - ${frontmatter.title}`} />
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </div>
    </div>
  );
}
export const DetailPathQuery = graphql`
  query DetailPath($name: String!) {
    markdownRemark(frontmatter: { path: { eq: $name } }) {
      html
      frontmatter {
        type 
        path
        title
      }
    }
  }
`
;