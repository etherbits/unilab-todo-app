import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'components/common/Button'
import { motion } from 'framer-motion'
import { buttonVariants } from './animations'
import styles from './styles.module.css'

const MotionLink = motion(Link)

const LandingButton = () => {
    return (
        <MotionLink
            initial={'hidden'}
            animate={'visible'}
            exit={'hidden'}
            variants={buttonVariants}
            className={styles['link']}
            to={'sign-in'}
        >
            <Button className={styles['button']} isInverted>
                Get Started
            </Button>
        </MotionLink>
    )
}

export default LandingButton
