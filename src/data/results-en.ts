import type { ResultProfile } from "./results"

export const resultProfilesEn: Record<string, Omit<ResultProfile, "color" | "metrics">> = {
  anxious: {
    type: "Emotional Trader",
    grade: "C-",
    riskLevel: "Extreme",
    summary: "Afraid to sell too early when it rises, afraid to hold when it falls. Every market move is your heartbeat.",
    detail: "Your trades are entirely emotion-driven: you chase when it goes up, you panic-sell when it drops. You're not investing — you're riding an emotional roller coaster with real money. FOMO and panic are your biggest enemies, and you always lose to them.",
    advice: "What you need isn't better stock-picking skills, but a system that removes you from decision-making. Think: auto-investing, stop-loss/profit lines, position limits. Take the power away from your emotions and give it to rules. Remember — the market punishes stubbornness, but it punishes impulse even harder.",
  },
  avoidant: {
    type: "Zen Observer",
    grade: "B-",
    riskLevel: "Low (but so are returns)",
    summary: "Zero risk, zero returns. It's not that you can't invest — you're afraid to.",
    detail: "Your risk aversion has gone beyond healthy limits. When it drops, you freeze. When it rises, you don't chase. When opportunity knocks, you hesitate. Result: you're always on the sidelines watching others profit. Your problem isn't lack of knowledge — it's lack of courage to act.",
    advice: "Start with the smallest position possible — money you wouldn't miss if you lost it. You'll find that moderate volatility isn't scary; it's just the market breathing. You don't need to become aggressive, but you do need to step outside your comfort zone, even just a little.",
  },
  secure: {
    type: "Value Investor",
    grade: "A",
    riskLevel: "Controlled",
    summary: "Not greedy when it rises, not panicked when it falls. There's no 'panic' process in your operating system.",
    detail: "You stay calm during market crashes and rational during euphoria. You have your own framework and don't change decisions because of others' emotions. You understand volatility is part of investing, not a threat to escape from.",
    advice: "You already possess the rarest investing quality — emotional stability. One reminder: don't let excessive rationality blind you to the market's irrational forces. Sometimes, crowd madness persists longer than you'd expect. Stay flexible, and occasionally allow yourself to feel.",
  },
  mixed: {
    type: "Volatile Player",
    grade: "B",
    riskLevel: "Unstable",
    summary: "Strategy shifts constantly — sometimes aggressive, sometimes conservative. Your trades match your mood.",
    detail: "Sometimes you're rational, sometimes impulsive. In good markets you act like a value investor; in bad markets you become an emotional trader. Your problem isn't one extreme — it's that you haven't built a consistent investment framework.",
    advice: "What you need most is consistency. Not always being right, but always following the same decision process. Write down your investing principles and post them next to your screen. Before every trade, ask: 'Does this align with my principles?' If not, close the trading page.",
  },
}
