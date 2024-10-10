function multiply(n1)
{
    return new Promise((resolve,reject)=>{
        if(n1>5)
        {
            return(resolve(n1*5));
        }
        else
        {
            return reject("as n1 is less than 5 therefore reject");
        }
    })
}
multiply(8)
.then((data)=>console.log("The product is: " + data))
.catch((err)=>console.log(err + "failed"))