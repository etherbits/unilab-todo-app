import React from 'react'
import styles from './styles.module.css'
import { motion } from 'framer-motion'
import { ReactComponent as TodoSvg } from 'assets/todo.svg'
import transition from 'transitionConfig'

const { duration } = transition

const titleText = 'Keep Track Of Daily Tasks In Life'

const MotionTodoSvg = motion(TodoSvg)

const TitleContent = () => {
    return (
        <div className={styles['title-container']}>
            <MotionTodoSvg
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={styles['img']}
            />

            <h1 className={styles['title']}>
                <ul>
                    {titleText.split('').map((char, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: duration,
                                delay: index * duration * 0.02,
                            }}
                        >
                            {char}
                        </motion.li>
                    ))}
                </ul>
            </h1>
        </div>
    )
}

export default TitleContent
