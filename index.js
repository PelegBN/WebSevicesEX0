var http = require('http');
var player = require ("./Stats");

var log = "";

var p1 = new player();

//-- the callback functions -------
function displayBalance() {
	var temp = "Player's points are: " + this.balance;
	log = log + temp + "\n";
	console.log(temp);
}

function Zero() {
	var temp = "Substructing " + this.lastTemp + " From " + this.balance + " is impossible (less then 0)";	
	log += temp + "\n";
	console.log(temp);
}

//-- creates a Stats instance and attach callbacks to events -------
p1.on("balanceChange", displayBalance);
p1.on("belowZero", Zero); 

p1.add(2);
p1.add(3);
p1.substruct(6);


var cbServer = function (req,res) {
	res.writeHead(200);
	res.end(log);
};

var server = http.createServer(cbServer);

server.listen(3000);