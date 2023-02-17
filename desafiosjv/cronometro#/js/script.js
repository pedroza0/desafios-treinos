let res = document.querySelector("#res")
let button = document.querySelector("#btn")




let h = 0
let m = 0
let s = 0
function contar(){
    setInterval(function(){
        s++
        if(s == 60){
            s=0
            m++
        } if (m == 60){
            m = 0
            h++
        } if (h == 24){
            h = 0
            m = 0
            s = 0
        }
        res.innerHTML = `${h}:${m}:${s}`
    },1000)
}


button.addEventListener("click", contar)





