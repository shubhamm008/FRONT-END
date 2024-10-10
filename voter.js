function voter(n1)
{
    return new Promise((resolve,reject)=>{
        if(n1>=18)
        {
            return(resolve("yes you can vote"));
        }
        else
        {
            return reject("age is less than 18 so cannot vote");
        }
    })
}
voter(9)
.then((data)=>console.log("yes you can vote"))
.catch((err)=>console.log(err + " pdf file"))