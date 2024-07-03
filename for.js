let lista = new Array("Salvador","Rio de janeiro","Natal","Recife");
const destino = "Natal";
let destinoExiste = false;
for(let cont = 0; cont<3;cont++){
    if(lista[cont]==destino){
        destinoExiste=true;
    }
}
console.log("Destino existe: ",destinoExiste)