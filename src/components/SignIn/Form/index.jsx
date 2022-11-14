import React, { useState, useEffect, useContext } from 'react'
import Button from 'components/common/Button'
import ImageInput from '../ImageInput'
import { motion, useAnimationControls } from 'framer-motion'
import styles from './styles.module.css'
import { UserContext } from 'context/UserContext'
import NameInput from '../NameInput'

const SignInForm = () => {
    const [name, setName] = useState('')
    const [profilePic, setProfilePic] = useState(null)

    const { createUser } = useContext(UserContext)

    const controls = useAnimationControls()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await controls.start({ y: '-100%', opacity: 0 })
        createUser(name, profilePic)
    }

    useEffect(() => {
        controls.start({ y: 0, opacity: 1 })
    }, [controls])

    return (
        <motion.form
            initial={{ y: 100, opacity: 0 }}
            animate={controls}
            exit={{ y: '-100%', opacity: 0 }}
            className={styles['form']}
            onSubmit={handleSubmit}
        >
            <h1 className={styles['title']}>Get Started</h1>
            <ImageInput
                setProfilePic={setProfilePic}
                selectedProfilePic={profilePic}
            />
            <NameInput setName={setName} name={name} />
            <Button
                className={styles['button']}
                type='submit'
                disabled={!(name && profilePic) ? true : false}
            >
                Sign In
            </Button>
        </motion.form>
    )
}

export default SignInForm
