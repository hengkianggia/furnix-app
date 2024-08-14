"use client";
import React from "react";
import { motion } from "framer-motion";

const template = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 100 }}
      transition={{ type: "spring", duration: 1 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default template;
