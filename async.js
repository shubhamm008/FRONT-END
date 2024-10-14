function meet(permission)
{
    return new Promise((resolve,reject)=>
    {
        if(!permission)
        {
            return reject("sorry apka mene kaat lia");
        }
        else
        {
            return resolve("lesgoooo")
        }
    })
}
function movie(name)
{
    return new Promise((resolve,reject)=>
    {
        if(name=="spiderman")
        {
            return resolve("chlooooo");
        }
        else
        {
            return reject("sorry not spoidermon");
        }
    })
}
async function wada()
{
    try
    {
        let moviename= await meet(true);
        console.log(moviename);
        let result = await movie(moviename);
        console.log(result);
    }
    catch(error)
    {
        console.log(error);
    }
}
wada();
setTimeout(()=>
{
    console.log("setTimeout");
})
console.log("hi");
console.log("bye");