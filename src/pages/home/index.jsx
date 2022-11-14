import React, { useContext } from 'react'
import { UserContext } from 'context/UserContext'
import { Navigate } from 'react-router-dom'
import styles from './styles.module.css'
import Header from 'components/Home/Header'
import TodoSection from 'components/Home/TodoSection'

const HomePage = () => {
    const { user } = useContext(UserContext)

    if (!user) {
        return <Navigate to='/sign-in' replace />
    }

    return (
        <div className={styles['page']}>
            <Header />
            <div className={styles['content']}>
                <TodoSection />
            </div>
        </div>
    )
}

export default HomePage
