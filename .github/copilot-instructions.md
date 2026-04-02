# Copilot Instructions

## Repository structure

This repository is a content repository, not an application codebase. The source of truth is a small set of root-level Markdown review files such as `hyundai-stargazer.md`, `suzuki-xl7.md`, `toyota-veloz.md`, and `xpander-cross.md`.

Each file is a standalone long-form vehicle profile for one model. There is no package manifest, build output, test suite, or separate data layer in the repo.

## Build, test, and lint

No build, test, or lint commands are configured in this repository today.

There is also no single-test command because there is no automated test suite.

## High-level architecture

The main architecture here is the shared article template used across multiple model files:

1. `## 📋 OVERVIEW` starts with a compact fact table for brand, category, year, technology, and warranty/service details.
2. `## 💰 DAFTAR HARGA OTR JAKARTA 2026` and `## ⚙️ SPESIFIKASI TEKNIS (SEMUA VARIAN)` establish the canonical structured data for pricing, trims, dimensions, drivetrain, and fuel economy.
3. `## 🎨 EKSTERIOR PER VARIAN` and `## 🏠 INTERIOR PER VARIAN` break content down by trim level, usually from entry trim to top trim.
4. Mid-article sections cover qualitative ownership experience: driving comfort, driving character, safety/ADAS, and in some files dedicated infotainment or interior-space sections.
5. The last third of each file shifts from specs to evidence and interpretation: real-world fuel economy, quoted user testimonials, common problems/complaints, overall rating tables, recommendation sections, references, and a metadata footer.

The Toyota Veloz file also includes a dedicated competitor comparison matrix, while the other files mostly express comparisons inline inside prose and bullet points.

## Key conventions

- Keep one vehicle per file, using lowercase hyphenated filenames.
- Write in Indonesian as the primary language, but preserve the repo’s existing automotive mixed style: Indonesian narration with selective English terms such as `ADAS`, `ground clearance`, `wireless CarPlay`, `smooth cruiser`, and `best value`.
- Preserve the section-first structure. Tables are used for normalized facts; bullet lists are used for interpretation, trade-offs, and trim-by-trim details.
- Major sections are separated with `---`. Do not collapse the article into fewer sections unless you are deliberately doing a repo-wide rewrite.
- Keep trim hierarchy explicit. Entry, mid, and top variants are intentionally described separately even when equipment overlap exists.
- In `COMMON PROBLEMS & KELUHAN PENGGUNA`, each numbered issue usually follows a labeled mini-schema such as `Gejala`, `Penyebab`, `Frekuensi`, `Tingkat Keparahan`, `Solusi`, `Mitigasi`, or `Dampak`. Preserve that structure when editing or adding complaints.
- `REVIEW PENGGUNA` uses Markdown blockquotes with a bold quoted headline, reviewer name/location, and ownership duration in parentheses. Keep that testimonial format consistent.
- `OVERALL RATING` sections use a table with category, rating, and short notes, followed by recommendation bullets split into positive-fit and cautionary-fit readers.
- Every file ends with `## 📚 REFERENSI SUMBER` plus three footer lines: `Last Updated`, `Data Source`, and `Research Period`. Update those footer lines when making substantive research changes.
- Cross-model comparisons are part of the content model, not incidental wording. If you change a claim about ride comfort, efficiency, ADAS, pricing, or space for one car, search the other review files for references to that model and update stale comparisons where needed.

## Editing guidance for future sessions

- Match the existing tone: practical buyer guidance, quantified comparisons, and clear trade-offs rather than generic marketing copy.
- Prefer concrete numbers already used by the repo style: prices, warranty terms, dimensions, legroom, fuel-economy ranges, and trim availability.
- When adding a new model file, mirror the existing article flow instead of inventing a new template from scratch.
- Preserve local file differences unless you are intentionally normalizing all files. Some reviews have extra sections or slightly different heading wording, and that is already part of the current repository style.

## Variant-level research requirements

- For every research or review task, gather and present information per variant or trim whenever the Indonesian market differentiates variants.
- If a source only provides model-level information, label it clearly as model-level instead of assuming it applies equally to all variants.
- Map branded safety and ADAS names into common categories, but keep the original marketing label from the source.
- When a user requests structured research, prefer a variant-by-variant matrix before writing prose.
- Use English field labels in research matrices and guidance for consistency, while keeping final repository content in Indonesian to match the repo style.
- Prioritize Indonesian sources, Indonesian reviewers, Indonesian communities, and Indonesian owner feedback whenever available.
- Reviews and source material should be Indonesian-first unless a non-Indonesian source is needed to fill an important gap.

For each relevant variant, try to collect:

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

Also capture related information when it materially improves the review, such as:

- seating capacity
- wheelbase
- brake type
- airbag count
- service interval
- warranty
- infotainment
- resale value
- common reliability issues
- waiting period
- dealer network reach

## Evidence and sourcing expectations

- Separate facts, reviewer opinions, and owner opinions clearly.
- Cross-check important claims with multiple sources.
- Include at least 10 user or owner reviews with sources when the task is a full car review or deep research pass and the sources exist.
- Prefer real owners, long-term users, and community discussions over unsourced generic sentiment.
- Prefer Indonesian-language reviews and Indonesia-based ownership discussions whenever available.
- If another fact is important or closely related to the car review, extract it even if it is not explicitly listed above.
