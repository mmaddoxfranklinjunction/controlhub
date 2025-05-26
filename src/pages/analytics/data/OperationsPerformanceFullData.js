// Summary data for the top bar
export const summaryMetrics = {
  percentCancellations: 6.4,
  cancellations: 606,
  percentAvoidableCancellations: 5.0,
  avoidableCancellations: 473,
  downtimePercent: 1.9,
  totalErrors: 487,
  errorRate: 5.5,
  errorCharges: 6219,
  errorChargesPercent: 2.5,
  downtime: '1539h 16m'
};

// Avoidable Cancellation Rate Details table
export const avoidableCancellations = [
  { merchantStoreId: 'MEL0001', cancel: 38, percent: 59.4 },
  { merchantStoreId: 'DEN9644', cancel: 25, percent: 31.3 },
  { merchantStoreId: 'WLE0002', cancel: 22, percent: 78.6 },
  { merchantStoreId: 'DEN7872', cancel: 20, percent: 13.1 },
  { merchantStoreId: 'FRS204',  cancel: 20, percent: 100.0 },
  { merchantStoreId: 'FRS0040', cancel: 18, percent: 100.0 },
  // ...add more as needed
];

// Error Rate Details table
export const errorRateDetails = [
  { merchantStoreId: 'BDP0003', totalErrors: 26, percent: 15.7 },
  { merchantStoreId: 'DEN9002', totalErrors: 24, percent: 4.1 },
  { merchantStoreId: 'VIS0001', totalErrors: 21, percent: 12.2 },
  { merchantStoreId: 'MIL0003', totalErrors: 16, percent: 40.0 },
  { merchantStoreId: 'DEN7863', totalErrors: 15, percent: 12.8 },
  { merchantStoreId: 'EXP4096', totalErrors: 15, percent: 6.8 },
  { merchantStoreId: 'DEN7872', totalErrors: 12, percent: 9.3 },
  { merchantStoreId: 'OHC0001', totalErrors: 12, percent: 1.6 },
  { merchantStoreId: 'DEN8874', totalErrors: 11, percent: 12.2 },
  { merchantStoreId: 'GAD1655', totalErrors: 11, percent: 1.6 },
  // ...add more as needed
];

// Downtime by Store Details table
export const downtimeDetails = [
  { storeName: "Effin Egg (452 N Thompson Ln)", downtimePercent: 96.8 },
  { storeName: "Tori-Yoshi Japanese Fried Chicken - DEN7869", downtimePercent: 94.3 },
  { storeName: "Scooped Cookie Dough Bar - MIL0004", downtimePercent: 93.2 },
  { storeName: "Nathan's Famous (1245 W Desert - Yuma)", downtimePercent: 91.9 },
  { storeName: "Freebyrd Chicken - SOL0001 (W Broadway Rd)", downtimePercent: 73.9 },
  // ...add more as needed
];
