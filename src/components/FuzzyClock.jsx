import { useState, useEffect, useMemo } from "react"
import { getFuzzyTime } from "../utils/FuzzyLogic"
import { motion, AnimatePresence } from 'framer-motion'
import langData from "../i18n/lang.json"

export default function FuzzyClock({ lang }) {
  const [fuzzy, setFuzzy] = useState("");
  const [time, setTime] = useState("");
  const langStrings = useMemo(() => langData[lang] || langData.en, [lang]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hour = now.getHours();
      const minute = now.getMinutes();

      // Tampilkan waktu digital
      const localTime = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

      // Dapatkan waktu fuzzy
      const roundedMinute = Math.round(minute / 5) * 5;
      let h = hour % 12;
      let m = roundedMinute;

      if (m === 60) {
        m = 0;
        h = (h + 1) % 12;
      }
      if (h === 0) h = 12; // Jam 0 adalah 12

      let fuzzyText = "";
      const s = langStrings;

      if (m === 0) {
        fuzzyText = `${s.hours[h]} ${s.oClock}`;
      } else if (m === 30) {
        fuzzyText = `${s.minutes[5]} ${s.past} ${s.hours[h]}`;
      } else if (m < 30) {
        const minIndex = m / 5 - 1;
        fuzzyText = `${s.minutes[minIndex]} ${s.past} ${s.hours[h]}`;
      } else {
        const minIndex = (60 - m) / 5 - 1;
        h = (h + 1) % 12;
        if (h === 0) h = 12;
        fuzzyText = `${s.minutes[minIndex]} ${s.to} ${s.hours[h]}`;
      }

      setFuzzy(`${s.approx} ${fuzzyText}`);
      setTime(localTime);
    };

    updateTime();
    // Update setiap 10 detik
    const interval = setInterval(updateTime, 10000);

    return () => clearInterval(interval);
  }, [lang, langStrings]);

  return (
    <div className="text-center select-none p-8">
      {/* Tampilan Waktu Digital */}
      <div className="mb-4 text-2xl font-mono text-zinc-500 dark:text-zinc-400">
        {time}
      </div>

      {/* Tampilan Waktu Fuzzy dengan Animasi */}
      <AnimatePresence mode="wait">
        <motion.h2
          key={fuzzy}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-5xl md:text-7xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
        >
          {fuzzy}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
}
