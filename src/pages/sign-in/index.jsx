import SignInForm from 'components/SignIn/Form'
import React, { useContext } from 'react'
import styles from './styles.module.css'
import { Navigate } from 'react-router-dom'
import { UserContext } from 'context/UserContext'

const SignInPage = () => {
    const { user } = useContext(UserContext)

    if (user) {
        return <Navigate to='/home' replace />
    }

    return (
        <div className={styles['page']}>
            <SignInForm />
        </div>
    )
}

export default SignInPage
