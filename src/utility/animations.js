// export const layoutAnimation = {
//   hide: {
//     opacity: 0,
//     x: "-100%",
//     delay: 2,
//     duration: 2,
//   },
//   show: { opacity: 1, duration: 3, x: "0%" },
// }

export const containerAnimation = {
  hide: { x: "100%", width: "calc(100% - 7rem)" },
  show: {
    transition: { duration: 2, ease: "easeOut" },
    width: 0,
    x: "0%",
  },
  exit: { x: 0, width: 0, transition: { duration: 1 } },
}

export const containerAnimationThin = {
  hide: { opacity: 0, x: "50%", width: "calc(100% - 7rem)" },
  show: {
    opacity: "1",
    transition: { duration: 2, ease: "easeInOut" },
    width: 0,
    x: "0%",
  },
  exit: { x: 0, width: 0, transition: { duration: 1 } },
}
