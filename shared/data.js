/*
 * THE NET PHANTOM — single source of truth for all three screens.
 * Plain script (not an ES module) so every page works by double-clicking the HTML file.
 * Every number shown on a screen comes from here, so the screens stay consistent with each other
 * and with the PSA script (KMPU3432 Assignment 2).
 */
window.PHANTOM = {
  // Screen 1 — Trading app (YH / SWK). Account state is the same as the auditor's view.
  trade: {
    today: "2026-11-26",
    account: {
      cashBefore: 4812.37,     // savings before the leveraged trade
      cashAfter: 10.01         // BALANCE: RM 10.01 after forced liquidation
    },
    // Stock A: the one YH started with. Ran up a lot; YH's first trade closed at +28%.
    stocks: {
      "KLX-TECH": {
        name: "KLX Technologies Bhd",
        prevClose: 3.94, dayHigh: 4.31, dayLow: 3.88, volume: "18.4M",
        marketCapRM: "2.1B", sector: "Software & Services",
        series: { start: 0.92, end: 4.20, days: 180, noise: 0.025 },
        orders: [
          { day: 150, side: "BUY",  qty: 500, price: 3.28, note: "Filled", tag: "YH" },
          { day: 170, side: "SELL", qty: 500, price: 4.20, note: "Filled — +28.0%", tag: "YH" }
        ],
        news: [
          { t: "Analyst upgrade: target raised after strong quarterly bookings" },
          { t: "KLX-TECH up over 300% in six months, volume surges" }
        ]
      },
      // Stock B: the "potential stock" YH pushed to SWK. Surging now, then the crash.
      "VRTX-NX": {
        name: "Vertex NX Holdings",
        prevClose: 6.40, dayHigh: 6.52, dayLow: 6.10, volume: "41.7M",
        marketCapRM: "860M", sector: "Fintech",
        series: { start: 1.85, end: 6.40, days: 180, noise: 0.04, crashFrom: 174, crashTo: 3.10 },
        orders: [
          { day: 174, side: "BUY",  qty: 12500, price: 6.40, note: "Filled — x10 margin", tag: "YH / SWK", leverage: 10 },
          { day: 179, side: "SYS",  qty: 12500, price: 3.10, note: "FORCED LIQUIDATION (margin call)", tag: "System" }
        ],
        news: [
          { t: "Unusual volume: 7 consecutive sessions of gains" },
          { t: "Board: no material announcement" }
        ]
      },
      "BRGN-MY": { name: "Borneo Green Energy", prevClose: 1.12, dayHigh: 1.15, dayLow: 1.08, volume: "3.2M", marketCapRM: "540M", sector: "Energy", series: { start: 1.30, end: 1.12, days: 180, noise: 0.02 }, orders: [], news: [] },
      "SNTL-SG": { name: "Sentinel Logistics", prevClose: 0.74, dayHigh: 0.76, dayLow: 0.72, volume: "9.9M", marketCapRM: "310M", sector: "Logistics", series: { start: 0.80, end: 0.74, days: 180, noise: 0.03 }, orders: [], news: [] },
      "AQRA-MY": { name: "Aqra Health Tech", prevClose: 2.55, dayHigh: 2.60, dayLow: 2.49, volume: "1.4M", marketCapRM: "720M", sector: "Healthcare", series: { start: 2.40, end: 2.55, days: 180, noise: 0.02 }, orders: [], news: [] }
    },
    // Messages from YH to SWK (work chat on the secondary laptop)
    messages: [
      { from: "YH", time: "09:14", text: "KLX-TECH was 3.28 when I got in. Sold at 4.20. +28%. Told you." },
      { from: "YH", time: "23:41", text: "Check VRTX-NX on the 6M chart. Now is the perfect entry window!" },
      { from: "YH", time: "23:43", text: "Guaranteed profit, brother. If we take high leverage we can easily pocket a clean RM 80,000. Trust me on this one!" }
    ]
  },

  // Screen 2 — Logic implant console (settlement script / rounding deduction)
  settlement: {
    txRef: "#99021",
    deductionRM: 0.01,        // -RM 0.01 (1 sen) per transaction
    status: "SETTLED",
    day2MorningRM: 1482.63,   // DAY 2 - MORNING SETTLEMENT: +RM 1,482.63
    month2AccumulatedRM: 192833.92, // MONTH 2 - ACCUMULATED DIVERSION: +RM 192,833.92
    dailyTransactions: 150000
  },

  // Screen 3 — Auditor / funds view (JX, CCID, PDRM)
  audit: {
    periodDays: 60,
    totalSiphonedRM: 250118.44,
    workstation: "115F",
    macAddress: "00-1A-2B-3C-4D-5E", // placeholder deployment MAC for the prop
    investigators: ["VT — CCID Commercial Crime Investigator", "YS — CCID Commercial Crime Investigator"],
    badgesRevoked: 2
  },

  messages: {
    callToAction: "Never abuse your technical access or conceal system errors. Every action leaves a trace.",
    closing: "Integrity in the workplace is non-negotiable — the smallest compromise carries the highest price."
  }
};
