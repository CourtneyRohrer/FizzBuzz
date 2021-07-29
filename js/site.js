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
            let fbArray = generateNumbers(startValue, endValue);
            //we call displayNumbers
            displayNumbers(fbArray);

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

    function displayNumbers(fbArray){

        let templateRows = "";
        let currentRow = "<tr>";
    for (let index = 0; index <= fbArray.length; index++) { 
    
        let className = "";
        let number = fbArray[index];
        
        if (number % 3 == 0 && number % 5 == 0 ) {
            number = "FizzBuzz";
            className = "fizzbuzz";
        } else if (number % 3 == 0 ) {
           number = "Fizz";
           className = "fizz";
        } if (number % 5 == 0 ) {
            number = "Buzz";
            className = "buzz";
        }

        if (index % 5 == 0) {
            currentRow += "<tr>" //starting a new row
            templateRows += currentRow; //adding table data to the row
            currentRow = "</tr>"; //ending the current row
        }

         currentRow += `<td class=" ${className}">${number}</td>`; //adding data to the table
    }

        document.getElementById("results").innerHTML = templateRows;
}
