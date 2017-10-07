// TODO
// * dont show page before loading our popupTab
// * create timer for next reminder
// * input user name "wait, dalya, are you sure?"
// * input different websites (make usre we have premissions in menifest)
// * ask questions random number of times
// * change location and color of popupTab
// * change icon
// * arrange popup tab on extension icon 

chrome.webNavigation.onCommitted.addListener(function(e) {
  console.log("loggingOnCommited", e);

  chrome.runtime.onMessage.addListener((message) => {
    console.log("loggingOnRuntime", message);
    if (message === "closeTab") {
      chrome.tabs.remove(e.tabId);
    }
  });

  chrome.tabs.executeScript(null, {
    file: 'popupTab.js'
  });
  chrome.tabs.insertCSS(null, {
    file: "popupTab.css"
  });

}, {
  url: [
    {hostContains: 'facebook.com'},
    {hostContains: 'ynet.co.il'}
  ]}
);
