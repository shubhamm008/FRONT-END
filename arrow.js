// let add=(a,b)=>
// {
//     console.log(a+b);
    
// }
// add(90,10)
var arr=[1,2,3,4,5];//phle multiply krega phid add krega
var add=arr.map(e=>
{
    return e*5;
}
).reduce((c,acc)=>
{
    return c+acc;
},0)
// var sum=arr.reduce((c,acc)=>
// {
//     return c+acc;
// },0)
console.log(add);

// var arr1=arr.map(e=>{
//     return e*5;
// }).filter(e=>
// {
//     return e%2==0;
// }
// )
// console.log(arr1);