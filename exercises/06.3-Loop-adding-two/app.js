var mySampleArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];
function pairwise(arr, func){
    for(var index=0; index < mySampleArray.length - 1; index++){
        if(index % 2 ==0){
            console.log(mySampleArray[index])
        }
    }
}
pairwise(mySampleArray, function(current){
    console.log(current)
})