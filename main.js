let cambiar = document.querySelectorAll(".cambiar")
let aleatorio1 = document.getElementById("aleatorio_1")
let aleatorio2 = document.getElementById("aleatorio_2")
const fibonacci=[2,3,5,8,13,21]
let sum1=0
let sum2=0
cambiar.forEach(cambio => { 
    cambio.addEventListener("click",()=>{
 
        let ale = Math.round(Math.random()*11)
        if (cambio.id == "cambiar"){
            sum1=ale1(ale)
        }else{
            sum2=ale2(ale)       
        }
        sumaT=parseInt(sum1+sum2)
        console.log(sumaT)
        fibonacci.forEach(element => {
            if (sumaT== element){
                alert("es un fibonnacci")
            }
        });
    })
});

function ale1(ale){
    let num=aleatorio1.textContent=ale
    return num 
}

function ale2(ale){
    let num= aleatorio2.textContent=ale
    return num
}