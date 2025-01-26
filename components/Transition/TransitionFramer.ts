export const fadeIn = () => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
      x: 0,
      transition: {
        delay: 0.8,
        duration: 0.8,
        type: 'tween',
        ease: [0.25],
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        delay: 0.7,
        duration: 0.7,
        type: 'tween',
        ease: [0.25, 0.25, 0.25, 0.75],
      }
    }
  }
}
