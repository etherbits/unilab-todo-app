export const formVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
        },
    },
    exiting: {
        y: '-100%',
        opacity: 0,
        transition: {
            duration: 0.5,
        },
    },
}
