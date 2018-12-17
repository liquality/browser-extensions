import ext from "./utils/ext";

ext.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
         chrome.tabs.executeScript(
           tabId,
           {
             file: 'scripts/inject.js'
           });
    }
})

ext.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.action === "perform-save") {
      console.log("Extension Type: ", "/* @echo extension */");
      console.log("PERFORM AJAX", request.data);

      sendResponse({ action: "saved" });
    }
  }
);
