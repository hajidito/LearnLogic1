function leftElbowTriangle(number) {
    let sideNumber;
    let sideTriangle;
    for (sideNumber = 0; sideNumber < number; sideNumber++) { 
        let showStar="";
        for (i=0; i<= sideNumber; i++){
            sideTriangle = "* ";
            showStar = showStar.concat(sideTriangle)
        }
        console.log(showStar);
    }    
}

leftElbowTriangle(5)
