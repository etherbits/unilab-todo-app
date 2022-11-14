import React, { useState, useContext } from 'react'
import uuid from 'react-uuid'
import Button from 'components/common/Button'
import TextInput from 'components/common/TextInput'
import styles from './styles.module.css'
import TodoItem from '../TodoItem'
import { UserContext } from 'context/UserContext'
import { motion } from 'framer-motion'

const TodoSection = () => {
    const { user, addTodo, removeTodo, completeTodo } = useContext(UserContext)
    const [task, setTask] = useState('')
    const todos = user.todos

    const handleAdd = () => {
        if (!task) return
        addTodo({ id: uuid(), task, isComplete: false })
    }

    const handleRemove = (index) => {
        removeTodo(index)
    }

    const handleComplete = (index) => {
        completeTodo(index)
    }

    return (
        <motion.main
            className={styles['main']}
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
        >
            <h1 className={styles['title']}>Add Your Daily Tasks</h1>
            <div className={styles['add-todo-container']}>
                <TextInput
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder={'my task'}
                />
                <Button onClick={handleAdd}>Add</Button>
            </div>
            {todos && (
                <ul className={styles['todo-list']}>
                    {todos.map((todo, index) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            index={index}
                            onComplete={handleComplete}
                            onRemove={handleRemove}
                        />
                    ))}
                </ul>
            )}
        </motion.main>
    )
}

export default TodoSection
