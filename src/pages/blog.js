import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/Layout.js'
import styles from '../styles/blog.module.scss'


const Blog = (props) => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }

                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    const posts = data.allMarkdownRemark.edges
    return (
        <Layout location={props.location}>
            <div className={styles.parent}>
                <div  className={styles.div1}>
                    <div className={styles.posts}>
                        { posts.map(post => {
                            const title = get(post, 'node.frontmatter.title', '')
                            const date= get(post, 'node.frontmatter.date', '')
                            const slug = get(post, 'node.fields.slug', '')
                            return (
                                <li key={title} className={styles.post}>
                                    {date} - <Link to={`/blog/${slug}`}>{title}</Link>
                                </li>
                            )
                        })}
                    </div>
                </div>
                <div className={styles.div2}></div>
                <div className={styles.div3}></div>
            </div>
        </Layout>
    )
}

export default Blog

