# Focus Guard — Instagram Delay (Chrome/Edge)

[![Made with MV3](https://img.shields.io/badge/Manifest-V3-000?logo=googlechrome&logoColor=white)](https://developer.chrome.com/docs/extensions/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](#license)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-ff69b4.svg)](#contributing)

Focus Guard is a tiny browser extension that inserts a short, configurable delay before Instagram loads.  
That micro-pause adds just enough friction to break the open-scroll autopilot so you can choose intentionally.

## ✨ Features
- **10–20s countdown overlay** (fully customizable)
- **“Skip once”** and **“Close tab”** actions
- Works on **all** `instagram.com/*` pages (Chrome + Microsoft Edge)
- **Zero tracking** — 100% local, no servers, no analytics
- Plain **JS + CSS**, simple MV3 content script

---

## 🚀 Quick Install (Developer Mode)

**Chrome**
1. Download or clone this repo.
2. Go to `chrome://extensions`.
3. Toggle **Developer mode** (top right).
4. Click **Load unpacked** → select this folder.
5. Open `https://instagram.com` — you’ll see the overlay.

**Edge (Chromium)**
1. Go to `edge://extensions`.
2. Enable **Developer mode** → **Load unpacked** → select the folder.
3. Open `https://instagram.com`.

> Re-loading changes:  
> - Edit JS/CSS → **Hard refresh** the Instagram tab (`Ctrl/⌘ + Shift + R`).  
> - Edit `manifest.json` → click **Reload** on the extension card.

---

## 📁 Project Structure
