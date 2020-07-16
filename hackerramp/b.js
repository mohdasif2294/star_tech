chrome.runtime.onMessage.addListener(function(message, sender, response) {
    if (message.loadURL) {
        //var newURL = sender.tab.url.replace("www.myntra.com", "www.myntra.com/shoes");
        //var newURL = "https://www.myntra.com/shoes";
        chrome.storage.sync.get('myLine', function(data){
            console.log(data.myLine);
            var myNewUrl = "https://www.myntra.com/shoes?f="
            console.log(myNewUrl);
            uri = "Brand:" + data.myLine
            var uri_enc = encodeURIComponent(uri);
            console.log("my new url is", myNewUrl + uri_enc);
            myNewUrl=myNewUrl+uri_enc
            chrome.tabs.update(sender.tab.id, {url:  myNewUrl});
        });
        //chrome.tabs.update(sender.tab.id, {url: newURL})
    }
});
