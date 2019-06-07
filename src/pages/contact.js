import React from 'react'
import Layout from '../components/Layout.js'
import styles from '../styles/contact.module.scss'

const ContactPage = () => {
    return (
        <Layout>
            <div className={styles.parent}>
                <div  className={styles.div1}></div>
                <div className={styles.div2}></div>
                <div className={styles.div3}></div>
                <div className={styles.div4}></div>
           </div>
        </Layout>
    )
}

export default ContactPage
