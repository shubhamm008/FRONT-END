//javascript 
let numbers=[1,2,3,4];
let moreNumbers = new Array(6,7,8);
console.log(numbers);
console.log(moreNumbers);
let Fruits=["apil","binana","mengo"];
console.log(Fruits[0]);
console.log(Fruits[1]);
var i;
for(var i=0;i<Fruits.length;i++)
{
    console.log(Fruits[i]);
}
Fruits[1]="oringe";
console.log(Fruits[1]);
Fruits.pop();
Fruits.push("popli");
for(var i=0;i<Fruits.length;i++)
{
    console.log(Fruits[i]);//mengo chk dia
}
let gr=numbers[0];
let sm=numbers[0];
for(var i=0;i<=Fruits.length;i++)
{
    if(gr<numbers[i])
    {
        gr=numbers[i];
    }
    else if(sm<numbers[i])
    {
        sm=numbers[i];
    }
}
console.log("Greatest number is: " + gr);
console.log("The smallest number is: " + sm);