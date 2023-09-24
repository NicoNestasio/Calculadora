var memoria = null;
var igual = true;
var finop = true;
var a = 0;
function operador(op) {
    guardar();
    a = parseFloat(document.getElementById('display2').value);
    b = op;
    impoperacion(a, b, ' ');
    limpiar();
    finop = true; 
}
function resultado(){
    c=parseFloat(document.getElementById('display2').value);
    s=calcular(a,b,c);
    limpiar();
    imprimir(s);
    guardar();
    impoperacion(a, b,c);
    igual=false;
    finop=false;
    a=null;
    b='';
}
function guardar() {
    memoria = document.getElementById('display2').value;
    document.getElementById('memoria').textContent = memoria;

};

function sumar(num1, num2) {
    return num1 + num2;
};
function restar(num1, num2) {
    return num1 - num2;
};
function dividir(num1, num2) {
    return num1 / num2;
};
function multiplicar(num1, num2) {
    return num1 * num2;
};
function porciento(num1, num2) {
    return num1 * (num2 / 100);

};
function raiz(num1) {
    return Math.sqrt(num1);
};
function cuadrado(num1) {
    return Math.pow(num1, 2);
};
function inversion(num1) {
    return Math.pow(num1, -1);
};
function opuesto() {
    z = parseFloat(document.getElementById('display2').value) * (-1);
    document.getElementById('display2').value = z;
}
function impoperacion(z, x, y) {
    if (x=='') {
        document.getElementById('display1').value = document.getElementById('display2').value;
    } else {
        document.getElementById('display1').value = +z + x + y;
    }

};
function borrardeauno() {
    document.getElementById('display2').value = document.getElementById('display2').value.slice(0, -1);
};
function calcular(num1, op, num2) {
    try {
        switch (op) {
            case '+':

                return sumar(num1, num2);
            case '-':
                return restar(num1, num2);
            case '*':
                return multiplicar(num1, num2);
            case '/':
                return dividir(num1, num2);
            default:
                return document.getElementById('display2').value;
        }


    } catch (error) {
        document.getElementById('display2').value = 'Error';
    };
};
function especial(op) {
    try {
        num = parseFloat(document.getElementById('display2').value);
        switch (op) {
            case 'r':
                x = raiz(num);
                if (finop) {
                    document.getElementById('display2').value = x;
                    document.getElementById('display1').value += `√(${num})`;
                    finop = false;
                } else {
                    document.getElementById('display2').value = x;
                    document.getElementById('display1').value = `√(${num})`;
                };
                igual = false;
                break;
            case '%':
                x = porciento(memoria, num);
                if (finop) {
                    document.getElementById('display2').value = x;
                    document.getElementById('display1').value += `${num}%`;
                    finop = false;
                } else {
                    document.getElementById('display2').value = x;
                    document.getElementById('display1').value = `${num}%`;
                };
                igual = false;
                break;
            case 'c':
                x = cuadrado(num);
                if (finop) {
                    document.getElementById('display2').value = x;
                    document.getElementById('display1').value += `(${num})^2`;
                    finop = false;
                } else {
                    document.getElementById('display2').value = x;
                    document.getElementById('display1').value = `(${num})^2`;
                };
                igual = false;
                break;
            case '-1':
                x = inversion(num);
                if (finop) {
                    document.getElementById('display2').value = x;
                    document.getElementById('display1').value += `1/(${num})`;
                    finop = false;
                } else {
                    document.getElementById('display2').value = x;
                    document.getElementById('display1').value = `1/(${num})`;
                };
                igual = false;
                break;
            default:
                break;
        };
    } catch (error) {
        document.getElementById('display2').value = 'Error';
    };
};

function imprimir(val) {
    if (igual) {
        try {
            if (parseFloat(document.getElementById('display2').value) == 0) {
                document.getElementById('display2').value = val;
            } else {
                document.getElementById('display2').value += val;
            };
            igual = true;
        } catch (error) {
            document.getElementById('display2').value = 'Error';
        };
    } else {
        document.getElementById('display2').value = val;
        igual = true;
    }


};
function limpiar() {
    document.getElementById('display2').value = '0';
};
function limpiartodo() {
    document.getElementById('display2').value = '0';
    document.getElementById('display1').value = '';
    a = 0;
    memoria = null;
    document.getElementById('memoria').textContent = 'N/A';
    b='';
    c=null;
};