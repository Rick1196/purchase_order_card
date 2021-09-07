let screenValue = "";
let storedValue = "";
let action = null;
(function (){
    setScreenValue("");
})()

function setScreenValue(value){
    document.getElementById('screen-value').textContent = value;
}

function toggleChange(event){
    if(event !== 'theme-one'){
        document.getElementById('body').className=event;
    }else{
        document.getElementById('body').className='';
    }
}

function concatValue(value){
    console.log(value)
    if(value === '.'){
        if(!screenValue.includes('.')){
            screenValue = screenValue + value
        }
    }else{
        screenValue = screenValue + value
    }
    setScreenValue(screenValue)
}

function setResult(result){
    screenValue = String(result);
    storedValue = "";
    setScreenValue(screenValue);
}

function actions(sign){
    console.log("Storing value", storedValue, screenValue);
    switch (sign) {
        case '+':
            action = (numberA, numberB) => {
                const result = parseFloat(numberA) + parseFloat(numberB)
                setResult(result);
            }; 
            concatOrCalculate();
            break;
        case '-':
            action = (numberA, numberB) =>{ 
                const result = parseFloat(numberA) -  parseFloat(numberB);
                setResult(result)
            }; 
            concatOrCalculate();
            break;
        case '*':
            action = (numberA, numberB) => {
                const result = parseFloat(numberA) * parseFloat(numberB);
                setResult(result);
            }; 
            concatOrCalculate();
            break;
        case '/':
            action = (numberA, numberB) =>{ 
                const result = parseFloat(numberA) / parseFloat(numberB)
                setResult(result);
            };             
            concatOrCalculate();
            break;
        case '=':
            console.log('values',storedValue, screenValue);
            action(storedValue, screenValue);
            break;
    }
}

function concatOrCalculate(){
    if(storedValue !== "" && screenValue !== ""){
        action(storedValue, screenValue);
    }else{
        storedValue = screenValue;
        screenValue = "";
    }
}

function del(){
    if(screenValue.length > 0){
        screenValue = screenValue.substring(0, screenValue.length -1);
    }
    setScreenValue(screenValue);
}


function resetScreenValue(){
    screenValue = "";
    storedValue = "";
    setScreenValue("");
}