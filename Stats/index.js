var events = require('events');
var util = require('util');
util.inherits(Stats, events.EventEmitter);

//-- Stats Obect Constructor -------
function Stats () 
{
	this.balance = 0;
	this.lastTemp = 0;
	events.EventEmitter.call(this);
}


//-- Stats Object prototypes -------
Stats.prototype.add = function(amount) 
{
	this.balance += amount;
	this.emit('balanceChange'); //emit (=fires) event
};

Stats.prototype.substruct = function(amount) 
{
	if(this.balance - amount >= 0) 
	{
		this.balance -= amount;
		this.emit('balanceChange'); //emit (=fires) event
	}
	else 
	{
		this.lastTemp = amount;
		this.emit('belowZero'); //emit (=fires) event
	}
};


module.exports = Stats;
