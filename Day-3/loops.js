//* Loops Star printing

//* 1. Single column Star pattern

// for(let i = 1; i <= 5; i++){
//     console.log("*");
// }

//* 2. Square Star pattern

// for(let i = 1; i <= 5; i++){
//     let row = "";
//     for(let j = 1; j <= 5; j++){
//         row+="*"
//     }
//     console.log(row)
// }

//* 3. Right Half Pyramid Star Pattern

// for(let i = 1; i <= 5; i++){
//     let row = "";
//     for(let j = 1; j <= i; j++){
//         row+="*"
//     }
//     console.log(row)
// }


//* Inverted Right Half Pyramid

// for(let i = 1; i <= 5; i++){
//     let row = "";
//     for(let j = i; j <= 5; j++){
//         row+="*"
//     }
//     console.log(row)
// }

//* Left Half Pyramid Star Pattern

// for(let i = 1; i <= 5; i++){
//     let row = "";

//     // spaces
//     for(let j = 1; j <= 5 - i; j++){
//         row += " ";
//     }

//     // stars
//     for(let j = 1; j <= i; j++){
//         row += "*";
//     }

//     console.log(row);
// }

//* Inverted Left Half Pyramid

for(let i = 1; i <= 5; i++){
    let row = "";

    // spaces
    for(let j = 1; j <= i - 1; j++){
        row += " ";
    }

    // stars
    for(let j = i ; j <= 5; j++){
        row += "*";
    }

    console.log(row);
}

