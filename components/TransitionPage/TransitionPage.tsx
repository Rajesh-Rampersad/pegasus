import { AnimatePresence, motion } from "framer-motion"

export function TransitionPage() {
  return (
    <AnimatePresence mode="wait">
      <div>
        {/* Primera capa de la animación */}
        <motion.div
          className="fixed top-0 bottom-0 right-full w-screen z-38 bg-secondary"
          variants={transitionVariantsPage}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
        />

        {/* Segunda capa de la animación con menor opacidad */}
        <motion.div
          className="fixed top-0 bottom-0 right-full w-screen z-20 bg-secondary/70 opacity-50"
          variants={transitionVariantsPage}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
        />
      </div>
    </AnimatePresence>
  )
}

const transitionVariantsPage = {
  initial: {
    x: "100%",
    width: "100%"  // ✅ Corregido "with" a "width"
  },
  animate: {
    x: "0%",
    width: "100%"  // ✅ Mantiene el tamaño completo
  },
  exit: {
    x: ["0%", "100%"],
    width: ["100%", "100%"]  // ✅ Corrección final
  }
}
