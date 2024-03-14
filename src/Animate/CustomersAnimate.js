export const CustomerLeft = {
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

export const CustomerRight = {
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
