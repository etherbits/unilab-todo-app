import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import UserContextProvider from 'context/UserContext'
import { AnimatePresence } from 'framer-motion'
import HomePage from 'pages/home'
import LandingPage from 'pages/landing'
import NotFoundPage from 'pages/not-found'
import SignInPage from 'pages/sign-in'
import './global.css'

const App = () => {
    const location = useLocation()

    return (
        <UserContextProvider>
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/sign-in" element={<SignInPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </AnimatePresence>
        </UserContextProvider>
    )
}

export default App
