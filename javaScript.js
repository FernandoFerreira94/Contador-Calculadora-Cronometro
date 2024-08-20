

//-------------Contador----------------

let cont = 0;
let text1 = 'Contagem: '

$('#btnMais1').click(function() {
    if (document.getElementById('btnMais1').value == '1') {
        cont += 1
        document.getElementById('text').innerHTML = text1 + cont
    } 
})

$('#btnMenos1').click(function() {
    if (document.getElementById('btnMenos1').value == '-1') {
        cont -= 1
        document.getElementById('text').innerHTML = text1 + cont
    } 
})

$('#btnMenos10').click(function() {
    if (document.getElementById('btnMenos10').value == '-10') {
        cont -= 10
        document.getElementById('text').innerHTML = text1 + cont
    } 
})

$('#btnMais10').click(function() {
    if (document.getElementById('btnMais10').value == '10') {
        cont += 10
        document.getElementById('text').innerHTML = text1 + cont
    } 
})

$('#ContClear').click (function () {
    if (document.getElementById('ContClear').value == '0') {
        cont = 0;
        document.getElementById('text').innerHTML = text1 + cont;
    }
})

//-------------Calculadora----------------

//limpar display
$('#clear').click(() => {
    document.getElementById('resultado').innerHTML = ''
    document.getElementById('display').innerHTML = ''
    $('#display').attr('style', 'font-size: 15px; color: black;')
})

//função calcular
function calcular(tipo, valor) {
    if (tipo == 'acao') {
        if (valor == '/' || valor == '*' || valor == '+' || valor == '-' || valor == '.') {
           let valDis = document.getElementById('display').innerHTML = document.getElementById('resultado').innerHTML +  valor;
            document.getElementById('resultado').innerHTML = ''
        }
        if (valor == '=') {
            let valor = eval(document.getElementById('display').innerHTML + document.getElementById('resultado').innerHTML)
            document.getElementById('display').innerHTML = valor
            document.getElementById('resultado').innerHTML = ''
            document.getElementById('display').value = 1
        }
    } else if (tipo == 'valor') {
        document.getElementById('resultado').innerHTML += valor 
        if ( document.getElementById('display').value == 1) {
            document.getElementById('display').innerHTML = ''        
            document.getElementById('display').value = 0        
        }
    }
}

$('#igual').click(() => {
    $('#display').attr('style', 'font-size: 25px;')
})


//-------------Cronometro----------------