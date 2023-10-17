    const btn = document.getElementById('button-1');
    const checkBtn = document.getElementById('button-2');
    const inputEl2 = document.getElementById('data-2').value;
    const resultEl2 = document.querySelector('.alert-2');

    btn.addEventListener('click', function(){

        const inputEl = document.getElementById('data').value;
        palindromo(inputEl);  
      
    });
    
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
            resetter('alert-danger');
            printer('alert-success', 'La tua parola è un Palindromo')
            console.log('La tua parola è un Palindromo');
        } else{
            resetter('alert-success');
            printer('alert-danger', 'La tua parola NON è un Palindromo')
            console.log('La tua parola NON è un Palindromo');
        }
    }

    function printer(alertColor, msg){

        const resultEl = document.querySelector('.alert');
        resultEl.classList.add(alertColor);
        resultEl.classList.remove('d-none')
        resultEl.innerText = msg;
    }

    function resetter(alertColor){

        const resultEl = document.querySelector('.alert');
        resultEl.classList.remove(alertColor);
        resultEl.classList.add('d-none');
    }







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
