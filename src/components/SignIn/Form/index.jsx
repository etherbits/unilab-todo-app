import React, { useContext, useEffect, useState } from 'react'
import Button from 'components/common/Button'
import { UserContext } from 'context/UserContext'
import { motion, useAnimationControls } from 'framer-motion'
import ImageInput from '../ImageInput'
import NameInput from '../NameInput'
import { formVariants } from './animations'
import styles from './styles.module.css'

const SignInForm = () => {
    const [name, setName] = useState('')
    const [profilePic, setProfilePic] = useState(null)

    const { createUser } = useContext(UserContext)

    const controls = useAnimationControls()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await controls.start('exiting')
        createUser(name, profilePic)
    }

    useEffect(() => {
        controls.start('visible')
    }, [controls])

    return (
        <motion.form
            initial={'hidden'}
            animate={controls}
            variants={formVariants}
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
                type="submit"
                disabled={!(name && profilePic) ? true : false}
            >
                Sign In
            </Button>
        </motion.form>
    )
}

export default SignInForm
