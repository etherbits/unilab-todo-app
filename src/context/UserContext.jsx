import React, { createContext, useEffect, useState } from 'react'

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
        todo.isComplete = false
        setUser({ ...user, todos: [todo, ...user.todos] })
    }

    const removeTodo = (index) => {
        const tempTodos = user.todos
        tempTodos.splice(index, 1)
        setUser({ ...user, todos: tempTodos })
    }

    const completeTodo = (index) => {
        const tempTodos = user.todos
        let newTodoCount = user.completedTodoCount

        tempTodos[index].isComplete ^= true
        newTodoCount += tempTodos[index].isComplete ? 1 : -1

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
