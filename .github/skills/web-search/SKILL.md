---
name: web-search
description: Perform broad internet research across websites, news, forums, blogs, and community pages. Extract structured data and real ownership experiences.
user-invocable: false
---

# Web Search Skill

Use this skill for all web-based data gathering. This is the unified skill for searching, scraping, and extracting information from any web source.

Use English field labels in structured outputs, but prioritize Indonesian sources and Indonesian owner reviews.

## Source Minimum

Gather at least **100 web sources** per research task.

These are minimums. Always gather as many relevant, up-to-date sources as possible. Sources must be current and directly related to the car being researched.

## Information Role

Web is the **primary source for Specification** (factual, structured data) and a **secondary source for Narrative** (forums, blogs, community posts).

Classify every extracted item as either Specification or Narrative.

## Source Types

Search across all of these:

- automotive news and media websites
- manufacturer and official brand pages
- dealership and pricing sites
- tax and ownership-cost references
- automotive blogs and review sites
- owner forums and community discussion groups
- marketplace review pages (OLX, Mobil123, Carmudi, etc.)
- Reddit automotive communities
- automotive enthusiast forums
- owner club pages and groups

Prefer Indonesian websites, Indonesian automotive media, Indonesian reviewers, and Indonesian owner communities whenever available.

## Search Strategy

Search using multiple keyword variations to maximize coverage.

Examples:

```
[car model] review Indonesia
[car model] spesifikasi lengkap
[car model] harga OTR 2026
[car model] pajak tahunan
[car model] reliability owner
[car model] keluhan pengguna
[car model] ground clearance
[car model] kamera 360
[car model] ADAS fitur
[car model] review pengguna forum
[car model] biaya servis
[car model] spare part availability
[car model] vs [competitor]
[car model] [variant name] review
```

## Structured Data Extraction

When extracting structured data (Specification), normalize into a variant-by-variant matrix when possible.

Extract:

- price by variant
- release date
- specifications (dimensions, engine, transmission)
- ground clearance
- tank capacity
- fuel consumption
- suspension and tires
- luggage capacity
- features by variant
- ADAS features by variant
- annual tax if available
- after-sales and warranty details

## Forum and Community Extraction

When extracting from forums, blogs, and community pages (Narrative), look for:

- variant-specific ownership experiences
- reliability issues and long-term complaints
- maintenance cost reports
- common complaints and recurring problems
- spare-part availability and pricing
- service center experiences
- real-world fuel consumption reports
- comfort and suspension feedback
- NVH complaints
- climbing performance reports
- luggage and cabin practicality feedback
- ADAS usefulness or false-alert reports

Capture source links and note the variant when the poster mentions it. Prefer real owners and long-term users.

## Output Classification

For every piece of extracted information, classify it:

- **Specification**: factual data → format as structured table or matrix
- **Narrative**: opinion, experience, sentiment → format as commentary prose with attribution

## Goal

Build a comprehensive per-variant research dataset covering price, dimensions, specs, fuel use, suspension, tires, features, ADAS, ownership cost, after-sales, spare parts, and sourced user reviews.

If additional related information is important for the review, include it even if not explicitly listed.

## Sources Storage

All web sources gathered should be added to the per-car sources file:

`research/{car-name}/{car-name}-sources.md`

Organize web sources by category (Pricing, Specifications, ADAS, Fuel Economy, Tax, Sales, Owner Feedback, etc.) with links and descriptions.
