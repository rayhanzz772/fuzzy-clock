import FuzzyClock from "./components/FuzzyClock"
import ThemeToggle from "./components/ThemeToggle"
import LanguageSelect from "./components/LanguageSelect"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function App() {
  // Mengganti useParams dengan state lokal
  const [lang, setLang] = useState("jp");

  // Mengganti ThemeContext dengan state lokal
  // Default ke dark mode untuk tampilan elegan
  const [isDark, setIsDark] = useState(true);

  // Efek untuk menambah/menghapus class 'dark' pada tag <html>
  useEffect(() => {
    const html = document.documentElement;
    console.log('Theme changed to:', isDark ? 'dark' : 'light');
    console.log('HTML classList before:', html.classList.toString());
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    console.log('HTML classList after:', html.classList.toString());
  }, [isDark]);

  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center p-8 transition-colors duration-700 bg-white dark:bg-zinc-950 font-sans`}
    >
      <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
      <LanguageSelect lang={lang} setLang={setLang} />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full max-w-2xl rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 shadow-xl shadow-zinc-200/30 dark:shadow-black/30"
      >
        <FuzzyClock lang={lang} />
      </motion.div>

      <footer className="absolute bottom-6 text-sm text-zinc-500 dark:text-zinc-600">
        Fuzzy Clock made by Ray
      </footer>
    </div>
  );
}

