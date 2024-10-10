let p= new Promise((resolve,reject)=>
{
    let flag=false;
    if(flag==true)
    {
        return resolve("wada pura kra paise de ra hu");
    }
   
    else
    {
    return reject("nai hua promise pura");
    }
});//p me promise hoga
console.log(p);
// p.then(
//     function(data){
//         console.log(data);
//     },
//     function (err){
//         console.log(err);
//     },
// )
p.then(function(data)
{
    console.log(data);
})
.catch(function(err)
{
    console.log(err);
})
console.log("hi");
console.log("bye");