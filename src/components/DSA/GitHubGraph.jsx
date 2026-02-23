import React, { useEffect, useState } from "react";

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const DAYS = ["", "Mon", "", "Wed", "", "Fri", ""];

// GitHub-style green color levels
const COLORS = [
  "#161b22", // 0 contributions
  "#0e4429", // level 1
  "#006d32", // level 2
  "#26a641", // level 3
  "#39d353", // level 4
];

function getLevel(count) {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 6) return 2;
  if (count <= 9) return 3;
  return 4;
}

// Generate a year of fake-but-realistic contribution data
// Replace this with real API data if you have a backend proxy
function generateContributions() {
  const weeks = [];
  const today = new Date();
  // Start from ~52 weeks ago, aligned to Sunday
  const start = new Date(today);
  start.setDate(start.getDate() - 364);
  // Align to Sunday
  start.setDate(start.getDate() - start.getDay());

  let current = new Date(start);
  while (current <= today) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      const date = new Date(current);
      const isWeekend = d === 0 || d === 6;
      // Simulate realistic coding patterns
      const rand = Math.random();
      let count = 0;
      if (!isWeekend) {
        if (rand > 0.15) count = Math.floor(Math.random() * 15) + 1;
      } else {
        if (rand > 0.6) count = Math.floor(Math.random() * 8) + 1;
      }
      if (date > today) count = 0;
      week.push({ date, count });
      current.setDate(current.getDate() + 1);
    }
    weeks.push(week);
  }
  return weeks;
}

const GitHubContributionGraph = ({ username = "Ashish-kumarsn" }) => {
  const [weeks, setWeeks] = useState([]);
  const [total, setWeeks_total] = useState(0);
  const [tooltip, setTooltip] = useState(null);

  useEffect(() => {
    const data = generateContributions();
    setWeeks(data);
    const t = data.flat().reduce((sum, d) => sum + d.count, 0);
    setWeeks_total(t);
  }, []);

  // Compute month labels
  const monthLabels = [];
  weeks.forEach((week, wi) => {
    const firstDay = week[0];
    if (!firstDay) return;
    const month = firstDay.date.getMonth();
    const prev = wi > 0 ? weeks[wi - 1][0]?.date.getMonth() : -1;
    if (month !== prev) {
      monthLabels.push({ wi, label: MONTHS[month] });
    }
  });

  const CELL = 11;
  const GAP = 3;
  const STEP = CELL + GAP;

  return (
    <div style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", width: "100%" }}>
      {/* Header */}
{/* Header */}
<div
  style={{
    display: "flex",
    alignItems: "center",
    marginBottom: "16px",
    color: "#e6edf3",
  }}
>
  {/* Left: Icon + Count */}
  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
    <svg height="24" width="24" viewBox="0 0 16 16" fill="#ffffff">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>

    <div>
      <span
        style={{
          fontSize: "1.15rem",
          fontWeight: 700,
          color: "#ffffff",
        }}
      >
        {total.toLocaleString()}
      </span>
      <span
        style={{
          fontSize: "0.9rem",
          marginLeft: "6px",
          color: "#9ca3af",
        }}
      >
        contributions in the last year
      </span>
    </div>
  </div>

  {/* Right: Legend */}
  <div
    style={{
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: "4px",
      fontSize: "0.7rem",
      color: "#9ca3af",
    }}
  >
    <span>Less</span>
    {COLORS.map((c, i) => (
      <div
        key={i}
        style={{
          width: CELL,
          height: CELL,
          background: c,
          borderRadius: "3px",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      />
    ))}
    <span>More</span>
  </div>
</div>

      {/* Graph */}
      <div style={{ position: "relative", overflowX: "auto" }}>
        {/* Month labels */}
        <div style={{ 
          display: "flex", 
          marginLeft: 32,
          marginBottom: 2,
          position: "relative",
          height: 16
        }}>
          {monthLabels.map(({ wi, label }) => (
            <div key={wi} style={{
              position: "absolute",
              left: wi * STEP,
              fontSize: "0.7rem",
              color: "#8b949e",
              whiteSpace: "nowrap"
            }}>
              {label}
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 0 }}>
          {/* Day labels */}
          <div style={{ 
            display: "flex", 
            flexDirection: "column",
            marginRight: 6,
            justifyContent: "space-around"
          }}>
            {DAYS.map((day, i) => (
              <div key={i} style={{
                height: CELL,
                marginBottom: i < 6 ? GAP : 0,
                fontSize: "0.65rem",
                color: "#8b949e",
                display: "flex",
                alignItems: "center",
                width: 24,
                justifyContent: "flex-end"
              }}>
                {day}
              </div>
            ))}
          </div>

          {/* Weeks */}
          <div style={{ display: "flex", gap: GAP, position: "relative" }}>
            {weeks.map((week, wi) => (
              <div key={wi} style={{ display: "flex", flexDirection: "column", gap: GAP }}>
                {week.map((day, di) => {
                  const level = getLevel(day.count);
                  const dateStr = day.date.toLocaleDateString("en-US", { 
                    weekday: "short", month: "short", day: "numeric", year: "numeric" 
                  });
                  return (
                    <div
                      key={di}
                      onMouseEnter={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setTooltip({ 
                          count: day.count, 
                          date: dateStr,
                          x: rect.left,
                          y: rect.top
                        });
                      }}
                      onMouseLeave={() => setTooltip(null)}
                      style={{
                        width: CELL,
                        height: CELL,
                        background: COLORS[level],
                        borderRadius: "3px",
                        border: "1px solid rgba(255,255,255,0.06)",
                        cursor: "pointer",
                        transition: "transform 0.1s ease, filter 0.1s ease",
                        flexShrink: 0,
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = "scale(1.3)";
                        e.currentTarget.style.filter = "brightness(1.4)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.filter = "brightness(1)";
                      }}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tooltip */}
      {tooltip && (
        <div style={{
          position: "fixed",
          left: tooltip.x - 60,
          top: tooltip.y - 52,
          background: "#1c2128",
          border: "1px solid #30363d",
          borderRadius: "8px",
          padding: "8px 12px",
          fontSize: "0.78rem",
          color: "#e6edf3",
          pointerEvents: "none",
          zIndex: 9999,
          textAlign: "center",
          boxShadow: "0 4px 16px rgba(0,0,0,0.5)"
        }}>
          <div style={{ fontWeight: 600, marginBottom: 2 }}>
            {tooltip.count} contribution{tooltip.count !== 1 ? "s" : ""}
          </div>
          <div style={{ color: "#8b949e" }}>{tooltip.date}</div>
        </div>
      )}
      <div
  style={{
    marginTop: "28px",
    height: "1px",
    background: "linear-gradient(to right, transparent, #2e2e2e, transparent)",
  }}
/>
    </div>
  );
};

export default GitHubContributionGraph;