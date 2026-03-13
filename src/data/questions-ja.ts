import type { Question } from "./questions"

export const questionsJa: Omit<Question, "stocks" | "labels">[] = [
  {
    id: 1,
    emotion: "貪欲",
    scenario: "あなたの株が7日連続で上昇し、累計+32%。SNSではみんな利益を自慢している。",
    hook: "こんなに上がったのに、今売るのはもったいない？",
    options: [
      { text: "さらに買い増し！このトレンドに乗らないと損", tag: "追随買い", score: { anxious: 3, avoidant: 0, secure: 0 } },
      { text: "利益確定。手元のお金が本物のお金", tag: "利確撤退", score: { anxious: 0, avoidant: 2, secure: 1 } },
      { text: "利確ラインを設定。到達したら売る、していなければ保持", tag: "規律的利確", score: { anxious: 0, avoidant: 0, secure: 3 } },
      { text: "半分売って利益を確保、残りはそのまま", tag: "分割利確", score: { anxious: 0, avoidant: 1, secure: 2 } },
    ],
  },
  {
    id: 2,
    emotion: "恐怖",
    scenario: "今日は寄り付きからギャップダウン、あなたの株が-12%の暴落。見出し：「アナリスト警告：下落はまだ始まったばかり」",
    hook: "今逃げないと、全額失うかも？",
    options: [
      { text: "すぐに全部売る。まず生き残ることが大事", tag: "パニック売り", score: { anxious: 3, avoidant: 0, secure: 0 } },
      { text: "アプリを閉じる。見なければ心配ない", tag: "ダチョウ戦略", score: { anxious: 0, avoidant: 3, secure: 0 } },
      { text: "ファンダメンタルズが変わったか確認。変わってなければ保持", tag: "理性的保持", score: { anxious: 0, avoidant: 0, secure: 3 } },
      { text: "これだけ下がったならむしろチャンス。買い増し検討", tag: "逆張り買い", score: { anxious: 1, avoidant: 0, secure: 2 } },
    ],
  },
  {
    id: 3,
    emotion: "不安",
    scenario: "あなたの株が3ヶ月横ばい。一方で市場全体は18%上昇している。",
    hook: "選び方を間違えた？みんな儲かっているのに自分だけ取り残されている。",
    options: [
      { text: "もう我慢できない。上がっている銘柄に乗り換える", tag: "焦り乗り換え", score: { anxious: 3, avoidant: 0, secure: 0 } },
      { text: "どうでもいい、あまりチェックしてないし", tag: "仏モード", score: { anxious: 0, avoidant: 3, secure: 0 } },
      { text: "横ばいの理由を分析。投資テーゼが有効なら待つ", tag: "忍耐保持", score: { anxious: 0, avoidant: 0, secure: 3 } },
      { text: "少し減らして他の銘柄に分散", tag: "分散投資", score: { anxious: 1, avoidant: 0, secure: 2 } },
    ],
  },
  {
    id: 4,
    emotion: "FOMO",
    scenario: "買おうか迷っていた銘柄が1週間で2倍に。自分の株は+3%。グループチャットはその話題で持ちきり。",
    hook: "なぜ買わなかったのか！今から追いかけてもまだ間に合う？",
    options: [
      { text: "今すぐ買う！もう見逃せない", tag: "FOMO追い", score: { anxious: 3, avoidant: 0, secure: 0 } },
      { text: "やめておく。2倍になった後に買うのは高値掴み", tag: "冷静傍観", score: { anxious: 0, avoidant: 2, secure: 1 } },
      { text: "2倍になった株を追う？自分の持ち株を信じる", tag: "戦略維持", score: { anxious: 0, avoidant: 0, secure: 3 } },
      { text: "少額で試す。上がればラッキー、下がっても痛くない", tag: "試し買い", score: { anxious: 1, avoidant: 0, secure: 2 } },
    ],
  },
  {
    id: 5,
    emotion: "恐怖+貪欲",
    scenario: "あなたの株が-25%暴落した後、今日突然+8%反発。本当の反転か、デッドキャットバウンスか不明。",
    hook: "底値買いのチャンス？それとも次の罠？",
    options: [
      { text: "反発したから逃げる！少しでも損を減らす", tag: "反発逃げ", score: { anxious: 2, avoidant: 1, secure: 0 } },
      { text: "買い増し！底打ちシグナルだ", tag: "底値全力", score: { anxious: 2, avoidant: 0, secure: 0 } },
      { text: "急がない。トレンド反転の確認を待つ", tag: "確認待ち", score: { anxious: 0, avoidant: 0, secure: 3 } },
      { text: "この変動はきつすぎる。動かないでおく", tag: "死んだふり", score: { anxious: 0, avoidant: 3, secure: 0 } },
    ],
  },
  {
    id: 6,
    emotion: "不安",
    scenario: "ポートフォリオの3銘柄：Aは+20%、Bは-15%、Cは横ばい。",
    hook: "BCの資金を全部Aに集中する？勝者総取り？",
    options: [
      { text: "全部Aに！勝ち馬に乗る", tag: "集中投資", score: { anxious: 2, avoidant: 0, secure: 0 } },
      { text: "Bの損切りをして、AとCを残す", tag: "損切り利確", score: { anxious: 1, avoidant: 1, secure: 1 } },
      { text: "現在の配分を維持、定期的にリバランス", tag: "規律バランス", score: { anxious: 0, avoidant: 0, secure: 3 } },
      { text: "もう管理したくない。複雑すぎる", tag: "投げ出し", score: { anxious: 0, avoidant: 3, secure: 0 } },
    ],
  },
  {
    id: 7,
    emotion: "貪欲",
    scenario: "あなたの株が史上最高値を更新！出来高も急増。アナリストは目標株価2倍と予測。",
    hook: "ここで買い増ししないのはバカ？2倍になったらどうする？",
    options: [
      { text: "フル投資！アナリストが2倍って言ってる", tag: "貪欲買い", score: { anxious: 3, avoidant: 0, secure: 0 } },
      { text: "最高値で撤退。ピークには敬意を", tag: "高所恐怖", score: { anxious: 0, avoidant: 3, secure: 0 } },
      { text: "騒ぎに乗らない。自分のバリュエーションで判断", tag: "独立判断", score: { anxious: 0, avoidant: 0, secure: 3 } },
      { text: "少し減らして、コアポジションは残して観察", tag: "減量保持", score: { anxious: 0, avoidant: 1, secure: 2 } },
    ],
  },
  {
    id: 8,
    emotion: "恐怖",
    scenario: "ブラックマンデー。市場全体が暴落、ポートフォリオが1日で-8%。SNSは阿鼻叫喚。",
    hook: "システミックリスク？もっとひどくなる？",
    options: [
      { text: "全部売る！大惨事の前に逃げる", tag: "パニック清算", score: { anxious: 3, avoidant: 0, secure: 0 } },
      { text: "アプリ削除。嵐が過ぎるまで見ない", tag: "現実逃避", score: { anxious: 0, avoidant: 3, secure: 0 } },
      { text: "保有銘柄を確認。良い会社ならむしろ買い時", tag: "危機=機会", score: { anxious: 0, avoidant: 0, secure: 3 } },
      { text: "売りも買いもしない。ただ緊張して画面を見つめる", tag: "緊張傍観", score: { anxious: 2, avoidant: 1, secure: 0 } },
    ],
  },
  {
    id: 9,
    emotion: "不安",
    scenario: "今週の株価：月曜+10%、火曜-8%、水曜+6%、木曜-5%、今日+4%。まさにジェットコースター。",
    hook: "いつ動くべき？毎日メンタルが崩壊している。",
    options: [
      { text: "今日上がってるうちに売る！明日また下がるかも", tag: "追随売買", score: { anxious: 3, avoidant: 0, secure: 0 } },
      { text: "こんな株は疲れる。全部売って安定したものに替える", tag: "もう無理", score: { anxious: 1, avoidant: 2, secure: 0 } },
      { text: "変動は正常。感情に振り回されない", tag: "泰然自若", score: { anxious: 0, avoidant: 0, secure: 3 } },
      { text: "毎日100回チェックするけど、怖くて何もできない", tag: "不安監視", score: { anxious: 2, avoidant: 1, secure: 0 } },
    ],
  },
  {
    id: 10,
    emotion: "FOMO+恐怖",
    scenario: "市場が3ヶ月で-30%下落。手元に余裕資金がある。みんな「底値買い」と叫んでいる。",
    hook: "みんな底値買いしている。参加しないと一生に一度のチャンスを逃す？",
    options: [
      { text: "全力投入！他人が恐怖する時こそ貪欲に！", tag: "全力底値", score: { anxious: 2, avoidant: 0, secure: 0 } },
      { text: "怖くて買えない。まだ下がり続けたら？", tag: "恐怖傍観", score: { anxious: 1, avoidant: 2, secure: 0 } },
      { text: "分割購入。下がったら買い続けてコストを平均化", tag: "積立戦略", score: { anxious: 0, avoidant: 0, secure: 3 } },
      { text: "市場の上げ下げは関係ない。投資はしていない", tag: "無関係", score: { anxious: 0, avoidant: 3, secure: 0 } },
    ],
  },
]
