import { timings } from 'transitionConfig'

const { enterDuration, exitDuration } = timings.landing

export const buttonVariants = {
    hidden: {
        y: 35,
        opacity: 0,
        transition: {
            duration: exitDuration,
        },
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: enterDuration,
        },
    },
}
