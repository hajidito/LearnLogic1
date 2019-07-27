
function splitWord(word){
    const splitArray = ['pro','gram','merit','program','it','programmer']
    let result=[]
    let result2=[]
    for (let x = 0; x < splitArray.length; x++) {
        if (word.includes(splitArray[x])){
            result.push(splitArray[x])
        }
    }
    console.log(result)
    for (let y = 0; y < result.length; y++) {
        if (result[y].concat(result[y+1]) == result[y+2]){
            result.splice(y+2, 1);
        }
    }
    console.log(result)
}

splitWord('programit')
splitWord('programmerit')