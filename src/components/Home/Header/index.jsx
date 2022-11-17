import React, { useContext } from 'react'
import { UserContext } from 'context/UserContext'
import { MotionConfig, motion } from 'framer-motion'
import {
    counterVariants,
    headerVariants,
    logoVariants,
    logoutVariants,
    profileContainerVariants,
    textContainerVariants,
    transition,
} from './animations'
import styles from './styles.module.css'

const Header = () => {
    const { user, logout } = useContext(UserContext)

    return (
        <MotionConfig transition={transition}>
            <motion.header
                initial={'hidden'}
                animate={'visible'}
                variants={headerVariants}
                className={styles['header']}
            >
                <div className={styles['logo-container']}>
                    <motion.div
                        className={styles['logo']}
                        variants={logoVariants}
                    >
                        TO DO
                    </motion.div>
                    <motion.span
                        className={styles['complete-todos']}
                        variants={counterVariants}
                    >
                        completed todos: {user.completedTodoCount}
                    </motion.span>
                </div>
                <motion.div
                    className={styles['profile-container']}
                    variants={profileContainerVariants}
                >
                    <motion.div
                        className={styles['text-container']}
                        variants={textContainerVariants}
                    >
                        <span className={styles['name']}>{user.name}</span>
                        <motion.span
                            className={styles['logout']}
                            animate={'resting'}
                            whileHover={'hovered'}
                            variants={logoutVariants}
                            onClick={logout}
                        >
                            log out
                        </motion.span>
                    </motion.div>
                    <img
                        className={styles['profile-pic']}
                        src={user.profilePic}
                        alt="profile"
                    />
                </motion.div>
            </motion.header>
        </MotionConfig>
    )
}

export default Header
