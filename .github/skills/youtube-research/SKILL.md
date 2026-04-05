---
name: youtube-research
description: Analyze automotive reviews, tests, and owner experiences from YouTube using YouTube MCP.
user-invocable: false
---

# YouTube Research Skill

Use this skill when gathering information from YouTube. YouTube is the **secondary source for Specification** (updated info from video reviews) and a **primary source for reviewer Narrative**.

Prioritize Indonesian YouTube reviewers and Indonesian-language ownership videos whenever available.

## Source Minimum

Gather at least **50 YouTube sources** per research task.

These are minimums. Always gather as many relevant, up-to-date sources as possible. Sources must be current and directly related to the car being researched.

## MCP Requirement

Use **YouTube MCP** for all YouTube data extraction: search, video details, transcripts, and comments.

If YouTube MCP is not available in the current environment, install it from:
https://github.com/granitebps/youtube-mcp

Always verify YouTube MCP availability before starting YouTube research. Install if missing.

## Three Extraction Targets

Extract information from three parts of each video:

### 1. Description

- Often contains spec sheets, pricing, links
- Classify extracted data as **Specification**

### 2. Transcript

- Contains reviewer commentary, test results, driving impressions
- Classify factual claims as **Specification**, subjective impressions as **Narrative**

### 3. Comments

- Contains owner experiences, complaints, praise, questions
- Classify all comment content as **Narrative**
- Extract replies to comments too — threaded discussions often contain richer detail

## What to Extract

Focus on:

- variant differences mentioned in video
- driving impressions and handling feel
- interior quality observations
- comfort analysis (city, toll, broken roads)
- fuel consumption tests and real-world figures
- acceleration and power tests
- hill-climb tests and performance
- NVH impressions (engine noise, wind noise, tire noise)
- suspension behavior
- luggage and cabin practicality
- ADAS demonstrations and real-use feedback
- ownership review takeaways
- pricing and value commentary

## Video Preferences

Prefer:

- long-form reviews (>10 minutes)
- comparison videos
- ownership reviews (3+ months)
- test drive videos with real conditions
- Indonesian reviewers testing in Indonesian roads

## Output Classification

For every extracted item:

- **Specification** (from description/transcript): format as structured data
- **Narrative** (from transcript opinions/comments): format as commentary prose with source attribution

When possible, record the source video URL and timestamp or segment that supports each claim.

If another related insight materially improves the car review, extract it too.

## Sources Storage

All YouTube videos and sources gathered should be added to the per-car sources file:

`research/{car-name}/{car-name}-sources.md`

Organize YouTube sources in a section with video titles, URLs, view counts, and descriptions of what content each video provides.
