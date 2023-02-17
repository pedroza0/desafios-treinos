let one = document.querySelector("#one")
let two = document.querySelector("#two")
let three = document.querySelector("#three")
let four = document.querySelector("#four")
let five = document.querySelector("#five")
let six = document.querySelector("#six")
let seven = document.querySelector("#seven")
let eight = document.querySelector("#eight")
let nine = document.querySelector("#nine")
let plus = document.querySelector("#plus")
let show = document.querySelector("#show")

show.addEventListener("click", conta)


let n1
let n2
function conta (){
   
    let totalSoma = 0
    if(condicao == 1){
        totalSoma = parseInt(n1 + n2)
        res.innerHTML = totalSoma
    }
}









let condicao = 0
one.addEventListener("click", function(){
    if(condicao == 0){
        n1 += one.value
        res.textContent += "1"
        console.log(n1)
    }
    if(condicao == 1){
        n2 +=1
        res.textContent += "1"
        console.log(n2)
    }
    
})

two.addEventListener("click", function(){
    res.textContent += "2"
})

three.addEventListener("click", function(){
    res.textContent += "3"
})

four.addEventListener("click", function(){
    res.textContent += "4"
})

five.addEventListener("click", function(){
    res.textContent += "5"
})

six.addEventListener("click", function(){
    res.textContent += "6"
})

seven.addEventListener("click", function(){
    res.textContent += "7"
})

eight.addEventListener("click", function(){
    res.textContent += "8"
})

nine.addEventListener("click", function(){
    res.textContent += "9"
})

plus.addEventListener("click", function(){
    res.textContent += "+"
    condicao = 1
    console.log(condicao)
})


console.log(one)
console.log(two)
console.log(three)
console.log(four)
console.log(five)
console.log(six)
console.log(seven)
console.log(eight)
console.log(nine)
console.log(plus)
