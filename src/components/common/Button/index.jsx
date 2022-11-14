import React from 'react'
import styles from './styles.module.css'
import { motion } from 'framer-motion'

const Button = ({ className, type, disabled, onClick, children }) => {
    const variations = {
        disabled: {
            backgroundColor: '#a4fcbe',
            boxShadow: '0 0 0px rgba(94, 252, 141, 0)',
            cursor: 'not-allowed',
        },
        enabled: {
            backgroundColor: '#5efc8d',
            boxShadow: '0 0 16px rgba(94, 252, 141, .25)',
            cursor: 'pointer',
        },
        hover: {
            scale: 1.05,
            backgroundColor: '#80ffaf',
            boxShadow: '0 0 16px rgba(94, 252, 141, .45)',
        },
        tap: {
            scale: 0.95,
            backgroundColor: '#80ffaf',
            boxShadow: '0 0 16px rgba(94, 252, 141, .6)',
        },
    }

    return (
        <motion.button
            animate={disabled ? 'disabled' : 'enabled'}
            variants={variations}
            whileHover={disabled ? {} : 'hover'}
            whileTap={disabled ? {} : 'tap'}
            className={`${styles['button']} ${className}`}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </motion.button>
    )
}

export default Button
