---
name: data-analysis
description: >
  Turn raw data into decisions with statistical rigor, proper methodology, and awareness of analytical pitfalls.
  Use when users ask about analyzing data, finding patterns, understanding metrics, testing hypotheses, cohort
  analysis, A/B testing, churn analysis, or statistical significance. Keywords: data analysis, statistics,
  A/B test, cohort, metrics, correlation, regression, hypothesis testing.
---

# Data Analysis

Turn raw data into decisions with statistical rigor, proper methodology, and awareness of analytical pitfalls.

## Core Principle

Analysis without a decision is just arithmetic. Always clarify: **What would change if this analysis shows X vs Y?**

## Methodology First

Before touching data:
1. **What decision** is this analysis supporting?
2. **What would change your mind?** (the real question)
3. **What data do you actually have** vs what you wish you had?
4. **What timeframe** is relevant?

## Statistical Rigor Checklist

- [ ] Sample size sufficient? (small N = wide confidence intervals)
- [ ] Comparison groups fair? (same time period, similar conditions)
- [ ] Multiple comparisons? (20 tests = 1 "significant" by chance)
- [ ] Effect size meaningful? (statistically significant ≠ practically important)
- [ ] Uncertainty quantified? ("12-18% lift" not just "15% lift")

## Analytical Pitfalls to Catch

| Pitfall | What it looks like | How to avoid |
|---------|-------------------|--------------|
| Simpson's Paradox | Trend reverses when you segment | Always check by key dimensions |
| Survivorship bias | Only analyzing current users | Include churned/failed in dataset |
| Comparing unequal periods | Feb (28d) vs March (31d) | Normalize to per-day or same-length windows |
| p-hacking | Testing until something is "significant" | Pre-register hypotheses or adjust for multiple comparisons |
| Correlation in time series | Both went up = "related" | Check if controlling for time removes relationship |
| Aggregating percentages | Averaging percentages directly | Re-calculate from underlying totals |

## Approach Selection

| Question type | Approach | Key output |
|---------------|----------|------------|
| "Is X different from Y?" | Hypothesis test | p-value + effect size + CI |
| "What predicts Z?" | Regression/correlation | Coefficients + R² + residual check |
| "How do users behave over time?" | Cohort analysis | Retention curves by cohort |
| "Are these groups different?" | Segmentation | Profiles + statistical comparison |
| "What's unusual?" | Anomaly detection | Flagged points + context |

## Common Analysis Patterns

### A/B Test Analysis

```python
from scipy import stats
import numpy as np

# Example: conversion rate test
control_conversions, control_n = 45, 500
treatment_conversions, treatment_n = 62, 500

# Two-proportion z-test
p_control = control_conversions / control_n
p_treatment = treatment_conversions / treatment_n
p_pool = (control_conversions + treatment_conversions) / (control_n + treatment_n)

se = np.sqrt(p_pool * (1 - p_pool) * (1/control_n + 1/treatment_n))
z = (p_treatment - p_control) / se
p_value = 2 * (1 - stats.norm.cdf(abs(z)))

lift = (p_treatment - p_control) / p_control * 100
print(f"Control: {p_control:.1%}, Treatment: {p_treatment:.1%}")
print(f"Lift: {lift:.1f}%, p-value: {p_value:.4f}")
print(f"Significant (α=0.05): {p_value < 0.05}")
```

### Cohort Retention Analysis

```python
import pandas as pd

# Input: events dataframe with user_id, event_date, signup_date
def cohort_retention(df):
    df['cohort_month'] = df['signup_date'].dt.to_period('M')
    df['period'] = (
        (df['event_date'].dt.to_period('M') - df['cohort_month'])
        .apply(lambda x: x.n)
    )

    cohort_counts = df.groupby(['cohort_month', 'period'])['user_id'].nunique()
    cohort_sizes = df.groupby('cohort_month')['user_id'].nunique()
    retention = cohort_counts.div(cohort_sizes, level='cohort_month').unstack()
    return retention  # Heatmap of retention by cohort
```

### Segmentation

```python
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

# Normalize features before clustering
scaler = StandardScaler()
X_scaled = scaler.fit_transform(features_df)

# Find optimal k with elbow method
inertias = []
for k in range(2, 11):
    km = KMeans(n_clusters=k, random_state=42)
    km.fit(X_scaled)
    inertias.append(km.inertia_)
# Plot inertias to find elbow
```

## Output Standards

1. **Lead with the insight**, not the methodology
2. **Quantify uncertainty** — ranges, not point estimates
3. **State limitations** — what this analysis can't tell you
4. **Recommend next steps** — what would strengthen the conclusion

## Output Template

```markdown
## Analysis: [Question]

**Finding**: [One-sentence answer]

**Evidence**:
- [Key metric 1]: [value] (95% CI: [range])
- [Key metric 2]: [value]
- Sample size: [N] — [sufficient/insufficient for reliable inference]

**Limitations**:
- [What this analysis cannot tell us]
- [Potential confounders]

**Recommended next steps**:
1. [What would strengthen this conclusion]
2. [Additional data that would help]
```

## Red Flags to Escalate

- User wants to "prove" a predetermined conclusion
- Sample size too small for reliable inference
- Data quality issues that invalidate analysis
- Confounders that can't be controlled for

## Example

**Input**: "Our new homepage had 15% more conversions last month. Is it working?"

**Output**:
```
Finding: The 15% lift is promising but requires validation before concluding causation.

Evidence:
- Conversion rate: 8.4% (Nov) vs 7.3% (Oct) — absolute +1.1pp
- Sample: ~12,000 sessions/month — sufficient for this effect size
- p-value: 0.031 — statistically significant at α=0.05

Limitations:
- Oct vs Nov may differ in traffic mix (holiday shopping behavior)
- No A/B test — cannot rule out external factors (seasonality, marketing spend)
- Only 1 month of data — could be random variation

Recommended next steps:
1. Run a proper A/B test to isolate the homepage change
2. Check if Oct-Nov traffic sources changed
3. Wait for December data to confirm the trend holds
```
