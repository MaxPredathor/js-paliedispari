    const btn = document.getElementById('button-1');
    const pariBtn = document.getElementById('pari');
    const dispariBtn = document.getElementById('dispari');
    const checkBtn = document.getElementById('button-2');
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

pariBtn.addEventListener('click', function(){

    const inputEl2 = parseInt(document.getElementById('data-2').value);
    let rndNmbComputer = getRndInteger(1, 5);
    let risultato = rndNmbComputer + inputEl2;
    console.log(risultato)
    if(inputEl2 > 5){
        console.log('Errore')
    }else if(risultato % 2 === 0){
        console.log('Hai vinto'); 
    } else{   
        console.log('Ha vinto il computer');
    }

    
    
    
});

dispariBtn.addEventListener('click', function(){

    const inputEl2 = parseInt(document.getElementById('data-2').value);
    let rndNmbComputer = getRndInteger(1, 5);
    let risultato = rndNmbComputer + inputEl2;
    console.log(risultato)
    if(inputEl2 > 5){
        console.log('Errore')
    }else if(risultato % 2 === 0){
        console.log('Ha vinto il computer');
    } else{ 
        console.log('Hai vinto');
    }
    

    
    
    
});

function resetter(alertColor){

    const resultEl = document.querySelector('.alert');
    resultEl.classList.remove(alertColor);
    resultEl.classList.add('d-none');
}

function printer(alertColor, msg){

    const resultEl = document.querySelector('.alert');
    resultEl.classList.add(alertColor);
    resultEl.classList.remove('d-none')
    resultEl.innerText = msg;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function pariDispari(input1, input2){
    let risultato = input1 + input2;
    if(risultato % 2 === 0){
        return true;
    }
 
}