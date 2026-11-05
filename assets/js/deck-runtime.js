/**
 * deck-runtime.js
 * Shared runtime for GitHub Universe 2026 Presentation Series
 */

(function () {
  // All presentations registry
  window.PRESENTATION_DECKS = [
    {
      id: "01-keynote-debrief",
      title: "Part 1: Keynote Opening Debrief",
      duration: "3–5 mins",
      badge: "Architecture Intro",
      videoUrl: "https://www.youtube.com/watch?v=AArI948SDz8",
      url: "../01-keynote-debrief/"
    },
    {
      id: "02-keynote-recap",
      title: "Part 2: Everything Announced Recap",
      duration: "8–10 mins",
      badge: "Full Product Breakdown",
      videoUrl: "https://www.youtube.com/watch?v=xbCa0aa4tRM",
      url: "../02-keynote-recap/"
    }
  ];

  window.initPresentationDeck = function (options = {}) {
    const currentDeckId = options.currentDeckId || "";
    const warnSecs = options.warnSecs || 180;  // Amber threshold
    const alertSecs = options.alertSecs || 300; // Red threshold

    // Initialize Reveal
    Reveal.initialize({
      width: 1200,
      height: 720,
      margin: 0.06,
      minScale: 0.2,
      maxScale: 2.0,
      controls: false, // Using custom floating HUD controls
      progress: true,
      center: true,
      hash: true,
      history: true,
      transition: 'slide',
      transitionSpeed: 'fast',
      backgroundTransition: 'fade',
      plugins: [ RevealHighlight, RevealNotes ]
    });

    // Populate Deck Switcher Dropdown
    const menuEl = document.getElementById('deckDropdownMenu');
    if (menuEl) {
      menuEl.innerHTML = `
        <div style="padding: 6px 12px; font-size: 10px; text-transform: uppercase; letter-spacing: 0.6px; color: var(--gh-muted); background: #161b22; border-bottom: 1px solid var(--gh-border);">
          Switch Presentation
        </div>
        <a href="../../" class="deck-dropdown-item" style="color: var(--gh-blue) !important; font-weight: 500;">
          ← Presentation Hub Portal
        </a>
      `;

      window.PRESENTATION_DECKS.forEach(deck => {
        const isActive = deck.id === currentDeckId;
        const item = document.createElement('a');
        item.href = deck.url;
        item.className = `deck-dropdown-item ${isActive ? 'active' : ''}`;
        item.innerHTML = `
          <div style="font-weight: ${isActive ? '700' : '500'};">${deck.title}</div>
          <div style="font-size: 10px; color: var(--gh-muted); display: flex; justify-content: space-between; margin-top: 2px;">
            <span>${deck.badge}</span>
            <span>⏱️ ${deck.duration}</span>
          </div>
        `;
        menuEl.appendChild(item);
      });
    }

    // Stopwatch Timer
    let secondsElapsed = 0;
    const timerElement = document.getElementById('presentationTimer');
    if (timerElement) {
      setInterval(() => {
        secondsElapsed++;
        const mins = String(Math.floor(secondsElapsed / 60)).padStart(2, '0');
        const secs = String(secondsElapsed % 60).padStart(2, '0');
        timerElement.textContent = `${mins}:${secs}`;
        if (secondsElapsed >= alertSecs) {
          timerElement.style.color = 'var(--gh-coral)';
          timerElement.style.borderColor = 'var(--gh-coral)';
        } else if (secondsElapsed >= warnSecs) {
          timerElement.style.color = 'var(--gh-amber)';
          timerElement.style.borderColor = 'var(--gh-amber)';
        }
      }, 1000);
    }

    // Synchronize On-Screen Speaker Notes Overlay
    function updateNotesOverlay() {
      const currentSlide = Reveal.getCurrentSlide();
      if (!currentSlide) return;
      const notesEl = currentSlide.querySelector('aside.notes');
      const targetEl = document.getElementById('notesContent');
      if (targetEl) {
        if (notesEl && notesEl.innerHTML.trim().length > 0) {
          targetEl.innerHTML = `<p>${notesEl.innerHTML.trim().replace(/\n\s*\n/g, '</p><p>')}</p>`;
        } else {
          targetEl.innerHTML = '<p style="color: var(--gh-muted);"><em>No speaker notes provided for this slide.</em></p>';
        }
      }
    }

    Reveal.on('slidechanged', updateNotesOverlay);
    Reveal.on('ready', updateNotesOverlay);

    // Global Key Listener for Presenter Conveniences
    window.addEventListener('keydown', (e) => {
      // 'N' toggles in-slide notes HUD
      if (e.key === 'n' || e.key === 'N') {
        window.toggleNotesOverlay();
      }
      // 'J' or 'P' to jump to next presentation if at the end
      if ((e.key === 'j' || e.key === 'J') && options.nextDeckUrl) {
        window.location.href = options.nextDeckUrl;
      }
      // Close dropdown on Escape
      if (e.key === 'Escape') {
        const menu = document.getElementById('deckDropdownMenu');
        if (menu && menu.classList.contains('show')) {
          menu.classList.remove('show');
        }
      }
    });

    // Close dropdown on click outside
    window.addEventListener('click', (e) => {
      const switcher = document.querySelector('.deck-switcher');
      const menu = document.getElementById('deckDropdownMenu');
      if (switcher && menu && !switcher.contains(e.target)) {
        menu.classList.remove('show');
      }
    });
  };

  window.toggleDeckMenu = function () {
    const menu = document.getElementById('deckDropdownMenu');
    if (menu) {
      menu.classList.toggle('show');
    }
  };

  window.toggleNotesOverlay = function () {
    const overlay = document.getElementById('notesOverlay');
    if (overlay) {
      overlay.classList.toggle('active');
    }
  };

  window.toggleFullScreen = function () {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };
})();
