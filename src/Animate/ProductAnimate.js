export const TextUp = {
    initial: {
        y:50,
        opacity: 0,
      },
      enter: {
        y:0,
        opacity: 1,
        transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 1 },
        
      },
}

export const CatageroiesUp = {
    initial: {
        y:50,
        opacity: 0,
      },
      enter: i => ({
        y:0,
        opacity: 1,
        transition: { duration: 0.3, ease: [0.33, 1, 0.68, 1], delay: 0.2*i },
        
      }),
}