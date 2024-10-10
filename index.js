const btn=document.getElementsByTagName('button')
for(let i=0;i<btn.length;i++)
{
    btn[i].style.padding= '15px';
}
const btn2=document.getElementById('btn2')
btn2.onclick=()=>
{
    alert("you clicked button 2");
}
let count=0;
const p=document.createElement('p');//create p tag to display
p.innerText='you clicked button 1' + count + 'times';//set conent of p tag
const btn1=document.getElementById('btn1');
btn1.onclick=()=>{
    count++;
    btn1.append(p);
    p.innerText='you cliked button1 ' + count + 'times';
}
 const input=document.getElementsByTagName('input');
 input[0].addEventListener('change',(event)=>{
    console.log(event);
    console.log(event.target.value);
    })

//document.createElement()
//element - innerText
//element - innerHTML
//element -  textContent()
//append()
//appendChild()