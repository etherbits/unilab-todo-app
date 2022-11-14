import React, { useState, useEffect, createContext } from 'react'

export const UserContext = createContext()

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

    const logout = () => {
        setUser(null)
    }

    const createUser = (name, profilePic) => {
        setUser({
            name,
            profilePic,
            todos: [],
            completedTodoCount: 0,
        })
    }

    const addTodo = (todo) => {
        setUser({ ...user, todos: [...user.todos, todo] })
    }

    const removeTodo = (index) => {
        const tempTodos = user.todos
        tempTodos.splice(index, 1)
        setUser({ ...user, todos: tempTodos })
    }

    const completeTodo = (index) => {
        const tempTodos = user.todos
        const isTodoComplete = tempTodos[index].isComplete
        let newTodoCount

        if (isTodoComplete) {
            tempTodos[index].isComplete = false
            newTodoCount = user.completedTodoCount - 1
        } else {
            tempTodos[index].isComplete = true
            newTodoCount = user.completedTodoCount + 1
        }

        setUser({
            ...user,
            todos: tempTodos,
            completedTodoCount: newTodoCount,
        })
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])

    return (
        <UserContext.Provider
            value={{
                user,
                createUser,
                addTodo,
                removeTodo,
                completeTodo,
                logout,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
