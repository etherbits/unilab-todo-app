import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()

    return (
        <div>
            <h1>Something went wrong</h1>
            <span>{error.status} </span>
            <span>{error.statusText}</span>
        </div>
    )
}

export default ErrorPage
