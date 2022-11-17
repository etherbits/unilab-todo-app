export const transition = {
    duration: 0.2,
    type: 'tween',
    ease: 'easeOut',
}

export const imgContainerVariants = {
    resting: {
        backgroundColor: '#e6ebff',
    },
    hovered: {
        backgroundColor: '#5efc8d',
    },
}

export const iconVariants = {
    resting: {
        opacity: 1,
    },
    occupied: {
        opacity: 0,
    },
    hovered: {
        opacity: 1,
    },
}

export const imgVariants = {
    resting: {
        filter: ' blur(0px) brightness(1)',
    },
    hovered: {
        filter: ' blur(1px) brightness(1.5)',
    },
}
