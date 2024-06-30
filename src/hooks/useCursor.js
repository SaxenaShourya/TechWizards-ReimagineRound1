import React, { useEffect } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  setCursorDefault,
  hideCursor as setHideCursor,
} from "../redux/slices/cursorSlice";

const useCursor = () => {
  const dispatch = useDispatch();
  const cursorType = useSelector((state) => state.cursor.type);

  const cursorSize = cursorType == "default" ? 15 : 0;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  const variants = {
    default: {
      left: smoothMouse.x,
      top: smoothMouse.y,
      height: cursorSize,
      width: cursorSize,
      backgroundColor: "#111111",
    },
    hidden: {
      height: cursorSize,
      width: cursorSize,
      left: smoothMouse.x,
      top: smoothMouse.y,
    },
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  const hideCursor = () => dispatch(setHideCursor());
  const defaultCursor = () => dispatch(setCursorDefault());

  return {
    variants,
    cursorType,
    defaultCursor,
    hideCursor,
  };
};

export default useCursor;
