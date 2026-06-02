---
title: "Four ways to ride BTC trend"
date: "2026-02-20"
summary: "EMA, crossover, breakout, and a sentiment hybrid — four trend-following variants tested side by side against buy-and-hold and DCA on Bitcoin."
tags: ["crypto", "btc", "trend-following"]
---

Bitcoin is the simplest possible trend-following testbed: one asset, one
time series, no universe selection problem. Which means it's a good place
to ask the basic question — *which trend rule is least bad?*

We ran four variants of a long-only BTC trend strategy and compared them
to buy-and-hold and dollar-cost averaging, all with the same $50,000
starting capital and 0.6% fee per trade.

## The four variants

- **EMA cross**: long when price > EMA(N), flat otherwise. Slow EMAs reduce
  whipsaw, fast EMAs catch turns earlier.
- **Crossover**: long when short-EMA > long-EMA, flat on reverse. Classic
  two-line system.
- **Breakout**: long when price prints a new N-day high, flat on N-day low.
  Donchian-style.
- **Sentiment hybrid**: trend rule gated by an off-chain sentiment signal —
  long only when trend agrees with sentiment.

## What we learned

Three things, in rough order of importance:

**1. Buy-and-hold is hard to beat on raw return.** BTC's long-run uptrend
means any time you're flat, you're paying opportunity cost. Most trend
rules lag buy-and-hold on cumulative return — that's the price of
drawdown protection.

**2. Trend rules earn their keep on drawdown, not return.** The point of
trend-following isn't to outperform — it's to sidestep the worst
drawdowns. Sharpe ratios for the trend variants beat both buy-and-hold
and DCA, because the denominator (volatility) is meaningfully lower.

**3. Fee drag is the silent killer.** A trend rule that fires 200 times a
year at 0.6% per trade burns 120% of capital in fees. Even a small fee
structure (say 0.1%) eats most of the trend premium on rules that retrade
frequently. Weekly checks, not daily, are the right cadence for most of
these variants.

## What we run

The book uses a slow EMA cross on a weekly rebalance cadence. Not because
it's the highest-returning variant in the sweep — it isn't — but because
it has the cleanest tradeoff between trade count and drawdown.

The sentiment hybrid was the most interesting variant in research but
didn't survive walk-forward testing — the sentiment signal helped in some
regimes and hurt in others, with no consistent edge. It's not in the book.

This is a recurring pattern: in-sample, complexity helps. Out-of-sample,
complexity is a tax. The simple rule survives more often than not.
