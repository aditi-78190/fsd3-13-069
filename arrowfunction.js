// write a function to take no. b/w 0 to 9 and return in words. 

// function word(num) {         METHOD 1
//     const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

//     if (num >= 0 && num <= 9)
//         return words[num];
//     else
//         return "Invalid Number";
// }

// console.log(word(78));


// const toWords = (digit)=>{          METHOD 2
//     switch(digit){
//         case 1:
//             return "one";
//         case 2:
//             return "two";
//         case 3:
//             return "three";
//         case 4:
//             return "four";
//         case 5 :
//             return "five" ;
//         case 6 :
//             return "six";
//         case 7 :
//             return "seven";
//         case 8 :
//             return "eight";
//         case 9 :
//             return "nine";
//         default:
//             return "enter num";
        
//     }
       
// };
// console.log(toWords(5));

// create another function that takes a no.a and show in words of with the help of twoWords function.

function twoWords(num) {
    switch (num) {
        case 0: return "Zero";
        case 1: return "One";
        case 2: return "Two";
        case 3: return "Three";
        case 4: return "Four";
        case 5: return "Five";
        case 6: return "Six";
        case 7: return "Seven";
        case 8: return "Eight";
        case 9: return "Nine";
        default: return " ";
    }
}

function showWords(a) {
    let str = a.toString();

    for (let i = 0; i < str.length; i++) {
        console.log(twoWords(Number(str[i])));
    }
}

 showWords(507);