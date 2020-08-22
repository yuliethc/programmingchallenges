/*
# Spiral fill
# Calculate the size needed for a square matrix to hold n integers and
# add them to the matrix counter clockwise.

# You will only receive integers > 0 and < 999
# 
#
# Example 
#  spiralfill([1,2,3,4,5,6,7,8,9,10, 11])
#   
#      1   0    11  10
#      2   0    0   9
#      3   0    0   8    
#      4   5    6   7
# Example 
#  spiralfill(4, [1,2,3,4])
# 
#      1 4 
#      2 3 
#
# 
*/

/**
 * Calculate the size needed for a square matrix
 */
// function spiralfill(data) {

//   let size = Math.ceil(Math.sqrt(data.length));

//   return {size};
// }

// /* Implement and run test cases for your function */
// const resultados = spiralfill([1,2,3,4,5,6,7,8,9,10,11]);

// console.log(resultados);


/**
 * Excercise finished by @madacol
 * 
 */


const X = 0
const Y = 1

const START = 0
const END = 1

/**
 * STEPS - DIRECTION
 */
const DOWN  = [0 ,1]
const RIGHT = [1 ,0]
const UP    = [0 ,-1]
const LEFT  = [-1,0]

const ROTATION_SEQUENCE = [
    DOWN,
    RIGHT,
    UP,
    LEFT
]

function getNextPos(pos, dir) {
    // Perform a vector sum
    return [
        (pos[X] + dir[X]),
        (pos[Y] + dir[Y])
    ]
}
function changeDir(dir, offsetIndex=1) {
    const i = ROTATION_SEQUENCE.findIndex(seqDir=>seqDir===dir)
    const next_i = (i+offsetIndex) % 4
    return ROTATION_SEQUENCE[next_i]
}
// Mutable
function reduceLimits(limits, dir) {
    const oppositeDir = changeDir(dir, 2)
    const amountToReduce = dir.find(value=>value!==0)
    limits[oppositeDir]+=amountToReduce
}
function isPosInsideLimits(pos, limits, dir) {
    // find axis
    const axis = dir.findIndex(coord=>coord!==0)
    const scalar = pos[axis]
    const limit = limits[dir]
    const isDirIncreasing = dir[axis] === 1
    return isDirIncreasing ? (scalar <= limit) : (limit <= scalar)
}
function getNextPosition(pos, dir, limits) {
    let nextPosCandidate = getNextPos(pos, dir);
    if (!isPosInsideLimits(nextPosCandidate, limits, dir)) {
        dir = changeDir(dir);
        reduceLimits(limits, dir);
        nextPosCandidate = getNextPos(pos, dir);
        if (!isPosInsideLimits(nextPosCandidate, limits, dir)) return false // End of spiral
    }
    pos = nextPosCandidate;

    return {dir, pos}
}
// Mutable
function writeNumToMatrix(num, pos, matrix) {
    console.log(pos)
    return matrix[pos[Y]][pos[X]] = num;
}

/**
 * Calculate the size needed for a square matrix
 */
function spiralfill(data) {
    const matrixRowSize = Math.ceil(Math.sqrt(data.length));
    const matrix = []
    // Create rows in `matrix`
    for (let i = 0; i < matrixRowSize; i++) {
        matrix.push([]);
    }

    let pos = [0,0];
    let dir = DOWN;
    let limits = {
        [DOWN]: matrixRowSize-1,
        [RIGHT]: matrixRowSize-1,
        [UP]: 0,
        [LEFT]: 0
    }
    const lastIndex = matrixRowSize**2;
    for (let i = 0; i < lastIndex; i++) {
        const num = data[i] || 0;
        writeNumToMatrix(num, pos, matrix);
        const result = getNextPosition(pos, dir, limits)
        if (!result) {
            console.error("Finished")
            return {matrix};
        }
        pos = result.pos;
        dir = result.dir;
    }

}

/* Implement and run test cases for your function */
const resultados = spiralfill([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]);

console.log(resultados);