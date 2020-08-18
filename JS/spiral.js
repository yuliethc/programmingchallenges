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
 * Excercise finish by @madacol
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

const SEQUENCE = [
    DOWN,
    RIGHT,
    UP,
    LEFT
]

function vectorSum(a,b) {
    return a.map((val, i) => (val + b[i]))
}
function changeDir(dir) {
    const i = SEQUENCE.findIndex(seqDir=>((seqDir[X]===dir[X])&&(seqDir[Y]===dir[Y])))
    const next_i = (i+1) % 4
    return SEQUENCE[next_i]
}
function isPosValid(pos, limits, dir) {

    const axis = dir.findIndex(coord=>coord!==0)
    const scalar = pos[axis]
    const [start, end] = limits[axis]
    const isStartValid = (start <= scalar)
    const isEndValid = (scalar <= end)
    const isValid = isStartValid && isEndValid
    {
        // Update limits
        if (!isStartValid) {
            limits[axis][START]++
            return false
        }
        if (!isEndValid) {
            limits[axis][END]--
            return false
        }
    }
    return true
}
function getNextPosition(pos, dir, limits) {
    let nextPosCandidate = vectorSum(pos, dir);
    if (!isPosValid(nextPosCandidate, limits, dir)) {
        dir = changeDir(dir);
        nextPosCandidate = vectorSum(pos, dir);
        if (!isPosValid(nextPosCandidate, limits, dir)) return false // End of spiral
    }
    pos = nextPosCandidate;

    return {dir, pos}
}
// Mutable
function writeNumToMatrix(num, pos, matrix) {
    return matrix[pos[Y]][pos[X]] = num;
}

// const cmd = getNextPosition([0, 4], [0, 1], [[0, 3], [0, 4]])
// console.log(cmd)

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
        [X]: [1, matrixRowSize-1],
        [Y]: [0, matrixRowSize-1]
    }
    const lastIndex = matrixRowSize**2;
    for (let i = 0; i < lastIndex; i++) {
        const num = data[i] || 0;
        writeNumToMatrix(num, pos, matrix);
        const result = getNextPosition(pos, dir, limits)
        pos = result.pos;
        dir = result.dir;
    }

    return {matrix};
}

/* Implement and run test cases for your function */
const resultados = spiralfill([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]);

console.log(resultados);