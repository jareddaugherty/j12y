import React from 'react'
import { navigate } from 'gatsby'
import Layout from '../components/Layout.js'
import styles from '../styles/index.module.scss'

const IndexPage = () => {
    return (
        <Layout>
            <div className={styles.parent}>
            <div 
                className={styles.div1} 
                onClick={() => navigate('/blog')}>
            </div>
            <div className={styles.div2}></div>
            <div className={styles.div3}></div>
            <div className={styles.div4}></div>
            <div 
                className={styles.div5}
                onClick={() => navigate('/contact')}>
            </div>
            <div className={styles.div6}></div>
            <div
                className={styles.div7}
                onClick={() => navigate('/sketchpad')}>

            </div>
            <div className={styles.div8}></div>
            <div className={styles.div9}></div>
            <div className={styles.div10}></div>
            <div className={styles.div11}></div>
            <div className={styles.div12}></div>
            <div className={styles.div13}></div>
            <div className={styles.div14}></div>
        </div>
        </Layout>
    )
}

export default IndexPage
