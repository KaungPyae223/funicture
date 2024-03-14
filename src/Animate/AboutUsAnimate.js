export const TextUp = {
    initial: {
      y: 50,
      opacity: 0,
    },
    enter: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.5 },
    },
  };
  export const AboutUsLeft = {
    initial: {
      x: -300,
      opacity: 0,
    },
    enter: (i) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: i },
    }),
  };
  
  export const AboutUsRight = {
    initial: {
      x: 300,
      opacity: 0,
    },
    enter: (i) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: i },
    }),
  };
  export const Fade = {
    initial: {
      opacity: 0,
    },
    enter: (i) => ({
      opacity: 1,
      transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1], delay: 0.7 * i },
    }),
  };
  export const CardUp = {
    initial: {
      y: 50,
      opacity: 0,
    },
    enter: i => ({
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.5 * i },
    }),
  };