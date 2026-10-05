let btn = document.getElementById("btn")
let bg = document.getElementById("background")
let cname = document.getElementById('cname')
let copy = document.getElementById('copy')
let alrt = document.getElementById('alert')


btn.addEventListener('click', ()=>{
    let red = Math.floor(Math.random()*256)
    let green = Math.floor(Math.random()*256)
    let blue = Math.floor(Math.random()*256)
    bg.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    cname.innerText = `rgb(${red}, ${green}, ${blue})`
    cname.style.color = `rgb(${red}, ${green}, ${blue})`
    alrt.innerText = ""
})

copy.addEventListener('click', ()=>{
    navigator.clipboard.writeText(cname.innerText)
    alrt.innerText = '✅ Copied'
})