import React from 'react'
import styles from './styles.module.css'

const TextInput = ({ className, placeholder, required, value, onChange }) => {
    return (
        <input
            className={`${styles['input']} ${className}`}
            onChange={onChange}
            value={value}
            type={'text'}
            placeholder={placeholder}
            required={required}
        />
    )
}

export default TextInput
