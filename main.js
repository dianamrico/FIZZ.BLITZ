const entrada = document.getElementById("entrada")
const btn = document.getElementById("btn")
const texto = document.getElementById("texto")

function bltfitz(n){
    salida=[]
    for (let i=1 ; i <=n; i++) {
        if (i%3==0 & i%5==0) {
            salida.push("fitz-bitz")
        }else if(i%3==0){
            salida.push("fitz")
        }else if(i%5==0){
            salida.push("bitz")
        }
    }
    return salida
}

entrada.addEventListener("input",(evento)=>{
    numero = evento.target.value
    console.log(numero)
})

btn.addEventListener("click",()=>{
    let secuencia = bltfitz(numero)
    secuencia.forEach((dato) => {
        let hijo = document.createElement("h3")
        hijo.innerHTML= dato
        texto.appendChild(hijo)
    })

})