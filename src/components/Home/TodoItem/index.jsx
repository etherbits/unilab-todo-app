import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { itemVariants, todoVariants } from './animations'
import styles from './styles.module.css'

const TodoItem = ({ todo, index, onComplete, onRemove }) => {
    const { task, isComplete } = todo
    const [isExiting, setIsExiting] = useState(false)

    const handleRemove = (index) => {
        setIsExiting(true)
        onRemove(index)
    }

    return (
        <motion.li key={todo.id} variants={itemVariants}>
            <motion.div
                key={todo.id}
                variants={todoVariants}
                custom={isComplete}
                animate={'visible'}
                exit={'removed'}
                className={styles['todo']}
                layout
            >
                <span className={styles['task']}>{task}</span>
                <motion.button
                    whileHover={{ backgroundColor: '#5efc8d' }}
                    className={styles['button']}
                    onClick={() => onComplete(index)}
                    disabled={isExiting}
                >
                    <img src="icons/tick.svg" alt="tick icon" />
                </motion.button>
                <motion.button
                    whileHover={{ backgroundColor: '#fc5e5e' }}
                    onClick={() => handleRemove(index)}
                    className={styles['button']}
                    disabled={isExiting}
                >
                    <img src="icons/remove.svg" alt="remove icon" />
                </motion.button>
            </motion.div>
        </motion.li>
    )
}

export default TodoItem
