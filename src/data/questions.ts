export interface StockLine {
  name: string
  color: string
  data: number[]
}

export interface Option {
  text: string
  tag: string
  score: { anxious: number; avoidant: number; secure: number }
}

export interface Question {
  id: number
  emotion: string
  scenario: string
  hook: string
  stocks: StockLine[]
  labels: string[]
  options: Option[]
}

export const questions: Question[] = [
  {
    id: 1,
    emotion: "贪婪",
    scenario: "你的股票连涨7天，累计+32%。朋友圈都在晒收益截图。",
    hook: "已经涨这么多了，卖掉是不是太可惜了？",
    stocks: [
      { name: "POSITION", color: "#22c55e", data: [100, 103, 108, 112, 118, 125, 129, 132] },
    ],
    labels: ["Day1", "Day2", "Day3", "Day4", "Day5", "Day6", "Day7", "Today"],
    options: [
      { text: "继续加仓！趋势这么好不上车就亏了", tag: "追涨加仓", score: { anxious: 3, avoidant: 0, secure: 0 } },
      { text: "先落袋为安，利润到手才是真的", tag: "止盈离场", score: { anxious: 0, avoidant: 2, secure: 1 } },
      { text: "设好止盈点，达到就走，没到就拿着", tag: "纪律止盈", score: { anxious: 0, avoidant: 0, secure: 3 } },
      { text: "卖一半锁住利润，另一半继续跑", tag: "分批止盈", score: { anxious: 0, avoidant: 1, secure: 2 } },
    ],
  },
  {
    id: 2,
    emotion: "恐惧",
    scenario: "今天开盘直接跳空低开，你的股票闪崩-12%。新闻标题：「分析师警告：下跌可能才刚开始」",
    hook: "再不跑，会不会血本无归？",
    stocks: [
      { name: "POSITION", color: "#ef4444", data: [100, 101, 99, 102, 100, 98, 97, 88] },
    ],
    labels: ["", "", "", "", "", "", "Prev", "Today"],
    options: [
      { text: "立刻全部卖掉，先保命再说", tag: "恐慌割肉", score: { anxious: 3, avoidant: 0, secure: 0 } },
      { text: "关掉APP，不看了，眼不见心不烦", tag: "鸵鸟策略", score: { anxious: 0, avoidant: 3, secure: 0 } },
      { text: "查看基本面有没有变，没变就拿着", tag: "理性持有", score: { anxious: 0, avoidant: 0, secure: 3 } },
      { text: "跌了这么多反而是机会，考虑补仓", tag: "逆势加仓", score: { anxious: 1, avoidant: 0, secure: 2 } },
    ],
  },
  {
    id: 3,
    emotion: "焦虑",
    scenario: "你的股票横盘了整整3个月，纹丝不动。但大盘同期涨了18%。",
    hook: "是不是选错了？别人都在赚钱，就我在原地踏步。",
    stocks: [
      { name: "YOUR STOCK", color: "#999", data: [100, 101, 99, 100, 101, 100, 99, 100, 101, 100, 99, 100] },
      { name: "INDEX", color: "#22c55e", data: [100, 101, 103, 105, 108, 109, 111, 113, 115, 116, 117, 118] },
    ],
    labels: ["Jan", "", "", "Feb", "", "", "Mar", "", "", "Apr", "", "Today"],
    options: [
      { text: "受不了了，换成涨得好的股票", tag: "焦虑换仓", score: { anxious: 3, avoidant: 0, secure: 0 } },
      { text: "无所谓，反正我也不怎么看", tag: "佛系躺平", score: { anxious: 0, avoidant: 3, secure: 0 } },
      { text: "分析为什么横盘，如果逻辑没变就耐心等", tag: "耐心持有", score: { anxious: 0, avoidant: 0, secure: 3 } },
      { text: "减一点仓位，分散到其他标的", tag: "分散风险", score: { anxious: 1, avoidant: 0, secure: 2 } },
    ],
  },
  {
    id: 4,
    emotion: "FOMO",
    scenario: "你之前差点买的那只股票，一周翻倍了。你的自选股涨了3%。群里都在讨论它。",
    hook: "当初怎么没买？！现在追还来得及吗？",
    stocks: [
      { name: "THAT STOCK", color: "#22c55e", data: [100, 110, 125, 145, 170, 190, 200] },
      { name: "YOUR STOCK", color: "#999", data: [100, 100, 101, 102, 101, 103, 103] },
    ],
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Today"],
    options: [
      { text: "马上买入！不能再错过了", tag: "FOMO追高", score: { anxious: 3, avoidant: 0, secure: 0 } },
      { text: "算了，涨成这样追进去不是接盘侠吗", tag: "冷静旁观", score: { anxious: 0, avoidant: 2, secure: 1 } },
      { text: "翻倍了还追？我对我的持仓有信心", tag: "坚持策略", score: { anxious: 0, avoidant: 0, secure: 3 } },
      { text: "小仓位试试，涨了赚点安慰，跌了也不心疼", tag: "试探建仓", score: { anxious: 1, avoidant: 0, secure: 2 } },
    ],
  },
  {
    id: 5,
    emotion: "恐惧+贪婪",
    scenario: "你的股票经历了一波-25%的暴跌后，今天突然反弹+8%。但你不确定这是真正的反转，还是「死猫跳」。",
    hook: "抄底的机会？还是下一个陷阱？",
    stocks: [
      { name: "POSITION", color: "#e07850", data: [100, 95, 88, 82, 78, 75, 80, 81] },
    ],
    labels: ["", "", "", "", "", "Low", "Prev", "Today"],
    options: [
      { text: "反弹了赶紧跑！能少亏一点是一点", tag: "反弹出逃", score: { anxious: 2, avoidant: 1, secure: 0 } },
      { text: "加仓！底部信号出现了", tag: "抄底梭哈", score: { anxious: 2, avoidant: 0, secure: 0 } },
      { text: "不急，等确认趋势反转再说", tag: "等待确认", score: { anxious: 0, avoidant: 0, secure: 3 } },
      { text: "这种波动太刺激了，我选择装死", tag: "装死不动", score: { anxious: 0, avoidant: 3, secure: 0 } },
    ],
  },
  {
    id: 6,
    emotion: "焦虑",
    scenario: "你的组合里三只股票：A涨了+20%，B跌了-15%，C原地不动。",
    hook: "要不要把BC的钱全部转给A？赢家通吃？",
    stocks: [
      { name: "STOCK A", color: "#22c55e", data: [100, 103, 107, 110, 114, 118, 120] },
      { name: "STOCK B", color: "#ef4444", data: [100, 98, 95, 92, 90, 87, 85] },
      { name: "STOCK C", color: "#999", data: [100, 100, 101, 100, 99, 100, 100] },
    ],
    labels: ["Entry", "", "", "", "", "", "Today"],
    options: [
      { text: "全部转给A！跟着赢家走", tag: "集中押注", score: { anxious: 2, avoidant: 0, secure: 0 } },
      { text: "B亏了就割了吧，留A和C", tag: "止损保盈", score: { anxious: 1, avoidant: 1, secure: 1 } },
      { text: "维持现有比例不变，定期再平衡", tag: "纪律平衡", score: { anxious: 0, avoidant: 0, secure: 3 } },
      { text: "都不想管了，太复杂了", tag: "摆烂放弃", score: { anxious: 0, avoidant: 3, secure: 0 } },
    ],
  },
  {
    id: 7,
    emotion: "贪婪",
    scenario: "你的股票刚创下历史新高！成交量也放大了。有分析师喊出目标价翻倍。",
    hook: "不加仓是不是傻？万一真翻倍了呢？",
    stocks: [
      { name: "POSITION", color: "#22c55e", data: [80, 85, 88, 92, 95, 100, 105, 112, 120] },
    ],
    labels: ["", "", "", "", "", "Prev High", "", "", "ATH!"],
    options: [
      { text: "加满！分析师都说翻倍了", tag: "贪婪加仓", score: { anxious: 3, avoidant: 0, secure: 0 } },
      { text: "到新高了，先走为敬", tag: "恐高清仓", score: { anxious: 0, avoidant: 3, secure: 0 } },
      { text: "不跟风，按自己的估值判断", tag: "独立判断", score: { anxious: 0, avoidant: 0, secure: 3 } },
      { text: "适当减仓，留底仓观察", tag: "减仓保留", score: { anxious: 0, avoidant: 1, secure: 2 } },
    ],
  },
  {
    id: 8,
    emotion: "恐惧",
    scenario: "黑色星期一。整个市场暴跌，你的组合一天亏了-8%。社交媒体一片哀嚎。",
    hook: "这是系统性风险吗？会不会更惨？",
    stocks: [
      { name: "STOCK A", color: "#ef4444", data: [100, 99, 97, 95, 94, 93, 92] },
      { name: "STOCK B", color: "#f87171", data: [100, 98, 96, 93, 91, 89, 88] },
      { name: "STOCK C", color: "#fca5a5", data: [100, 97, 94, 91, 88, 86, 85] },
    ],
    labels: ["Open", "", "", "", "", "", "Close"],
    options: [
      { text: "全部清仓！大难临头先跑为上", tag: "恐慌清仓", score: { anxious: 3, avoidant: 0, secure: 0 } },
      { text: "卸载APP，等风暴过去再看", tag: "逃避现实", score: { anxious: 0, avoidant: 3, secure: 0 } },
      { text: "检查持仓质量，好公司反而是买入机会", tag: "危中寻机", score: { anxious: 0, avoidant: 0, secure: 3 } },
      { text: "不卖也不买，紧张地盯着不操作", tag: "紧张观望", score: { anxious: 2, avoidant: 1, secure: 0 } },
    ],
  },
  {
    id: 9,
    emotion: "焦虑",
    scenario: "你的股票这周坐了过山车：周一+10%，周二-8%，周三+6%，周四-5%，今天又涨了4%。",
    hook: "到底该什么时候出手？每天心态都在崩。",
    stocks: [
      { name: "POSITION", color: "#e07850", data: [100, 110, 101, 107, 102, 106] },
    ],
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Today"],
    options: [
      { text: "趁今天涨了赶紧卖！明天可能又跌", tag: "追涨杀跌", score: { anxious: 3, avoidant: 0, secure: 0 } },
      { text: "这种票太折腾了，直接清仓换个稳的", tag: "受不了走人", score: { anxious: 1, avoidant: 2, secure: 0 } },
      { text: "波动是正常的，不被情绪左右", tag: "稳如老狗", score: { anxious: 0, avoidant: 0, secure: 3 } },
      { text: "每天看一百遍，但就是不敢操作", tag: "焦虑盯盘", score: { anxious: 2, avoidant: 1, secure: 0 } },
    ],
  },
  {
    id: 10,
    emotion: "FOMO+恐惧",
    scenario: "市场已经连续下跌了3个月，大盘跌了-30%。你手里还有一笔闲钱。所有人都在喊「抄底」。",
    hook: "别人都在抄底，我不进场是不是错过了一辈子一次的机会？",
    stocks: [
      { name: "INDEX", color: "#ef4444", data: [100, 96, 92, 88, 84, 80, 77, 74, 72, 70] },
    ],
    labels: ["-3mo", "", "", "", "", "", "", "", "", "Today"],
    options: [
      { text: "All in！别人恐惧我贪婪！", tag: "梭哈抄底", score: { anxious: 2, avoidant: 0, secure: 0 } },
      { text: "不敢买，万一还继续跌呢", tag: "恐惧观望", score: { anxious: 1, avoidant: 2, secure: 0 } },
      { text: "分批建仓，跌了继续买，摊低成本", tag: "定投策略", score: { anxious: 0, avoidant: 0, secure: 3 } },
      { text: "市场跌不跌跟我没关系，我不炒股", tag: "置身事外", score: { anxious: 0, avoidant: 3, secure: 0 } },
    ],
  },
]
