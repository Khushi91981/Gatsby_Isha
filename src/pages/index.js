import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
  query {
    wpgraphql {
      pages {
        nodes {
          id
          title
          uri
          
        }
      }
      posts {
        nodes {
          id
          title
          uri
          excerpt
        }
      }
    }
  }
`

const Index = ({ data }) => {
  const pages = data.wpgraphql.pages.nodes
  const posts = data.wpgraphql.posts.nodes

  return (
    <Layout>
      <h2>List of Pages and Blogs in WordPress Sites</h2>
      <h3>List of Pages in WordPress Sites</h3>
      {pages.map(page => (
        <article key={page.id}>
            <ul>
              <li>
                <Link
                  to={page.uri}
                  className="home-links"
                  dangerouslySetInnerHTML={{ __html: page.title }}
                />
              </li>
            </ul>
          
        </article>
      ))}
       <h3>List of Blogs in WordPress Sites</h3>
     
       {posts.map(post => (
        
        <article key={post.id}>
          <ul>
            <li>
            <Link
              to={`/blog/${post.uri}`}
              className="home-links"
              dangerouslySetInnerHTML={{ __html: post.title }}
            />
            </li>
          </ul>
          
        </article>
        
      ))}
    
    </Layout>
  )
}

export default Index