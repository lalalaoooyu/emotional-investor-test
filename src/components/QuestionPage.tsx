import { useState } from "react"
import type { Question, Option } from "../data/questions"
import StockChart from "./StockChart"

interface QuestionPageProps {
  question: Question
  current: number
  total: number
  selectedTags: string[]
  onAnswer: (option: Option) => void
}

export default function QuestionPage({ question, current, total, selectedTags, onAnswer }: QuestionPageProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const progress = ((current + 1) / total) * 100

  return (
    <div className="min-h-screen px-6 py-8">
      <div className="mx-auto max-w-lg">
        {/* Progress */}
        <div className="mb-2 flex items-center justify-between">
          <span className="font-mono text-xs tracking-wider text-[var(--color-text-tertiary)]">
            {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-[var(--color-accent-light)] px-2.5 py-0.5 text-xs text-[var(--color-accent)]">
            {question.emotionIcon} {question.emotion}
          </span>
        </div>
        <div className="mb-8 h-1 overflow-hidden rounded-full bg-[var(--color-bg-secondary)]">
          <div
            className="h-full rounded-full bg-[var(--color-accent)] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Chart */}
        <StockChart stocks={question.stocks} labels={question.labels} />

        {/* Scenario */}
        <div className="mt-5 mb-2">
          <p className="text-sm leading-relaxed text-[var(--color-text)]">
            {question.scenario}
          </p>
          <p className="mt-2 text-sm font-medium italic text-[var(--color-accent)]">
            {question.hook}
          </p>
        </div>

        {/* Options */}
        <div className="mt-5 flex flex-col gap-3">
          {question.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => onAnswer(opt)}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="flex items-center justify-between rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3.5 text-left transition-all hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-light)] active:scale-[0.98]"
            >
              <span className="text-sm text-[var(--color-text)]">{opt.text}</span>
              <span
                className="ml-3 shrink-0 whitespace-nowrap rounded-md bg-[var(--color-bg-secondary)] px-2 py-0.5 font-mono text-[10px] text-[var(--color-text-tertiary)] transition-all"
                style={hoveredIdx === i ? { background: "var(--color-accent-light)", color: "var(--color-accent)" } : {}}
              >
                {opt.tag}
              </span>
            </button>
          ))}
        </div>

        {/* Tags trail */}
        {selectedTags.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-1.5">
            {selectedTags.map((tag, i) => (
              <span
                key={i}
                className="rounded-full bg-[var(--color-bg-secondary)] px-2 py-0.5 font-mono text-[10px] text-[var(--color-text-tertiary)]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
