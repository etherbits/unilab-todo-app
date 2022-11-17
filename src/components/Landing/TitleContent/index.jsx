import React from 'react'
import { motion } from 'framer-motion'
import { imgVariants, letterVariants } from './animations'
import styles from './styles.module.css'

const titleText = 'Keep Track Of Daily Tasks In Life'

const TitleContent = () => {
    return (
        <motion.div
            initial={'hidden'}
            animate={'visible'}
            exit={'hidden'}
            className={styles['title-container']}
        >
            <motion.img
                variants={imgVariants}
                className={styles['img']}
                src="icons/todo.svg"
                alt="logo"
            />
            <h1 className={styles['title']}>
                <ul>
                    {titleText.split('').map((char, index) => (
                        <motion.li
                            key={index}
                            variants={letterVariants}
                            custom={index}
                        >
                            {char}
                        </motion.li>
                    ))}
                </ul>
            </h1>
        </motion.div>
    )
}

export default TitleContent
