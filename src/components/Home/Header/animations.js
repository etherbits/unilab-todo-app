export const transition = {
    duration: 0.6,
    delay: 0.6,
}

export const headerVariants = {
    hidden: { height: '100vh', padding: '0' },
    visible: {
        height: 'clamp(75px, calc(75px + 2vw), 100px)',
        padding: '1rem 2rem',
        transition: {
            duration: transition.duration,
            delay: 0,
        },
    },
}

export const logoVariants = {
    hidden: {
        x: -20,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
    },
}

export const counterVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
}

export const profileContainerVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
}

export const textContainerVariants = {
    hidden: { x: 40 },
    visible: { x: 0 },
}

export const logoutVariants = {
    resting: {
        color: '#ededed',
        transition: {
            duration: 0.2,
        },
    },
    hovered: {
        color: '#fff',
        transition: {
            duration: 0.2,
        },
    },
}
