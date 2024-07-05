var number = localStorage.getItem("caixas_num")
var divNum = 0
var a = [true]
let mais = document.getElementById("mais")

function maisa(){
    
    let but = document.createElement("button")
    
    mais.style = "visibility: visible;"
    let buttons_divs = document.getElementById("buttons_divs")
    buttons_divs.insertBefore(but, mais)
    but.setAttribute("onclick","a["+ divNum +"] = criar_forma(a,["+divNum+"])")
    
    divNum++
    but.innerHTML = divNum
    console.log(divNum);
    
    
}

function criar_forma(can,array){
    
    
    if(can[array] == null){
        can[array] = false
    }
    if(can[array] == false){
        const espaco_div = document.getElementById("espaco_colunas")
        let forma = document.createElement("div")  
        forma.id = "forma"+ (divNum -1)
        forma.className = "forma"
        espaco_div.appendChild(forma)
        
        return can[array] = true 
    }
    if(can[array]){
       
        const savedContent = localStorage.getItem('containerContent'+ array)
        const containe = document.getElementById("forma" + array)
        
        if (savedContent == null && containe.textContent == "" || containe.textContent == null || containe.innerHTML == null){
            
            let but = document.getElementById("add")
            console.log(this)
            let butclone = but.cloneNode(true)
            containe.appendChild(butclone).setAttribute("onclick", "criar_caixas("+array+"); manter_mudado();")
            //butao.setAttribute("onclick","criar_caixas(); manter_mudado()")
            //containe.appendChild(butao)
            
        }
        else {

            if (number == null){
                number = 0
            }
            else{
                number = localStorage.getItem("caixas_num")
            }
        
            if (savedContent) {
                document.getElementById('forma'+divNum).innerHTML = savedContent
            }
            
            let inputs = document.querySelectorAll('.input')
        
            for (var i = 0 ; i < inputs.length ; i++){
        
                const savedInput = localStorage.getItem('inputs_info'+ i )
                var input = inputs[i]
                input.value = savedInput
        
            }
        }
        
    }
    return can[array] = true
}
function criar_caixas(numerodadivisao){
    
    const divisaoDeTreino =[
        "A",
        "B",
        "C",
        "D",
        "E",
        "F"
    ]

    if(numerodadivisao == null){
        numerodadivisao = 0
    }
    console.log("numero div = ",numerodadivisao)

    const espace_sections = document.getElementById("forma" + parseInt(numerodadivisao))
    let add = document.getElementById("add")    
    
    let section      = document.createElement("section")
    let tipo_treino  = document.createElement("p")
    let linhas_grupo = document.createElement("div")
    let linhas       = document.createElement("input")
    let input_kg     = document.createElement("input")
    let add_ex       = document.createElement("button")
    let remove_ex    = document.createElement("button")
    

   
    linhas_grupo.id = "linha"+ number

    linhas.innerHTML      = "colocar"
    add_ex.innerHTML      = "Adicionar Exercício"
    remove_ex.innerHTML   = "X"
    tipo_treino.innerHTML = divisaoDeTreino[number]

    section.className      = "secao"
    linhas_grupo.className = "linha_grupo"
    linhas.className       = "exercicio"
    input_kg.className     = "input"


    section.appendChild(tipo_treino)
    espace_sections.appendChild(section)
    section.appendChild(linhas_grupo)
    section.appendChild(add_ex)
    section.appendChild(remove_ex)


    espace_sections.appendChild(add)

    add_ex.setAttribute("onclick","criar_firstLinha("+number+"); manter_mudado()")
    remove_ex.setAttribute("onclick","remove_linha("+number+","+ divNum +")")
    criar_firstLinha(number)

    if(number == 0){
        maisa(a,[a])
    }

    number = parseInt(number) + 1

}

function criar_firstLinha(linhaNum){
    
    let quallinha   = document.getElementById("linha"+ linhaNum )
    
    let input_name  = document.createElement("input")
    let input_kg    = document.createElement("input")
    let input_serie = document.createElement("input")
    let input_rep   = document.createElement("input")

  

    input_name.placeholder = "colocar exercicio"

    input_name.className   = "input exercicio"
    input_kg.className     = "input"
    input_rep.className    = "input"
    input_serie.className  = "input"
    input_serie.type = "number"
   

    quallinha.appendChild(input_name)
    quallinha.appendChild(input_kg)
    quallinha.appendChild(input_serie)
    quallinha.appendChild(input_rep)

    
}



let forma = document.getElementById("forma"+ divNum).addEventListener('click', function() {// adicionar a nomenclatura no final dos inputs PRECISA SER MELHORADO
    let inputs = document.querySelectorAll(".input")
    for (var i = 1; i < inputs.length; i += 4){
        let input = inputs[i]
        input.addEventListener('change', function() {
            if(! this.value.includes(" KG")){
                input.value = this.value +" KG" 
                console.log(input.value, this.value); 
            }
            
        }) 
    }
        
    
})


function remove_linha(linhaNum){
    let quallinha   = document.getElementById("linha"+ linhaNum )
    let inputs = quallinha.querySelectorAll(".input")
   
    if(inputs.length > 4){ // apagar as linhas
        console.log(" else "+number, linhaNum);
        for(var i = inputs.length-4 ; i <  inputs.length; i++){
            quallinha.removeChild(inputs[i])
        }
    }
    else if(parseInt(number-1) == linhaNum){ //apagar a caixa onde está a linha
        console.log(" if "+ number, linhaNum);

        let forma = document.getElementById("forma"+ divNum)
        let secaos = document.querySelectorAll(".secao")

        forma.removeChild(secaos[linhaNum])
        number = parseInt(number) - 1
        
    }

}



var estado = false
function mudar_estado() {
    estado = !estado
    manter_mudado()
    
}

function manter_mudado(){

    let exercicios = document.querySelectorAll(".exercicio")
    let exercicios_edit = document.querySelectorAll(".exercicio_editando")
    
    if(estado == true){
        for (var a = 0; a < exercicios.length ;a++){
            let exercicio = exercicios[a]
            
            exercicio.className = "exercicio_editando"
        }
    }
    else{
        for (var a = 0; a < exercicios_edit.length; a++){
            let exercicio_edit = exercicios_edit[a]
            
            exercicio_edit.className = "exercicio input"
        }
    }
}  

function divisaoTreino(contagem) {
    
    reset = document.getElementById("forma"+divNum) 
    reset.innerHTML = localStorage.getItem("containerContent"+contagem)
    
}

let apagar = document.getElementById("apagar").addEventListener("click", function(){
    location.reload() //recarrega a pagina
    localStorage.clear() //apaga todo a localstorage
})


function salvar(){

    for (var i = 0; i < number ;i++){
            
        const quallinha = document.getElementById("linha"+ (i))
        localStorage.setItem('Linhas', quallinha.innerHTML)             
    }
    let inputs = document.querySelectorAll('.input')
    for (i = 0 ; i < inputs.length; i++){
        let input = inputs[i]
        localStorage.setItem('inputs_info'+i, input.value )
    }
    
    
    for ( var i = 0; i <= (divNum); i++){
        const espace_sections = document.getElementById("forma"+i)
        localStorage.setItem('caixas_num', number)
        localStorage.setItem('containerContent'+i, espace_sections.innerHTML)

        
    }
    
    console.log("relax, your content is saved") 
}
   
window.addEventListener('load', function() {
    
    const savedContent = localStorage.getItem('containerContent'+ 0)
    
    if (number == null){
        number = 0
    }
    else{
        number = localStorage.getItem("caixas_num")
        mais.style = "visibility: visible;"
    }

    if (savedContent) {
        document.getElementById('forma'+divNum).innerHTML = savedContent
    }
    
    let inputs = document.querySelectorAll('.input')

    for (var i = 0 ; i < inputs.length ; i++){

        const savedInput = localStorage.getItem('inputs_info'+ i )
        var input = inputs[i]
        input.value = savedInput

    }
    
})
