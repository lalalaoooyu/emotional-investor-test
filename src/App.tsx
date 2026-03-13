import { useState, useEffect } from "react"
import IntroPage from "./components/IntroPage"
import QuestionPage from "./components/QuestionPage"
import ResultPage from "./components/ResultPage"
import { questions } from "./data/questions"
import type { Option } from "./data/questions"
import { resultProfiles } from "./data/results"

type Stage = "intro" | "test" | "result"

function getInitialTheme(): "light" | "dark" {
  const saved = localStorage.getItem("theme")
  if (saved === "light" || saved === "dark") return saved
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

export default function App() {
  const [stage, setStage] = useState<Stage>("intro")
  const [currentQ, setCurrentQ] = useState(0)
  const [scores, setScores] = useState({ anxious: 0, avoidant: 0, secure: 0 })
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [resultType, setResultType] = useState<string | null>(null)
  const [fadeClass, setFadeClass] = useState("opacity-100 translate-y-0")
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

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

    if (currentQ < questions.length - 1) {
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

  return (
    <div className="relative min-h-screen">
      {/* Theme toggle */}
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="fixed top-4 right-4 z-50 flex h-8 w-8 items-center justify-center rounded-lg text-[var(--color-text-secondary)] transition-all hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text)]"
        aria-label="Toggle theme"
      >
        {theme === "light" ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        )}
      </button>

      {/* Content with transition */}
      <div className={`transition-all duration-300 ease-out ${fadeClass}`}>
        {stage === "intro" && <IntroPage onStart={handleStart} />}
        {stage === "test" && (
          <QuestionPage
            question={questions[currentQ]}
            current={currentQ}
            total={questions.length}
            selectedTags={selectedTags}
            onAnswer={handleAnswer}
          />
        )}
        {stage === "result" && resultType && (
          <ResultPage
            result={resultProfiles[resultType]}
            scores={scores}
            selectedTags={selectedTags}
            onRestart={handleRestart}
          />
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-[var(--color-border)] px-6 py-6 text-center">
        <p className="mb-2 text-xs text-[var(--color-text-tertiary)]">
          &copy; 2026 Alice Yu (JIATIAN YU). All rights reserved.
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
