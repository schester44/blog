import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

const BlogIndex = ({ location, data: { site, allMarkdownRemark } }) => {
  const siteTitle = site.siteMetadata.title
  const posts = allMarkdownRemark.edges
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" keywords={[`blog`, `nodejs`, `tutorials`, `technologoy`, `javascript`, `react`]} />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <div key={node.fields.slug}>
            <h3
              style={{
                fontWeight: 400,
                ...scale(0.3),
                marginBottom: rhythm(1 / 4)
              }}
            >
              <Link style={{ boxShadow: `none`, boxShadow: `none`, color: `tomato` }} to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            <p
              style={{
                fontSize: "0.9rem"
              }}
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt
              }}
            />
          </div>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
