window.onload = function(){
	document.getElementById('save').onclick = function (){
		var category = document.getElementById('category').value;
		var brand = document.getElementById('brand').value;
		var size = document.getElementById('size').value;
		var obj = {}
		obj[category] = {"brands":brand, "size":size}
		chrome.storage.sync.set({'profile': obj},function(){
		console.log("before alert");
		alert('Success!');
		console.log("here", obj);
	});
	}
	document.getElementById('get').onclick = function (){
		chrome.storage.sync.get('profile', function(data){
			console.log("asd",data.profile);
			alert(JSON.stringify(data['profile']));
		});
	}
}