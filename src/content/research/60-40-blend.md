---
title: "Why I run a 60/40 momentum/equal-weight blend"
date: "2026-03-22"
summary: "Pure momentum returns +319% with a -41% drawdown. A 60/40 blend with broad equal-weight exposure returns +204% with -38% — and a better Sharpe. Here's why I picked the second one."
tags: ["equities", "portfolio construction", "risk"]
---

The temptation in systematic equities is to find the highest-Sharpe signal
and pile in. In our [walk-forward post](/research/momentum-189-walk-forward),
a 189-day momentum top-10 portfolio posted a 1.55 Sharpe and a +319% return
over two years of S&P-500-plus-extras data.

The book doesn't run that. The book runs a 60/40 blend: 60% of capital in
the momentum top-10, 40% spread across an equal-weight basket of ~990
tickers. That blend returns "only" +204% over the same window, with a
Sharpe of 1.44 and a max drawdown of -38%.

Why give up 115 percentage points of return?

## Drawdown is the constraint, not return

The blend's max drawdown is 38% vs the pure strategy's 41%. That's not a
huge gap in isolation. But the *path* to those drawdowns is very different.
Pure momentum's drawdowns are concentrated — they happen fast, in a few
days, when the top-10 names all roll over at once. The blend's drawdowns
are slower and shallower because the equal-weight basket doesn't move in
lockstep with the momentum names.

In a backtest those look like rounding errors. In live trading, with real
discretionary pressure to override the strategy when it's underwater, that
difference matters. A drawdown you can sit through is worth more than a
drawdown that looks slightly worse on paper but breaks your discipline.

## Sharpe, not return, is the right scorecard

| Strategy                     | Return | Sharpe | Max DD |
| ---------------------------- | ------ | ------ | ------ |
| Momentum-189 top-10          | +319%  | 1.55   | -41%   |
| **60/40 blend**              | +204%  | 1.44   | -38%   |
| Equal-weight (~990 tickers)  | +31%   | 0.92   | ~-15%  |
| SPY                          | +32%   | ~0.90  | -10%   |

The blend gives up Sharpe vs pure momentum (1.44 vs 1.55) — but not much.
And the absolute drawdown number is close. The trade is: a small Sharpe
giveaway for a meaningfully smoother ride and meaningfully lower
concentration risk.

If the next regime is one where pure momentum's specific top-10 names
underperform — and that regime is real, and overdue — the blend's
equal-weight piece keeps the book in the game.

## What about pure equal-weight?

It tracks SPY. The equal-weight basket on ~990 tickers returned +31% over
the same window — basically SPY. There's no free lunch in just owning
everything equally; the alpha has to come from somewhere.

Momentum is where it comes from. The blend just decides not to *bet the
whole book* on it.

## What we run

60% top-10 momentum (189-day lookback, weekly rebalance, 20% drift gate)
and 40% equal-weight across the ~990-ticker universe. Same fee structure,
same minimum trade size, same rule about sells executing before buys on
rebalance day.

It is not the best-performing strategy in research. It's the one we'll
still be running in three years.
