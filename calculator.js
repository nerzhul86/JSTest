console.log("Ello, Ello.");

const calcBtnList = document.querySelectorAll('button');


const currentOp = document.querySelector('.current-operand');
const prevOp = document.querySelector('.previous-operand');
//prevOp.textContent = '';

for(i of calcBtnList)
{
    i.addEventListener('click', (event)=>{

        let clickedBtn = event.target;

        console.log(clickedBtn.dataset.value);

        let clickedValue = clickedBtn.dataset.value;

        if(clickedValue === 'AC')
        {

            //All-Clear. AC clears the calculator and resets any functions.

            console.log("Clearing Calculator");
            currentOp.textContent = "0";
            prevOp.textContent = "";

        }
        else if(clickedValue === 'DEL')
        {
            //Clear Entry which erases the last entry you have keyed in.

            console.log("Clearing Current Entry");
            currentOp.textContent = "0";

        }
        else if(clickedValue === '+' || clickedValue === '*' || clickedValue === '/' || clickedValue === '-')
        {
            
           // if(prevOp.textContent === '')
           // {
                prevOp.textContent = currentOp.textContent + clickedValue;
                currentOp.textContent = "0";
           // }
        }
        else if(clickedValue === '=')
        {
            calculate();
        }
        else 
        {
            //If Clicked Value is a Number

          
                //prevOp.textContent = currentOp.textContent;
                if(prevOp.textContent != '')
                {
                    console.log("Previous is Not blank");
                    console.log("Is currentOp Blank?");
                    if(currentOp.textContent === "0")
                    currentOp.textContent = clickedValue;
                    else
                    currentOp.textContent += clickedValue;

                }
                else
                {
                    if(currentOp.textContent === "0")
                    currentOp.textContent = clickedValue;
                    else
                    currentOp.textContent += clickedValue;
                }
                
            

        } //End of Else 
       
    
    }); //End of Button

} //End of Button For Loop


function calculate()
{
    console.log("In the Calculate Function: ");

    let firstOperatorString = prevOp.textContent;

    let operator, firstOString=[''];

    for(let i=0 ; i<firstOperatorString.length; i++)
    {

        let character = firstOperatorString[i];

        if(character === '+' || character === '*' || character === '/' || character === '-')
        {
            operator = character;
        }
        else
        {
            firstOString = firstOString + character;
        }

    }

    console.log(firstOString);
    console.log(operator);

    let firstOpr = parseInt(firstOString);

    let secondOpr = parseInt(currentOp.textContent);

    let result = 0;

    if(operator === '+')
    {
        console.log("Add");
        result = firstOpr + secondOpr;
    }
    else if(operator === '-')
    {
        console.log("Minus");
        result = firstOpr - secondOpr;
    }
    else if(operator === '*')
    {
        console.log("Multiplication");
        result = firstOpr * secondOpr;
    }
    else
    {
        console.log("Division");
        result = firstOpr / secondOpr;
    }

    console.log(`Answer: ${firstOpr} ${operator} ${secondOpr} = ${result}`);

    // Add current to prev string
    // Show result in current

    prevOp.textContent += secondOpr;

    currentOp.textContent = result;

}
