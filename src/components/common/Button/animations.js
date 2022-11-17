export const transition = {
    duration: 0.25,
    type: 'spring',
}

export const buttonVariants = {
    disabled: {
        backgroundColor: '#a4fcbe',
        color: '#000',
        boxShadow: '0 0 0px rgba(94, 252, 141, 0)',
        cursor: 'not-allowed',
    },
    enabled: {
        backgroundColor: '#5efc8d',
        color: '#000',
        boxShadow: '0 0 16px rgba(94, 252, 141, .25)',
        cursor: 'pointer',
    },
    hover: (isInverted) => ({
        scale: 1.05,
        ...(isInverted
            ? {
                  color: '#000',
                  backgroundColor: '#fff',
                  boxShadow: '0 0 16px rgba(255, 255, 255, .45)',
              }
            : {
                  color: '#fff',
                  backgroundColor: '#000',
                  boxShadow: '0 0 16px rgba(0, 0, 0, .45)',
              }),
    }),
    tap: (isInverted) => ({
        scale: 0.95,
        ...(isInverted
            ? {
                  color: '#000',
                  backgroundColor: '#fff',
                  boxShadow: '0 0 16px rgba(255, 255, 255, .6)',
              }
            : {
                  color: '#fff',
                  backgroundColor: '#000',
                  boxShadow: '0 0 16px rgba(0, 0, 0, .6)',
              }),
    }),
}
