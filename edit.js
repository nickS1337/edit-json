

var test_json = {
	"test0": {
		"asd": "asd",
		"dsa": "dsa"
	},
	"test1": ["asdfgh"]
}

edit = function(data){
		
	console.log("input", data);
	
	if (typeof data !== "object") throw new Error("Error: data not JSON.");

	var primary_keys = Object.keys(data);
	console.log("primary_keys", primary_keys);
	
	for (var i = 0; i < primary_keys.length; i++){
	
		var secondary_keys = Object.keys(test_json[primary_keys[i]]);
	
		console.log("keys in " + primary_keys[i] + ": " + secondary_keys);
		
		if (primary_keys[i] instanceof Array){
			//Cycle through the array.
			console.log(primary_keys[i] + " is an array");
		}
	
	}
	
}

edit(test_json);