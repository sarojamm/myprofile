var carlike = function(obj, loc){
    obj.loc = loc;
    obj.move = function(){
		obj.loc++; // this.loc++;
	}
	console.log(this.loc);; //to call .function
    return obj;
} 
///////////////////////////////////////
// car class move method will be created in the memory for every object 
var Car = function( loc){
	var obj ={loc : loc}; 
    obj.move = function(){
		obj.loc++; // this.loc++;
	}
	console.log(this.loc);; //to call .function
    return obj;
} 

var amy = Car(1);
amy.move();
var ben ==Car(9);
ben.move(); 
//////////////////////////////////////
// to soleve the problem :car class move method will be created in the memory for every object 
// this method will be shared by all objects.

var Car = function( loc){
	var obj ={loc : loc}; 
    obj.move = move;
	console.log(this.loc);; //to call .function
    return obj;
} 
var move =function(){
	this.loc++; // this.loc++;
}

var amy = Car(1);
amy.move();
var ben ==Car(9);
ben.move();

/////////////////////////////////////////

//////////////////////////////////////
// to soleve the problem :car class move method will be created in the memory for every object 
// this method will be shared by all objects.

var Car = function( loc){
	var obj ={loc : loc}; 
    obj.move = move;
    obj.on = on;
    obj.off = off;
	console.log(this.loc);; //to call .function
    return obj;
} 
var on =function(){ 
}
var off =function(){ 
}
var move =function(){
	this.loc++; // this.loc++;
}
var amy = Car(1);
amy.move();
var ben ==Car(9);
ben.move();

/////////////////////////////////////////

//////////////////////////////////////
// to soleve the problem :car class move method will be created in the memory for every object 
// this method will be shared by all objects.
// iterate all methods programatically. these will be automatically added.

var Car = function( loc){
	var obj ={loc : loc}; 
    extend(obj, methods);
	console.log(this.loc);; //to call .function
    return obj;
} 
var methods ={
	on : function(){ },
 	off :function(){ },
	move : function(){
		this.loc++; // this.loc++;
	} 
}

var amy = Car(1);
amy.move();
var ben ==Car(9);
ben.move();

/////////////////////////////////////////
//////////////////////////////////////
// to soleve the problem :car class move method will be created in the memory for every object 
// this method will be shared by all objects.
// iterate all methods programatically. these will be automatically added.
// this will not have access to move object
var Car = function( loc){
	var obj ={loc : loc}; 
    extend(obj, Car.methods);
	console.log(this.loc);; //to call .function
    return obj;
} 
Car.methods ={
	on : function(){ },
 	off :function(){ },
	move : function(){
		this.loc++; // this.loc++;
	} 
}

var amy = Car(1);
amy.move();
var ben ==Car(9);
ben.move();

/////////////////////////////////////////

/////////////////////////////////////////
//////////////////////////////////////
// to soleve the problem :car class move method will be created in the memory for every object 
// this method will be shared by all objects.
// iterate all methods programatically. these will be automatically added.
// this will not have access to move object
var Car = function( loc){
	var obj =object.create( Car.methods);
	return obj;
} 
Car.methods ={
	on : function(){ },
 	off :function(){ },
	move : function(){
		this.loc++; // this.loc++;
	} 
}

var amy = Car(1);
amy.move();
var ben ==Car(9);
ben.move();

/////////////////////////////////////////

//////////////////////////////////////
 var Car = function( loc){
	var obj =object.create( Car.prototype);
	return obj;
} 
Car.prototype.move =  function(){
	this.loc++; // this.loc++; 
}
Car.prototype.on =  function(){ }
Car.prototype.off =  function(){ }
var amy = Car(1);
amy.move();
var ben =Car(9);
ben.move();

/////////////////////////////////////////
////////////// pseudoclassical pattern ////////////////////////
 var Car = function( loc){
	 this.loc = loc;
} 
Car.prototype.move =  function(){
	this.loc++; // this.loc++; 
}
Car.prototype.on =  function(){ }
Car.prototype.off =  function(){ }
// --------------------------------
var amy = new Car(1);
amy.move();
var ben = new Car(9);
ben.move();

/////////////////////////////////////////
// super class and subclass
var Car = function( loc){
	var obj = {loc : loc};
	obj.move = funtion(){
		obj.loc++;
	};
	return obj;
} 
var Van = function( loc){
	var obj = Car(loc);
	obj.grab = funtion(){ };
	return obj;
} 
var Cop = function( loc){
	var obj = Car(loc);
	obj.call = funtion(){ };
	return obj;
} 
// --------------------------------
var amy = new Van(1);
amy.move();
var ben = new Van(9);
ben.move();
var cal = new Cop(2);
cal.move();
cal.call();
//////////////////////////////////
