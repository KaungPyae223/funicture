export const Description = {
  initial: {
    x: 1000,
  },
  enter: {
    x: 0,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
  exit: {
    x: 1000,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
};
export const Detailed = {
  initial: {
    x: -1000,
  },
  enter: {
    x: 0,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
  exit: {
    x: -1000,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
};
export const TextLeft = {
  initial: {
    x: -300,
    opacity: 0,
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.33, 1, 0.68, 1] },
  },
};
export const TextRight = {
  initial: {
    x: 300,
    opacity: 0,
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.3 },
  },
};
