import type { i18n } from "../data/i18n"

interface IntroPageProps {
  t: (typeof i18n)[keyof typeof i18n]
  onStart: () => void
}

export default function IntroPage({ t, onStart }: IntroPageProps) {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        </div>
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl">
          {t.title}
        </h1>
        <p className="mb-2 text-base text-[var(--color-text-secondary)]">
          {t.subtitle}
        </p>
        <p className="mb-10 whitespace-pre-line text-sm leading-relaxed text-[var(--color-text-tertiary)]">
          {t.description}
        </p>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {t.tags.map((tag) => (
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
          {t.startButton} &rarr;
        </button>

        <p className="mt-8 font-mono text-xs text-[var(--color-text-tertiary)]">
          {t.startHint}
        </p>
      </div>
    </div>
  )
}
