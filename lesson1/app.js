/* document.write("Elisa Rumeysa Solberg");
 // diyalog kutulari 
 alert("bu bir uyaridir");

 let name = prompt("What is your name?");
 let lastName = prompt("what your lastname?")

 let result = confirm("Are you sure you want to perform this action?")


// kosul durumlari

let userName= prompt("what is your username?")
let age = prompt("HOw old are you?")
let info= document.querySelector("info");

if (userName && age >=18) {
    info.innerHTML = "You can get a driver's license"
    
} else if (!userName){ 
   info.innerHTML= "You do not have a username"
    
}else if (!(age>=18)) {
    info.innerHTML ="You do not have age information or you are under 18 years old"
}


// ternary kullanimi 
// kosul ? dogruysa : yanlissa
let age1= 18;
let message = (age1 >= 18) ? "Yetişkin" : "Reşit değil";
console.log(message);

// bolum sonu odevi


let grade = prompt("Please write your grade:");
let textInfo;

if (grade <= 100 && grade >= 0) {
  if (grade >= 90 && grade <= 100) {
    textInfo = "AA";
  } else if (grade >= 85) {
    textInfo = "BA";
  } else if (grade >= 80) {
    textInfo = "BB";
  } else if (grade >= 75) {
    textInfo = "CB";
  } else if (grade >= 70) {
    textInfo = "CC";
  } else if (grade >= 65) {
    textInfo = "DC";
  } else if (grade >= 60) {
    textInfo = "DD";
  } else if (grade >= 50) {
    textInfo = "FD";
  } else {
    textInfo = "FF";
  }
} else {
  textInfo = "The information is not correct";
}

let info = document.querySelector("#info");
info.innerHTML = `${textInfo}`;

// grade point average example

let score1 = Number(prompt("enter your first score"));

let score2 = Number(prompt("enter your second score"));

let scoreFinal = Number(prompt("enter your final score"));

let grade1 = score1 * 0.3 + score2 * 0.3 + scoreFinal * 0.4;

console.log("your grade is : " + grade1);

let resultElement = document.querySelector("#info"); //
let resultMessage; 

if (grade1 >= 60) {
  resultMessage = "Congratulations, you passed the course!";
} else {
  resultMessage = "Unfortunately, you failed the course.";
}
resultElement.innerHTML = `${resultMessage}`;

*

//  Body Mass Index BMI

let weight = Number(prompt("Enter your weight in kilograms: "));
let height = Number(prompt("Enter your height in meters: "));

let bmi = weight/(height**2)

let resultMessageBmi ;
let resultElementBmi=document.querySelector("#info");

if (bmi< 18.5) {
    resultMessageBmi= "Underweight";

    
} else if (18.5<= bmi && bmi<24.9) {
    resultMessageBmi= "Normal weight";
    
} else if (25<= bmi && bmi< 29.9) {
    resultMessageBmi= "Overweight" ;
    
} else if(bmi>=30){120
    resultMessageBmi= "Obese"

}

resultElementBmi.innerHTML= `${resultMessageBmi}`;

// Switch case example
let day = Number(prompt("Please enter a number between 1 and 7."));
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
    default:
        console.log("Please enter a valid number.")

}
        */
/*
/// Loop 
for (let i = 0; i <= 10; i++) {
   console.log(i);  
}
for (let k = 0; k <=20; k+=2) {
    console.log(k);
    
}

for (let i = 1; i<=10; i++) {
    if (i%2==1) {
        console.log("Elisa")
        
    } else{ 
        console.log("Rumeysa")
        
    }  if(i%3==0){
        console.log("Elisa Rumeysa Solberg")
        
    }
}

let sum=0;
for (let i = 50; i>=1 ; i--) {

    sum+=i;
}
console.log(sum);

// While dongusu
// 1 den 10 kadar yazdir
let i = 1;
while (i < 11) {
  console.log(i);
  i++;
}

let k = 1;
while (k <= 20) {
  if (k % 2 == 0) {
    console.log(k);
  }
  k++;
}

let l = 1;
while (l <= 20) {
  console.log(l);
  if (l == 12) {
    break;
  }
  l++;
}

// do while loop

let i= 1;
do {
  console.log(i);
  i++;
} while (i<=10);

let k= 0;
let sum= 0;
do {
  if (k%2==1) {
    
    sum+=k;
  }
  k++;
  
} while (k<=20);
console.log(sum);



// break continue

let i = 1;
while (i<=20) {
  console.log(i);
  if (i==8) {
    break; 
  }
  i++
}
//12345678

let k=1;
while (k<=20) {
  if (k==8) {
    k++;
    continue
  }
  console.log(k)
  k++;
 
}
//123456791011121314151617181920



//Multiplication Table

for (let i = 0; i <=10; i++) {
  for (let j=0; j<=10; j++) {
    console.log(i+"x"+j+"=" +i*j)
    
  }
  console.log("=====================================");
}



//prime number finding app

let num = Number(prompt("enter a number"));
let result = true;
let resultElementPrime = document.querySelector("#info");

if (num <= 1) {
  resultElementPrime.innerHTML = `${num} is not a prime number`;
} else {
  for (let i = 2; i <= Math.floor(num / 2); i++) {
    if (num % i == 0) {
      result = false;
      break;
    }
  }
  if (result) {
    resultElementPrime.innerHTML = `${num} is a prime number`;
  } else {
    resultElementPrime.innerHTML = `${num} is not a prime number`;
  }
  
}

//Finding the Factorial of a Number

let num1 = Number(
  prompt("Enter a number for Finding the Factorial of the Number")
);
let resultFactorial =1;
let resultElementFactorial =document.querySelector("#info")

if (num1<0) {  
  resultElementFactorial.innerHTML= ` Factorial is not defined for negative numbers`
  
} else {
  for (let i = 1; i <=num1; i++) {
    resultFactorial=resultFactorial*i; 
  }
  resultElementFactorial.innerHTML=`${num1}! =${resultFactorial} `
}
if (num1=0) { 
  resultElementFactorial.innerHTML=`${num1}! = 1`;
 
}
      

//Armstrong Number
/* What is an Armstrong Number?
An Armstrong number (also known as a Narcissistic Number or
Pluperfect Digital Invariant (PPDI)) is a number 
where the sum of its digits raised to 
the power of the number of digits equals the number itself.

let num =(prompt("Enter a Number "));
let resultElementAmstrong=document.querySelector("#info");
let power = num.length;//(ussu belirledim)

let sum=0;

for (let i = 0; i <num.length; i++) {
  let digit =num.charAt(i); // rakamlara ayirdim
  sum += Math.pow(parseInt(digit), power);
  
}
if (sum == parseInt(num)) {
  resultElementAmstrong.innerHTML=`${num} is an Armstrong number.`
} else {
  resultElementAmstrong.innerHTML=`${num} is not an Armstrong number.`
 
}
*/

