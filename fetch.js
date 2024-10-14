async function ok()
{
    try
    {
        let o=await fetch("https://jsonplaceholder.typicode.com/users");
        console.log(o);
        let okayy = await o.json();
        console.log(okayy);
    }
    catch(error)
    {
        console.log(error);
    }
}
ok();
console.log("done");