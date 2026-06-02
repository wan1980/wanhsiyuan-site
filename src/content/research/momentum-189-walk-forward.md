---
title: "Momentum-189: when walk-forward beats overfitting"
date: "2026-03-15"
summary: "A 189-day lookback, top-10 momentum strategy posts a 1.55 Sharpe across two years of equities — and survives the only test that matters."
tags: ["equities", "momentum", "walk-forward"]
---

Most momentum strategies look great in a backtest and break the moment they meet
new data. The interesting question isn't *did it beat SPY in-sample* — almost
anything can be tuned to do that — but *does the same signal still work when you
hold the parameters fixed and walk it forward through time*.

That's the test we ran on a long-only momentum strategy across ~990 tickers
(S&P 500 plus a wider universe). The strategy ranks every stock by 189-day
total return, holds the top 10 in equal weight, rebalances weekly with a 20%
drift threshold, and pays 0.6% in fees per trade.

## Headline numbers (Feb 2024 – Mar 2026)

| Metric            | Momentum-189 | SPY    |
| ----------------- | ------------ | ------ |
| Total return      | **+319%**    | +32%   |
| Sharpe ratio      | **1.55**     | ~0.90  |
| Max drawdown      | -41%         | -10%   |

The drawdown is real and it matters — pure momentum is a high-volatility
trade. We get to a better risk/reward by blending momentum with broader
exposure ([covered in a separate post](/research/60-40-blend)). But the
raw signal works.

## The test that matters: parameter robustness

A single backtest is a single roll of the dice. A fine sweep is 128 rolls.

We swept the lookback (40-day to 252-day), the top-N (5 to 50), and the
rebalance threshold — 128 combinations. The result:

- **126 of 128 combinations beat SPY** on total return.
- **34 of 36 combinations** in the lookback × top-N grid were profitable
  in **both** halves of a walk-forward split.
- H1/H2 Sharpe correlation across parameter combos: **+0.47**.

That last number is the one. If the strategy were overfit, the parameters
that worked in the first half would be uncorrelated (or anti-correlated)
with the parameters that work in the second half. A +0.47 correlation says
the signal carries forward — it's not curve-fit to one regime.

## What didn't help

A few things we tried that mostly didn't earn their keep:

- **Daily rebalance**: traded too much. Cut to weekly + a 20% drift gate;
  trade count dropped 70–80% with no return loss.
- **Tight trailing stops**: a 25% trailing stop shaved 6 percentage points
  off the worst drawdown but cost ~85 percentage points of total return.
  Bad trade.
- **EMA-based trend overlays**: high turnover ate the signal at our fee
  structure.

## What we actually run

The book runs **189-day lookback, top-10**, weekly rebalance with a 20%
drift threshold and a $10 minimum trade size to filter dust. Positions are
held in equal weight; cash is freed by sells before any buys fire on
rebalance day.

That's it. No regime filters, no risk overlays, no clever sizing rules.
Most of the alpha is in *not* adding things that don't survive the
walk-forward test.
