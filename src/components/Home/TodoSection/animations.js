export const mainVariants = {
    hidden: { y: -200, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 0.5,
            delayChildren: 1,
            staggerChildren: 0.4,
        },
    },
}
