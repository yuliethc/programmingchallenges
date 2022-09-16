// Task 1

function logDairy() {
    var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
    for (let i = 0; i < dairy.length; i++) {
       console.log( dairy[i])    
    }
}

// Task 2
const animal = {
    canJump: true
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;
function birdCan(){
   for (x of Object.keys(bird)){
    console.log(`${x}: ${bird[x]}`);
    } 
}
// Task 3


function animalCan(){
   for (x in bird){
    console.log(`${x}: ${bird[x]}`);
    } 
}