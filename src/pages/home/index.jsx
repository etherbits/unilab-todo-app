import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import Header from 'components/Home/Header'
import TodoSection from 'components/Home/TodoSection'
import { UserContext } from 'context/UserContext'
import styles from './styles.module.css'

const HomePage = () => {
    const { user } = useContext(UserContext)

    if (!user) {
        return <Navigate to="/sign-in" replace />
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
