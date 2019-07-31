/*
 Testing closures
  
*/

function outer(){
    var count = 0;

    //The below function is a closure since it has a free variable count, i.e. a variable not defined inside the
    //inner function but has a value associated with it
    return function inner(){
        return ++count;
    }
}

var counter = outer();

var counter2 = outer();

console.log(counter());

console.log(counter());

console.log(counter());

console.log(counter());

function classRoom(){
    var instructors = ['Colt', 'Elie'];

    return {
        getInstructors: function(){
            return instructors;
        },

        addInstructors: function(instructorName){
          return instructors.push(instructorName);
        }
    }
}

var course1 = classRoom();

console.log(course1.getInstructors());

course1.addInstructors("Ian");

console.log(course1.getInstructors());

var course2 = classRoom();

console.log(course2.getInstructors());

console.log(counter2());

console.log(counter2());

console.log(counter2());

console.log(counter2());


