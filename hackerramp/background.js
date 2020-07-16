
chrome.runtime.onInstalled.addListener(function() {
    var data = null;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open("GET", "http://catalog.stage.myntra.com/myntra-catalog-service/globalattribute/v2/all");
    xhr.setRequestHeader("accept", "application/json");
    xhr.setRequestHeader("authorization", "Basic YTph");
    xhr.setRequestHeader("cache-control", "no-cache,no-cache");
    xhr.send(data);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var resp = JSON.parse(xhr.responseText);
            var types = {};
            for( c in resp.attributeTypes){
                types[resp.attributeTypes[c]['typeName']]=[];
                for ( d in resp.attributeTypes[c]['allAttributeValues']) {
                    types[resp.attributeTypes[c]['typeName']].push(resp.attributeTypes[c]['allAttributeValues'][d]['attributeValue'])
               }
            }
            chrome.storage.local.set({'types':types},function(){
                     console.log("values set")
            });
        }
    }
    chrome.storage.local.get('types', function(data) {
        console.log(data.types);
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'www.myntra.com'},
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    var myNewUrl = "https://www.myntra.com/shoes";
    //console.log(myNewUrl);
    //console.log(tab);
     var rs = tab.url.split("/");
     console.log(rs);
    var urlobj = new URL(tab.url);
    //console.log(pathname);
    if ( urlobj.host == "www.myntra.com")
    {
        chrome.storage.sync.get('profile', function(data){
            console.log(data.profile);
            var category = Object.keys(data.profile);
            var pathname = urlobj.pathname.split("/").slice(-1)[0];
            console.log(pathname);
            if (category.includes(pathname)){
                var uri = "Brand:" + data.profile[pathname]['brands'];
                var uri_enc = encodeURIComponent(uri);
                var myNewUrl = urlobj.origin+urlobj.pathname+urlobj.search+uri_enc;
                console.log(myNewUrl);
            }
            //console.log("keysss", category[0])
            //console.log("normal brand", data.profile[category[0]]['brands'])

            // uri = "Brand:" + data.profile[category[0]]['brands']
            //
            // //console.log("my new url is", myNewUrl + uri_enc);
            // myNewUrl=myNewUrl+uri_enc
            chrome.tabs.update(tabId, {url:  myNewUrl});
        });
        //chrome.tabs.update(sender.tab.id, {url: newURL})
    }
    
});