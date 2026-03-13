import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Area, AreaChart, Tooltip } from "recharts"
import type { StockLine } from "../data/questions"

interface StockChartProps {
  stocks: StockLine[]
  labels: string[]
}

export default function StockChart({ stocks, labels }: StockChartProps) {
  const data = labels.map((label, i) => {
    const point: Record<string, string | number> = { name: label }
    for (const stock of stocks) {
      point[stock.name] = stock.data[i] ?? 0
    }
    return point
  })

  const isSingleStock = stocks.length === 1
  const stock = stocks[0]
  const startVal = stock.data[0]
  const endVal = stock.data[stock.data.length - 1]
  const changePercent = (((endVal - startVal) / startVal) * 100).toFixed(1)
  const isUp = endVal >= startVal

  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4 sm:p-5">
      {/* Stock header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-bg-secondary)]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-tertiary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isSingleStock ? (
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              ) : (
                <>
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </>
              )}
            </svg>
          </div>
          <div>
            <div className="text-sm font-semibold text-[var(--color-text)]">
              {isSingleStock ? stock.name : "PORTFOLIO"}
            </div>
            {isSingleStock && (
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="text-[var(--color-text-secondary)]">{endVal.toFixed(0)}</span>
                <span className={isUp ? "text-[var(--color-green)]" : "text-[var(--color-red)]"}>
                  {isUp ? "+" : ""}{changePercent}%
                </span>
              </div>
            )}
          </div>
        </div>
        {!isSingleStock && (
          <div className="flex gap-3">
            {stocks.map((s) => (
              <div key={s.name} className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full" style={{ background: s.color }} />
                <span className="text-xs text-[var(--color-text-tertiary)]">{s.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Chart */}
      <div className="h-40 sm:h-48">
        <ResponsiveContainer width="100%" height="100%">
          {isSingleStock ? (
            <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id={`gradient-${stock.name}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={stock.color} stopOpacity={0.15} />
                  <stop offset="100%" stopColor={stock.color} stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="name"
                tick={{ fontSize: 11, fill: "var(--color-text-tertiary)" }}
                axisLine={{ stroke: "var(--color-border)" }}
                tickLine={false}
              />
              <YAxis
                hide
                domain={["dataMin - 5", "dataMax + 5"]}
              />
              <Tooltip
                contentStyle={{
                  background: "var(--color-bg-secondary)",
                  border: "1px solid var(--color-border)",
                  borderRadius: 8,
                  fontSize: 12,
                  color: "var(--color-text)",
                }}
              />
              <Area
                type="monotone"
                dataKey={stock.name}
                stroke={stock.color}
                strokeWidth={2}
                fill={`url(#gradient-${stock.name})`}
                dot={false}
                activeDot={{ r: 4, fill: stock.color }}
              />
            </AreaChart>
          ) : (
            <LineChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
              <XAxis
                dataKey="name"
                tick={{ fontSize: 11, fill: "var(--color-text-tertiary)" }}
                axisLine={{ stroke: "var(--color-border)" }}
                tickLine={false}
              />
              <YAxis
                hide
                domain={["dataMin - 5", "dataMax + 5"]}
              />
              <Tooltip
                contentStyle={{
                  background: "var(--color-bg-secondary)",
                  border: "1px solid var(--color-border)",
                  borderRadius: 8,
                  fontSize: 12,
                  color: "var(--color-text)",
                }}
              />
              {stocks.map((s) => (
                <Line
                  key={s.name}
                  type="monotone"
                  dataKey={s.name}
                  stroke={s.color}
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4, fill: s.color }}
                />
              ))}
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  )
}
