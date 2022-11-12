import React from 'react'
import styles from './styles.module.css'
import { motion } from 'framer-motion'
import { ReactComponent as TodoSvg } from 'assets/todo.svg'

const titleText = 'Keep Track Of Daily Tasks In Life'

const TitleContent = ({ transitionDuration }) => {
    return (
        <div className={styles['title-container']}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ opacity: { duration: transitionDuration } }}
                exit={{ opacity: 0 }}
            >
                <TodoSvg className={styles['img']} />
            </motion.div>
            <h1 className={styles['title']}>
                <ul>
                    {titleText.split('').map((char, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                opacity: { duration: transitionDuration },
                                delay: index * transitionDuration * 0.025,
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
