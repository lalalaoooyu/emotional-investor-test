import type { ResultProfile } from "../data/results"

interface ResultPageProps {
  result: ResultProfile
  scores: { anxious: number; avoidant: number; secure: number }
  selectedTags: string[]
  onRestart: () => void
}

function MetricBar({ label, value, color, delay }: { label: string; value: number; color: string; delay: number }) {
  return (
    <div
      className="mb-4 opacity-0 animate-[fadeSlideUp_0.5s_ease_forwards]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-1.5 flex justify-between font-mono text-xs">
        <span className="text-[var(--color-text-secondary)]">{label}</span>
        <span style={{ color }}>{value}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-[var(--color-bg-secondary)]">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${value}%`,
            background: color,
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  )
}

export default function ResultPage({ result, scores, selectedTags, onRestart }: ResultPageProps) {
  return (
    <div className="min-h-screen px-6 py-12">
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div className="mx-auto max-w-lg">
        {/* Header */}
        <div className="mb-8 text-center">
          <p className="mb-4 font-mono text-xs tracking-widest text-[var(--color-text-tertiary)]">
            ANALYSIS COMPLETE
          </p>
          <div
            className="mb-2 font-mono text-6xl font-bold"
            style={{ color: result.color }}
          >
            {result.grade}
          </div>
          <p className="font-mono text-xs text-[var(--color-text-tertiary)]">情感投资评级</p>
        </div>

        {/* Type card */}
        <div
          className="mb-6 rounded-xl border p-5"
          style={{ borderColor: `${result.color}33`, background: `${result.color}08` }}
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="text-3xl">{result.icon}</span>
            <div>
              <div className="text-lg font-bold" style={{ color: result.color }}>
                {result.type}
              </div>
              <div className="font-mono text-xs text-[var(--color-text-tertiary)]">
                风险等级: {result.riskLevel}
              </div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
            {result.summary}
          </p>
        </div>

        {/* Detail */}
        <div className="mb-6">
          <h3 className="mb-2 text-xs font-medium uppercase tracking-wider text-[var(--color-text-tertiary)]">
            诊断分析
          </h3>
          <p className="text-sm leading-7 text-[var(--color-text-secondary)]">
            {result.detail}
          </p>
        </div>

        {/* Metrics */}
        <div className="mb-6">
          <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-[var(--color-text-tertiary)]">
            核心指标
          </h3>
          <MetricBar label="情绪稳定性" value={result.metrics.stability} color={result.color} delay={200} />
          <MetricBar label="风控能力" value={result.metrics.riskControl} color={result.color} delay={400} />
          <MetricBar label="情感收益率" value={result.metrics.returns} color={result.color} delay={600} />
          <MetricBar label="独立性" value={result.metrics.independence} color={result.color} delay={800} />
        </div>

        {/* Advice */}
        <div
          className="mb-6 rounded-xl border-l-2 py-1 pl-4"
          style={{ borderColor: result.color }}
        >
          <h3 className="mb-2 text-xs font-medium uppercase tracking-wider text-[var(--color-text-tertiary)]">
            投资建议
          </h3>
          <p className="text-sm leading-7 text-[var(--color-text-secondary)]">
            {result.advice}
          </p>
        </div>

        {/* Tags */}
        <div className="mb-6">
          <h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--color-text-tertiary)]">
            你的交易记录
          </h3>
          <div className="flex flex-wrap gap-2">
            {selectedTags.map((tag, i) => (
              <span
                key={i}
                className="rounded-full px-2.5 py-1 font-mono text-xs"
                style={{
                  background: `${result.color}12`,
                  color: result.color,
                  border: `1px solid ${result.color}25`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Raw scores */}
        <div className="mb-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-5">
          <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-[var(--color-text-tertiary)]">
            原始数据
          </h3>
          <div className="flex justify-around">
            {[
              { label: "冲动指数", val: scores.anxious, c: "#ef4444" },
              { label: "回避指数", val: scores.avoidant, c: "#3b82f6" },
              { label: "理性指数", val: scores.secure, c: "#22c55e" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-mono text-2xl font-bold" style={{ color: s.c }}>
                  {s.val}
                </div>
                <div className="mt-1 font-mono text-[10px] text-[var(--color-text-tertiary)]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Restart */}
        <div className="text-center">
          <button
            onClick={onRestart}
            className="rounded-lg border border-[var(--color-border)] px-6 py-2.5 text-sm text-[var(--color-text-secondary)] transition-all hover:border-[var(--color-text)] hover:text-[var(--color-text)]"
          >
            重新测试
          </button>
        </div>
      </div>
    </div>
  )
}
