
function splitWord(word){
    const splitArray = ['pro','gram','merit','program','it','programmer']
    let result=[]
    for (let x = 0; x < splitArray.length; x++) {
        if (word.includes(splitArray[x])){
            result.push(splitArray[x])
        }
    }
    console.log(result)
    for (let y = 0; y < result.length; y++) {
        for (let z = 0; z < result.length; z++) {
            if (result[z].includes(result[y])){
                result.splice(y, 1);
                console.log(result)
            }
        }
    }
    // console.log(result)
}

// splitWord('programit')
splitWord('programmerit')