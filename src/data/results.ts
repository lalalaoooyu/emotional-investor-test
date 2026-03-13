export interface ResultProfile {
  type: string
  grade: string
  riskLevel: string
  color: string
  summary: string
  detail: string
  advice: string
  metrics: {
    stability: number
    riskControl: number
    returns: number
    independence: number
  }
}

export const resultProfiles: Record<string, ResultProfile> = {
  anxious: {
    type: "情绪散户",
    grade: "C-",
    riskLevel: "极高",
    color: "#ef4444",
    summary: "涨了怕卖早，跌了怕不跑。每一次波动都是你的心电图。",
    detail: "你的操作完全被情绪驱动：看到涨就忍不住追，看到跌就急着割。你不是在投资，你是在用真金白银玩情绪过山车。FOMO 和恐慌是你最大的敌人——但你总是输给它们。",
    advice: "你最需要的不是更好的选股能力，而是一套让你「不用做决定」的系统。比如定投、止盈止损线、仓位上限。把决策权从情绪手里夺回来，交给规则。记住——市场专治各种不服，但更治各种冲动。",
    metrics: { stability: 15, riskControl: 10, returns: 25, independence: 20 },
  },
  avoidant: {
    type: "佛系空仓派",
    grade: "B-",
    riskLevel: "低（但收益也低）",
    color: "#3b82f6",
    summary: "风险是零，收益也是零。你不是不会投资，你是不敢。",
    detail: "你对风险的厌恶已经超过了正常范围。跌了你装死，涨了你不追，机会来了你犹豫，结果就是——永远在场外看别人赚钱。你的问题不是缺乏知识，而是缺乏行动的勇气。",
    advice: "试着从最小的仓位开始，用你「亏了也不心疼」的钱入场。你会发现，适度的波动并不可怕，它只是市场在呼吸。你不需要变成激进派，但你需要走出舒适区，哪怕只是一小步。",
    metrics: { stability: 70, riskControl: 85, returns: 15, independence: 90 },
  },
  secure: {
    type: "价值投资者",
    grade: "A",
    riskLevel: "可控",
    color: "#22c55e",
    summary: "涨了不贪，跌了不慌。你的操作系统里没有「恐慌」这个进程。",
    detail: "你能在市场暴跌时保持冷静，在全民狂欢时保持理性。你有自己的判断体系，不会因为别人的情绪而改变决策。你理解波动是投资的一部分，而不是需要逃避的威胁。",
    advice: "你已经具备了最稀缺的投资品质——情绪稳定性。唯一的提醒：不要因为过于理性而忽略了市场的非理性力量。有时候，群体的疯狂会持续很久。保持灵活，偶尔允许自己感性一下。",
    metrics: { stability: 85, riskControl: 80, returns: 75, independence: 80 },
  },
  mixed: {
    type: "震荡型选手",
    grade: "B",
    riskLevel: "不稳定",
    color: "#e07850",
    summary: "策略飘忽不定，时而激进时而保守。你的操作和你的心情一样——看天气。",
    detail: "你有时候很理性，有时候又很冲动。市场好的时候你像价值投资者一样冷静，市场差的时候你又变成了情绪散户。你的问题不是某一种极端，而是没有形成一致的投资框架。",
    advice: "你最需要的是「一致性」。不是说你每次都要做对，而是你的决策过程应该是一样的。写下你的投资原则，打印出来贴在屏幕旁边。下次想操作的时候，先问自己：「这符合我的原则吗？」如果不符合，关掉交易页面。",
    metrics: { stability: 45, riskControl: 40, returns: 50, independence: 55 },
  },
}
