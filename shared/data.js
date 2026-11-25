/*
 * THE NET PHANTOM — single source of truth for all three screens.
 * Plain script (not an ES module) so every page works by double-clicking the HTML file.
 * Every number shown on a screen comes from here, so the screens stay consistent with each other
 * and with the PSA script (KMPU3432 Assignment 2).
 */
window.PHANTOM = {
  scenes: {
    workstation: "WORKSTATION 115F",
    trader: "YH / SWK",
    manager: "CV (TECHNICAL LEAD)",
    auditor: "JX (INTERNAL FORENSIC AUDITOR)"
  },

  // Screen 1 — Stock / trading terminal (YH & SWK)
  trade: {
    symbol: "KLX-TECH",
    entryPrice: 4.20,
    profitPct: 28,
    profitRM: 80000,          // "clean RM 80,000" target from the script
    leverage: 10,
    marginCallPrice: 3.10,
    balanceBefore: 4812.37,   // savings before the leveraged trades
    balanceAfter: 10.01       // BALANCE: RM 10.01 after forced liquidation
  },

  // Screen 2 — Logic implant console (settlement script / rounding deduction)
  settlement: {
    txRef: "#99021",
    deductionRM: 0.01,        // -RM 0.01 (1 sen) per transaction
    status: "SETTLED",
    dayOneNote: "1 sen from a live customer account",
    day2MorningRM: 1482.63,   // DAY 2 - MORNING SETTLEMENT: +RM 1,482.63
    month2AccumulatedRM: 192833.92, // MONTH 2 - ACCUMULATED DIVERSION: +RM 192,833.92
    dailyTransactions: 150000 // "hundreds of thousands" of transactions per day (scaled for display)
  },

  // Screen 3 — Auditor / funds view (JX, CCID, PDRM)
  audit: {
    periodDays: 60,           // "over the past two months"
    totalSiphonedRM: 250118.44, // "around RM 250k"
    flaggedRowsDisplay: 4,
    workstation: "115F",
    macAddress: "00-1A-2B-3C-4D-5E", // placeholder deployment MAC for the prop
    reportLodged: "PDRM — Royal Malaysia Police",
    investigators: ["VT — CCID Commercial Crime Investigator", "YS — CCID Commercial Crime Investigator"],
    badgesRevoked: 2
  },

  messages: {
    callToAction: "Never abuse your technical access or conceal system errors. Every action leaves a trace.",
    closing: "Integrity in the workplace is non-negotiable — the smallest compromise carries the highest price."
  }
};
