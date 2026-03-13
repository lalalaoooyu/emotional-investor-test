import { useState, useMemo } from "react"
import IntroPage from "./components/IntroPage"
import QuestionPage from "./components/QuestionPage"
import ResultPage from "./components/ResultPage"
import { questions } from "./data/questions"
import { questionsEn } from "./data/questions-en"
import { questionsJa } from "./data/questions-ja"
import { resultProfiles } from "./data/results"
import { resultProfilesEn } from "./data/results-en"
import { resultProfilesJa } from "./data/results-ja"
import { i18n, langLabels } from "./data/i18n"
import type { Lang } from "./data/i18n"
import type { Option, Question } from "./data/questions"

type Stage = "intro" | "test" | "result"

function getInitialLang(): Lang {
  const saved = localStorage.getItem("lang")
  if (saved === "zh" || saved === "en" || saved === "ja") return saved
  const nav = navigator.language.toLowerCase()
  if (nav.startsWith("ja")) return "ja"
  if (nav.startsWith("zh")) return "zh"
  return "en"
}

export default function App() {
  const [stage, setStage] = useState<Stage>("intro")
  const [currentQ, setCurrentQ] = useState(0)
  const [scores, setScores] = useState({ anxious: 0, avoidant: 0, secure: 0 })
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [resultType, setResultType] = useState<string | null>(null)
  const [fadeClass, setFadeClass] = useState("opacity-100 translate-y-0")
  const [lang, setLang] = useState<Lang>(getInitialLang)

  const t = i18n[lang]

  const localizedQuestions: Question[] = useMemo(() => {
    const localized = lang === "en" ? questionsEn : lang === "ja" ? questionsJa : null
    if (!localized) return questions
    return questions.map((q, i) => ({
      ...q,
      ...localized[i],
    }))
  }, [lang])

  const localizedResults = useMemo(() => {
    const localized = lang === "en" ? resultProfilesEn : lang === "ja" ? resultProfilesJa : null
    if (!localized) return resultProfiles
    const merged: typeof resultProfiles = {} as typeof resultProfiles
    for (const key of Object.keys(resultProfiles)) {
      merged[key] = { ...resultProfiles[key], ...localized[key] }
    }
    return merged
  }, [lang])

  const handleLangChange = (newLang: Lang) => {
    setLang(newLang)
    localStorage.setItem("lang", newLang)
  }

  const transition = (callback: () => void) => {
    setFadeClass("opacity-0 translate-y-3")
    setTimeout(() => {
      callback()
      setFadeClass("opacity-0 -translate-y-3")
      requestAnimationFrame(() => {
        setFadeClass("opacity-100 translate-y-0")
      })
    }, 300)
  }

  const handleStart = () => {
    transition(() => setStage("test"))
  }

  const handleAnswer = (option: Option) => {
    const newScores = {
      anxious: scores.anxious + option.score.anxious,
      avoidant: scores.avoidant + option.score.avoidant,
      secure: scores.secure + option.score.secure,
    }
    setScores(newScores)
    setSelectedTags([...selectedTags, option.tag])

    if (currentQ < localizedQuestions.length - 1) {
      transition(() => setCurrentQ(currentQ + 1))
    } else {
      transition(() => {
        const max = Math.max(newScores.anxious, newScores.avoidant, newScores.secure)
        const sorted = Object.values(newScores).sort((a, b) => b - a)
        const second = sorted[1]
        if (max - second <= 3) {
          setResultType("mixed")
        } else if (newScores.anxious >= newScores.avoidant && newScores.anxious >= newScores.secure) {
          setResultType("anxious")
        } else if (newScores.avoidant >= newScores.secure) {
          setResultType("avoidant")
        } else {
          setResultType("secure")
        }
        setStage("result")
      })
    }
  }

  const handleRestart = () => {
    transition(() => {
      setStage("intro")
      setCurrentQ(0)
      setScores({ anxious: 0, avoidant: 0, secure: 0 })
      setSelectedTags([])
      setResultType(null)
    })
  }

  const langs: Lang[] = ["ja", "zh", "en"]

  return (
    <div className="relative min-h-screen">
      {/* Language switcher */}
      <div className="fixed top-4 right-4 z-50 flex gap-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-0.5">
        {langs.map((l) => (
          <button
            key={l}
            onClick={() => handleLangChange(l)}
            className={`rounded-md px-2 py-1 font-mono text-[11px] transition-all ${
              lang === l
                ? "bg-[var(--color-text)] text-[var(--color-bg)]"
                : "text-[var(--color-text-tertiary)] hover:text-[var(--color-text)]"
            }`}
          >
            {langLabels[l]}
          </button>
        ))}
      </div>

      {/* Content with transition */}
      <div className={`transition-all duration-300 ease-out ${fadeClass}`}>
        {stage === "intro" && <IntroPage t={t} onStart={handleStart} />}
        {stage === "test" && (
          <QuestionPage
            question={localizedQuestions[currentQ]}
            current={currentQ}
            total={localizedQuestions.length}
            selectedTags={selectedTags}
            onAnswer={handleAnswer}
          />
        )}
        {stage === "result" && resultType && (
          <ResultPage
            t={t}
            result={localizedResults[resultType]}
            scores={scores}
            selectedTags={selectedTags}
            onRestart={handleRestart}
          />
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-[var(--color-border)] px-6 py-6 text-center">
        <p className="mb-2 text-xs text-[var(--color-text-tertiary)]">
          {t.copyright}
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://lalalaoooyu.github.io/alice-intro/" target="_blank" rel="noreferrer" className="text-xs text-[var(--color-text-tertiary)] transition-colors hover:text-[var(--color-text)]">
            Portfolio
          </a>
          <a href="https://github.com/lalalaoooyu" target="_blank" rel="noreferrer" className="text-xs text-[var(--color-text-tertiary)] transition-colors hover:text-[var(--color-text)]">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/jiatian-yu-7223b9232/" target="_blank" rel="noreferrer" className="text-xs text-[var(--color-text-tertiary)] transition-colors hover:text-[var(--color-text)]">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  )
}
