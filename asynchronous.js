console.log("hello");
function delay()
{
    console.log("run after 2 seconds");
}
let a=setTimeout(delay,5000);
console.log("bye");
let b=setTimeout(function()
{
    console.log("baba");
    
},2000)
console.log("ok");
let c=setInterval(function()
{
    console.log("shubham");
},1000)
setTimeout(function()
{
    clearInterval(c);
},4000)