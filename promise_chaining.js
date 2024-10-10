function meet(permission)
{
    return new Promise((resolve,reject)=>
    {
        if(!permission)
        {
            return reject("sorry apka mene kaat dia");
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
meet(false)
.then((data)=>
{
    console.log(data)
    return movie("spiderman");
})
.then((data)=>
{
    console.log(data);
})
.catch(err=>
{
    console.log(err);
}
)