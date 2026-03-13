interface IntroPageProps {
  onStart: () => void
}

export default function IntroPage({ onStart }: IntroPageProps) {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">
        <div className="mb-6 text-5xl">📊</div>
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl">
          情感投资者测试
        </h1>
        <p className="mb-2 text-base text-[var(--color-text-secondary)]">
          10 道真实行情场景
        </p>
        <p className="mb-10 text-sm leading-relaxed text-[var(--color-text-tertiary)]">
          面对暴涨、闪崩、横盘、FOMO……<br />
          你的本能反应，暴露了你的投资人格。
        </p>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {["贪婪", "恐惧", "焦虑", "FOMO"].map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[var(--color-accent-light)] px-3 py-1 font-mono text-xs text-[var(--color-accent)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          onClick={onStart}
          className="rounded-lg bg-[var(--color-text)] px-8 py-3 text-sm font-semibold text-[var(--color-bg)] transition-all hover:opacity-80 active:scale-95"
        >
          开始测试 →
        </button>

        <p className="mt-8 font-mono text-xs text-[var(--color-text-tertiary)]">
          测测你是哪种投资者
        </p>
      </div>
    </div>
  )
}
