import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import LandingButton from 'components/Landing/LandingButton'
import TitleContent from 'components/Landing/TitleContent'
import { UserContext } from 'context/UserContext'
import styles from './styles.module.css'

const LandingPage = () => {
    const { user } = useContext(UserContext)

    if (user) {
        return <Navigate to="/home" replace />
    }

    return (
        <main className={styles['page']}>
            <TitleContent />
            <LandingButton />
        </main>
    )
}

export default LandingPage
