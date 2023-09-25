let cambiar = document.querySelectorAll(".cambiar")
let aleatorio1 = document.getElementById("aleatorio_1")
let aleatorio2 = document.getElementById("aleatorio_2")
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let resultado = document.getElementById("resultado")
let conten = document.getElementById("conten")



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
        if (sum1 != 0 && sum2 !=0 ){

            sumaT=parseInt(sum1+sum2)
            fibonacci.forEach(element => {
                if (sumaT== element){
                    console.log(sumaT)
                    resultado.style.visibility="visible"
                    resultado.textContent=sumaT

                    btn1.style.visibility="visible"
                    btn1.textContent=sum1

                    btn2.style.visibility="visible"
                    btn2.textContent=sum2

                } // else if(sumaT != element){
                //     resultado.style.visibility="hidden"
                //     btn1.style.visibility="hidden"
                //     btn2.style.visibility="hidden"

                // }
            });
        }
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