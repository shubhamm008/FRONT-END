// console.log("welcome to node js");
// var n1=10;
// var num2=20;
// var res=n1+num2;
// // console.log(res);
// function a(x,y)
// {
//     var res=x+y;
//     console.log(res);    
// };
// function subtract(x,y)
// {
//     var res=x+y;
//     console.log(res);
    
// };
// function multiply(x,y)
// {
//     var res=x*y;
//     console.log(res);
    
// };
// function divide(x,y)
// {
//     var res=x/y;
//     console.log(res);
// };
// function exponent(x,y)
// {
//     res=x**y;
//     console.log(res);
    
// };
function fact(x)
{

   if(x>1)
   {
        res=x*fact(x-1);
   }
   else
   {
    return res;
   }
}
// a(90,100);
// subtract(90,100);
// multiply(90,100);
// divide(90,100);
// exponent(2,3);
p=fact(4);
console.log(p);