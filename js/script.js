const btn = document.getElementById('button-1');
const checkBtn = document.getElementById('button-2');
const inputEl2 = document.getElementById('data-2').value;
const resultEl = document.querySelector('.alert');
const resultEl2 = document.querySelector('.alert-2');




btn.addEventListener('click', function(){

    const inputEl = document.getElementById('data').value;
    const splitWord = [];
    const reverseWord = [];

    console.log(inputEl)
    for(x = inputEl.length - 1; x >= 0; x--){
        console.log(inputEl[x]);
        splitWord.push(inputEl[x]);
        console.log(splitWord);
    }
    








    // for(let x = 0; x < inputEl.length; x++){
    //     inputEl[x];
    //     splitWord.push(inputEl[x])
    //     console.log(splitWord);
    //     console.log(userWord)

    // }

    



   
  
});




// checkBtn.addEventListener('click', function(){
    
// });




// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min; 
//   }


// function reverseInput(stringa){
    
    
// }

// function reverseString(str) {
//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//         splitWord.push(newString)
//     }
//     return newString;
// } 
// reverseString('new');
