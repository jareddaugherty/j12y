import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

export const query = graphql`
query ($slug: String!) {
  markdownRemark (fields: {slug: { eq: $slug }}) {
    frontmatter {
      title
      date
    }
    html
  }
}
`
const BlogPost = (props) => {
    const frontmatter = get(props, 'data.markdownRemark.frontmatter', {})
    const { title, date } = frontmatter
    const html = get(props, 'data.markdownRemark.html', {})
    return (
        <div>
            <h2>{title}</h2>
            <div>{date}</div>

            <div dangerouslySetInnerHTML={{__html: html}}></div>
        </div>
    )
}

export default BlogPost
