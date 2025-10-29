import { useParams } from "react-router-dom"
import FuzzyClock from "./components/fuzzy-clock"
import ThemeToggle from "./components/ThemeToggle"
import { useTheme } from "./contexts/ThemeContext"
import langData from "./i18n/lang.json"

function App() {
  const { lang } = useParams()
  const selectedLang = ["id", "en", "jp", "es", "zh"].includes(lang) ? lang : "en"
  const { isDark } = useTheme()

  return (
    <div 
      className={`flex flex-col justify-center items-center h-screen transition-colors duration-700 ${
        isDark 
          ? "bg-gray-900" 
          : "bg-white"
      }`}
    >
      <ThemeToggle />
      <FuzzyClock lang={selectedLang} />
    </div>
  )
}

export default App
