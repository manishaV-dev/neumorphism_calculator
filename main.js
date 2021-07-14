
let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';

//when click on button its return that button value
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        
        //for multiplication
        if(buttonText =='x'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}