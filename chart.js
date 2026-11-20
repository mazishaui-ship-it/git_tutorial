/**
 * 달빛 모퉁이 카페 매출 대시보드 차트 및 표 렌더링 스크립트
 * (Cafe Sales Dashboard Chart & Table Renderer)
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. data.js 에서 전역 데이터 확인
  if (typeof CAFE_SALES_DATA === "undefined") {
    console.error("CAFE_SALES_DATA 가 로드되지 않았습니다.");
    return;
  }

  const data = CAFE_SALES_DATA;
  const summary = data.summary;
  const daily = data.daily_records;
  const menus = data.menu_list;

  // 2. 상단 KPI 요약 카드 렌더링
  renderKpiCards(summary, menus);

  // 3. 기능 ①: 일별 매출 꺾은선 차트 (Line Chart)
  renderDailyRevenueChart(daily);

  // 4. 기능 ②: 메뉴별 판매량 막대 차트 (Bar Chart)
  renderMenuQuantityChart(summary.menu_stats, menus);

  // 5. 기능 ③: 요일별 평균 매출 표 (Table)
  renderDowTable(summary.dow_averages, summary.total_revenue);
});

// 화폐 포맷 헬퍼 (₩123,456)
function formatCurrency(amount) {
  return "₩" + Number(amount).toLocaleString();
}

// 수량 포맷 헬퍼 (1,234)
function formatNumber(num) {
  return Number(num).toLocaleString();
}

/**
 * KPI 요약 카드 렌더링
 */
function renderKpiCards(summary, menus) {
  // 총 매출
  const totalRevEl = document.getElementById("kpiTotalRevenue");
  if (totalRevEl) totalRevEl.textContent = formatCurrency(summary.total_revenue);

  // 총 판매량
  const totalQtyEl = document.getElementById("kpiTotalQty");
  if (totalQtyEl) totalQtyEl.textContent = formatNumber(summary.total_items_sold) + " 잔/개 (件)";

  // 일평균 매출
  const dailyAvgEl = document.getElementById("kpiDailyAvg");
  if (dailyAvgEl) dailyAvgEl.textContent = formatCurrency(summary.daily_average_revenue);

  // 최고 인기 메뉴
  const bestMenuStats = Object.values(summary.menu_stats).reduce((prev, curr) => 
    (curr.total_qty > prev.total_qty) ? curr : prev
  );
  const bestMenuEl = document.getElementById("kpiBestMenu");
  if (bestMenuEl) {
    bestMenuEl.textContent = `${bestMenuStats.name} (${bestMenuStats.name_cn}) · ${formatNumber(bestMenuStats.total_qty)}잔(件)`;
  }
}

/**
 * 기능 ①: 30일 일별 매출 꺾은선 차트 (Line Chart)
 */
function renderDailyRevenueChart(dailyRecords) {
  const ctx = document.getElementById("dailyRevenueChart");
  if (!ctx) return;

  const labels = dailyRecords.map(r => `${r.day}일(${r.day_of_week})`);
  const revenues = dailyRecords.map(r => r.total_revenue);

  // 주말 포인트 스타일 차별화
  const pointBgColors = dailyRecords.map(r => r.is_weekend ? "#ef4444" : "#3b82f6");
  const pointRadius = dailyRecords.map(r => r.is_weekend ? 5 : 3.5);

  new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "일별 매출액 / 每日销售额 (KRW / ₩)",
          data: revenues,
          borderColor: "#2563eb",
          backgroundColor: "rgba(37, 99, 235, 0.12)",
          borderWidth: 2.5,
          tension: 0.35,
          fill: true,
          pointBackgroundColor: pointBgColors,
          pointBorderColor: "#ffffff",
          pointBorderWidth: 1.5,
          pointRadius: pointRadius,
          pointHoverRadius: 7
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: "top",
          labels: {
            font: { family: "-apple-system, sans-serif", size: 12, weight: "bold" },
            boxWidth: 14
          }
        },
        tooltip: {
          backgroundColor: "#1e293b",
          titleFont: { size: 13, weight: "bold" },
          bodyFont: { size: 13 },
          padding: 12,
          displayColors: false,
          callbacks: {
            title: (items) => {
              const idx = items[0].dataIndex;
              const rec = dailyRecords[idx];
              return `${rec.date_str} (${rec.day_of_week_cn})`;
            },
            label: (item) => {
              const idx = item.dataIndex;
              const rec = dailyRecords[idx];
              return [
                `총 매출액 / 销售额: ${formatCurrency(rec.total_revenue)}`,
                `총 판매량 / 销售量: ${formatNumber(rec.total_qty)} 잔/개 (件)`
              ];
            }
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            font: { size: 10 },
            maxRotation: 45,
            autoSkip: window.innerWidth < 640
          }
        },
        y: {
          beginAtZero: false,
          grid: { color: "#e2e8f0" },
          ticks: {
            font: { size: 11 },
            callback: (val) => "₩" + (val / 10000).toFixed(0) + "만(万)"
          }
        }
      }
    }
  });
}

/**
 * 기능 ②: 메뉴 5종별 판매량 막대 차트 (Bar Chart)
 */
function renderMenuQuantityChart(menuStats, menuList) {
  const ctx = document.getElementById("menuQuantityChart");
  if (!ctx) return;

  const labels = menuList.map(m => `${m.name}\n(${m.name_cn})`);
  const quantities = menuList.map(m => menuStats[m.id].total_qty);
  const revenues = menuList.map(m => menuStats[m.id].total_revenue);

  const backgroundColors = [
    "#8B5CF6", // 아메리카노 (보라)
    "#EC4899", // 카페라떼 (핑크)
    "#F59E0B", // 바닐라 라떼 (오렌지)
    "#10B981", // 콜드브루 (에메랄드)
    "#3B82F6"  // 크루아상 (블루)
  ];

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "총 판매량 / 累计销量 (잔/개 · 件)",
          data: quantities,
          backgroundColor: backgroundColors,
          borderRadius: 8,
          borderSkipped: false,
          maxBarThickness: 56
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "#1e293b",
          titleFont: { size: 13, weight: "bold" },
          bodyFont: { size: 13 },
          padding: 12,
          displayColors: false,
          callbacks: {
            title: (items) => {
              const idx = items[0].dataIndex;
              const m = menuList[idx];
              return `${m.name} / ${m.name_cn} (단가/单价: ${formatCurrency(m.price)})`;
            },
            label: (item) => {
              const idx = item.dataIndex;
              const qty = quantities[idx];
              const rev = revenues[idx];
              return [
                `판매 수량 / 销量: ${formatNumber(qty)} 잔/개 (件)`,
                `총 매출액 / 销售额: ${formatCurrency(rev)}`
              ];
            }
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: { size: 12, weight: "600" } }
        },
        y: {
          beginAtZero: true,
          grid: { color: "#e2e8f0" },
          ticks: {
            font: { size: 11 },
            callback: (val) => `${val}잔(件)`
          }
        }
      }
    }
  });
}

/**
 * 기능 ③: 요일별 평균 매출 표 (Table)
 */
function renderDowTable(dowAverages, grandTotal) {
  const tbody = document.getElementById("dowTableBody");
  if (!tbody) return;

  // 최고 평균 매출 요일 찾기
  const maxAvg = Math.max(...dowAverages.map(d => d.average_revenue));

  tbody.innerHTML = "";

  dowAverages.forEach(d => {
    const isTop = d.average_revenue === maxAvg;
    const isWeekend = d.day_of_week === "토" || d.day_of_week === "일";
    const sharePercent = ((d.total_revenue / grandTotal) * 100).toFixed(1);

    const tr = document.createElement("tr");
    if (isTop) tr.classList.add("row-highlight");

    tr.innerHTML = `
      <td class="cell-day">
        <span class="day-badge ${isWeekend ? 'weekend' : 'weekday'}">${d.day_of_week}요일</span>
        <span class="day-cn">(${d.day_of_week_cn})</span>
        ${isTop ? '<span class="badge-best">최고 매출 ★ / 销冠 ★</span>' : ''}
      </td>
      <td class="text-center">${d.count}일 (${d.count}天)</td>
      <td class="text-right font-medium">${formatCurrency(d.total_revenue)}</td>
      <td class="text-right font-bold ${isTop ? 'text-primary' : ''}">
        ${formatCurrency(d.average_revenue)}
      </td>
      <td class="cell-share">
        <div class="share-wrapper">
          <div class="share-bar-bg">
            <div class="share-bar-fill" style="width: ${sharePercent * 5}%"></div>
          </div>
          <span class="share-text">${sharePercent}%</span>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}
