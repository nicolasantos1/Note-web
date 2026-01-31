
function salvar(){
    const espacoForma = document.getElementById("planilha")
    localStorage.setItem('espacoForma', espacoForma.innerHTML) 
    // localStorage.setItem('numCaixa',numero_caixa+ numero_forma+qual_forma+numero_section)
    // localStorage.setItem('numCaixa',numero_caixa+';'+ numero_forma+';'+qual_forma+';'+numero_section)
    localStorage.setItem('numCaixa', JSON.stringify(numero_caixa))
    localStorage.setItem('numForma', JSON.stringify(numero_forma) )
    localStorage.setItem('qualForma', JSON.stringify(qual_forma) ) 
    localStorage.setItem('numSec',  JSON.stringify(numero_section))

    let inputs = document.querySelectorAll('.input')
    for (i = 0 ; i < inputs.length; i++){
        let input = inputs[i]
        localStorage.setItem('inputs_info'+i, input.value )
    }
}

let apagar = document.getElementById("apagar").addEventListener("click", function(){
    location.reload() //recarrega a pagina
    localStorage.clear() //apaga todo a localstorage
})

window.addEventListener('load', function() {
    
    const savedContent = localStorage.getItem('espacoForma')
    if (savedContent) {
        document.getElementById('planilha').innerHTML = savedContent
    }
    const numCaixa = localStorage.getItem('numCaixa')
    if(numCaixa){
        numero_caixa = JSON.parse(numCaixa)  
    }
    const numForma = localStorage.getItem('numForma')
    if (numForma) {
        numero_forma = JSON.parse(numForma)
    }
    const qualForma = localStorage.getItem('qualForma') 
    if (qualForma) {
        qual_forma = JSON.parse(qualForma)
        
        qual_forma[0] = true
    }
    const numSec = localStorage.getItem('numSec') 
    if (numSec) {
        numero_section = JSON.parse(numSec) 
    }

    let inputs = document.querySelectorAll('.input')

    for (var i = 0 ; i < inputs.length ; i++){

        const savedInput = localStorage.getItem('inputs_info'+ i )
        var input = inputs[i]
        input.value = savedInput

    }
   
})