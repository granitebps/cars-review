# Research Instructions

When researching any car model, follow this process. Collect data at variant level whenever the Indonesian market differentiates trims.

Use English field labels in guidance and structured matrices for consistency, but prioritize Indonesian-language evidence and Indonesian owner discussions.

## Source Minimums

Every research task must meet these minimums:

| Source | Minimum | Information Role |
|---|---|---|
| Web | 100 sources | Primary for Specification, secondary for Narrative |
| YouTube | 50 sources | Secondary for Specification, primary for reviewer Narrative |
| Twitter | 100 sources | Primary for public Narrative |

These are minimums. Always gather as many relevant sources as possible.

## Information Taxonomy

Classify every piece of extracted information:

- **Specification**: Factual data (dimensions, specs, pricing, features, tax). Format as structured tables and matrices.
- **Narrative**: Opinions, experiences, sentiments, impressions. Format as commentary-style prose with attribution.

## MCP Usage

Before starting research, verify that both MCPs are available:

- **YouTube MCP** — for YouTube search, video details, transcripts, and comments. Install from https://github.com/granitebps/youtube-mcp if missing.
- **Twitter MCP** — for tweet search, tweet details, and replies. Install from https://github.com/granitebps/twitter-mcp if missing.

---

## Step 1 — Gather Web Sources (≥100)

Search multiple web source types:

- official manufacturer pages
- dealership and pricing pages
- news websites and automotive media
- car review sites
- blogs and opinion sites
- forums and community discussion pages
- marketplace review pages (OLX, Mobil123, Carmudi, etc.)
- tax and ownership-cost references

Use the `web-search` skill. Do not rely on a single source.

Prioritize Indonesian sources, Indonesian reviewers, Indonesian forums, and Indonesian community posts whenever available.

Classify extracted data: Specification (facts, specs, pricing) or Narrative (forum opinions, blog experiences).

## Step 2 — Gather YouTube Sources (≥50)

Use **YouTube MCP** to search and extract from YouTube.

For each video, extract from three targets:

1. **Description** — specs, pricing, links → classify as Specification
2. **Transcript** — factual claims → Specification, subjective impressions → Narrative
3. **Comments** — owner experiences, opinions → classify as Narrative (extract replies too)

Use the `youtube-research` skill.

Prioritize Indonesian YouTube reviewers and Indonesian-language videos.

## Step 3 — Gather Twitter Sources (≥100)

Use **Twitter MCP** to search and extract from Twitter/X.

Extract from two targets:

1. **Tweets** — main posts mentioning the car
2. **Replies** — threaded discussions with richer detail

All Twitter content is classified as Narrative.

Use the `twitter-research` skill.

Prioritize Indonesian-language tweets and Indonesian automotive communities.

## Step 4 — Build a Variant Research Matrix

For each variant, extract and cross-check:

- price
- release date
- dimensions
- ground clearance
- luggage capacity
- fuel tank capacity
- engine specifications
- horsepower / PS / power if available
- torque if available
- transmission
- drivetrain if relevant
- fuel economy
- suspension
- suspension character
- running gear
- ban and wheel size
- PEB / power back door / power tailgate (Ya/Tidak)
- spion retract (Ya/Tidak)
- kamera 360 (Ya/Tidak)
- adaptive cruise control or similar (Ya/Tidak)
- lane following assist / lane centering / similar (Ya/Tidak)
- collision-avoidance assist / autonomous emergency braking / similar (Ya/Tidak)
- full ADAS list
- strengths
- weaknesses
- comfort rating
- engine performance rating
- hill-climb ability
- NVH
- annual tax
- after-sales support
- spare parts availability

When the evidence supports it, also capture:

- seating capacity
- wheelbase
- brake type
- airbag count
- hill-start assist
- stability control
- infotainment
- service interval
- warranty
- resale value
- common reliability issues
- waiting period

If a source only gives model-level information, label it as model-level instead of assuming it applies to all variants.

## Step 5 — Gather Narrative Evidence

Collect opinions and experiences from:

- professional reviewers (YouTube transcripts, web reviews)
- car owners (Twitter, YouTube comments, forums)
- community discussions (forums, Reddit, social media)

Separate Specification facts from Narrative opinions.

Specifically look for:

- suspension comfort
- handling feel
- real-world fuel consumption
- noise levels
- climbing ability
- service experience
- spare-part availability
- long-term reliability

Gather at least 10 user or owner reviews when available, each with a source. Prefer owner reports with variant, city, mileage, ownership duration, or usage pattern if available.

## Step 6 — Cross-Check

Validate important Specification data using multiple sources.

If two sources conflict, mention both perspectives and explain which one appears more reliable.

Map branded ADAS names into common categories, but also record the original marketing name from the source.

## Step 7 — Write Source-Specific Research Files

Write 3 separate research files in `research/{car-name}/`:

### `{car-name}-web-research.md`
Contains all information gathered from web sources. Uses tables for Specification, commentary prose for Narrative.

### `{car-name}-youtube-research.md`
Contains all information gathered from YouTube. Uses tables for Specification (from descriptions/transcripts), commentary prose for Narrative (from comments and opinions).

### `{car-name}-twitter-research.md`
Contains all information gathered from Twitter. Uses commentary prose for all content (Narrative only).

## Step 8 — Compile Master Research

Write the master research file: `{car-name}-master-research.md`

This file synthesizes data from all three source-specific files. It is the definitive research document.

- Merge Specification data from web and YouTube into unified variant matrices
- Merge Narrative evidence from all three sources into thematic commentary
- Resolve conflicts between sources: note discrepancies and assess reliability
- Use tables for Specification sections, commentary prose for Narrative sections

Include sections:

- Overview
- Variant Data Matrix
- Specifications
- Price
- Pros
- Cons
- Reviewer Opinions
- Owner Feedback
- Market Position
- Final Insights
- Sources

## Knowledge Recording

During research, update the project knowledge files.

### Step A — Record Sources

Create a per-car sources file at `research/{car-name}/{car-name}-sources.md`.

Include: articles, videos, forum discussions, tweets, official pages.

Organize sources by type (Web, YouTube, Twitter) with descriptions and link counts.

### Step B — Extract Knowledge

Add verified insights to `memory.md`.

Only include information that appears in multiple reliable sources.

### Step C — Write Research Documents

Write the 4 research files in `research/{car-name}/` as described in Steps 7-8 and the Knowledge Recording steps above:

1. `{car-name}-web-research.md` — from Step 7
2. `{car-name}-youtube-research.md` — from Step 7
3. `{car-name}-twitter-research.md` — from Step 7
4. `{car-name}-master-research.md` — from Step 8
5. `{car-name}-sources.md` — from Step A above

All files stored in `research/{car-name}/` folder.

If another fact is important or strongly related to the car review, extract it even if not explicitly listed above.
