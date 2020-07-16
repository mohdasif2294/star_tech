window.onload = function(){
	document.getElementById('save').onclick = function (){
		var category = document.getElementById('category').value;
		var brand = document.getElementById('brand').value;
		var size = document.getElementById('size').value;
		chrome.storage.sync.get('profile',function(items) {
			items.profile[category] = {"brands":brand, "size":size}
			chrome.storage.sync.set(items, function() {
				console.log('Data successfully saved to the storage!');
			});
		});
	}
	document.getElementById('get').onclick = function (){
		chrome.storage.sync.get('profile', function(data){
			console.log("asd",data.profile);
			alert(JSON.stringify(data['profile']));
		});
	}
}