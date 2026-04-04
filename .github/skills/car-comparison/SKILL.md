---
name: car-comparison
description: Compare car variants or different car models using specifications, ownership experience, and narrative evidence.
user-invocable: false
---

# Car Comparison Skill

Use this skill when the user wants to compare vehicles. Supports two comparison modes.

Use English field labels in comparison matrices, but prioritize Indonesian sources and Indonesian owner reviews.

## Comparison Modes

### Mode 1: Variant Comparison (same model)

Compare trims or variants of the same car model.

- **Output file**: `{car-name}-variant-comparison.md`
- **Location**: Inside `research/{car-name}/`
- **Example**: Stargazer Cartenz Smart vs Cartenz Prime vs Cartenz X Trend

### Mode 2: Cross-Car Comparison (different models)

Compare two or more different car models against each other.

- **Output file**: `{car1-name}-vs-{car2-name}-comparison.md`
- **Location**: Inside `research/` root (not inside a car-specific folder)
- **Example**: Hyundai Stargazer vs Toyota Veloz vs Mitsubishi Xpander

## Interactive Clarification

You may ask the user clarifying questions to produce a more targeted comparison:

- What is your budget range?
- What are your top priorities? (comfort, safety, fuel economy, resale, etc.)
- What is your primary use case? (city, toll, long-distance, mudik)
- Are there specific features you care about? (ADAS, 360 camera, captain seat, etc.)
- How many passengers do you typically carry?

Keep questions concise. Do not ask more than 5 clarifying questions.

## Comparison Using Both Information Types

Compare using both Specification and Narrative:

- **Specification**: Side-by-side tables of facts (price, dimensions, features, ADAS)
- **Narrative**: Commentary comparing real-world experiences (comfort, reliability, service, owner satisfaction)

## Comparison Factors

Compare each relevant variant, not just the model name.

Focus on:

- price per variant
- release timing
- dimensions
- ground clearance
- luggage capacity
- tank capacity
- engine performance
- fuel efficiency
- transmission
- suspension and suspension character
- tires and wheel setup
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
5. Analyze reviewer opinions using Narrative evidence.
6. Analyze owner feedback using Narrative evidence.
7. Capture any additional related information that materially affects buying decisions.

## Output Format

Use structured comparison tables for Specification. Use commentary prose for Narrative comparisons.

Include sections:

- Variant matrix (side-by-side table)
- Specifications comparison
- Pros and cons per option
- Reviewer insights (Narrative)
- Owner feedback with sources (Narrative)
- Final recommendation with winner per category
