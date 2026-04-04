# Cars Research

Indonesian automotive research repository. Contains in-depth research, variant comparisons, and buyer recommendations for cars available in the Indonesian market.

## What's in This Repo

| Folder / File | Purpose |
|---|---|
| `research/` | All car research files, organized by model |
| `research/variant-suggestion-questionnaire.md` | Questionnaire used for buyer recommendations |
| `memory.md` | Verified insights accumulated across research sessions |
| `sources.md` | Source links organized by car model |
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
| `web-research` | Specs and narrative from web sources (news, media, forums, blogs) |
| `youtube-research` | Specs from video descriptions/transcripts + narrative from comments |
| `twitter-research` | Public sentiment, owner opinions, and experiences from Twitter/X |
| `master-research` | Final compiled research synthesizing all three sources |
| `variant-comparison` | Side-by-side comparison of trims within the same model |

---

## Agent Workflows

The `otomotif-research` agent handles three workflows:

### 1. Research

Researches a car model by gathering from three sources:
- **Web** — minimum 100 sources (news, media, forums, blogs)
- **YouTube** — minimum 50 sources via YouTube MCP
- **Twitter** — minimum 100 sources (tweets + replies) via Twitter MCP

Produces 4 markdown files per car: web, youtube, twitter, and master research.

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
