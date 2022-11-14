import React from 'react'
import { ReactComponent as TickSvg } from 'assets/tick.svg'
import { ReactComponent as RemoveSvg } from 'assets/remove.svg'
import { motion } from 'framer-motion'
import styles from './styles.module.css'

const TodoItem = ({ todo, index, onComplete, onRemove }) => {
    const { task, isComplete } = todo
    return (
        <motion.li
            className={styles['todo']}
            initial={{ x: -50, opacity: 0 }}
            animate={{
                x: 0,
                opacity: 1,
                backgroundColor: isComplete ? '#bbb' : '#000',
            }}
        >
            <span className={styles['task']}>{task}</span>
            <motion.button
                whileHover={{ backgroundColor: '#5efc8d' }}
                className={styles['button']}
                onClick={() => onComplete(index)}
            >
                <TickSvg />
            </motion.button>
            <motion.button
                whileHover={{ backgroundColor: '#fc5e5e' }}
                className={styles['button']}
                onClick={() => onRemove(index)}
            >
                <RemoveSvg />
            </motion.button>
        </motion.li>
    )
}

export default TodoItem
