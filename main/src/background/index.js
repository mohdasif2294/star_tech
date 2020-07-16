/* eslint-disable no-undef */
console.log('Background.js file loaded');

/* const defaultUninstallURL = () => {
  return process.env.NODE_ENV === 'production'
    ? 'https://wwww.github.com/kryptokinght'
    : '';
}; */

browser.runtime.onMessage.addListener(function (message) {
  console.log(message);
});





chrome.runtime.onInstalled.addListener(function() {
  var data = null;
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.open(
    "GET",
    "http://catalog.stage.myntra.com/myntra-catalog-service/globalattribute/v2/all"
  );
  xhr.setRequestHeader("accept", "application/json");
  xhr.setRequestHeader("authorization", "Basic YTph");
  xhr.setRequestHeader("cache-control", "no-cache,no-cache");
  xhr.send(data);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      var resp = JSON.parse(xhr.responseText);
      var types = {};
      for (c in resp.attributeTypes) {
        types[resp.attributeTypes[c]["typeName"]] = [];
        for (d in resp.attributeTypes[c]["allAttributeValues"]) {
          types[resp.attributeTypes[c]["typeName"]].push(
            resp.attributeTypes[c]["allAttributeValues"][d]["attributeValue"]
          );
        }
      }
      chrome.storage.local.set({ types: types }, function() {
        console.log("values set");
      });
    }
  };
  chrome.storage.local.get("types", function(data) {
    console.log(data.types);
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: "www.myntra.com" }
          })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ]);
  });
});
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  var urlobj = new URL(tab.url);
  console.log(tab.url);
  console.log(urlobj);
  if (urlobj.host == "www.myntra.com") {
    chrome.storage.sync.get("profile", function(data) {
      console.log(data.profile);
      var category = Object.keys(data.profile);
      var pathname = urlobj.pathname.split("/").slice(-1)[0];
      console.log(pathname);
      var tempbrand = [];
      var tempSize = [];
      var uri = "";
      var uri_enc = "";
      if (category.includes(pathname)) {
        if (urlobj.search === "") {
          urlobj.search = "?f=";
          uri = "Brand:" + data.profile[pathname]["brands"];
          uriSize = "Size:" + data.profile[pathname]["size"];
          uri_enc = encodeURIComponent(uri);
        } else {
          for (brand in data.profile[pathname]["brands"]) {
            var uridec = decodeURIComponent(urlobj.search);
            if (!uridec.includes(data.profile[pathname]["brands"][brand])) {
              tempbrand.push(data.profile[pathname]["brands"][brand]);
              console.log(data.profile[pathname]["brands"][brand]);
            }
          }

          for (size in data.profile[pathname]["size"]) {
            var uridec = decodeURIComponent(urlobj.search);
            if (!uridec.includes(data.profile[pathname]["size"][size])) {
              tempSize.push(data.profile[pathname]["size"][size]);
              console.log(data.profile[pathname]["size"][size]);
            }
          }
          if (tempbrand.length > 0 || tempSize.length > 0) {
            uri = "," + tempbrand + "::" + tempSize;
            uri_enc = encodeURIComponent(uri);
          }
        }
        var myNewUrl =
          urlobj.origin + urlobj.pathname + urlobj.search + uri_enc;
        console.log(myNewUrl);
      }
      if (tab.url != myNewUrl) {
        chrome.tabs.update(tabId, { url: myNewUrl });
      }
    });
  }
});
