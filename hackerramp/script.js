window.onload = function(){
	document.getElementById('save').onclick = function (){
	var category = document.getElementById('category').value;
	var brand = document.getElementById('brand').value;
	var size = document.getElementById('size').value;
	//alert(value);
	//alert(category);
	var obj = {}
	obj[category] = {"brands":brand, "size":size}
	

	chrome.storage.sync.set({'profile': obj},function(){
	console.log("before alert");
	alert('Success!');
	console.log("here", obj);
	});

	//var cat = chrome.storage.sync.get('profile');
	//console.log("cat", cat);
	//chrome.storage.sync.set({'brand': brand}, function(){console.log('brand done')});
	//chrome.storage.sync.set({'size': size}, function(){console.log('size done')});
	}

	document.getElementById('get').onclick = function (){
	chrome.storage.sync.get('profile', function(data){
	console.log("asd",data.profile);
	alert(JSON.stringify(data['profile']));
	});
	}
}
