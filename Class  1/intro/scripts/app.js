function loadData(){
    console.log("calling the server...");
}

function sayHello(name){
    console.log("Hello " + name);
}

function calculateTaxes(year, income){
    const total = income  * 1.16 +  year * 0.3;
    return total;
}

function ageMessage(age){
    if(age < 100){
        console.log("Too young");
    }
    else if(age === 100){
        console.log("A century?  Thats good");
    }
    else{
        console.log("How are you alive?");
    }
}

function sum(a,b){
    return a + b;
}

function printNumbers(){
    // print numbers from 0 to 20
    for(let i = 0; i <=20; i++){
        if(i != 7 && i != 13){
            console.log(i);
        }
    }
}

function someMath(){
    let nums = [12,4,1,56,57,29,87,18,90,28,11,84,58,2,95,67,24,6];

    // Print every number
    for(let i = 0; i < nums.length; i++){
        let num = nums[i];
        console.log(num);
    }

    // Print numbers greater or equal to 50
    for(let i = 0; i < nums.length; i++){
        let num = nums[i];
        if(num >= 50){
            console.log(num);
        }
        
    }
}

function init(){
    console.log("page loaded");

    // hook events

    // load data
    loadData();
    sayHello("Irvin");
    sayHello("Eduardo");
    sayHello("Zavala");
    sayHello("Roman");
    let friend = "Pepe";
    sayHello(friend);
    let taxes = calculateTaxes(2023, 1000);
    console.log("Total to pay 2023: " + taxes);

    ageMessage(101);

    let answer = sum(21,21);
    console.log("The answe is: " + answer);

    printNumbers();
    someMath();
}

window.onload = init;

// HW: Read JS logical operators and thruty table