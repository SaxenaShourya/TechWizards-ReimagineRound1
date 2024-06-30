import { motion } from "framer-motion";
import useCursor from "../../hooks/useCursor";

const Cursor = () => {
  const { variants, cursorType } = useCursor();
  return (
    <motion.div
      style={cursorType === "default" ? variants.default : variants.hidden}
      className="hidden md:block fixed rounded-full pointer-events-none z-[999]"
    ></motion.div>
  );
};

export default Cursor;
