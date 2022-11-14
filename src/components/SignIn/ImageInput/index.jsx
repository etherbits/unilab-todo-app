import React from 'react'
import { ReactComponent as CameraSvg } from 'assets/camera.svg'
import { motion } from 'framer-motion'
import styles from './styles.module.css'

const MotionCameraSvg = motion(CameraSvg)

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

    const motionVariant = {
        rest: {
            fill: selectedProfilePic ? '#00000000' : '#000',
            transition: {
                duration: 0.1,
                type: 'tween',
                ease: 'easeOut',
            },
        },
        hover: {
            fill: '#5efc8d',
            transition: {
                duration: 0.1,
                type: 'tween',
                ease: 'easeIn',
            },
        },
    }

    return (
        <div>
            <motion.label
                initial={'rest'}
                whileHover={'hover'}
                animate='rest'
                className={styles['input-label']}
                htmlFor='userImage'
            >
                <span>add photo</span>
                <div className={styles['image-container']}>
                    <MotionCameraSvg
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        variants={motionVariant}
                        className={styles['camera-icon']}
                    />
                    {selectedProfilePic && (
                        <motion.img
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className={styles['uploaded-img']}
                            src={selectedProfilePic}
                            alt='User uploaded avatar or portrait'
                        />
                    )}
                </div>
            </motion.label>
            <input
                className={styles['file-input']}
                type={'file'}
                id='userImage'
                name='userImage'
                accept='image/png, image/jpeg'
                onChange={handleUpload}
                required
            />
        </div>
    )
}

export default ImageInput
