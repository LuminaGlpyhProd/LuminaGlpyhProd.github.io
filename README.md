# Evelyn Animation — Website

## File Structure
```
evelyn-animation/
├── index.html       Home
├── work.html        Gallery
├── services.html    Services
├── pricing.html     Pricing
├── tos.html         Terms of Service
├── contact.html     Contact
├── admin.html       Admin panel (visual editor)
├── content.js       ✅ All editable content lives here
├── site.css         Styles
├── site.js          Scripts
└── assets/
    ├── images/      Put image files here
    └── videos/      Put video files here
```

## Updating content (no coding needed)
1. Open `yoursite.github.io/admin.html`
2. Password: `evelyn2026` — change this in `admin.html` before going live
3. Edit anything — gallery, services, pricing, ToS
4. Click **Download** → saves `content.js`
5. Go to GitHub repo → `content.js` → pencil icon → paste → Commit
6. Site updates in ~30 seconds ✅

## Using local images / videos
Use a relative path instead of a URL:
```js
thumbnail: "assets/images/my-project.jpg",
full:       "assets/videos/my-reel.mp4",
```

## GitHub Pages setup
1. Create a GitHub repo
2. Upload all files (keep folder structure intact)
3. Settings → Pages → Source: main branch → Save
4. Live at `https://yourusername.github.io/repo-name/`

## Changing the admin password
Open `admin.html`, find:
```js
const PASSWORD = "evelyn2026";
```
Change it to whatever you want.

---
Built by [spideyspidery](https://www.youtube.com/@SpideySpidery)
