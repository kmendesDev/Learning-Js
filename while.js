let lista = new Array("Salvador","Rio de janeiro","Natal","Recife");

const destino = "Florianópolis";

let cont=0;
while(cont<lista.length){
    if(lista[cont]==destino){
        console.log(`Destino ${destino} existe !`)
        break
    }
    else if(cont==lista.length-1){
        console.log(`Destino ${destino} não existe !`)
    }
    cont++;
}