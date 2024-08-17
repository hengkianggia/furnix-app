"use client";
import React from "react";
import { motion } from "framer-motion";

const template = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 100 }}
      transition={{ type: "spring", duration: 1 }}
      className="w-full"
    >
      {children}
    </motion.div>
    // <motion.div className="relative">
    //   {children}
    //   <motion.div
    //     initial={{ width: 0, opacity: 0 }}
    //     animate={{ width: [3000, 0], opacity: [100, 100, 0] }}
    //     transition={{ type: "tween", duration: 1, times: [0.1, 0.4, 1] }}
    //     className="fixed z-[999] w-screen h-screen bg-black top-0 left-0 right-0"
    //   ></motion.div>
    // </motion.div>
  );
};

export default template;
