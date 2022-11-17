import React from 'react'
import { MotionConfig, motion } from 'framer-motion'
import {
    iconVariants,
    imgContainerVariants,
    imgVariants,
    transition,
} from './animations'
import styles from './styles.module.css'

const ImageInput = ({ selectedProfilePic, setProfilePic }) => {
    const handleUpload = (e) => {
        const img = e.target.files[0]

        if (!img) return

        const reader = new FileReader()
        reader.readAsDataURL(img)
        reader.onload = () => {
            setProfilePic(reader.result)
        }
    }

    return (
        <MotionConfig transition={transition}>
            <div>
                <motion.label
                    initial={'resting'}
                    whileHover={'hovered'}
                    animate={selectedProfilePic ? 'occupied' : 'resting'}
                    className={styles['input-label']}
                    htmlFor="userImage"
                >
                    <span>add photo</span>
                    <motion.div
                        variants={imgContainerVariants}
                        className={styles['image-container']}
                    >
                        <motion.img
                            variants={iconVariants}
                            className={styles['camera-icon']}
                            src="icons/camera.svg"
                            alt="camera-icon"
                        />
                        {selectedProfilePic && (
                            <motion.img
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                variants={imgVariants}
                                className={styles['uploaded-img']}
                                src={selectedProfilePic}
                                alt="User uploaded avatar or portrait"
                            />
                        )}
                    </motion.div>
                </motion.label>
                <input
                    className={styles['file-input']}
                    type={'file'}
                    id="userImage"
                    name="userImage"
                    accept="image/png, image/jpeg"
                    onChange={handleUpload}
                    required
                />
            </div>
        </MotionConfig>
    )
}

export default ImageInput
