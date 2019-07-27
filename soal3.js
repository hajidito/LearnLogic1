function leftElbowTriangleMirror(number) {
    let sideNumber;
    let sideTriangle;
    for (sideNumber = 0; sideNumber < number; sideNumber++) {
        let showStar = "";
        for (x = 0; x < number - sideNumber; x++) {
            sideTriangle = "  ";
            showStar = showStar.concat(sideTriangle)
        }
        for (y = 0; y <= sideNumber; y++) {
            showStar = showStar.concat(' *')
        }
        console.log(showStar);
    }
}

leftElbowTriangleMirror(5)
