chrome.storage.sync.get("countryCode", ({ countryCode }) => {
  if (countryCode) {
    const applyCountryCode = () => {
      const element = document.querySelector("#country-code.style-scope.ytd-topbar-logo-renderer");
      if (element) {
        element.textContent = countryCode;
      }
    };

    applyCountryCode();

    const observer = new MutationObserver(applyCountryCode);
    const targetNode = document.body;

    if (targetNode) {
      observer.observe(targetNode, { childList: true, subtree: true });
    }
  }
});

