import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

interface ITitleProps {
  children: ReactNode;
  duration: number;
}

export const ContactAnimate: FC<ITitleProps> = ({ children, duration }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: duration }}
    >
      {children}
    </motion.div>
  );
};
