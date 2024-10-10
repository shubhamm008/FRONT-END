function add(n1,n2)
{
    return new Promise((resolve,reject)=>{
        if(n1==5)
        {
            return resolve(n1+n2);
        }
        else
        {
            reject("n1 5 ni hai to failed");
        }
    });
}
add(5,3)
.then((data)=>console.log(data))
.catch((err)=>console.log(err))
console.log("hi");