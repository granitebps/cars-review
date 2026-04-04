# Comparison Instructions

When comparing vehicles, follow this process. Comparisons use both Specification (tables) and Narrative (commentary) evidence.

## Mode Detection

Determine the comparison mode from the user's request:

### Variant Comparison (same model)

The user wants to compare trims of one car model (e.g., "compare Stargazer Cartenz variants").

- **Output**: `{car-name}-variant-comparison.md`
- **Location**: Inside `research/{car-name}/`

### Cross-Car Comparison (different models)

The user wants to compare different car models (e.g., "compare Stargazer vs Veloz vs Xpander").

- **Output**: `{car1-name}-vs-{car2-name}-comparison.md` (use all car names if more than 2)
- **Location**: Inside `research/` root (not inside a car-specific folder)

---

## Step 1 — Identify Comparison Targets

Determine exactly which variants or models are being compared. If the user says "compare Stargazer and Veloz", clarify which specific variants — or compare all variants side by side.

## Step 2 — Ask Clarifying Questions (optional)

You may ask the user up to 5 clarifying questions to make the comparison more useful:

- What is your budget range?
- What are your top priorities? (comfort, safety, fuel economy, resale, etc.)
- What is your primary use case? (city, toll, long-distance, mudik)
- Are there specific features you care about? (ADAS, 360 camera, captain seat, etc.)
- How many passengers do you typically carry?

If the user wants a general comparison without specific needs, skip this step and compare objectively.

## Step 3 — Gather Specification Data

For all comparison targets, gather structured Specification data.

- Check if research files already exist in `research/` — use existing data
- If research is incomplete or missing, trigger a Research workflow first
- Build a side-by-side Specification table covering: price, dimensions, engine, features, ADAS, tax, ownership cost

## Step 4 — Gather Narrative Evidence

For all comparison targets, gather Narrative evidence:

- Reviewer opinions from web and YouTube research
- Owner experiences from Twitter, YouTube comments, and forums
- Identify where owners directly compare the cars against each other

## Step 5 — Build Comparison Output

Structure the comparison document:

### Specification Comparison (tables)

- Side-by-side variant or model matrix
- Price comparison table
- Feature availability matrix (which variant has what)
- ADAS comparison (mapped to common categories)
- Ownership cost comparison (tax, service, spare parts)

### Narrative Comparison (commentary)

- Driving comfort comparison with evidence
- Reliability and long-term ownership comparison
- Owner satisfaction comparison
- Reviewer consensus and disagreements
- Value proposition analysis

### Conclusion

- Winner per category (comfort, safety, value, performance, reliability, etc.)
- Overall recommendation based on user priorities (if clarifying questions were asked)
- Clear trade-offs: "Choose A if you prioritize X. Choose B if you prioritize Y."

## Step 6 — Record Knowledge

- Add sources to `sources.md`
- Add verified comparative insights to `memory.md`
- Write the comparison file to the correct location
