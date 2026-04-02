---
name: car-comparison
description: Compare multiple car models using specifications, price, performance, ownership cost, and real-world reviews.
user-invocable: false
---

# Car Comparison Skill

Use this skill when the user wants to compare two or more vehicles.

Use English field labels in comparison matrices, but prioritize Indonesian sources and Indonesian owner reviews.

## Comparison Factors

Compare each relevant variant, not just the model name.

Focus on:

- price per variant
- release timing
- dimensions
- ground clearance
- bagasi
- tank capacity
- engine performance
- fuel efficiency
- transmission
- suspension and suspension character
- kaki-kaki and tire setup
- comfort and NVH
- hill-climbing ability
- reliability
- annual tax
- maintenance cost
- after-sales support
- spare-part availability
- resale value
- interior comfort
- safety features
- technology features
- ADAS availability by variant
- owner feedback quality and consistency

## Method

1. Gather structured specifications of each vehicle by variant.
2. Map branded ADAS features into common categories while preserving original names.
3. Identify strengths and weaknesses by variant.
4. Compare ownership cost, annual tax, after-sales support, and spare parts.
5. Analyze reviewer opinions.
6. Analyze owner feedback.
7. Capture any additional related information that materially affects buying decisions.

## Output Format

Prefer structured comparison tables.

Include sections:

- Variant matrix
- Specifications comparison
- Pros and cons
- Reviewer insights
- Owner feedback with sources
- Final recommendation
