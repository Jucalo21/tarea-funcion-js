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
        let total;
        let porcentaje1=0;
        let porcentaje2=0;
        let porcentaje3=0;
        let animal=prompt("De que animal quiere calcular el porcentaje? //h 1.Elefante, 2. Jirafa y 3.Chimpances");
        if(animal=="1" || animal.toLowerCase()=="elefante"){
            total=20;
        }else{
            if(animal=="2" || animal.toLowerCase()=="jirafa"){
                total=15;
            }else{
                if(animal=="3" || animal.toLowerCase()=="chimpance"){
                    total=40;
                }else{
                    alert("Por favor ingrese un numero o animal valido");
                }
            }
        }
        for(i=0; i< total; i++){
            edad=prompt("Ingrese la edad del animal en números");
            ConvEdad=Number(edad);
            if(ConvEdad>=0 && ConvEdad<=1){
                porcentaje1++;
            }else{
                if(ConvEdad>1 && ConvEdad<3){
                    porcentaje2++;
                }else{
                    if(ConvEdad>=3){
                        porcentaje3++;
                    }else{
                        alert("Ingrese una edad valida");
                    }
                }
            }
        }
        porcentaje1=(porcentaje1/total)*100;
        porcentaje2=(porcentaje2/total)*100;
        porcentaje3=(porcentaje3/total)*100;
        alert("Porcentaje de 0 a 1 años: "+porcentaje1+"%"+" Porcentaje entre 1 a 3 años: "+porcentaje2+"%"+" Porcentaje de animales mayores a 3 años: "+porcentaje3+"%")
    }else{
        if(funcion==3){
            let pregunta=prompt("Cuantas horas trabaja el obrero a la semana?","");
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
                let total=0;
                let cHombre=0;
                let cMujer=0;
                let tHombre=0;
                let tMujer=0;
                hombre=prompt("Ingrese cuantos hombres hay en el grupo");
                for(i=0;i<hombre;i++){
                    edadH=prompt("Ingrese la edad de los hombres")
                    cHombre=cHombre+Number(edadH);
                }
                mujer=prompt("Ingrese cuantas mujeres hay en el grupo");
                for(i=0;i<mujer;i++){
                    edadM=prompt("Ingrese la edad de las mujeres")
                    cMujer=cMujer+Number(edadM);
                }
                total=(cHombre+cMujer)/(Number(hombre)+Number(mujer));
                tMujer=cMujer/Number(mujer);
                tHombre=cHombre/Number(hombre);
                alert("Promedio Hombres: "+tHombre+" Promedio Mujer: "+tMujer+" Promedio total: "+total);
            }else{
                if(funcion==5){
                    let menor;
                    let x=1;
                    cant=prompt("Ingrese la cantidad de numeros en total");
                    for(i=0;i<cant;i++){
                        numero=prompt("Ingrese un numero");
                        if(x==1){
                            menor=Number(numero);
                            x++;
                        }else{
                            if(menor>=0||menor<=0){
                                if(menor<Number(numero)){ 
                                }else{
                                    menor=Number(numero);
                                }
                            }else{
                                alert("Ingrese un numero valido");
                            }
                        }
                    }
                    alert("El numero menor es: "+menor);
                }else{
                    if(funcion==6){
                        let promedio=0;
                        let pesaje=0;
                        let peso=0;
                        ultima=prompt("Ingrese lo que peso la ultima reunion:"," ");
                        for(i=1;i<=10;i++){
                            basculas=prompt("Ingrese el peso de la bascula #"+i);
                            pesaje=pesaje+Number(basculas);
                        }
                        promedio=pesaje/10;
                        peso=promedio-Number(ultima);
                        if(peso>0){
                            alert("Usted subio "+peso+" kilos");
                        }else{
                            if(peso<0){
                                alert("Usted bajo "+(-1*peso)+" kilos");
                            }else{
                                alert("Usted no bajo ni subio de peso");
                            }
                        }
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
                                            let suma=0;
                                            let produc=1;
                                            let promedio=0;
                                            let cont=0;
                                            valMin=prompt("Ingrese el valor min del intervalo a calcular");
                                            valMax=prompt("Ingrese el valor max del intervalo a calcular");
                                            numero=new Array(Number(valMax));
                                            primo=[];
                                            x=Number(valMin);
                                            for(i=x;i<=numero.lenght;i++){
                                                numero[cont]=i;
                                                cont++;
                                            }
                                            for(k=0;k<numero.lenght;k++){
                                                for(j=2;j<=numero[k];j++){
                                                if(numero%i==0){
                                                    primo.push(numero);
                                                }
                                            }
                                        }
                                            //for(i=0;i<=primo.length;i++){
                                                //    suma=suma+primo[i];
                                              //      produc=produc*primo[i];
                                            //}
                                            //promedio=suma/Number(valMax);
                                            alert(""+primo)
                                            //alert("Sumatoria= "+suma+" Productoria= "+produc+" Promedio= "+promedio);
                                        }else{
                                            if(funcion==12){

                                            }else{
                                                if(funcion==13){
                                                    elementos=prompt("Ingrese la cantidad de elementos de la serie fibonacci que quiere que aparezcan");
                                                    var total=Array(Number(elementos));
                                                    total=[0,1];
                                                        for(i=2;i<Number(elementos);i++){
                                                         total[i]=total[i-1]+total[i-2];
                                                         }
                                                          alert(""+total);
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
 //alert("Para elegir de nuevo una funcion, refresque la pagina o presiona F5");








