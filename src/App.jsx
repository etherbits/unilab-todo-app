import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import LandingPage from 'pages/landing'
import SignInPage from 'pages/sign-in'
import NotFoundPage from 'pages/not-found'
import transitionConfig from 'transitionConfig'
import HomePage from 'pages/home'
import UserContextProvider from 'context/UserContext'

const App = () => {
    const location = useLocation()

    return (
        <UserContextProvider>
            <MotionConfig transition={transitionConfig}>
                <AnimatePresence mode='wait'>
                    <Routes location={location} key={location.pathname}>
                        <Route path='/' element={<LandingPage />} />
                        <Route path='/sign-in' element={<SignInPage />} />
                        <Route path='/home' element={<HomePage />} />
                        <Route path='*' element={<NotFoundPage />} />
                    </Routes>
                </AnimatePresence>
            </MotionConfig>
        </UserContextProvider>
    )
}

export default App
