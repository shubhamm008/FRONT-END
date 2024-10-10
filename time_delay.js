//DELAY IN SECONDS
function delay()
{
    let currentTime =Date();
    // while(new Date().getTime() - (currentTime <1000))//According to IST
    // {
    //     console.log(currentTime);
    // }
    
    console.log(currentTime);
    
}
function delayNseconds(n)
{
    for(let i=0;i<n;i++)
    {
        delay();
    }
}
delayNseconds(1);
console.log("Hello World");