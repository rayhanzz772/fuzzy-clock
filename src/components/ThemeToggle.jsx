import { Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ThemeToggle({ isDark, setIsDark }) {
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="absolute top-6 right-6 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-10 w-10 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isDark ? 'moon' : 'sun'}
          initial={{ opacity: 0, y: -10, rotate: -90 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          exit={{ opacity: 0, y: 10, rotate: 90 }}
          transition={{ duration: 0.2 }}
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
