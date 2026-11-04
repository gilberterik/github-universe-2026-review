# GitHub Universe 2026: Architecture Presentation Series

> **Modular Multi-Presentation Platform for Architecture Teams**  
> Covering the official **GitHub Universe 2026 Opening Keynote** ([Watch on YouTube](https://www.youtube.com/watch?v=AArI948SDz8))  
> Held October 28–29, 2026 at the Fort Mason Center in San Francisco, CA.

---

## 🌐 Live GitHub Pages Portal

Once enabled in repository settings (**Settings → Pages → Branch: `main`, Folder: `/ (root)`**):  
🔗 **`https://gilberterik.github.io/github-universe-2026-review/`**

---

## 📐 Architecture: Multi-Presentation Modular System

This repository is designed to host **multiple focused presentation segments** that share a single unified design system, HUD controls, stopwatch timer, and runtime engine—avoiding a monolithic "mega-presentation".

```
github-universe-2026-review/
├── .nojekyll                            # Enables GitHub Pages raw asset serving
├── index.html                           # Central Presentation Portal / Hub
├── README.md                            # Documentation & speaker guides
├── assets/
│   ├── css/
│   │   └── deck-theme.css               # Shared GitHub Universe cosmic dark theme
│   └── js/
│       └── deck-runtime.js              # Shared Reveal bootstrap, timer, HUD & switcher
└── presentations/
    ├── 01-keynote-debrief/              # Segment 1: Opening Talk (3–5 mins)
    │   └── index.html
    ├── 02-agentic-architecture/         # Segment 2: System Design & Multi-Repo (10–12 mins)
    │   └── index.html
    └── 03-devops-governance/            # Segment 3: Platform Scale & Security (8–10 mins)
        └── index.html
```

---

## 🎯 Presentation Segments

### [Segment 1: Opening Keynote Debrief](file:///C:/Users/erik/src/github.com/github-universe-2026-review/presentations/01-keynote-debrief/index.html)
* **Duration:** 3–5 minutes (Opening of your talk)
* **Pacing Thresholds:** Amber warning at 3:00, red alert at 5:00.
* **Topics:** Jay Parikh's macro shift thesis, Octoverse inflection points (225M developers, >40% agent PRs), Copilot Fusion announcement, Cassidy Williams & Burke Holland demos, and 4 high-level architectural imperatives.

### [Segment 2: Agentic Architecture & Multi-Repo Systems](file:///C:/Users/erik/src/github.com/github-universe-2026-review/presentations/02-agentic-architecture/index.html)
* **Duration:** 10–12 minutes (System design deep dive)
* **Pacing Thresholds:** Amber warning at 10:00, red alert at 12:00.
* **Topics:** Copilot Fusion dynamic model routing topology, multi-repo synchronization chains, the OpenAPI/Protobuf contract-first mandate, and ephemeral cloud sandboxes.

### [Segment 3: Platform Scale & Governance](file:///C:/Users/erik/src/github.com/github-universe-2026-review/presentations/03-devops-governance/index.html)
* **Duration:** 8–10 minutes (Infrastructure & DevOps deep dive)
* **Pacing Thresholds:** Amber warning at 8:00, red alert at 10:00.
* **Topics:** Rebuilding Git storage for agent write throughput, Actions Workflow Lockfiles, Multi-Cloud Compute VPC runners, blast-radius CODEOWNERS policies, and Dependabot Reachability Analysis.

---

## 🕹️ Unified Presenter Controls

Every presentation segment inherits the following built-in controls:

| Control / Shortcut | Action |
|---|---|
| **Top HUD Dropdown** | Instant segment switcher to hop between Segment 1, 2, 3, or return to the Hub |
| <kbd>→</kbd> / <kbd>Space</kbd> | Next slide |
| <kbd>←</kbd> | Previous slide |
| <kbd>S</kbd> | Official dual-screen presenter window with slide notes, upcoming preview, and timer |
| <kbd>N</kbd> or **Notes Button** | In-slide notes frosted-glass HUD (single-screen friendly) |
| <kbd>Esc</kbd> or <kbd>O</kbd> | Zoom out to bird's-eye slide matrix |
| <kbd>F</kbd> | Fullscreen toggle |
| **00:00 Stopwatch** | Real-time pacing timer customized to each segment's duration targets |

---

## ➕ How to Add Another Presentation Segment

Adding a new presentation takes less than 2 minutes:

1. Create a new directory under `presentations/`, e.g. `presentations/04-cost-optimization/`:
   ```powershell
   New-Item -ItemType Directory -Path "presentations\04-cost-optimization"
   ```
2. Copy `presentations/01-keynote-debrief/index.html` into your new folder.
3. In your new `index.html`:
   * Update the slide contents.
   * Update the runtime initialization call at the bottom:
     ```javascript
     initPresentationDeck({
       currentDeckId: "04-cost-optimization",
       warnSecs: 300,  // 5 mins warn
       alertSecs: 420  // 7 mins alert
     });
     ```
4. Add the entry to `window.PRESENTATION_DECKS` inside [assets/js/deck-runtime.js](file:///C:/Users/erik/src/github.com/github-universe-2026-review/assets/js/deck-runtime.js) and a card on [index.html](file:///C:/Users/erik/src/github.com/github-universe-2026-review/index.html).

---

## 📦 GitHub Pages Deployment

1. Commit and push:
   ```powershell
   git push -u origin main
   ```
2. In your GitHub repository:
   * **Settings → Pages**
   * **Source:** `Deploy from a branch`
   * **Branch:** `main`
   * **Folder:** `/ (root)`
3. Save. The portal and all segmented presentations will deploy live automatically.
