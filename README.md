# Cars Research

Indonesian automotive research repository. Contains in-depth research, variant comparisons, and buyer recommendations for cars available in the Indonesian market.

## What's in This Repo

| Folder / File | Purpose |
|---|---|
| `research/` | All car research files, organized by model |
| `research/{car-name}/{car-name}-sources.md` | Source links for each car (organized by Web/YouTube/Twitter) |
| `research/variant-suggestion-questionnaire.md` | Questionnaire used for buyer recommendations |
| `memory.md` | Verified insights accumulated across research sessions |
| `web/` | Next.js UI for reading research files in the browser |
| `.github/agents/` | AI agent configuration |
| `.github/instructions/` | Workflow instructions (research, comparison, suggestion) |
| `.github/skills/` | Skill definitions used by the agent |

---

## Research Folder Structure

Each car model has its own folder inside `research/`:

```
research/
  {car-name}/
    {car-name}-sources.md                 ← source links for this car
    {car-name}-web-research.md
    {car-name}-youtube-research.md
    {car-name}-twitter-research.md
    {car-name}-master-research.md
    {car-name}-variant-comparison.md    ← optional
  {car1-name}-vs-{car2-name}-comparison.md  ← cross-car comparison (in root of research/)
  variant-suggestion-questionnaire.md
```

### Research File Types

| File | Content |
|---|---|
| `sources` | Complete reference list of all sources gathered (Web, YouTube, Twitter) |
| `web-research` | Specs and narrative from web sources (news, media, forums, blogs) |
| `youtube-research` | Specs from video descriptions/transcripts + narrative from comments |
| `twitter-research` | Public sentiment, owner opinions, and experiences from Twitter/X |
| `master-research` | Final compiled research synthesizing all three sources |
| `variant-comparison` | Side-by-side comparison of trims within the same model |

### Sources Organization

Each car has its own **per-car sources file** inside the research folder:

**Location:** `research/{car-name}/{car-name}-sources.md`

Example files:
- `research/toyota-veloz-hybrid/toyota-veloz-hybrid-sources.md` — All sources for Veloz Hybrid
- `research/hyundai-stargazer-cartenz/hyundai-stargazer-cartenz-sources.md` — All sources for Stargazer

**Organization:** Links organized by source type (Web, YouTube, Twitter) with descriptions and counts.

**Benefits:**
- Self-contained research packages (each car has its complete source list)
- Sources discoverable on web UI: `/research/[car]/sources`
- Future research tasks automatically follow this convention

---

## Agent Workflows

The `otomotif-research` agent handles three workflows:

### 1. Research

Researches a car model by gathering from three sources:
- **Web** — minimum 100 sources (news, media, forums, blogs)
- **YouTube** — minimum 50 sources via YouTube MCP
- **Twitter** — minimum 100 sources (tweets + replies) via Twitter MCP

Produces 4 markdown files per car: sources, web, youtube, twitter, and master research.

### 2. Comparison

Compares car variants or different models.

- Variant comparison (same model) → saved inside the car folder
- Cross-car comparison → saved in `research/` root

### 3. Suggestion

Recommends a car or variant based on user needs, using the questionnaire and research data.

Two modes: Quick (~10 questions) or Comprehensive (full questionnaire).

---

## Information Types

All research content uses two formats:

| Type | Format | Source |
|---|---|---|
| **Specification** | Structured tables, matrices | Web, YouTube descriptions |
| **Narrative** | Commentary prose, blockquotes | Twitter, YouTube comments, forums |

---

## Web UI

A simple Next.js app for reading research files in the browser.

### Features

- **Auto-discovery**: All research files matching the naming convention appear automatically
- **Per-car organization**: Each car shows all research types: Sources, Master, Web, YouTube, Twitter, Variant Comparison
- **Research-focused**: Shows only research content (reviews deprecated)
- **Mobile-friendly**: Hamburger menu on mobile, sidebar navigation on desktop

### Available Research Types

The web UI displays all research file types with color-coded navigation:

- 🟨 **Sources** — Reference links organized by source type
- 🟦 **Master** — Synthesized research from all sources
- 🟩 **Web** — Web-gathered specifications and narratives
- 🟥 **YouTube** — Video specs and owner comments
- 🟦 **Twitter** — Public sentiment from Twitter/X
- 🟪 **Compare** — Variant or cross-car comparisons

### Run locally

```bash
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Deploy to Vercel

The `vercel.json` at the repo root points Vercel to the `web/` directory.

1. Push to GitHub
2. Import repo at [vercel.com](https://vercel.com) → New Project
3. Deploy — no environment variables needed

The app auto-discovers all research files matching the naming convention. Adding a new research file makes it appear in the UI automatically on the next build.

---

## Skills

| Skill | Purpose |
|---|---|
| `web-search` | Broad web research across news, media, forums, and blogs |
| `youtube-research` | Extract specs and narrative from YouTube via YouTube MCP |
| `twitter-research` | Extract public sentiment from Twitter/X via Twitter MCP |
| `car-comparison` | Compare variants or models |
| `car-suggestion` | Recommend a car based on user needs |

---

## Language

Research content is written primarily in **Indonesian** (`id`), with English terms used for technical fields (ADAS, ground clearance, NVH, etc.) following the existing repo style.
