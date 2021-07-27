
//Get the starting and ending values from the page
//CONTROLLER FUNCTION
    function getValues(){
        let startValue = document.getElementById("startValue").value;
        let endValue = document.getElementById("endValue").value;
    

    //Parse into Intergers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //we call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        //we call displayNumbers
        displayNumbers(numbers);

    } else {
        alert("You must enter numbers")
    }
}

//Generate Numbers from the start start value to the end value
//LOGIC FUNCTION

function generateNumbers(startValue, endValue){
    let numbers = [];

    for (let index = startValue; index <= endValue; index++) {
        numbers.push(index);
        
    }

    return numbers;
}

//Display the numbers from the starting to ending values 
//Change multiples of 3 to "Fizz"
//Change multiples of 5 to "Buzz"
//Change multiples of both to "FizzBuzz"
//VIEW FUNCTION

function displayNumbers(numbers){

    let templateRows = "";
    for (let index = 0; index < numbers; index++) {

        let number = numbers[index];
        
      if (number % 3 && number % 5) {
          document.write("FizzBuzz")
      } else {
          if (number % 3) {
              document.write("Fizz")
          }
          if (number % 5) {
              document.write("Buzz")
          }
      }    
        
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;
}