import React from 'react'
import styles from './styles.module.css'
import { motion } from 'framer-motion'

const Button = ({ initial, animate, transition, exit, className, children }) => {
    return (
        <motion.button
            initial={initial}
            animate={animate}
            transition={transition}
            exit={exit}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className={`${styles['button']} ${className}`}
        >
            {children}
        </motion.button>
    )
}

export default Button
