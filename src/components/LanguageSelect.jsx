import { useState } from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'

const languages = [
  { value: "id", label: "🇮🇩 Indonesia" },
  { value: "en", label: "🇬🇧 English" },
  { value: "jp", label: "🇯🇵 日本語" },
  { value: "es", label: "🇪🇸 Español" },
  { value: "zh", label: "🇨🇳 中文" }
];

export default function LanguageSelect({ lang, setLang }) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedLabel = languages.find(l => l.value === lang)?.label;

  return (
    <div className="absolute top-6 left-6 w-[200px]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-full items-center justify-between rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3 py-2 text-sm text-zinc-900 dark:text-zinc-50"
      >
        {selectedLabel}
        <ChevronsUpDown size={16} className="text-zinc-400" />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-1 shadow-lg">
          {languages.map(l => (
            <div
              key={l.value}
              onClick={() => {
                setLang(l.value);
                setIsOpen(false);
              }}
              className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              {l.label}
              {lang === l.value && <Check size={16} className="absolute right-2 text-zinc-900 dark:text-zinc-50" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}