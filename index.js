memoria =0.0;
function sumar(num1,num2){
    return num1+num2;
};
function restar(num1,num2){
    return num1-num2;
};
function dividir(num1,num2){
    return num1/num2;
};
function multiplicar(num1,num2){
    return num1*num2;
};
function porciento(num1,num2){
    return num1*(num2/100);

};
function raiz(num1){
    return Math.sqrt(num1)
}
function impoperacion(z,x,y){
    document.getElementById('display1').value =+z +x +y ;
};

function calcular(num1,op,num2){
    try { 
        switch (op) {
            case '+':
                
                return sumar(num1,num2);
            case '-':
                return restar(num1,num2);
            case '*':
                return multiplicar(num1,num2);
            case '/':
                return dividir(num1,num2);
            case '%':
                return porciento(num1,num2);
            case 'raiz':
                return raiz(num1);


        
            default:
                break;
        }

        
    } catch (error) {
        document.getElementById('display2').value = 'Error';
    };
};
var igual=true;
function imprimir(val){
    if(igual){
        try {
            if (parseFloat(document.getElementById('display2').value)==0) {
                document.getElementById('display2').value =val ;
            } else {
                document.getElementById('display2').value +=val ;
            }
            igual=true;
        } catch (error) {
            document.getElementById('display2').value = 'Error';
        };
    }else{
        document.getElementById('display2').value =val ;
        igual = true;
    }

    
};
function limpiar() {
    document.getElementById('display2').value = '0';
}
function memoria() {
    memoria = parseFloat(document.getElementById('display2').value);
    document.getElementById('memoria').textContent=memoria;

}