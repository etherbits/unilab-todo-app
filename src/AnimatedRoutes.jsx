import { useLocation, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import LandingPage from 'pages/landing'
import SignInPage from 'pages/sign-in'
import NotFoundPage from 'pages/not-found'

const AnimatedRoutes = ({ router }) => {
    const location = useLocation()
    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<LandingPage />} />
                <Route path='/sign-in' element={<SignInPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes
