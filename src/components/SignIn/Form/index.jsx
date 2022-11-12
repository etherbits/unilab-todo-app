import Button from 'components/common/Button'
import React from 'react'
import ImageInput from '../ImageInput'
import TextInput from '../TextInput'
import styles from './styles.module.css'
import { motion } from 'framer-motion'

const SignInForm = () => {
    return (
        <motion.form
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={styles['form']}
        >
            <h1>Get Started</h1>
            <ImageInput />
            <TextInput />
            <Button>Sign In</Button>
        </motion.form>
    )
}

export default SignInForm
