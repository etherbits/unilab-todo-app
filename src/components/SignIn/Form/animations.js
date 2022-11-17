import { timings } from 'transitionConfig'

const { enterDuration, exitDuration } = timings.signUp

export const formVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: enterDuration,
        },
    },
    exiting: {
        y: '-100%',
        opacity: 0,
        transition: {
            duration: exitDuration,
        },
    },
}
