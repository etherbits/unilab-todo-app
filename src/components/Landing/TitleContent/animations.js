import { timings } from 'transitionConfig.js'

const { enterDuration, exitDuration } = timings.landing

export const imgVariants = {
    hidden: {
        opacity: 0,
        transition: {
            duration: exitDuration,
        },
    },
    visible: {
        opacity: 1,
        transition: {
            duration: enterDuration,
        },
    },
}

export const letterVariants = {
    hidden: (index) => ({
        opacity: 0,
        transition: {
            duration: exitDuration,
            delay: index * exitDuration * 0.02,
        },
    }),
    visible: (index) => ({
        opacity: 1,
        transition: {
            duration: enterDuration,
            delay: index * enterDuration * 0.02,
        },
    }),
}
