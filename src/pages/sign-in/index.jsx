import SignInForm from 'components/SignIn/Form'
import React from 'react'
import styles from './styles.module.css'

const SignInPage = () => {
    return (
        <div className={styles['page']}>
            <SignInForm />
        </div>
    )
}

export default SignInPage
