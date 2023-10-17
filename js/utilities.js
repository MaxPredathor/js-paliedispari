// Utilities
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }



function palindromo(input){
    const splitWord = [];
    const reverseWord = [];

    for(let x = 0; x < input.length; x++){
        console.log(input[x]);
        splitWord.push(input[x]);

    }
    console.log(splitWord);
    

    for(let x = input.length - 1; x >= 0; x--){
        console.log(input[x]);
        reverseWord.push(input[x]);
    }
    console.log(reverseWord);
    
    let stringSplit = splitWord.join("");
    let stringaReverse = reverseWord.join("");

    if(stringSplit === stringaReverse){
        console.log('La tua parola è un Palindromo');
    } else{
        console.log('La tua parola NON è un Palindromo');
    }
}
