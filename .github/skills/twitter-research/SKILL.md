---
name: twitter-research
description: Gather public sentiment, owner experiences, and market perception from Twitter/X using Twitter MCP.
user-invocable: false
---

# Twitter Research Skill

Use this skill when gathering information from Twitter/X. Twitter is the **primary source for public Narrative** — opinions, experiences, sentiments, and impressions from car owners and the general public.

Prioritize Indonesian-language tweets, Indonesian automotive communities, and Indonesian car owner accounts whenever available.

## Source Minimum

Gather at least **100 Twitter sources** (tweets + replies) per research task.

These are minimums. Always gather as many relevant, up-to-date sources as possible. Sources must be current and directly related to the car being researched.

## MCP Requirement

Use **Twitter MCP** for all Twitter/X data extraction: tweet search, tweet details, and replies.

If Twitter MCP is not available in the current environment, install it from:
https://github.com/granitebps/twitter-mcp

Always verify Twitter MCP availability before starting Twitter research. Install if missing.

## Two Extraction Targets

### 1. Tweets (main posts)

- Search for tweets mentioning the car model
- Look for owner reports, purchase announcements, complaint threads, praise posts
- Extract the full tweet text

### 2. Replies (threaded discussion)

- Extract replies to relevant tweets
- Replies often contain richer detail: counter-opinions, additional experiences, corrections
- Follow reply chains to capture full conversations

## Information Role

All Twitter content is classified as **Narrative**. Twitter is not used as a source for Specification.

Focus on extracting:

- owner opinions and satisfaction levels
- purchase decision stories and shopping behavior
- common complaints and recurring issues
- praise patterns and positive experiences
- public sentiment and perception
- viral issues or controversy
- real-world fuel economy claims
- comfort and NVH impressions
- ADAS feedback (useful, annoying, missing)
- spare-part or service complaints
- hill-climb and power complaints
- comparison opinions (this car vs competitors)
- pricing sentiment (too expensive, worth it, bargain)

## Context Capture

For each tweet or reply, capture when available:

- source link
- whether the speaker is an owner, shopper, reviewer, or general public
- variant mentioned (if any)
- city or region
- mileage or ownership duration
- usage pattern (daily, mudik, family trips)

## Search Strategy

Search using multiple keyword variations:

```
[car model] Indonesia
[car model] review
[car model] keluhan
[car model] puas
[car model] owner
[car model] beli
[car model] vs [competitor]
[car model] [variant name]
[car model] BBM
[car model] ADAS
[car model] servis
```

## Output Format

All Twitter research output uses **Narrative format**: commentary-style prose with direct quotes and attribution.

Group findings by theme:
- Overall sentiment
- Common praise
- Common complaints
- Shopping behavior and decision factors
- Ownership experiences
- Comparison discussions

If another related insight materially improves the car review, extract it too.

## Sources Storage

All tweets and related discussions should be referenced in the per-car sources file:

`research/{car-name}/{car-name}-sources.md`

Create a Twitter/X section with notable tweet counts, sentiment summary, and links to key discussion threads.
