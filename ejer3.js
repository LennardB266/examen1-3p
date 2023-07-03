function calcular() {
    var num = parseInt(document.getElementById('numero').value);
    mult=1;
    for (let x = 1; x <= num; x++) {
    
        mult=mult*x;
        
    }
    document.write("el factorial de"+" "+num+" "+"es:")
    document.write(mult);
}
