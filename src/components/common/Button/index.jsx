import React from 'react'
import { motion } from 'framer-motion'
import { buttonVariants, transition } from './animations'
import styles from './styles.module.css'

const Button = ({
    className,
    type,
    disabled,
    isInverted,
    onClick,
    children,
}) => {
    return (
        <motion.button
            animate={disabled ? 'disabled' : 'enabled'}
            custom={isInverted}
            variants={buttonVariants}
            whileHover={disabled ? {} : 'hover'}
            whileTap={disabled ? {} : 'tap'}
            className={`${styles['button']} ${className}`}
            type={type}
            onClick={onClick}
            disabled={disabled}
            transition={transition}
        >
            {children}
        </motion.button>
    )
}

export default Button
