import React from 'react'
import Layout from '../components/Layout.js'
import styles from '../styles/sketch.module.scss'
const Sketchpad = (props) => {
    return (
        <Layout location={props.location}>
            <div className={styles.parent}>
                <div  className={styles.div1}>
                </div>
                <div className={styles.div2}></div>
                <div className={styles.div3}></div>
                <div className={styles.div4}></div>
           </div>
        </Layout>
    )

}

export default Sketchpad
