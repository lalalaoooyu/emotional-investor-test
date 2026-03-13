import type { Question } from "./questions"

export const questionsEn: Omit<Question, "stocks" | "labels">[] = [
  {
    id: 1,
    emotion: "Greed",
    scenario: "Your stock has risen for 7 straight days, up +32%. Everyone on social media is showing off their gains.",
    hook: "It's gone up so much already... would selling now be leaving money on the table?",
    options: [
      { text: "Keep buying! The trend is too good to miss", tag: "Chase Rally", score: { anxious: 3, avoidant: 0, secure: 0 } },
      { text: "Take profits. Cash in hand is real money", tag: "Take Profit", score: { anxious: 0, avoidant: 2, secure: 1 } },
      { text: "Set a stop-profit target. Hit it, sell. If not, hold", tag: "Disciplined Exit", score: { anxious: 0, avoidant: 0, secure: 3 } },
      { text: "Sell half to lock in gains, let the rest ride", tag: "Partial Exit", score: { anxious: 0, avoidant: 1, secure: 2 } },
    ],
  },
  {
    id: 2,
    emotion: "Fear",
    scenario: "Your stock gapped down at open, flash-crashing -12%. Headlines: 'Analysts warn the decline may just be starting'",
    hook: "If you don't run now, could you lose everything?",
    options: [
      { text: "Sell everything immediately. Survival first", tag: "Panic Sell", score: { anxious: 3, avoidant: 0, secure: 0 } },
      { text: "Close the app. Out of sight, out of mind", tag: "Ostrich Mode", score: { anxious: 0, avoidant: 3, secure: 0 } },
      { text: "Check if fundamentals changed. If not, hold", tag: "Rational Hold", score: { anxious: 0, avoidant: 0, secure: 3 } },
      { text: "It dropped so much — maybe it's a buying opportunity", tag: "Buy the Dip", score: { anxious: 1, avoidant: 0, secure: 2 } },
    ],
  },
  {
    id: 3,
    emotion: "Anxiety",
    scenario: "Your stock has been flat for 3 months. Meanwhile the market is up 18%.",
    hook: "Did you pick wrong? Everyone else is making money except you.",
    options: [
      { text: "Can't take it. Switching to whatever's going up", tag: "Anxious Swap", score: { anxious: 3, avoidant: 0, secure: 0 } },
      { text: "Whatever, I barely check anyway", tag: "Zen Mode", score: { anxious: 0, avoidant: 3, secure: 0 } },
      { text: "Analyze why it's flat. If the thesis holds, wait", tag: "Patient Hold", score: { anxious: 0, avoidant: 0, secure: 3 } },
      { text: "Trim a little and diversify into other assets", tag: "Diversify", score: { anxious: 1, avoidant: 0, secure: 2 } },
    ],
  },
  {
    id: 4,
    emotion: "FOMO",
    scenario: "The stock you almost bought doubled in a week. Yours is up 3%. Everyone's talking about it.",
    hook: "Why didn't you buy it?! Is it too late to chase?",
    options: [
      { text: "Buy now! Can't miss out again", tag: "FOMO Chase", score: { anxious: 3, avoidant: 0, secure: 0 } },
      { text: "Forget it. Chasing a double is how you become a bag holder", tag: "Cool Observer", score: { anxious: 0, avoidant: 2, secure: 1 } },
      { text: "It doubled already? I'm sticking with my picks", tag: "Stay the Course", score: { anxious: 0, avoidant: 0, secure: 3 } },
      { text: "Small position to test. Win some comfort, lose nothing major", tag: "Small Bet", score: { anxious: 1, avoidant: 0, secure: 2 } },
    ],
  },
  {
    id: 5,
    emotion: "Fear + Greed",
    scenario: "After a -25% crash, your stock suddenly bounces +8% today. Is this a real reversal or a dead cat bounce?",
    hook: "Bottom-fishing opportunity? Or the next trap?",
    options: [
      { text: "It bounced — run! Cut losses while you can", tag: "Bounce Exit", score: { anxious: 2, avoidant: 1, secure: 0 } },
      { text: "Add more! Bottom signal is here", tag: "All-in Bottom", score: { anxious: 2, avoidant: 0, secure: 0 } },
      { text: "No rush. Wait for trend confirmation", tag: "Wait & See", score: { anxious: 0, avoidant: 0, secure: 3 } },
      { text: "Too volatile for me. I'll just play dead", tag: "Play Dead", score: { anxious: 0, avoidant: 3, secure: 0 } },
    ],
  },
  {
    id: 6,
    emotion: "Anxiety",
    scenario: "Your portfolio: Stock A is up +20%, Stock B is down -15%, Stock C hasn't moved.",
    hook: "Should you go all-in on A? Winner takes all?",
    options: [
      { text: "All into A! Follow the winner", tag: "Concentrate", score: { anxious: 2, avoidant: 0, secure: 0 } },
      { text: "Cut B's losses, keep A and C", tag: "Cut Losers", score: { anxious: 1, avoidant: 1, secure: 1 } },
      { text: "Maintain allocation, rebalance on schedule", tag: "Discipline", score: { anxious: 0, avoidant: 0, secure: 3 } },
      { text: "Too complicated. Don't want to deal with it", tag: "Give Up", score: { anxious: 0, avoidant: 3, secure: 0 } },
    ],
  },
  {
    id: 7,
    emotion: "Greed",
    scenario: "Your stock just hit an all-time high! Volume surging. An analyst says the target price is double.",
    hook: "Not adding more would be stupid... right?",
    options: [
      { text: "Go all in! Analysts say it'll double", tag: "Greedy Load", score: { anxious: 3, avoidant: 0, secure: 0 } },
      { text: "At the high? I'm out. Respect the peak", tag: "Fear of Heights", score: { anxious: 0, avoidant: 3, secure: 0 } },
      { text: "Ignore hype. Stick to my own valuation", tag: "Independent", score: { anxious: 0, avoidant: 0, secure: 3 } },
      { text: "Trim a bit, keep a core position to watch", tag: "Trim & Hold", score: { anxious: 0, avoidant: 1, secure: 2 } },
    ],
  },
  {
    id: 8,
    emotion: "Fear",
    scenario: "Black Monday. The entire market crashes. Your portfolio is down -8% in one day. Social media is in chaos.",
    hook: "Is this systemic risk? Will it get worse?",
    options: [
      { text: "Sell everything! Run before it gets worse", tag: "Panic Clear", score: { anxious: 3, avoidant: 0, secure: 0 } },
      { text: "Uninstall the app. Check back after the storm", tag: "Escape Reality", score: { anxious: 0, avoidant: 3, secure: 0 } },
      { text: "Review holdings. Good companies are now on sale", tag: "Opportunity", score: { anxious: 0, avoidant: 0, secure: 3 } },
      { text: "Not selling, not buying. Just staring nervously", tag: "Freeze", score: { anxious: 2, avoidant: 1, secure: 0 } },
    ],
  },
  {
    id: 9,
    emotion: "Anxiety",
    scenario: "Your stock this week: Mon +10%, Tue -8%, Wed +6%, Thu -5%, today +4%. A total roller coaster.",
    hook: "When should you make a move? Your mental health is crumbling.",
    options: [
      { text: "It's up today — sell before it drops again tomorrow!", tag: "Chase & Dump", score: { anxious: 3, avoidant: 0, secure: 0 } },
      { text: "Too exhausting. Selling everything for something stable", tag: "Had Enough", score: { anxious: 1, avoidant: 2, secure: 0 } },
      { text: "Volatility is normal. Don't let emotions drive decisions", tag: "Steady Hand", score: { anxious: 0, avoidant: 0, secure: 3 } },
      { text: "Checking it 100 times a day but too scared to act", tag: "Anxious Watch", score: { anxious: 2, avoidant: 1, secure: 0 } },
    ],
  },
  {
    id: 10,
    emotion: "FOMO + Fear",
    scenario: "The market has dropped -30% over 3 months. You have cash. Everyone is screaming 'buy the dip!'",
    hook: "Everyone's buying the dip. Am I missing a once-in-a-lifetime chance?",
    options: [
      { text: "All in! Be greedy when others are fearful!", tag: "YOLO Bottom", score: { anxious: 2, avoidant: 0, secure: 0 } },
      { text: "Too scared to buy. What if it keeps falling?", tag: "Fear Watch", score: { anxious: 1, avoidant: 2, secure: 0 } },
      { text: "Dollar-cost average in. Keep buying as it drops", tag: "DCA Strategy", score: { anxious: 0, avoidant: 0, secure: 3 } },
      { text: "Market ups and downs aren't my problem. I don't trade", tag: "Detached", score: { anxious: 0, avoidant: 3, secure: 0 } },
    ],
  },
]
