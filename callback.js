function starter(cb)
{
    console.log("starters begin");
    setTimeout(function()
        {
            console.log("main course prep");
            cb(sweetdish);
        },2000)
}
function maincourse(cb)
{
    console.log("maincourse begin");
    setTimeout(function()
        {
            console.log("sweetdish prep");
            cb(bill);
        },2000)
}
function sweetdish(cb)
{
    console.log("sweetdish begin");
    setTimeout(function()
        {
            console.log("bill prep");
            cb()
        },2000)
}
function bill()
{
    console.log("done");
}
starter(maincourse);
