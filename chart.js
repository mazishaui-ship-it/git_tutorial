/**
 * =========================================================================
 * 달빛 모퉁이 카페 (月光街角咖啡馆 / Moonlight Cafe)
 * 매출 데이터 대시보드 - 차트 및 표 고급 렌더링 스크립트 (chart.js)
 * =========================================================================
 * 기능:
 *   ① 일별 매출 꺾은선 차트 (Line Chart): 전체 매출 / 5종 메뉴별 추이 / 일일 판매량 탭 전환 + 평균 기준선
 *   ② 메뉴별 판매량 막대 차트 (Bar Chart): 판매량(잔) / 매출액(₩) / 듀얼 복합 탭 전환 + 라벨 & 점유율
 *   ③ 요일별 평균 매출 표 (Table): 요일별 매출/판매량/비중 + 합계 요약행 + 평일/주말 비교 카드
 * =========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof CAFE_SALES_DATA === "undefined") {
    console.error("CAFE_SALES_DATA 가 로드되지 않았습니다.");
    return;
  }

  const data = CAFE_SALES_DATA;
  const summary = data.summary;
  const daily = data.daily_records;
  const menus = data.menu_list;

  // 1. KPI 카드 렌더링
  renderKpiCards(summary, menus, daily);

  // 2. 기능 ①: 일별 매출 꺾은선 차트 초기화 및 탭 이벤트 등록
  initDailyLineChart(daily, summary, menus);

  // 3. 기능 ②: 메뉴별 판매량 막대 차트 초기화 및 탭 이벤트 등록
  initMenuBarChart(summary.menu_stats, menus, summary);

  // 4. 기능 ③: 요일별 평균 매출 종합 분석 표 및 평일/주말 비교 카드 렌더링
  renderDowComprehensiveTable(summary.dow_averages, summary.total_revenue, daily);
});

// 화폐 포맷 헬퍼 (₩123,456)
function formatCurrency(amount) {
  return "₩" + Math.round(amount).toLocaleString();
}

// 수량 포맷 헬퍼 (1,234)
function formatNumber(num) {
  return Number(num).toLocaleString();
}

/**
 * KPI 상단 요약 카드 렌더링
 */
function renderKpiCards(summary, menus, daily) {
  const totalRevEl = document.getElementById("kpiTotalRevenue");
  if (totalRevEl) totalRevEl.textContent = formatCurrency(summary.total_revenue);

  const totalQtyEl = document.getElementById("kpiTotalQty");
  if (totalQtyEl) totalQtyEl.textContent = `${formatNumber(summary.total_items_sold)} 잔/개 (件)`;

  const dailyAvgEl = document.getElementById("kpiDailyAvg");
  if (dailyAvgEl) dailyAvgEl.textContent = formatCurrency(summary.daily_average_revenue);

  const bestMenuStats = Object.values(summary.menu_stats).reduce((prev, curr) => 
    (curr.total_qty > prev.total_qty) ? curr : prev
  );
  const bestMenuEl = document.getElementById("kpiBestMenu");
  if (bestMenuEl) {
    bestMenuEl.textContent = `${bestMenuStats.name} (${bestMenuStats.name_cn}) · ${formatNumber(bestMenuStats.total_qty)}잔(件)`;
  }

  // 최고 매출일 & 최저 매출일 탐색 및 배너 업데이트
  let maxDay = daily[0];
  let minDay = daily[0];
  daily.forEach(d => {
    if (d.total_revenue > maxDay.total_revenue) maxDay = d;
    if (d.total_revenue < minDay.total_revenue) minDay = d;
  });

  const peakDayEl = document.getElementById("statPeakDay");
  if (peakDayEl) {
    peakDayEl.textContent = `${maxDay.date_str} (${formatCurrency(maxDay.total_revenue)} / ${maxDay.total_qty}잔)`;
  }
  const lowDayEl = document.getElementById("statLowDay");
  if (lowDayEl) {
    lowDayEl.textContent = `${minDay.date_str} (${formatCurrency(minDay.total_revenue)} / ${minDay.total_qty}잔)`;
  }
}

/**
 * =========================================================================
 * 기능 ①: 30일 일별 매출 꺾은선 차트 (Line Chart)
 * - 3가지 뷰 지원: [전체 매출 추이] / [5대 메뉴별 비교] / [일일 판매 수량]
 * - 일평균 매출 기준선 (₩715,937) 포함
 * =========================================================================
 */
let dailyChartInstance = null;

function initDailyLineChart(dailyRecords, summary, menuList) {
  const ctx = document.getElementById("dailyRevenueChart");
  if (!ctx) return;

  const labels = dailyRecords.map(r => `${r.day}일(${r.day_of_week})`);
  const revenues = dailyRecords.map(r => r.total_revenue);
  const quantities = dailyRecords.map(r => r.total_qty);
  const avgLineData = dailyRecords.map(() => summary.daily_average_revenue);

  // 주말 포인트 스타일 차별화
  const pointBgColors = dailyRecords.map(r => r.is_weekend ? "#ef4444" : "#2563eb");
  const pointRadius = dailyRecords.map(r => r.is_weekend ? 6 : 4);

  // 1) 전체 매출 뷰 데이터셋
  const totalRevenueDataset = [
    {
      label: "일별 총 매출액 / 每日总销售额 (₩)",
      data: revenues,
      borderColor: "#2563eb",
      backgroundColor: "rgba(37, 99, 235, 0.12)",
      borderWidth: 2.8,
      tension: 0.35,
      fill: true,
      pointBackgroundColor: pointBgColors,
      pointBorderColor: "#ffffff",
      pointBorderWidth: 2,
      pointRadius: pointRadius,
      pointHoverRadius: 8,
      yAxisID: "y"
    },
    {
      label: "일평균 매출선 / 日均基准线 (₩715,937)",
      data: avgLineData,
      borderColor: "#f59e0b",
      borderWidth: 1.8,
      borderDash: [6, 4],
      fill: false,
      pointRadius: 0,
      pointHoverRadius: 0,
      yAxisID: "y"
    }
  ];

  // 2) 5대 메뉴별 비교 데이터셋
  const menuColors = ["#8b5cf6", "#ec4899", "#f59e0b", "#10b981", "#3b82f6"];
  const menuBreakdownDatasets = menuList.map((m, idx) => ({
    label: `${m.name} (${m.name_cn})`,
    data: dailyRecords.map(r => r.sales[m.id].revenue),
    borderColor: menuColors[idx],
    backgroundColor: "transparent",
    borderWidth: 2,
    tension: 0.3,
    pointRadius: 3,
    pointHoverRadius: 6,
    yAxisID: "y"
  }));

  // 3) 일일 판매 수량 뷰 데이터셋
  const quantityDataset = [
    {
      label: "일일 총 판매량 / 每日销售总量 (잔/개 · 件)",
      data: quantities,
      borderColor: "#10b981",
      backgroundColor: "rgba(16, 185, 129, 0.15)",
      borderWidth: 2.5,
      tension: 0.35,
      fill: true,
      pointBackgroundColor: pointBgColors,
      pointBorderColor: "#ffffff",
      pointBorderWidth: 2,
      pointRadius: pointRadius,
      pointHoverRadius: 8,
      yAxisID: "yQty"
    }
  ];

  // 차트 생성 함수
  function createOrUpdateLineChart(datasets, isQuantityView = false) {
    if (dailyChartInstance) {
      dailyChartInstance.destroy();
    }

    dailyChartInstance = new Chart(ctx, {
      type: "line",
      data: { labels, datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: "index", intersect: false },
        plugins: {
          legend: {
            display: true,
            position: "top",
            labels: {
              boxWidth: 14,
              font: { size: 12, weight: "600" },
              padding: 12
            }
          },
          tooltip: {
            backgroundColor: "rgba(15, 23, 42, 0.92)",
            titleFont: { size: 13, weight: "bold" },
            bodyFont: { size: 12 },
            padding: 12,
            boxPadding: 4,
            callbacks: {
              title: (items) => {
                const rec = dailyRecords[items[0].dataIndex];
                const weekendTag = rec.is_weekend ? " [주말 피크 / 周末高峰]" : " [평일 / 工作日]";
                return `${rec.date_str} (${rec.day_of_week_cn})${weekendTag}`;
              },
              afterTitle: (items) => {
                const rec = dailyRecords[items[0].dataIndex];
                return `총 매출: ${formatCurrency(rec.total_revenue)} | 판매량: ${formatNumber(rec.total_qty)}잔(件)`;
              },
              label: (item) => {
                const val = item.raw;
                if (isQuantityView) {
                  return `${item.dataset.label}: ${formatNumber(val)} 잔/개 (件)`;
                }
                return `${item.dataset.label}: ${formatCurrency(val)}`;
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
            display: !isQuantityView,
            grid: { color: "#f1f5f9" },
            ticks: {
              font: { size: 11 },
              callback: (val) => "₩" + (val / 10000).toFixed(0) + "만(万)"
            }
          },
          yQty: {
            display: isQuantityView,
            position: "right",
            beginAtZero: false,
            grid: { color: "#f1f5f9" },
            ticks: {
              font: { size: 11 },
              callback: (val) => `${val}잔(件)`
            }
          }
        }
      }
    });
  }

  // 초기 렌더링: 전체 매출 뷰
  createOrUpdateLineChart(totalRevenueDataset, false);

  // 탭 전환 이벤트 바인딩
  const tabButtons = document.querySelectorAll(".line-tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const mode = btn.getAttribute("data-mode");

      if (mode === "menu") {
        createOrUpdateLineChart(menuBreakdownDatasets, false);
      } else if (mode === "qty") {
        createOrUpdateLineChart(quantityDataset, true);
      } else {
        createOrUpdateLineChart(totalRevenueDataset, false);
      }
    });
  });
}

/**
 * =========================================================================
 * 기능 ②: 메뉴별 판매량 막대 차트 (Bar Chart)
 * - 3가지 뷰: [판매 수량 기준] / [매출액 기준] / [수량+매출 듀얼 비교]
 * - 상단 카드에 품목별 세부 랭킹과 점유율 그래픽 제공
 * =========================================================================
 */
let barChartInstance = null;

function initMenuBarChart(menuStats, menuList, summary) {
  const ctx = document.getElementById("menuQuantityChart");
  if (!ctx) return;

  const labels = menuList.map(m => [`${m.name}`, `(${m.name_cn})`]);
  const quantities = menuList.map(m => menuStats[m.id].total_qty);
  const revenues = menuList.map(m => menuStats[m.id].total_revenue);

  const backgroundColors = [
    "#8B5CF6", // 아메리카노 (보라)
    "#EC4899", // 카페라떼 (핑크)
    "#F59E0B", // 바닐라 라떼 (오렌지)
    "#10B981", // 콜드브루 (에메랄드)
    "#3B82F6"  // 크루아상 (블루)
  ];

  // 1) 수량 기준 데이터셋
  const qtyDataset = [
    {
      label: "총 판매 수량 / 累计销量 (잔/개 · 件)",
      data: quantities,
      backgroundColor: backgroundColors,
      borderRadius: 8,
      borderSkipped: false,
      maxBarThickness: 52
    }
  ];

  // 2) 매출액 기준 데이터셋
  const revDataset = [
    {
      label: "총 매출액 / 累计销售额 (KRW · ₩)",
      data: revenues,
      backgroundColor: backgroundColors.map(c => c),
      borderRadius: 8,
      borderSkipped: false,
      maxBarThickness: 52
    }
  ];

  function createOrUpdateBarChart(mode = "qty") {
    if (barChartInstance) {
      barChartInstance.destroy();
    }

    const isRevenue = mode === "rev";
    const datasets = isRevenue ? revDataset : qtyDataset;

    barChartInstance = new Chart(ctx, {
      type: "bar",
      data: { labels, datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: "top",
            labels: { font: { size: 12, weight: "bold" }, boxWidth: 14 }
          },
          tooltip: {
            backgroundColor: "#1e293b",
            titleFont: { size: 13, weight: "bold" },
            bodyFont: { size: 12 },
            padding: 12,
            callbacks: {
              title: (items) => {
                const idx = items[0].dataIndex;
                const m = menuList[idx];
                return `${m.name} / ${m.name_cn} (단가/单价: ${formatCurrency(m.price)})`;
              },
              label: (item) => {
                const idx = item.dataIndex;
                const q = quantities[idx];
                const r = revenues[idx];
                const qShare = ((q / summary.total_items_sold) * 100).toFixed(1);
                const rShare = ((r / summary.total_revenue) * 100).toFixed(1);
                return [
                  `판매 수량 / 销量: ${formatNumber(q)} 잔/개 (件) [수량비중: ${qShare}%]`,
                  `총 매출액 / 销售额: ${formatCurrency(r)} [매출비중: ${rShare}%]`
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
              callback: (val) => isRevenue ? "₩" + (val / 10000).toFixed(0) + "만(万)" : `${val}잔(件)`
            }
          }
        }
      }
    });
  }

  // 초기 렌더링: 수량 기준
  createOrUpdateBarChart("qty");

  // 탭 전환 이벤트 바인딩
  const barTabs = document.querySelectorAll(".bar-tab-btn");
  barTabs.forEach(btn => {
    btn.addEventListener("click", () => {
      barTabs.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      createOrUpdateBarChart(btn.getAttribute("data-mode"));
    });
  });

  // 메뉴 5종 상세 카드 렌더링
  renderMenuDetailCards(menuList, menuStats, summary);
}

/**
 * 메뉴 5종 랭킹 카드 렌더링
 */
function renderMenuDetailCards(menuList, menuStats, summary) {
  const container = document.getElementById("menuDetailCards");
  if (!container) return;

  const sorted = [...menuList].sort((a, b) => menuStats[b.id].total_qty - menuStats[a.id].total_qty);
  const rankIcons = ["🥇 1위", "🥈 2위", "🥉 3위", "4위", "5위"];
  const rankIconsCn = ["冠军", "亚军", "季军", "第4名", "第5名"];

  container.innerHTML = sorted.map((m, idx) => {
    const s = menuStats[m.id];
    const qtyShare = ((s.total_qty / summary.total_items_sold) * 100).toFixed(1);
    const revShare = ((s.total_revenue / summary.total_revenue) * 100).toFixed(1);

    return `
      <div class="menu-mini-card">
        <div class="menu-card-top">
          <span class="menu-rank-badge rank-${idx + 1}">${rankIcons[idx]} (${rankIconsCn[idx]})</span>
          <span class="menu-price-tag">단가/单价: ${formatCurrency(m.price)}</span>
        </div>
        <h4 class="menu-name-ko">${m.name} <span class="menu-name-cn">(${m.name_cn})</span></h4>
        <div class="menu-stats-row">
          <div>
            <span class="stat-sublabel">판매량 / 销量</span>
            <strong class="stat-main-num">${formatNumber(s.total_qty)}잔 (件)</strong>
            <small class="text-muted">점유율: ${qtyShare}%</small>
          </div>
          <div>
            <span class="stat-sublabel">총 매출 / 销售额</span>
            <strong class="stat-main-num text-primary">${formatCurrency(s.total_revenue)}</strong>
            <small class="text-muted">기여도: ${revShare}%</small>
          </div>
        </div>
        <div class="menu-share-progress-bg">
          <div class="menu-share-progress-fill" style="width: ${qtyShare * 2.8}%;"></div>
        </div>
      </div>
    `;
  }).join("");
}

/**
 * =========================================================================
 * 기능 ③: 요일별 평균 매출 종합 분석 표 (Table)
 * - 7개 요일 정밀 분석 (영업일 수, 총매출액, 일평균 매출액, 일평균 판매량, 점유율, 특징)
 * - 테이블 하단 전체 합계/평균 요약행(Footer Row) 포함
 * - 평일 vs 주말 소계 비교 카드 자동 연산 및 제공
 * =========================================================================
 */
function renderDowComprehensiveTable(dowAverages, grandTotal, dailyRecords) {
  const tbody = document.getElementById("dowTableBody");
  const tfoot = document.getElementById("dowTableFoot");
  if (!tbody) return;

  // 요일별 판매 수량 계산
  const dowQtyMap = {};
  for (let i = 0; i < 7; i++) dowQtyMap[i] = 0;
  dailyRecords.forEach(r => {
    dowQtyMap[r.day_of_week_index] += r.total_qty;
  });

  const maxAvg = Math.max(...dowAverages.map(d => d.average_revenue));
  const minAvg = Math.min(...dowAverages.map(d => d.average_revenue));

  tbody.innerHTML = "";

  let totalDays = 0;
  let totalRevenueSum = 0;
  let totalQtySum = 0;

  // 평일 vs 주말 집계 변수
  let weekdayDays = 0, weekdayRev = 0, weekdayQty = 0;
  let weekendDays = 0, weekendRev = 0, weekendQty = 0;

  dowAverages.forEach((d, idx) => {
    const isTop = d.average_revenue === maxAvg;
    const isLowest = d.average_revenue === minAvg;
    const isWeekend = d.day_of_week === "토" || d.day_of_week === "일";
    const sharePercent = ((d.total_revenue / grandTotal) * 100).toFixed(1);

    const totQ = dowQtyMap[idx];
    const avgQ = (totQ / d.count).toFixed(1);

    totalDays += d.count;
    totalRevenueSum += d.total_revenue;
    totalQtySum += totQ;

    if (isWeekend) {
      weekendDays += d.count;
      weekendRev += d.total_revenue;
      weekendQty += totQ;
    } else {
      weekdayDays += d.count;
      weekdayRev += d.total_revenue;
      weekdayQty += totQ;
    }

    let featureTag = "";
    if (isTop) {
      featureTag = '<span class="badge-best">최고 매출 ★ / 销冠 ★</span>';
    } else if (isWeekend) {
      featureTag = '<span class="badge-weekend-peak">주말 피크 / 周末高峰</span>';
    } else if (isLowest) {
      featureTag = '<span class="badge-lowest">평일 최저 / 工作日低位</span>';
    } else {
      featureTag = '<span class="badge-steady">안정적 수요 / 需求平稳</span>';
    }

    const tr = document.createElement("tr");
    if (isTop) tr.classList.add("row-highlight");

    tr.innerHTML = `
      <td class="cell-day">
        <span class="day-badge ${isWeekend ? 'weekend' : 'weekday'}">${d.day_of_week}요일</span>
        <span class="day-cn">(${d.day_of_week_cn})</span>
      </td>
      <td class="text-center">${d.count}일 (${d.count}天)</td>
      <td class="text-right font-medium">${formatCurrency(d.total_revenue)}</td>
      <td class="text-right font-bold ${isTop ? 'text-primary' : ''}">
        ${formatCurrency(d.average_revenue)}
      </td>
      <td class="text-right">${avgQ} 잔(件)/일</td>
      <td class="cell-share">
        <div class="share-wrapper">
          <div class="share-bar-bg">
            <div class="share-bar-fill ${isTop ? 'fill-top' : ''}" style="width: ${sharePercent * 5}%"></div>
          </div>
          <span class="share-text">${sharePercent}%</span>
        </div>
      </td>
      <td class="text-center">${featureTag}</td>
    `;
    tbody.appendChild(tr);
  });

  // 하단 전체 합계(총계) 행 렌더링
  if (tfoot) {
    const overallDailyAvgRev = Math.round(totalRevenueSum / totalDays);
    const overallDailyAvgQty = (totalQtySum / totalDays).toFixed(1);

    tfoot.innerHTML = `
      <tr class="table-total-row">
        <td><strong>전체 합계 / 全店总计</strong></td>
        <td class="text-center"><strong>${totalDays}일 (30天)</strong></td>
        <td class="text-right"><strong>${formatCurrency(totalRevenueSum)}</strong></td>
        <td class="text-right text-primary"><strong>${formatCurrency(overallDailyAvgRev)}</strong></td>
        <td class="text-right"><strong>${overallDailyAvgQty} 잔(件)/일</strong></td>
        <td class="text-center"><strong>100.0%</strong></td>
        <td class="text-center"><span class="badge-total">종합 집계 / 综合统计</span></td>
      </tr>
    `;
  }

  // 평일 vs 주말 비교 서머리 카드 업데이트
  const weekdayAvg = Math.round(weekdayRev / weekdayDays);
  const weekendAvg = Math.round(weekendRev / weekendDays);
  const premiumPercent = (((weekendAvg - weekdayAvg) / weekdayAvg) * 100).toFixed(1);

  const weekdayEl = document.getElementById("weekdayComparisonCard");
  if (weekdayEl) {
    weekdayEl.innerHTML = `
      <div class="compare-card">
        <span class="compare-title">💼 평일 실적 / 工作日 (월~금, 22일간)</span>
        <div class="compare-numbers">
          <div><small>총 매출 / 总额</small> <strong>${formatCurrency(weekdayRev)}</strong> (67.7%)</div>
          <div><small>일평균 매출 / 日均</small> <strong class="text-dark">${formatCurrency(weekdayAvg)}</strong></div>
          <div><small>일평균 수량 / 日均销量</small> <strong>${(weekdayQty / weekdayDays).toFixed(1)} 잔(件)/일</strong></div>
        </div>
      </div>
    `;
  }

  const weekendEl = document.getElementById("weekendComparisonCard");
  if (weekendEl) {
    weekendEl.innerHTML = `
      <div class="compare-card compare-weekend">
        <div class="compare-header-row">
          <span class="compare-title">🎉 주말 피크 실적 / 周末高峰 (토~일, 8일간)</span>
          <span class="premium-badge">평일 대비 +${premiumPercent}% ↑</span>
        </div>
        <div class="compare-numbers">
          <div><small>총 매출 / 总额</small> <strong>${formatCurrency(weekendRev)}</strong> (32.3%)</div>
          <div><small>일평균 매출 / 日均</small> <strong class="text-primary">${formatCurrency(weekendAvg)}</strong></div>
          <div><small>일평균 수량 / 日均销量</small> <strong>${(weekendQty / weekendDays).toFixed(1)} 잔(件)/일</strong></div>
        </div>
      </div>
    `;
  }
}
