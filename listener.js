chrome.browserAction.onClicked.addListener(function(tab) {//From Github
  chrome.tabs.executeScript(null,{file:'listener2.js'});
});