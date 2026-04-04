# Suggestion Instructions

When recommending a car or variant to a user, follow this process. Suggestions must be evidence-based, drawing from research data in the `research/` folder.

## When to Use

Use this workflow when the user asks for a recommendation, suggestion, or help deciding which car or variant to buy.

## Two Modes

### Quick Mode (default)

Use the compact version of the questionnaire (~10 key questions).

Best for:
- Users who already have a shortlist
- Users who want a fast answer
- Follow-up suggestions after research

### Comprehensive Mode

Use the full questionnaire (10+ sections, 90+ questions).

Best for:
- Undecided users
- First-time car buyers
- Users comparing across multiple models or categories

Default to Quick mode. Switch to Comprehensive if the user requests a thorough analysis or if the Quick answers reveal complex needs.

---

## Step 1 — Determine Mode

Ask the user: "Mau konsultasi cepat (8-10 pertanyaan) atau analisis lengkap?"

If the user does not have a preference, use Quick mode.

## Step 2 — Ask Questions

Use the questions from `research/variant-suggestion-questionnaire.md`.

### Quick Mode Questions

Use the Compact Version section of the questionnaire. The compact version covers:

1. Budget (ideal and maximum)
2. Primary usage pattern
3. Top priority (price, features, safety, or style)
4. ADAS importance
5. 360 camera importance
6. Style/body kit importance
7. Full passenger frequency
8. Seeking cheapest, best value, or most complete
9. Specific model or open to suggestions (car selection)
10. Body type preference (car selection)

### Comprehensive Mode Questions

Walk through all sections in order:
- Section 0: Car Selection (if model not yet chosen)
- Section 1: Budget and Purchase Context
- Section 2: Main Usage Pattern
- Section 3: Must-Have Features
- Section 4: Safety and ADAS Priorities
- Section 5: Comfort and Daily Convenience
- Section 6: Style and Emotional Preference
- Section 7: Ownership and Running Cost
- Section 8: Performance Preference
- Section 9: Decision Filters
- Cross-Model Decision Filters (if comparing models)

## Step 3 — Check Research Data

Before generating recommendations, verify that sufficient research data exists:

- Check `research/` folder for relevant car research files
- Check that master-research files exist for candidate models
- If data is insufficient or missing, trigger a Research workflow first
- Never recommend based on general knowledge alone — use documented research

## Step 4 — Analyze and Match

Map user answers to research data:

- Match stated budget to variant pricing from research
- Match feature priorities to variant feature matrices
- Match safety requirements to ADAS availability per variant
- Match comfort needs to owner feedback and reviewer assessments
- Match usage patterns to performance data (fuel economy, hill-climb, NVH)
- Match ownership cost tolerance to tax, service, and spare-part data

## Step 5 — Generate Recommendations

Produce recommendations in this framework:

### 1. Best Overall Match

The variant or model most aligned with the user's overall needs. Explain why.

### 2. Best Value for Money

The option with the best price-to-feature ratio given the user's specific priorities. Not always the cheapest.

### 3. Cheapest Acceptable Option

The lowest-cost option that still meets the user's minimum requirements. Clearly state what the user gives up.

### 4. Best Premium Choice

The top-tier option that makes sense if the user is willing to stretch budget. Explain what extra value it provides.

### 5. Who Should Avoid Each Option

For each recommended option, state clearly: "Hindari pilihan ini kalau..."

### Evidence Requirement

Every recommendation must include:
- Specific data points from research files (price, specs, features)
- Owner or reviewer quotes that support the claim (Narrative evidence)
- Clear trade-off statement

## Step 6 — Present Trade-Offs

No option is perfect. For every recommendation:

- State what the user gains
- State what the user gives up
- Compare against the next-best alternative
- Be honest about weaknesses

## Cross-Model Suggestion

When the user has not chosen a model:

1. Use Section 0 and Cross-Model Decision Filters
2. Narrow to 2-3 candidate models
3. Compare candidates using the Comparison workflow
4. Then apply the Suggestion framework to the shortlist
