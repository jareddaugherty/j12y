import React from 'react'
import styles from '../styles/blog.module.scss'


const Blog = () => {
    return (
        <div className={styles.container}>
        <div className={styles.parent}>
            <div className={styles.div1}></div>
            <div className={styles.div2}></div>
            <div className={styles.div3}></div>
            <div className={styles.div4}>
                <div className={styles.posts}>
                    <div className={styles.post}>post 1</div>
                    <div className={styles.post}>post 2</div>
                    <div className={styles.post}>post 3</div>
                </div>
            </div>
            <div className={styles.div5}></div>
            <div className={styles.div6}></div>
            <div className={styles.div7}></div>
            <div className={styles.div8}></div>
            <div className={styles.div9}>
                <div className={styles.intro}>
                    blog
                </div>
            </div>
            <div className={styles.div10}></div>
            <div className={styles.div11}></div>
        </div>
        </div>
    )

}

export default Blog
