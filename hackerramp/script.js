window.onload = function(){
	document.getElementById('save').onclick = function (){
	var value = document.getElementById('saveLine').value;
	//alert(value);
	//console.log(value);
	
	chrome.storage.sync.set({'myLine': value},function(){
	alert('Success!');
	}
	);
	}

	document.getElementById('get').onclick = function (){
	chrome.storage.sync.get('myLine', function(data){
	alert(data.myLine);
	});
	}
}
