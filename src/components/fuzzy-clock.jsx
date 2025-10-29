import { useState, useEffect } from "react"
import { getFuzzyTime } from "../utils/fuzzy-logic"
import { useTheme } from "../contexts/ThemeContext"

export default function FuzzyClock({ lang }) {
  const [fuzzy, setFuzzy] = useState("")
  const [time, setTime] = useState("")
  const { isDark } = useTheme()

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hour = now.getHours()
      const minute = now.getMinutes()
      const localTime = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      const fuzzyText = getFuzzyTime(hour, minute, lang)

      setTime(localTime)
      setFuzzy(fuzzyText)
    }

    updateTime() // panggil pertama kali
    const interval = setInterval(updateTime, 10000) // update tiap 10 detik

    return () => clearInterval(interval)
  }, [lang])

  return (
    <div className="text-center p-12 select-none">
      <h2 className={`text-6xl mb-3 transition-colors duration-700 ${
        isDark ? "text-white" : "text-gray-900"
      }`}>
        {fuzzy}
      </h2>
    </div>
  )
}
