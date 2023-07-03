function calcular() {
    var num = parseInt(document.getElementById('numero').value);
    document.write("numeros multipos de 3.")
    contador1=0;
    
    for (let x = 0; x <= num; x++) {
        if (x % 3 == 0 && x % 5 == 0) {

            document.write(x + '<br>')
            contador1++;
        }
        
        

    }
    document.write("los multiplos de 3:"+contador1+'<br>');
    document.write("numeros multipos de 5.")
    
    
    
}