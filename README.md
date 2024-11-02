# YouTube Location Masker

[![GitHub Repo](https://img.shields.io/badge/GitHub-Cloudverge-blue?logo=github)](https://github.com/Cloudveerge/YouTube-Location-Masker)
[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/{extension-id}.svg?label=Chrome%20Web%20Store&color=red)](https://chrome.google.com/webstore/detail/{extension-id})
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/Cloudveerge/YouTube-Location-Masker/blob/main/LICENSE)

> **Your Privacy, Enhanced.** Customize or hide your YouTube location tag seamlessly. Perfect for streamers and privacy-conscious users.

---

## Features

- **️ Customizable Location Tag** – Set your desired country code to replace YouTube's automatic location display.
- **Persistent Storage** – Your custom settings are saved, so you don’t have to re-enter them each time.
- **Auto-Reload for Instant Updates** – YouTube tabs refresh automatically when settings are applied.
- **Simple & Clean Interface** – Easy-to-use input for fast customization.

---

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Cloudveerge/YouTube-Location-Masker.git
   cd YouTube-Location-Masker
   ```

2. **Load as an Unpacked Extension**:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable **Developer Mode** in the top-right corner.
   - Click **Load unpacked** and select the cloned `YouTube-Location-Masker` directory.

---

## Usage

1. **Launch YouTube** on Chrome.
2. Click the **YouTube Location Masker** extension icon in the toolbar.
3. Enter a custom country code in the input box and click **Change**.
4. YouTube will automatically refresh with your updated location tag.

---

##️ Technical Overview

The extension is built using `manifest_version: 3`, leveraging key Chrome Extension APIs for secure functionality:

- **popup.js**: Handles user input and saves the country code in Chrome storage. Injects the code to dynamically alter YouTube's displayed location tag.
- **content.js**: Observes and dynamically applies changes to the YouTube location tag as the page loads.

#### File Structure

```plaintext
YouTube-Location-Masker/
├── manifest.json
├── popup.html
├── popup.js
├── content.js
├── /UI/CSS/
│   ├── UI.css
│   └── popup.css
└── logo.png
```

---

## Contributing

We welcome all contributions! Whether it's a bug fix, a new feature, or improvements to documentation, your input is appreciated. To contribute:

1. **Fork the repository**.
2. **Create a branch** for your feature or bug fix.
3. **Submit a pull request**.

For major changes, please open an issue first to discuss what you’d like to change.

---

## Donations

Your support helps us improve! If this project is helpful to you, please consider supporting via our [Telegram Channel](https://t.me/Cloudverge).

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

### Author

Created by [Cloudverge](https://t.me/Cloudverge) with privacy and user experience in mind.
