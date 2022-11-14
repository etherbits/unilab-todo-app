import React from 'react'
import Button from 'components/common/Button'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)

const LandingButton = () => {
    return (
        <MotionLink
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 35, opacity: 0 }}
            className={styles['link']}
            to={'sign-in'}
        >
            <Button className={styles['button']}>Get Started</Button>
        </MotionLink>
    )
}

export default LandingButton
