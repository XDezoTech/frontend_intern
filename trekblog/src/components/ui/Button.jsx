import React from "react";
import { motion } from "framer-motion";


const Button = ({
  variant = "primary",
  children,
  icon,
  onClick,
  disabled,
  type = "button",
  className = "",
}) => {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded font-medium text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]";

  const variants = {
    primary:
      "bg-[#c96442] text-[#f5edd8] hover:bg-[#b5583a] focus:ring-[#c96442]",
    secondary:
      "bg-[#0d1b2a] text-[#e8d5b7] border border-[#e8d5b7] hover:bg-[#1a2e45] focus:ring-[#e8d5b7]",
    outline:
      "bg-transparent text-[#c96442] border border-[#c96442] hover:bg-[#c96442] hover:text-[#f5edd8] focus:ring-[#c96442]",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {icon && <span>{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button;
