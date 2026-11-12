import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const WORDS = [
  { text: "Hello", lang: "English" },
  { text: "Bonjour", lang: "French" },
  { text: "Hola", lang: "Spanish" },
  { text: "Ciao", lang: "Italian" },
  { text: "မင်္ဂလာပါ", lang: "Burmese" },
  { text: "Namaste", lang: "Hindi" },
  { text: "Konnichiwa", lang: "Japanese" },
  { text: "Welcome", lang: "Portfolio" }
];

export default function DownloadModal({ onComplete }) {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Counter loop (0 to 100%)
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  // Language text switcher loop
  useEffect(() => {
    if (index === WORDS.length - 1) return;
    const wordTimer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, index === 0 ? 1000 : 250);

    return () => clearTimeout(wordTimer);
  }, [index]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#fff] p-8 text-[#000] select-none overflow-hidden"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-xs tracking-widest text-neutral-400 uppercase">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              Portfolio Loading
            </span>
            <span>{WORDS[index].lang}</span>
          </div>

          {/* Center Greeting Animation */}
          <div className="flex flex-col items-center justify-center my-auto">
            <div className="h-24 overflow-hidden flex items-center justify-center">
              <motion.h1
                key={WORDS[index].text}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-[#000] via-neutral-200 to-neutral-400 bg-clip-text text-transparent"
              >
                {WORDS[index].text}
              </motion.h1>
            </div>
            
            {/* Ambient Backlight Glow */}
            <div className="absolute w-72 h-72 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
          </div>

          {/* Bottom Progress Bar & Percentage */}
          <div className="w-full max-w-md mx-auto space-y-3">
            <div className="flex justify-between items-center text-xs text-neutral-400 font-mono">
              <span>LOADING SYSTEM</span>
              <span>{progress}%</span>
            </div>
            
            <div className="w-full h-[2px] bg-neutral-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}