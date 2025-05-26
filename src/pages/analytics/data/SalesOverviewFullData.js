// SalesOverviewFullData.js

// Sales line chart data for current period
export const salesCurrent = [
  { date: '01-May', sales: 13274 },
  { date: '02-May', sales: 14582 },
  { date: '03-May', sales: 16174 },
  { date: '04-May', sales: 16964 },
  { date: '05-May', sales: 10499 },
  { date: '06-May', sales: 10956 },
  { date: '07-May', sales: 12512 },
  { date: '08-May', sales: 12630 },
  { date: '09-May', sales: 14629 }
];

// Previous month
export const salesPrevious = [
  { date: '01-Apr', sales: 18893 },
  { date: '02-Apr', sales: 20873 },
  { date: '03-Apr', sales: 23125 },
  { date: '04-Apr', sales: 27004 },
  { date: '05-Apr', sales: 27491 },
  { date: '06-Apr', sales: 27446 },
  { date: '07-Apr', sales: 18586 },
  { date: '08-Apr', sales: 20117 },
  { date: '09-Apr', sales: 18993 }
];

// Summary by Location table data
export const summaryByLocation = [
  { location: "OHC0001-Woodstock", sales: 27314, orders: 741, pct: 11.2, aov: 37 },
  { location: "GAD1655-Duluth", sales: 21258, orders: 766, pct: 8.7, aov: 28 },
  { location: "DEN9002-Anchorage", sales: 15762, orders: 587, pct: 6.5, aov: 27 },
  { location: "MKT0001-andmarket", sales: 13886, orders: 290, pct: 5.7, aov: 48 },
  { location: "EXP4096-Huntington Park", sales: 7770, orders: 219, pct: 3.2, aov: 35 },
  { location: "EXP0004-Toronto", sales: 6418, orders: 146, pct: 2.6, aov: 44 },
  { location: "DEN1563-Honolulu", sales: 5126, orders: 159, pct: 2.1, aov: 32 },
  { location: "OHC0002-Sandy Springs", sales: 5122, orders: 148, pct: 2.1, aov: 35 },
  { location: "VIS0001-Reno", sales: 4127, orders: 172, pct: 1.7, aov: 24 },
  { location: "BDP0003-Downtown (Salt Lake)", sales: 3610, orders: 166, pct: 1.5, aov: 22 },
  { location: "DEN3006-Kapolei", sales: 3478, orders: 118, pct: 1.4, aov: 29 },
  { location: "DEN7587-Palm Springs", sales: 3185, orders: 130, pct: 1.3, aov: 24 }
];

// Grand totals (can be computed or hard-coded)
export const summaryTotals = {
  sales: 244286,
  orders: 8914,
  pct: 100.0,
  aov: 27
};
