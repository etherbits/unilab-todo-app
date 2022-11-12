import React, { useState } from 'react'
import { ReactComponent as CameraSvg } from 'assets/camera.svg'
import { motion } from 'framer-motion'
import styles from './styles.module.css'

const ImageInput = () => {
    const [selectedImg, setSelectedImg] = useState(null)

    const handleUpload = (e) => {
        const img = e.target.files[0]
        setSelectedImg(URL.createObjectURL(img))
    }
    // Todo: Research if I can use framer motion with custom components
    return (
        <React.Fragment>
            <label className={styles['input-label']} htmlFor='userImage'>
                <span>add photo</span>
                <div className={styles['image-container']}>
                    <CameraSvg
                        className={styles['camera-icon']}
                        fill={selectedImg ? 'rgba(0,0,0,0)' : '#000'}
                    />
                    {selectedImg && (
                        <motion.img
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className={styles['uploaded-img']}
                            src={selectedImg}
                            alt='User uploaded avatar or portrait'
                        />
                    )}
                </div>
            </label>
            <input
                className={styles['file-input']}
                type={'file'}
                id='userImage'
                name='userImage'
                accept='image/png, image/jpeg'
                onChange={handleUpload}
                required
            />
        </React.Fragment>
    )
}

export default ImageInput
