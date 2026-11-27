let score=72
let isloggedIn=true
let age=17

//  TASK 1 IF STATEMENTS

if(score>=50)
{
    console.log("Task 1","pass")}
    


// TASK 2 IF-ELSE

if(score>=50)
{
    console.log("Task 2","pass");
}
else{
    console.log("Task 2","fail")
}

// TASK 3 IF/ELSE IF/ELSE

if(score>=80)
{
    console.log("Task 3","A")
}
else if(score>=70)
{
    console.log("Task 3","B")
}
else if(score>=60)
{
    console.log("Task 3","C")
}
else if(score>=50)
{
    console.log("Task 3","D")
}
else 
{
    console.log("Task 3","F")
}

//  TASK 4 NESTED IF

if(isloggedIn)
    if(age>=18)
    {
        console.log("Task 4","Welcome")
    }
    else{
        console.log("Task 4","Sorry, you must be 18 or older")
    }
    else if(isloggedIn)//This part will only run when the user is not logged in
    {
        console.log("Task 4","Please log in")
    }
// PART B-LOOPS

// TASK 5-FOR
let i=1
for(i=1;i<=10;i++)
{
    console.log("Task 5",i*5)
}

// TASK 6 WHILE
let counter=5
while(counter>=1)
{
    console.log("Task 6","Go")
    counter--;
}


//TASK 7 DO.....WHILE

let tries=10
do{
console.log("Task 7","Tries left",tries-1)
tries--;
} while(tries>8)



    //TASK 7 3
  let trial=0
 while(tries>0)
 {
    console.log("Task 7","Trial left",tries-1)//ITS RUNS EVEN IF THE CONDITION IS FALSE
    tries--;
 }

 //      PART C   QUESTIONS
 /*
 1. Else if is used when you have one condition to check from before execution.

 2.The output is 3 
  
 2b. The loop is not ending.
    to fix it you add you decreament the n after the while such that it will give me values les than three and greater than zero.

 3.-For loop is used when you already know the number of times you want your loop to run.
   -While is used when you don't know the number  of times your loop will run.
 4. Do...while loop
 5. -Break;-stops the loop copletely whether it is true or false it does not allow other conditons after it to be tested.
    -Continue;-Allows the loop move to the next condition if it does not meet the first condition.
 6. The output is 1,3,5,7 
 */ 
// 

for(let i=1;i<=10;i++){
   if(i%2===0)continue
   if(i>7) break
   console.log(i)
}

// BONUS
 
for(i=1;i<=20;i++)
{
   if (i%2===0)
      console.log("Bonus",i)
}

for(i=1;i<=30;i++)
   if(i%3===0)
   console.log("Bonus","Fizz")
   if(i%5===0)
      console.log("Bonus","Buzz")
   if(i%3||i%5===0)
      console.log("Bonus","FizzBuzz")



 