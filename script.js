alert("Querido usuario, la informacion de las funciones se vera reflejada en varias pestañas emergentes");
funcion=prompt("Que funcion quiere usar?(Del 1 al 15)","")
 if(funcion==1){
    let color1=0;
    let color2=0;
    let color3=0;
    let color4=0;
    let color5=0;
    carros=prompt("Ingrese la cantidad de autos que entraron a la ciudad");
    for(i=1;i<=Number(carros);i++){
        placa=prompt("Ingrese el numero de la placa del carro #"+i+"");
        ultNum=placa.substr(-1);
        if(ultNum==1||ultNum==2){
            color1=color1+1;
        }else{
            if(ultNum==3||ultNum==4){
                color2++;
            }else{
                if(ultNum==5||ultNum==6){
                    color3++;
                }else{
                    if(ultNum==7||ultNum==8){
                        color4++;
                    }else{
                        if(ultNum==9||ultNum==0){
                            color5++;
                        }else{
                            alert("Ingrese un numero de placa valido")
                            i--;
                        }              
                    }
                }
            }
        }
    }
    alert("De los "+Number(carros)+" autos que entraron "+color1+" tienen calcomanias amarillas, "+color2+" tienen calcomanias rosas, "+color3+" tienen calcomanias rojas, "+color4+" tienen calcomanias verdes y "+color5+" tienen calcomanias azules");
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
                    alert("Al obrero se le paga $"+pago+" pesos a la semana");
                }else{
                      if(Number(pregunta)>40){  let pago=20*40+(25*(Number(pregunta)-40));
                        alert("Al obrero se le paga $"+pago+" pesos a la semana");
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
                            let total=0;
                            totalArt=prompt("Cuantos articulos DISTINTOS compro?","");
                            for(i=1;i<=Number(totalArt);i++){
                                articulos=prompt("Cuanto cuesta el articulo #"+i+"?");
                                cantArt=prompt("Cuantos articulos #"+i+" compro?");
                                total=total+(Number(articulos)*Number(cantArt));
                            }
                            alert("El total de la compra es $"+total+" pesos")
                        }else{
                            if(funcion==8){
                                let totalD1=0;
                                let totalD2=0;
                                let totalD3=0;
                                let totalD4=0;
                                let totalD5=0;
                                let total1=0
                                let total2=0
                                let total3=0
                                let total4=0
                                let total5=0
                                let categoria1=0;
                                let categoria2=0;
                                let categoria3=0;
                                let categoria4=0;
                                let categoria5=0;
                                boleta=prompt("Valor de la entrada");
                                personas=prompt("Cuantas personas entraran en el teatro?");
                                for(i=1;i<=Number(personas);i++){
                                    edad=prompt("Que edad tiene la persona #"+i+"?");
                                    descuento=0;
                                    if(Number(edad)<5){
                                        alert("Niños menores de 5 no pueden entrar");
                                    }else{
                                        if(Number(edad)>=5&&Number(edad)<=14){
                                            descuento=Number(boleta)*0.35;
                                            descuento=Number(boleta)-descuento;
                                            totalD=totalD+descuento;
                                            categoria1++;
                                        }else{
                                            if(Number(edad)>=15&&Number(edad)<=19){
                                                descuento=Number(boleta)*0.25;
                                                descuento=Number(boleta)-descuento;
                                                totalD2=totalD2+descuento;
                                                categoria2++;
                                            }else{
                                                if(Number(edad)>=20&&Number(edad)<=45){
                                                    descuento=Number(boleta)*0.10;
                                                    descuento=Number(boleta)-descuento;
                                                    totalD3=totalD3+descuento;   
                                                    categoria3++;                                                 
                                                }else{
                                                    if(Number(edad)>=46&&Number(edad)<=65){
                                                        descuento=Number(boleta)*0.25;
                                                        descuento=Number(boleta)-descuento;
                                                        totalD4=totalD3+descuento;
                                                        categoria4++;
                                                    }else{
                                                        descuento=Number(boleta)*0.35;
                                                        descuento=Number(boleta)-descuento;
                                                        totalD3=totalD3+descuento;
                                                        categoria5++;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                total1=categoria1*Number(boleta);
                                total2=categoria2*Number(boleta);
                                total3=categoria3*Number(boleta);
                                total4=categoria4*Number(boleta);
                                total5=categoria5*Number(boleta);
                                alert("El teatro deja de recibir $"+(total1-totalD1)+" por la categoria 1, $"+(total2-totalD2)+" por la categoria 2, $"+(total3-totalD3)+" por la categoria 3, $"+(total4-totalD4)+" por la categoria 4, $"+(total5-totalD5)+" por la categoria 5");
                            }else{
                                if(funcion==9){
                                    vendedor=new Array(100);
                                    ventas=new Array(100);
                                    comision=new Array(100);
                                    alert("Nota: tener en cuenta que las ventas fueron generadas mediante un metodo aleatorio para poder facilitar su implementacion");
                                    for(i=0;i<100;i++){
                                        ventas[i]=Math.floor(Math.random()*((200000001-10000000)+10000000));
                                        if(Number(ventas[i])<=20000000){
                                            comision[i]="10%";
                                        }else{
                                            if(Number(ventas[i]>20000000 && Number(ventas[i]<40000000))){
                                                comision[i]="15%";
                                            }else{
                                                if(Number(ventas[i])<=40000000 && Number(ventas[i])<80000000){
                                                    comision[i]="20%";
                                                }else{
                                                    if(Number(ventas[i])<=80000000 && Number(ventas[i])<1600000000){
                                                        comision[i]="25%";
                                                    }else{
                                                        comision[i]="30%";
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    for(i=0;i<100;i++){
                                        alert("El vendedor #"+(i+1)+" vendio $"+ventas[i]+" pesos y tiene una comision del "+comision[i]);
                                    }
                                }else{
                                    if(funcion==10){
                                        let votos1=0;
                                        let votos2=0;
                                        let votos3=0;
                                        alert("Nota: Los votos fueron generados aleatoriamente");
                                        for(i=1;i<=50000;i++){
                                            voto=Math.floor(Math.random()*((3-1)+1));
                                            if(voto==1){
                                                votos1++;
                                            }else{
                                                if(voto==2){
                                                    votos2++;
                                                }else{
                                                    votos3++;
                                                }
                                            }
                                        }
                                        if(votos1>votos2 && votos1>votos3){
                                            alert("El candidato 1 gano la votacion con un total de "+votos1+" votos, el candidato 2 obtuvo "+votos2+" votos, y el candidato 3 obtuvo "+votos3+" votos");
                                        }else{
                                            if(votos2>votos1 && votos2>votos3){
                                                alert("El candidato 2 uno gano la votacion con un total de "+votos2+" votos, el candidato 1 obtuvo "+votos1+" votos, y el candidato 3 obtuvo "+votos3+" votos");
                                            }else{
                                                if(votos3>votos1 && votos3>votos2){
                                                    alert("El candidato 3 uno gano la votacion con un total de "+votos3+" votos, el candidato 1 obtuvo "+votos1+" votos, y el candidato 2 obtuvo "+votos2+" votos");
                                                }else{
                                                    if(votos1==votos2 && votos1>votos3){
                                                        alert("El candidato 1 y 2 empataron con un total de "+votos1+" votos, y el candidato 3 obtuvo "+votos3+" votos");
                                                    }else{
                                                        if(votos1=votos3 && votos1>votos2){
                                                            alert("El candidato 1 y 3 empataron con un total de "+votos1+" votos, y el candidato 2 obtuvo "+votos2+" votos");
                                                        }else{
                                                            if(votos3==votos2 && votos3>votos1){
                                                                alert("El candidato 2 y 3 empataron con un total de "+votos2+" votos, y el candidato 1 obtuvo "+votos1+" votos");
                                                            }else{
                                                                alert("Los 3 candidatos empataron con un total de "+votos3+" votos");
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
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
                                                        let numero1=0;
                                                        let numero2=0;
                                                        let a=0;
                                                        let b=0;
                                                        let resultado=0;
                                                        numero1=prompt("Ingrese el primer numero");
                                                        numero2=prompt("Ingrese el segundo numero");
                                                        if (Number(numero1) > Number(numero2)){
                                                            a=Number(numero1);
                                                            b=Number(numero2);
                                                        }else{
                                                            a=Number(numero2);
                                                            b=Number(numero1);
                                                        }
                                                        while(b!=0){
                                                            resultado=b;
                                                            b=(a%b);
                                                            a=resultado;
                                                        }
                                                        alert("El Maximo Comun Divisor entre "+numero1+" y "+numero2+" es: "+resultado)                                                     
                                                    }else{
                                                        if(funcion==15){
                                                            ano=1994
                                                            paisA=25000000;
                                                            paisB=19900000;
                                                            diferencia=0;
                                                            while(paisA>paisB){
                                                                paisA=paisA+(paisA*0.02);
                                                                paisB=paisB+(paisB*0.03);
                                                                ano++;
                                                            }
                                                            diferencia=paisB-paisA;
                                                            alert("En el año "+ano+" el pais B superara al pais A por un total de "+diferencia+" habitantes");
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
 alert("Para elegir de nuevo una funcion, refresque la pagina o presiona F5");








