import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import styles from './styles.module.css'
import { UserContext } from 'context/UserContext'

const Header = () => {
    const { user, logout } = useContext(UserContext)

    return (
        <motion.header
            initial={{ height: '100vh', padding: '0' }}
            animate={{ height: '100px', padding: '1rem 2rem' }}
            className={styles['header']}
        >
            <motion.span
                className={styles['logo']}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                TO DO
            </motion.span>
            <motion.span
                className={styles['complete-todos']}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                completed todos: {user.completedTodoCount}
            </motion.span>
            <motion.div
                className={styles['profile-container']}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                <motion.div
                    className={styles['text-container']}
                    initial={{ x: 40 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <span className={styles['name']}>{user.name}</span>
                    <span className={styles['logout']} onClick={logout}>
                        logout
                    </span>
                </motion.div>
                <img
                    className={styles['profile-pic']}
                    src={user.profilePic}
                    alt='profile'
                />
            </motion.div>
        </motion.header>
    )
}

export default Header
