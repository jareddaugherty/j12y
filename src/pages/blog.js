import React from 'react'
import Layout from '../components/Layout.js'
import styles from '../styles/blog.module.scss'


const Blog = () => {
    return (
        <Layout>
            <div className={styles.parent}>
            <div  className={styles.div1}></div>
            <div className={styles.div2}></div>
            <div className={styles.div3}></div>
        </div>
        </Layout>
 

    )
}

export default Blog
