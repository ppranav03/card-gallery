# card-gallery

A personal photo gallery styled as a set of holographic trading cards, built with plain HTML, CSS, and JavaScript. Photos are displayed as interactive cards with a mouse-tracking holo glare/tilt effect, inspired by Pokémon rare holo cards.

## Features

- **3D tilt + glare on hover** — cards rotate and catch light based on cursor position.
- **Click to zoom** — clicking a card centers and scales it up; clicking again (or another card) restores it.
- **Rarity-based styling** — each card can be tagged with a `data-rarity` (e.g. `rare holo`, `rare holo v`, `common`) to control its holo clip/mask effect.
- **Responsive layout** — grid adjusts from a 4-column layout down to 2 columns on smaller screens.

## Project structure

```
card-gallery/
├── index.html        # Gallery markup, one .card block per photo
├── css/
│   ├── base.css       # Card shine/glare/holo effect variables and layers
│   ├── cards.css       # Card sizing, glare gradient, click/hover transitions
│   └── gallery.css    # Page layout and grid
├── js/
│   └── main.js        # Mousemove tilt/glare tracking and click-to-zoom behavior
└── assets/            # Photos and the site favicon
```

## Usage

This is a static site with no build step or dependencies. To view it locally, just open `index.html` in a browser, or serve the folder with any static file server, e.g.:

```bash
npx serve .
```

## Adding a new card

Add a new `.card` block inside `.gallery` in `index.html`:

```html
<div class="card" data-rarity="common">
  <div class="card__glare"></div>
  <img class="card__img" src="assets/YourPhoto.png" alt="Description" />
</div>
```

Then drop the corresponding image into `assets/`.
