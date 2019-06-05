import React from 'react'
import { Link, navigate } from 'gatsby'

import styles from '../styles/index.module.scss'

const IndexPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}></div>
            <div className={styles.panel}>
                <div className={styles.nav}>
                    <div className={styles.title}>/ j12y /</div>
                    <div className={styles.item}>
                        <Link to='/blog'>blog</Link>
                    </div>
                    <div className={styles.item}>
                        <Link to='/sketchpad'>sketchpad</Link>
                    </div>
                    <div className={styles.item}>
                        <Link to='/contact'>about</Link>
                    </div>
                </div>
            </div>
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
        </div>
    )
}

export default IndexPage
