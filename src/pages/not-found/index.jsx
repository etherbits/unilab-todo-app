import React from 'react'
import styles from './styles.module.css'

const NotFoundPage = () => {
    return (
        <div className={styles['page']}>
            <h1>The page you are looking for does not exist</h1>
            <span>404 </span>
            <span>Does not exist</span>
        </div>
    )
}

export default NotFoundPage
