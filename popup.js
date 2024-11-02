document.addEventListener("DOMContentLoaded", async () => {
  chrome.storage.sync.get("countryCode", ({ countryCode }) => {
    if (countryCode) {
      document.getElementById("countryCodeInput").value = countryCode;
    }
  });
});

document.getElementById("changeCountryButton").addEventListener("click", async () => {
  const countryCode = document.getElementById("countryCodeInput").value;

  if (countryCode) {
    chrome.storage.sync.set({ countryCode });

    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (code) => {
        const element = document.querySelector("#country-code.style-scope.ytd-topbar-logo-renderer");
        if (element) element.textContent = code;
      },
      args: [countryCode]
    });

    const youtubeTabs = await chrome.tabs.query({ url: "*://*.youtube.com/*" });
    youtubeTabs.forEach((youtubeTab) => {
      chrome.tabs.reload(youtubeTab.id);
    });
  }
});
