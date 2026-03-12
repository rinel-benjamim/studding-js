
/*
for (let index = 0; index <= 5; index++) {
    console.log(index);
    
    }
    */
   
   // ciclos aninhados
   
console.clear()

for (let valor1 = 2; valor1 <= 12; valor1++) {
    console.log('-------------------');
    console.log('Tabuada de ' + valor1);
    console.log('-------------------');
    for (let valor2 = 1; valor2 <= 12; valor2++) {
        console.log(`${valor1} x ${valor2} = ` + (valor1 * valor2));
    }
    console.log()
}