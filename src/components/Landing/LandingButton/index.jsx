import React from 'react'
import Button from 'components/common/Button'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

const LandingButton = ({ transitionDuration }) => {
    return (
        <Link className={styles['link']} to={'sign-in'}>
            <Button
                initial={{ y: 35, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 35, opacity: 0 }}
                transition={{
                    y: { duration: transitionDuration },
                    opacity: { duration: transitionDuration },
                }}
                className={styles['button']}
            >
                Get Started
            </Button>
        </Link>
    )
}

export default LandingButton
