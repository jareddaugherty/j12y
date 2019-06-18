import React from 'react'
import { navigate, Link } from 'gatsby'
import classnames from 'classnames'
import styles from '../styles/layout.module.scss'
import { useKeyPress } from '../hooks/onKeyPress.js'

const Layout = (props) => {
    const { location: { pathname }} = props 
    
    const paths = [{ path: '/', title: '/ jared daugherty /' }, 
                   { path: '/blog', title: 'blog' }, 
                   { path: '/sketchpad', title: 'sketchpad' }, 
                   { path: '/contact', title: 'about' }]

    const currentPage = paths.findIndex((el) => el.path === pathname)

    const onUp = () => navigate('/') 

    const onRight = () => {
        const nextPage = paths[(currentPage + 1) % 4]
        navigate(nextPage.path) 
    }

    const onLeft = () => {
        const prevPage = paths[currentPage <= 0 ? 3 : currentPage - 1]
        navigate(prevPage.path)
    }

    useKeyPress('ArrowUp', onUp)
    useKeyPress('k', onUp)
    useKeyPress('ArrowLeft', onLeft)
    useKeyPress('h', onLeft)
    useKeyPress('ArrowRight', onRight)
    useKeyPress('l', onRight)

    return (
        <div className={styles.container}>
            <div className={styles.parent}>
                {props.children}
            </div>
            <div className={styles.nav}>
                { paths.map((path,index) => {
                    return (
                        <div 
                          key={path.path}
                          className={
                            classnames(
                                styles.item, 
                                {[styles.active]: index === currentPage}
                            )}>
                            <Link to={path.path}>{path.title}</Link>
                        </div>
                    )
                })}
            </div> 
        </div>
    )
}

export default Layout
