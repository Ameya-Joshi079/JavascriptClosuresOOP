/*
 We'll see how to use the call or apply functions inside constructors to dry up code

 Also, we'll see how the arguments object can come in handy when calling the call/apply functions

*/

function Car(make, model, year){
 this.make = make;
 this.year = year;
 this.model = model;
 this.noOfWheels = 4;
}

function MotorCycle(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
  this.noOfWheels = 2;
}

//The below code shows how we could use the call function to dry up our code
function MotorCycle2(make, model, year){
 Car.call(this, make, model, year);
 this.noOfWheels = 2;
}

var Ferrari = new Car("Ferrari", "LaFerrari", 2019);

var HarleyDavidson = new MotorCycle("Harley", "Powerhouse", 2018);

//The below code shows how we could use the arguments object such that we don't explicity have to supply the argument
function Motorcycle3(make, model, year){
  //The arguments object will have all the arguments passed to this function, i.e. in this case it's the
  //construction function Motorcycle3  
  Car.apply(this, arguments);
  
  this.noOfWheels = 2;
}

var Ducati = new Motorcycle3("Ducati", "Ducati999", 2019);

console.log("Make: " + Ducati.make + " Model: " + Ducati.model + " Year: " + Ducati.year + " Wheels: " + Ducati.noOfWheels); 
