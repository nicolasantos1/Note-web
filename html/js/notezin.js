let linhas = []; // Armazena referências das instâncias da classe Linha
let ficha = [[],[],[],[],[]]

let btnsCriarLinhas = document.querySelectorAll('.btnCriarLinha')
btnsCriarLinhas.forEach( function (element) {
    element.addEventListener('click', function(){
        // let Linha = document.createElement('input')
        for(var i = 0; i < 4; i++){
            let input = document.createElement('input')
            input.className = 'inputs'
            element.parentElement.parentElement.querySelector('.placeInputs').appendChild(input)
        }
    })
})


let removeRow = document.querySelectorAll('.removeRow')
removeRow.forEach(function removeRow(element){
    element.addEventListener('click', function(){
        for(var i = 0; i < 4; i++){
            element.parentElement.parentElement.querySelector('.inputs').remove()
        }    
    })
})


let btnsApagarFichas = document.querySelectorAll('.apagarFicha')
btnsApagarFichas.forEach( function(element){
    element.addEventListener('click',function(){    
        element.parentElement.remove()   
    }) 
})
        


let btnsCreateFicha = document.querySelectorAll('.createFicha')
btnsCreateFicha.forEach(function(element){
    element.addEventListener('click',function(){
        element.parentElement.before(objFicha())
    })
})

let createTreino = document.getElementById('btnCreateTreino')
    createTreino.addEventListener('click',() =>{
        if(objSecs() != null){
            createTreino.parentElement.before(objSecs())
            return
        }
        alert('limite maximo 5')
    })

let apagarTreino = document.querySelectorAll('.apagarTreino')
    apagarTreino.forEach(function(element){
        element.addEventListener('click',() => 
            element.parentElement.parentElement.parentElement.remove()
        )
    })



function save(){
   
    let valor = ficha[0][0].value
    console.log(valor);
}

function objFicha(){
    let obj = document.createElement('section')
        obj.className = 'lugarFicha'

    let button = document.createElement('button')
        button.className = 'apagarFicha'
        button.textContent = 'apague'
        button.addEventListener('click',() => button.parentElement.remove()) 

    let placeInputs = document.createElement('div')
        placeInputs.className = 'placeInputs'

    let div = document.createElement('div')
        
    
    obj.appendChild(button)
    obj.appendChild(placeInputs)
    obj.appendChild(div)

    for(var i = 0; i < 4; i++){
        let inputs = document.createElement('input')
            inputs.className = 'inputs'
        placeInputs.appendChild(inputs)
    }

    let btnCriar = document.createElement('button')
        btnCriar.textContent = 'Criar'
        btnCriar.addEventListener('click', () =>{
            for(var i = 0; i < 4; i++){
                let input = document.createElement('input')
                    input.className = 'inputs'
                btnCriar.parentElement.parentElement.querySelector('.placeInputs').appendChild(input)
            }
        })
    
    let btnApagar = document.createElement('button')    
        btnApagar.textContent = 'X'
        btnApagar.addEventListener('click', () => {
            for(var i = 0; i < 4; i++){
                btnApagar.parentElement.parentElement.querySelector('.inputs').remove()
            }  
        })

    div.appendChild(btnCriar)
    div.appendChild(btnApagar)
        
    return obj
}
function objSecs(){
    if(document.querySelectorAll('.treino').length == 5){
        return
    }
        
    let treino = document.createElement('div')
        treino.className = 'treino'

    let treinoHead = document.createElement('div')
        treinoHead.className = 'treinoHead'

    let h1 = document.createElement('h1')
        h1.textContent = 'treino FullBody'
    
    let btnsHeadSecs  = document.createElement('div')

    let btnEditarSec = document.createElement('button')
        btnEditarSec.textContent = 'editar'
        btnEditarSec.className = ''

    let btnApagarSec = document.createElement('button')
        btnApagarSec.textContent = 'X'
        btnApagarSec.className = 'apagarTreino'
        btnApagarSec.addEventListener('click',() => 
            btnApagarSec.parentElement.parentElement.parentElement.remove()
        )
    
    
    let placePlanilha = document.createElement('div')
        placePlanilha.className = 'placePlanilha'

    let divbtns = document.createElement('div')
    
    let btnCreateFicha = document.createElement('button')
        btnCreateFicha.className = 'createFicha'
        btnCreateFicha.textContent = '++'
        btnCreateFicha.addEventListener('click',() => {
                btnCreateFicha.parentElement.before(objFicha())
            })
        
    
    let btnCreateEdit = document.createElement('button')
        btnCreateEdit.textContent = 'editar'

    treino.appendChild(treinoHead)
    treinoHead.appendChild(h1)
    treinoHead.appendChild(btnsHeadSecs)
    btnsHeadSecs.appendChild(btnEditarSec)
    btnsHeadSecs.appendChild(btnApagarSec)
    treino.appendChild(placePlanilha)
    placePlanilha.appendChild(objFicha())
    placePlanilha.appendChild(divbtns)
    divbtns.appendChild(btnCreateFicha)
    divbtns.appendChild(btnCreateEdit)

    return treino
    

}
