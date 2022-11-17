import React, { useContext, useState } from 'react'
import uuid from 'react-uuid'
import Button from 'components/common/Button'
import TextInput from 'components/common/TextInput'
import { UserContext } from 'context/UserContext'
import { AnimatePresence, motion } from 'framer-motion'
import TodoItem from '../TodoItem'
import { mainVariants } from './animations'
import styles from './styles.module.css'

const TodoSection = () => {
    const { user, addTodo, removeTodo, completeTodo } = useContext(UserContext)
    const [task, setTask] = useState('')
    const todos = user.todos

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!task) return
        addTodo({ id: uuid(), task })
        setTask('')
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
            initial={'hidden'}
            animate={'visible'}
            variants={mainVariants}
        >
            <h1 className={styles['title']}>Add Your Daily Tasks</h1>
            <form
                onSubmit={handleSubmit}
                className={styles['add-todo-container']}
            >
                <TextInput
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder={'my task'}
                    required
                />
                <Button type={'submit'} disabled={!task}>
                    Add
                </Button>
            </form>
            {todos && (
                <ul className={styles['todo-list']}>
                    <AnimatePresence mode="exit">
                        {todos.map((todo, index) => (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                index={index}
                                onComplete={handleComplete}
                                onRemove={handleRemove}
                            />
                        ))}
                    </AnimatePresence>
                </ul>
            )}
        </motion.main>
    )
}

export default TodoSection
