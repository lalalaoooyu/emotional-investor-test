export type Lang = "zh" | "en" | "ja"

export const langLabels: Record<Lang, string> = {
  zh: "中文",
  en: "EN",
  ja: "日本語",
}

interface I18nStrings {
  title: string
  subtitle: string
  description: string
  tags: string[]
  startButton: string
  startHint: string
  analysisComplete: string
  ratingLabel: string
  riskLabel: string
  diagnosisTitle: string
  metricsTitle: string
  metricStability: string
  metricRisk: string
  metricReturns: string
  metricIndependence: string
  adviceTitle: string
  tradeLogTitle: string
  rawDataTitle: string
  impulsiveIndex: string
  avoidantIndex: string
  rationalIndex: string
  restartButton: string
  copyright: string
}

export const i18n: Record<Lang, I18nStrings> = {
  zh: {
    title: "Market Mind",
    subtitle: "10 道真实行情场景",
    description: "面对暴涨、闪崩、横盘、FOMO……\n你的本能反应，暴露了你的投资人格。",
    tags: ["贪婪", "恐惧", "焦虑", "FOMO"],
    startButton: "开始测试",
    startHint: "测测你是哪种投资者",
    analysisComplete: "ANALYSIS COMPLETE",
    ratingLabel: "情感投资评级",
    riskLabel: "风险等级",
    diagnosisTitle: "诊断分析",
    metricsTitle: "核心指标",
    metricStability: "情绪稳定性",
    metricRisk: "风控能力",
    metricReturns: "情感收益率",
    metricIndependence: "独立性",
    adviceTitle: "投资建议",
    tradeLogTitle: "你的交易记录",
    rawDataTitle: "原始数据",
    impulsiveIndex: "冲动指数",
    avoidantIndex: "回避指数",
    rationalIndex: "理性指数",
    restartButton: "重新测试",
    copyright: "\u00A9 2026 Alice Yu (JIATIAN YU). All rights reserved.",
  },
  en: {
    title: "Market Mind",
    subtitle: "10 Real Market Scenarios",
    description: "Facing surges, crashes, stagnation, FOMO...\nYour instincts reveal your investor personality.",
    tags: ["Greed", "Fear", "Anxiety", "FOMO"],
    startButton: "Start Test",
    startHint: "What kind of investor are you?",
    analysisComplete: "ANALYSIS COMPLETE",
    ratingLabel: "Emotional Investment Rating",
    riskLabel: "Risk Level",
    diagnosisTitle: "Diagnosis",
    metricsTitle: "Core Metrics",
    metricStability: "Emotional Stability",
    metricRisk: "Risk Control",
    metricReturns: "Emotional ROI",
    metricIndependence: "Independence",
    adviceTitle: "Investment Advice",
    tradeLogTitle: "Your Trade Log",
    rawDataTitle: "Raw Data",
    impulsiveIndex: "Impulsive",
    avoidantIndex: "Avoidant",
    rationalIndex: "Rational",
    restartButton: "Retake Test",
    copyright: "\u00A9 2026 Alice Yu (JIATIAN YU). All rights reserved.",
  },
  ja: {
    title: "Market Mind",
    subtitle: "10の実際の相場シナリオ",
    description: "暴騰、暴落、横ばい、FOMO...\nあなたの本能的な反応が投資家タイプを明かす。",
    tags: ["貪欲", "恐怖", "不安", "FOMO"],
    startButton: "テスト開始",
    startHint: "あなたはどんな投資家？",
    analysisComplete: "ANALYSIS COMPLETE",
    ratingLabel: "感情投資格付け",
    riskLabel: "リスクレベル",
    diagnosisTitle: "診断分析",
    metricsTitle: "コア指標",
    metricStability: "感情安定性",
    metricRisk: "リスク管理",
    metricReturns: "感情的リターン",
    metricIndependence: "独立性",
    adviceTitle: "投資アドバイス",
    tradeLogTitle: "あなたの取引記録",
    rawDataTitle: "生データ",
    impulsiveIndex: "衝動",
    avoidantIndex: "回避",
    rationalIndex: "理性",
    restartButton: "再テスト",
    copyright: "\u00A9 2026 Alice Yu (JIATIAN YU). All rights reserved.",
  },
}
