import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import SignInForm from 'components/SignIn/Form'
import { UserContext } from 'context/UserContext'
import styles from './styles.module.css'

const SignInPage = () => {
    const { user } = useContext(UserContext)

    if (user) {
        return <Navigate to="/home" replace />
    }

    return (
        <div className={styles['page']}>
            <SignInForm />
        </div>
    )
}

export default SignInPage
