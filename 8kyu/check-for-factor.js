// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// SOLUTION 1

function checkForFactor(base, factor){
    if(base%factor === 0){
        return true
    }else{
        return false
    }
}

//SOLUTION 2

function checkForFactor(base, factor){
    return base%factor == 0
}

