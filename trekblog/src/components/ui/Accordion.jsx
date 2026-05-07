import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-[#243b55]">
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between py-4 px-5 text-left hover:bg-[#1a2e45] transition-colors min-h-[44px]"
      aria-expanded={isOpen}
    >
      <span className="text-[#e8d5b7] font-medium pr-4">{question}</span>
      <motion.span
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.2 }}
        className="text-[#c96442] text-xl flex-shrink-0"
      >
        +
      </motion.span>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          <p className="px-5 pb-4 text-[#9bb0c5] leading-relaxed">{answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// Usage: <Accordion items={[{ question: "...", answer: "..." }]} />
const Accordion = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="bg-[#1a2e45] rounded-lg overflow-hidden border border-[#243b55]">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === i}
          onClick={() => toggle(i)}
        />
      ))}
    </div>
  );
};

export default Accordion;
