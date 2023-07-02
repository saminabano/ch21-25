               //ASSIGNMENT CHAPTER 21-25
//Q1. Write a program that takes two user inputs for first and
var firstName=prompt("enter your first name");
var lastName=prompt("enter your last name");
var fullName=[firstName+lastName];
document.write("welcome ",fullName);

//Q2Write a program to take a user input about his favorite
var question=prompt("enter your favourite mobile phone model");
var answer=question.length;
document.write("<br>");
document.write("your favourite mobilephone is:",question,"plus length of the string",answer);

//Q3Write a program to find the index of letter “n” in the word

var title="Pakistan";
var index=title.indexOf("n");
document.write("<br>");
document.write("string Pakistani index of 'n'",index);
//Q4Write a program to find the last index of letter “l” in the
//word “Hello World” and display the result in your browser.
var word=("Hello World");
var segIndex= word.lastIndexOf("l");
document.write("<br>");
document.write("string :Hello World last index of 'l':",segIndex);

//Q5 Write a program to find the character at 3rd index in the
//word “Pakistani” and display the result in your browser.

var text=("pakistan");
var someChars=text.slice(3,4);
document.write("<br>",someChars);

//Q6

var first = prompt("Whats your first name?");
var last = prompt("What's your last name?");
prompt("Welcome", first.concat(last));

//Q7
var city = "Hyderabad";
document.write("City: ",city);
city = city.replace("Hyderabad","Islamabad");
document.write("<br> Replaced City: ", city);

//q8
var message = "Sam and Ali are best friends. They play cricket and football together";
for(i =0; i<message.length; i++){
    if( message.slice(i,i+3) == "and"){
      message =  message.replace("and", "&");
    }
}
document.write("<br>",message);

//q9

let number = 472;
document.write("<br>", number,"<br>",typeof number);

let string = number.toString();
document.write("<br>",string,"<br>", typeof string);


//Q10
var input = prompt("Enter a word");
input = input.toUpperCase();
document.write(input);

//q11
var word = prompt("Enter a word");
var firstchar = word.slice(0,1);
var remchar = word.slice(1);
firstchar = firstchar.toUpperCase();
remchar = remchar.toLowerCase();
document.write("<br>",firstchar.concat(remchar));

//q12

var num = "35.36";
var abc = num.toString();
for(i=0;i<abc.length;i++){
    if( abc.slice(i,i+1) == "."){
        abc =  abc.replace(".", "");    
}
}
document.write(abc);

//q14
var array = ["cake","apple pie", "cookie","chips","patties"];
var take = prompt("What item are you searching for?");
take = take.toLowerCase();
for(i = 0; i< array.length;i++){
if(take == array[i]){
    document.write("Item Found at index ",i, "in our bakery");
    }
 }

//Q16
var let = prompt("Enter a word.");
for(i = 0; i< let.length ; i++){
    document.write(let.slice(i,i+1), "<br>");
}

//q17
var data = prompt("Enter any word");
var lastchar = data.slice(data.length - 1,data.length);
document.write("<br> Last character of input is: ", lastchar);

//q18
var message = "The quick brown fox jumps over the lazy dog";
document.write("<br>", message );
message = message.toLowerCase();
var count = 0;
for(i =0; i<message.length; i++){
    if( message.slice(i,i+3) == "the"){
      count++;
    }
}
document.write("<br> The number of occurences of the word 'the' is: ",count);