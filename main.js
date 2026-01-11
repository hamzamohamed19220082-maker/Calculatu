let area = document.getElementById("area")
let btns = document.querySelectorAll(".bu")
let obtns = document.querySelectorAll(".obu")
let reset = document.getElementById("reset")
let eq =document.getElementById("eq")
let del =document.getElementById("del")
btns.forEach((btn)  =>{
    btn.addEventListener("click" , ()=> {
        area.textContent += btn.textContent
})})

obtns.forEach((obtn)  =>{
    obtn.addEventListener("click" , ()=> {
        let lastChar = area.textContent[area.textContent.length - 1];
        if(lastChar !== obtn.textContent){
            area.textContent += obtn.textContent
        }
})})
reset.addEventListener("click" ,()=>{
    area.textContent =""
})

eq.addEventListener("click",()=>{
        let calculation = math.evaluate(area.textContent)
        area.textContent = calculation;
    })
del.addEventListener("click",()=>{
    cr = area.textContent;
    area.textContent = cr.substring(0 , cr.length - 1)
})
