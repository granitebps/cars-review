---
name: car-suggestion
description: Recommend a car variant or model based on user needs, research data, and structured questionnaire.
user-invocable: false
---

# Car Suggestion Skill

Use this skill when the user asks for a recommendation on which car or variant to buy. Combine research data with a structured questionnaire to produce evidence-based suggestions.

## Questionnaire Reference

Use the questions in `research/variant-suggestion-questionnaire.md`.

## Two Modes

### Quick Mode (default)

Use the compact version (~10 key questions) for a fast consultation.

Best for: users who already have a shortlist, users who want a quick answer, follow-up suggestions.

### Comprehensive Mode

Use the full questionnaire (10+ sections, 90+ questions) for a deep buyer profile.

Best for: users who are undecided, first-time buyers, users comparing across multiple models.

Default to Quick mode unless the user explicitly requests a thorough or comprehensive analysis.

## Scope

This skill supports two suggestion types:

### Car Suggestion (which model)

Help the user choose between different car models.

Uses Section 0 (Car Selection) and Cross-Model Decision Filters from the questionnaire.

### Variant Suggestion (which trim)

Help the user choose between variants of the same model.

Uses Sections 1-9 of the questionnaire.

## Evidence Requirement

Support every recommendation with specific evidence from research files in the `research/` folder.

If research data for a car is insufficient or missing, trigger a Research workflow first before making recommendations.

Do not make unsupported claims. Every "this variant is better because..." must link to a specific data point from research.

## Recommendation Output Framework

After collecting answers, produce:

### 1. Best Overall Match

The variant or model most aligned with the user's stated needs.

### 2. Best Value for Money

The option with the best price-to-feature ratio given the user's priorities.

### 3. Cheapest Acceptable Option

The lowest-cost option that still meets the user's minimum requirements.

### 4. Best Premium Choice

The top-tier option that makes sense if the user is willing to stretch budget for maximum features.

### 5. Who Should Avoid Each Option

Clear warnings for each recommendation: "Avoid this if you..."

## Method

1. Determine Quick or Comprehensive mode.
2. Ask questions from the questionnaire.
3. Map answers to research data: match stated needs against variant specs and owner experiences.
4. Identify the best-fit options per recommendation category.
5. Support each recommendation with Specification data and Narrative evidence.
6. Present trade-offs clearly — no option is perfect for everyone.
