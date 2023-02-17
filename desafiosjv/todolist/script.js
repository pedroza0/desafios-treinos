let askTask = document.querySelector("#askTask")
let addTask = document.querySelector("#addTask")
let res= document.querySelector("#res")


addTask.addEventListener("click", function(){
    let task = (askTask).value
    askTask.value = ""

    let body = document.querySelector("body")
    let newDiv = document.createElement("div")
    let newP = document.createElement("p")
    let buttonV = document.createElement("button")
    let buttonX = document.createElement("button")
    
    body.appendChild(newDiv)
    newDiv.appendChild(newP)
    newDiv.appendChild(buttonV)
    newDiv.appendChild(buttonX)
    newP.textContent += task
    buttonV.textContent = "V"
    buttonX.textContent = "X"

    let condicao = 0 
    buttonV.addEventListener("click", function(){
        condicao++
        console.log(condicao)
        if(~condicao % 2 == 0){
            newP.style.textDecoration = "line-through"
        } else {
            newP.style.textDecoration = "none"
        }
        
    })

    buttonX.addEventListener("click", function(){
        newDiv.remove()
    })
})