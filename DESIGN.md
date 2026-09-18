# Qasim design system

Cinematic personal portfolio. Dark forest paper, golden-hour accent, huge type. Adapted from Awwwards portfolios (Jens Bosman full-bleed name, Dylan Brouwer loader + showreel scroll, TRIONN pinned work) and Inspo captures (photographic overlay, manifesto about, statement footer, word-as-art hero). Do not copy those sites. Keep the gravity: mid earthy paper, grotesk display, warm accent.

## Macrostructure

Photographic hero + marquee skills + pinned horizontal reels + manifesto about + inverted contact + colophon.

## Color

| Token | Hex | Role |
| --- | --- | --- |
| ink | `#0c100e` | page ground |
| ink-soft | `#161c18` | raised surface |
| paper | `#ede6d6` | primary type |
| mist | `#9a9284` | meta type |
| moss | `#8fa86a` | live / available |
| sun | `#d6a45a` | golden hour accent |
| ember | `#c45a32` | play / heat |
| bark | `#2c241c` | deep panel |

Hairline rules: paper at 14% on ink. No drop shadows. Radius stays near 0 so frames read like a gate, not a card UI.

## Type

- Display: Syne. Huge name, section titles.
- Voice: Fraunces italic. The one poetic line.
- Body: Outfit.
- Meta / slate: Geist Mono.

Fluid scale from [Utopia](https://utopia.fyi/type/calculator/?c=320,16,1.2,1760,20,1.333,8,2): `--step--2` through `--step-8`. Display on large screens lands near 200px. Section seams use `--space-section`: `clamp(4.5rem, 2rem + 8vw, 10rem)`.

## Motion

Lenis + GSAP ScrollTrigger for the pinned reel strip. Motion for page shutter, loader, and lucide-animated icons. ShaderGradient sits behind the hero on desktop only, paused offscreen and under `prefers-reduced-motion`. Horizontal pin is disabled under 768px and under reduced motion.

## BEM

Blocks: `site-header`, `hero`, `marquee`, `reels`, `reel-card`, `about`, `craft`, `contact`, `site-footer`, `loader`, `shutter`. Elements with `__`, modifiers with `--`.
