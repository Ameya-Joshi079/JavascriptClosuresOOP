/*
 Lec 396: Exercise:
 1. Create a constructor function for a Vehicle

 2. Every object/instance created from this constructor should have a make, model and year property

 3. Each object/instance should have a property call isRunning which should be set to false

 4. Every object created from the constructor function should have a function called turnOn(), 

    which changes the isRunning of that perticular instance to true

 5. Each object created from the constructor function should have a function called turnOff() 
    which changes the isRunning of that perticular instance to false

 6. Every object created from the constructor function should have a method called honk() which returns the
    string "Beep" only if the isRunning property of that instance is true

*/

function Vehicle(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
}

Vehicle.prototype.isRunning = false;

Vehicle.prototype.turnOn = function(){
    this.isRunning = true;
    console.log(this.model + "'s engine is turned on");
}

Vehicle.prototype.turnOff = function(){
    this.isRunning = false;
    console.log(this.model + "'s engine is turned off");
}

Vehicle.prototype.honk = function(){
    if(this.isRunning){
     return this.model + " says Beep";
    }else{
        return "Engine for" + this.model +  " instance is turned off";
    }
}

var Ferrari = new Vehicle("Ferrari", "LaFerrari", 2019);

var Corvette = new Vehicle("Chevrolet", "Corvette", "2018");

var Mustang = new Vehicle("Ford", "Mustang", 2019);

var Lamborghini = new Vehicle("Lamborghini", "Sesto Elemento", 2019);

console.log(Lamborghini.honk());
console.log(Ferrari.honk());
console.log(Corvette.honk());
console.log(Mustang.honk());


Lamborghini.turnOn();

Ferrari.turnOn();

Mustang.turnOn();

Corvette.turnOn();

console.log(Lamborghini.honk());
console.log(Ferrari.honk());
console.log(Corvette.honk());
console.log(Mustang.honk());


Lamborghini.turnOff();
Corvette.turnOff();
Mustang.turnOff();
Ferrari.turnOff();


