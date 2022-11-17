export const itemVariants = {
    hidden: {
        x: -60,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            type: 'spring',
        },
    },
}

export const todoVariants = {
    visible: (isComplete) => ({
        backgroundColor: isComplete ? '#ededed' : '#000',
        transition: {
            duration: 0.35,
            type: 'tween',
        },
    }),
    removed: {
        x: 50,
        opacity: 0,
        transition: {
            duration: 0.35,
            type: 'tween',
        },
    },
}
