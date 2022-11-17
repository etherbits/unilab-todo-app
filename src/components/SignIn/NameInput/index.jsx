import React from 'react'
import TextInput from 'components/common/TextInput'
import styles from './styles.module.css'

const NameInput = ({ name, setName }) => {
    return (
        <div className={styles['input-container']}>
            <label className={styles['label']}>fill in your name</label>
            <TextInput
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={'your name'}
                required
            />
        </div>
    )
}

export default NameInput
