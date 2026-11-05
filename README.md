# GitHub Universe 2026: Architecture Presentation Series

> **Modular Multi-Presentation Platform for Architecture Teams**  
> Covering the official **GitHub Universe 2026 Opening Keynote** ([Watch Keynote](https://www.youtube.com/watch?v=AArI948SDz8)) and **Official Keynote Recap** ([Watch Recap](https://www.youtube.com/watch?v=xbCa0aa4tRM))  
> Held October 28–29, 2026 at the Fort Mason Center in San Francisco, CA.

---

## 🌐 Live GitHub Pages Portal

Once enabled in repository settings (**Settings → Pages → Branch: `main`, Folder: `/ (root)`**):  
🔗 **`https://gilberterik.github.io/github-universe-2026-review/`**

---

## 📑 Presentation Architecture & Flow

This repository hosts **three interconnected presentations** sharing a unified design system and runtime engine:

```
github-universe-2026-review/
├── index.html                           # 🌟 Central Presentation Portal / Hub
├── README.md                            # Documentation & speaker guides
├── assets/
│   ├── css/
│   │   └── deck-theme.css               # Shared GitHub Universe cosmic dark theme
│   └── js/
│       └── deck-runtime.js              # Shared Reveal bootstrap, timer, HUD & switcher
└── presentations/
    ├── 01-keynote-debrief/              # ⏱️ Part 1: Opening Talk (3–5 mins)
    │   └── index.html                   # [Video: AArI948SDz8]
    ├── 02-keynote-recap/                # ⏱️ Part 2: Everything Announced (8–10 mins)
    │   └── index.html                   # [Video: xbCa0aa4tRM]
    └── 03-visual-summary/               # ⏱️ Part 3: Executive Visual Summary (3–5 mins)
        └── index.html                   # [Minimalist / Very Few Words]
```

### 🔗 Seamless Flow Between Presentations
* **At the end of Part 1 (Slide 9):**  
  There is a prominent **`Continue to Part 2: Everything Announced Recap ›`** callout button. You can also press <kbd>J</kbd> on your keyboard to instantly transition to Part 2 without touching the mouse.
* **Top HUD Dropdown:**  
  All decks include an instant switcher dropdown in the top bar to hop between Part 1, Part 2, Part 3, or back to the Hub at any time during your talk.

---

## 🎯 The Three Presentations

### [Part 1: Keynote Debrief & Architecture Shift](file:///C:/Users/erik/src/github.com/github-universe-2026-review/presentations/01-keynote-debrief/index.html)
* **Source Video:** [Opening Keynote (AArI948SDz8)](https://www.youtube.com/watch?v=AArI948SDz8)
* **Duration:** 3–5 minutes (Opening minutes of your talk)
* **Pacing Thresholds:** Amber warning at 3:00, red alert at 5:00.
* **Topics:** 
  - Octoverse 2026 milestones (225M developers, >40% agent PRs).
  - Jay Parikh's thesis: the shift from single-developer autocomplete to autonomous agent fleets.
  - Copilot Fusion dynamic model routing (Claude, GPT-4o, Gemini).
  - Cassidy Williams & Burke Holland live multi-repo demos.
  - Damian Brady's cross-surface mobile-to-cloud sandbox demo.
  - 4 high-level architectural takeaways.
  - **Final Slide:** Action button and keyboard shortcut (<kbd>J</kbd>) jumping directly to Part 2!

### [Part 2: Everything Announced — Official Keynote Recap](file:///C:/Users/erik/src/github.com/github-universe-2026-review/presentations/02-keynote-recap/index.html)
* **Source Video:** [Keynote Recap Video (xbCa0aa4tRM)](https://www.youtube.com/watch?v=xbCa0aa4tRM)
* **Duration:** 8–10 minutes (Comprehensive product and feature breakdown)
* **Pacing Thresholds:** Amber warning at 8:00, red alert at 10:00.
* **Topics:**
  - Copilot Fusion GA and subtask decomposition.
  - The dedicated Copilot App and Multi-Session Canvases (Figma/design token ingestion).
  - Copilot Projects: Cross-repository synchronization chains.
  - Copilot Automations: Event-driven background agents responding to production alerts.
  - Code Review "Max": Multi-model adversarial code reviews & security taint analysis.
  - Agent Merge: Autonomous semantic merge conflict and CI remediation.
  - Enterprise Shift: Consumption AI usage contracts & unified credit pools.
  - Rebuilding Git: Lockless ref updates and storage scaling for 45B+ Actions jobs.
  - Architecture Action Plan & team discussion kickoff.

### [Part 3: Executive Visual Summary (Few Words)](file:///C:/Users/erik/src/github.com/github-universe-2026-review/presentations/03-visual-summary/index.html)
* **Style:** High-impact, minimalist presentation with very few words per slide.
* **Duration:** 3–5 minutes (Fast executive briefing)
* **Pacing Thresholds:** Amber warning at 3:00, red alert at 5:00.
* **Topics Covered:**
  - **Infrastructure Upgrades:** Scaled for 45B+ Actions and machine write bursts.
  - **Copilot Fusion Model:** Dynamic multi-model routing across frontier reasoning models.
  - **Projects, Canvases & Continuity:** Cross-repo PR chains and cloud execution state.
  - **Rebuilding Git for Agent Scale:** Lockless ref updates and cryptographic Actions lockfiles.
  - **Quality Merge & Governance:** Code Review Max, auto-merge repairs, and path-scoped CODEOWNERS gates.

---

## 🕹️ Presenter Keyboard Shortcuts

| Shortcut | Action | Details |
|---|---|---|
| <kbd>→</kbd> / <kbd>Space</kbd> | **Next Slide** | Advances forward |
| <kbd>←</kbd> | **Previous Slide** | Steps back |
| <kbd>J</kbd> | **Jump to Next Deck** | Transitions from the end of Part 1 directly to Part 2 |
| <kbd>S</kbd> | **Dual Speaker View** | Opens official presenter window with notes and timer |
| <kbd>N</kbd> or **Notes** | **In-Slide Notes HUD** | Opens frosted-glass talking points directly on screen |
| <kbd>Esc</kbd> or <kbd>O</kbd> | **Slide Matrix** | Bird's-eye view to jump directly to any slide during Q&A |
| <kbd>F</kbd> | **Fullscreen** | Toggles full-screen mode |
| **00:00 Stopwatch** | **Pacing Timer** | Real-time counter with automatic amber/red pacing alerts |

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
3. Save. The portal and both presentations will deploy live automatically at `https://gilberterik.github.io/github-universe-2026-review/`.
