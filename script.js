setTimeout(()=>{

document.getElementById("logo-screen").style.display="none"
document.getElementById("intro").classList.remove("hidden")

},2500)

function goName(){

document.getElementById("intro").style.display="none"
document.getElementById("name").classList.remove("hidden")

}


function startQuiz(){

let name=document.getElementById("studentName").value

if(name===""){

alert("Digite seu nome")
return

}

alert("Boa sorte, "+name+"!")

document.getElementById("name").style.display="none"
document.getElementById("quiz").classList.remove("hidden")

}

const area=document.getElementById("questions")

const letters=["A","B","C","D","E"]

let gabarito=[]

for(let i=1;i<=90;i++){

let correct=letters[Math.floor(Math.random()*5)]

gabarito.push(correct)

let div=document.createElement("div")

div.className="question"

let html=`<p>${i}</p>`

letters.forEach(l=>{

html+=`<label><input type="radio" name="q${i}" value="${l}">${l}</label>`

})

div.innerHTML=html

area.appendChild(div)

}

document.addEventListener("change",()=>{

let total=document.querySelectorAll("input:checked").length

let percent=(total/90)*100

document.getElementById("progress-bar").style.width=percent+"%"

})

function finish(){

let score=0

for(let i=1;i<=90;i++){

let r=document.querySelector(`input[name=q${i}]:checked`)

if(r && r.value===gabarito[i-1]){

score++

}

}

document.getElementById("quiz").style.display="none"
document.getElementById("result").classList.remove("hidden")

let name=document.getElementById("studentName").value

document.getElementById("resultTitle").innerText=name+", seu resultado"

document.getElementById("score").innerText=
"Você acertou "+score+" de 90 questões."


let cursos=[

["Medicina",80],
["Direito",65],
["Engenharia",60],
["Computação",55],
["Administração",45],
["História",40]

]

let areaCursos=document.getElementById("courses")

cursos.forEach(c=>{

if(score>=c[1]){

let div=document.createElement("div")

div.className="course"

div.innerText=c[0]

areaCursos.appendChild(div)

}

})

}

console.log(gabarito)