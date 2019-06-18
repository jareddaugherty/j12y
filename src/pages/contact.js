import React from 'react'
import Layout from '../components/Layout.js'
import styles from '../styles/contact.module.scss'

const ContactPage = (props) => {
    return (
        <Layout location={props.location}>
            <div className={styles.parent}>
                <div  className={styles.div1}></div>
                <div className={styles.div2}>
                    <div className={styles.intro}>
                        Hi! I'm  a software engineer in New York City, currently taking sabbatical at the <a className={styles.recurse} target="_blank" rel="noopener noreferrer" href="https://www.recurse.com">Recurse Center</a>.
                    </div>
                </div>
                <div className={styles.div3}></div>
                <div className={styles.div4}></div>
            </div>
        </Layout>
    )
}

export default ContactPage
