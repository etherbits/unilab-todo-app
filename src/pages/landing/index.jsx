import React from 'react'
import styles from './styles.module.css'
import TitleContent from 'components/Landing/TitleContent'
import LandingButton from 'components/Landing/LandingButton'
// const transitionDuration = 0.5

const LandingPage = () => {
    return (
        <main className={styles['page']}>
            <TitleContent />
            <LandingButton />
        </main>
    )
}

export default LandingPage
