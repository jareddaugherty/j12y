import React from 'react'
import styles from '../styles/sketch.module.scss'
const Sketchpad = () => {
    return (
        <div className={styles.container}>
        <div className={styles.parent}>
            <div className={styles.div1}></div>
            <div className={styles.div2}></div>
            <div className={styles.div3}></div>
            <div className={styles.div4}></div>
            <div className={styles.div5}></div>
            <div className={styles.div6}>
                <div className={styles.header}>sketchpad</div>
            </div>
            <div className={styles.div7}></div>
            <div className={styles.div8}></div>
            <div className={styles.div9}></div>
            <div className={styles.div10}></div>
        </div>
        </div>
    )

}

export default Sketchpad
