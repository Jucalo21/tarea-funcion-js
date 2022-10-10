alert("Querido usuario, la informacion de las funciones se vera reflejada en varias pestañas emergentes");
funcion=prompt("Que funcion quiere usar?(Del 1 al 15)","")
 if(funcion==1){
    placa=prompt("Ingrese el numero de la placa del carro","");
    ultNum=placa.substr(-1);
    if(ultNum==1||ultNum==2){
        color="Amarilla";
        alert("El Color de la placa es "+color);
    }else{
        if(ultNum==3||ultNum==4){
            color="Rosa";
            alert("El Color de la placa es "+color);
        }else{
            if(ultNum==5||ultNum==6){
                color="Roja";
                alert("El Color de la placa es "+color);
            }else{
                if(ultNum==7||ultNum==8){
                    color="Verde";
                    alert("El Color de la placa es "+color);
                }else{
                        color="Azul";
                        alert("El Color de la placa es "+color);                }
            }
        }
    }
 }else{
    if(funcion==2){

    }else{
        if(funcion==3){
            var pregunta=prompt("Cuantas horas trabaja el obrero a la semana?","");
            if(Number(pregunta)<=40 &&Number(pregunta)>=0){
                    let pago=20*Number(pregunta);
                    alert("Al obrero se le paga: "+pago+" dolares a la semana");
                }else{
                      if(Number(pregunta)>40){  let pago=20*40+(25*(Number(pregunta)-40));
                        alert("Al obrero se le paga: "+pago+" dolares a la semana");
                      }else{
                            alert("Ingrese un numero de horas validas");
                      }
                    }
        }else{
            if(funcion==4){

            }else{
                if(funcion==5){

                }else{
                    if(funcion==6){

                    }else{
                        if(funcion==7){

                        }else{
                            if(funcion==8){

                            }else{
                                if(funcion==9){

                                }else{
                                    if(funcion==10){

                                    }else{
                                        if(funcion==11){

                                        }else{
                                            if(funcion==12){

                                            }else{
                                                if(funcion==13){

                                                }else{
                                                    if(funcion==14){

                                                    }else{
                                                        if(funcion==15){

                                                        }else{
                                                            alert("Por favor, ingrese un numero valido del 1 al 15");
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
 }








