import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { fadeIn } from "./TransitionFramer";

type TransitionProps = {
  children?: React.ReactNode;
  className?: string;
};

export function Transition(props: TransitionProps) {
  const { children, className } = props;
  const ref = useRef(null);

  const isInView = useInView(ref, { once: false });
  const controls = useAnimation(); // Utilizar un solo control de animación

  useEffect(() => {
    if (isInView) {
      controls.start("show"); 
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={fadeIn()}
        initial="hidden"
        animate={controls} // Usar el control de animación correcto
        exit="hidden"
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}
