
funcion=prompt("Que funcion quiere usar?(Del 1 al 15)","")
 if(funcion==1){
    placa=prompt("Ingrese el numero de la placa del carro","");
    ultNum=placa.substr(-1);
    if(ultNum==1||ultNum==2){
        color="Amarilla";
        console.log("Color de la placa: "+color);
    }else{
        if(ultNum==3||ultNum==4){
            color="Rosa";
            console.log("Color de la placa: "+color);
        }else{
            if(ultNum==5||ultNum==6){
                color="Roja";
                console.log("Color de la placa: "+color);
            }else{
                if(ultNum==7||ultNum==8){
                    color="Verde";
                    console.log("Color de la placa: "+color);
                }else{
                        color="Azul";
                        console.log("Color de la placa: "+color);
                }
            }
        }
    }
        }







