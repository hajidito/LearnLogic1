function leftElbowTriangleReverse(number) {
    let sideNumber;
    let sideTriangle;
    for (sideNumber = number; sideNumber > 0; sideNumber--) { 
        let showStar="";
        for (i=sideNumber; i> 0; i--){
            sideTriangle = "* ";
            showStar = showStar.concat(sideTriangle)
        }
        console.log(showStar);
    }    
}

leftElbowTriangleReverse(5)
