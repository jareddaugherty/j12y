import React from 'react'
import { Link } from 'gatsby'
import styles from '../styles/layout.module.scss'

const Layout = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.parent}>
                {props.children}
            </div>
            <div className={styles.nav}>
                <div className={styles.title}>
                    <Link to="/">/ jared daugherty /</Link>
                </div>
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
    )
}

export default Layout
