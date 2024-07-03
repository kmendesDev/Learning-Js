const idade = 14;
const acompanhada = false;
if (idade >= 18) {
    console.log("Maior de idade. Acesso autorizado");
}
else if (acompanhada) {
    console.log("Manor de idade com Acesso autorizado")
}
else {
    console.log("Menor de idade com Acesso bloqueado")
}

// OUTRA MANEIRA:

if(idade >= 18 || acompanhada == true){
    console.log("ENTRADA AUTORIZADA")
}
else{
    console.log("ENTRADA BLOQUEADA")
}

//OUTRA MANEIRA:
if(idade<18 && acompanhada == false){
    console.log("NEGADO")
}
else{
    console.log("AUTORIZADO")
}