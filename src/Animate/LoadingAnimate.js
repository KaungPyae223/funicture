export const ImageUp = {
  initial: {
    opacity: 0,
    y: 200,
  },
  enter: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.6, ease: [0.33, 1, 0.68, 1], delay: 0.6 * i },
  }),
  exit: (i) => ({
    opacity: 0,
    y: -200,
    transition: { duration: 1.6, ease: [0.33, 1, 0.68, 1], delay: i },
  }),
};
export const LoadingAnimate = {
  initial: {
    opacity: 0,
  },
  enter: (i) => ({
    opacity: 1,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: i },
  }),
};

