//Transition

import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { fadeIn } from "./TransitionFramer";

type TransitionProps = {
  children?: React.ReactNode; 
  className?: string;
};

export function Transition(props:TransitionProps) {
  const { children, className } = props;
  const ref = useRef(null);

  // const isInView = useInView(ref, {once:false})
  // const mainControls = useAnimation()
  // const slideControls = useAnimation()

  // useEffect(() => {
  //   if (isInView) {
  //     mainControls.start("show");
  //     slideControls.start("show");
  //   }
  // }, [isInView])


  return (
    <div ref={ref}>
      {children}
      {/* <motion.div variants={fadeIn()}
        initial='hidden'
        animate={mainControls}
        exit='hidden'
        className={className}
      >
        {children}
      </motion.div> */}
    </div>
  )
}
