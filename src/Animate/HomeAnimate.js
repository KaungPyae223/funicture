export const HeadingTitleAnimation = {
  initial: {
    opacity: 0,
    y: -100,
  },
  enter: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.6 * i },
  }),
};
export const HeadingImage = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 2, ease: [0.33, 1, 0.68, 1] },
  },
};
export const TextFadeIn = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 2, ease: [0.33, 1, 0.68, 1], delay: 0.8 },
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
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.5 },
  },
};
export const OurExperiencesLeft = {
  initial: {
    x: -300,
    opacity: 0,
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: { duration: 2, ease: [0.33, 1, 0.68, 1], delay: 0.5 },
  },
};
export const OurExperiencesRight = {
  initial: {
    x: 300,
    opacity: 0,
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: { duration: 2, ease: [0.33, 1, 0.68, 1], delay: 0.5 },
  },
};
export const ImageShadow = {
  initial: {
    opacity: 0,
    x: 0,
    y: 0,
  },
  enter: {
    opacity: 1,
    x: 30,
    y: -30,
    transition: {
      ease: [0.33, 1, 0.68, 1],
      opacity: { delay: 2, duration: 0.1 },
      x: { delay: 2.5, duration: 1.5 },
      y: { delay: 2.5, duration: 1.5 },
    },
  },
};
export const CategoriesLeft = {
  initial: {
    x: -300,
    opacity: 0,
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: { duration: 2, ease: [0.33, 1, 0.68, 1], delay: 0.5 },
  },
};
export const CategoriesRight = {
  initial: {
    x: 300,
    opacity: 0,
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: { duration: 2, ease: [0.33, 1, 0.68, 1], delay: 0.5 },
  },
};
export const CategoriesUp = {
  initial: {
    y: 150,
    opacity: 0,
  },
  enter: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.5 * i },
  }),
};
export const ImageRight = {
  initial: {
    x: 50,
    opacity: 0,
  },
  enter: (i) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.5 * i },
  }),
};
export const ReviewCardUp = {
  initial: {
    y: 150,
    opacity: 0,
  },
  enter: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: i },
  }),
};
