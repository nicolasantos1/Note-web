let linhas = []; // Armazena referências das instâncias da classe Linha
let ficha = [[],[],[],[],[]]






let btnsCriarLinhas = document.querySelectorAll('.btnCriarLinha')
btnsCriarLinhas.forEach( function (element) {
    element.addEventListener('click', function createRow(){
        // for(var i = 0; i < 4; i++){
        //     let input = document.createElement('input')
        //     input.className = 'inputs'
        //    element.parentElement.parentElement.querySelector('.placeInputs').appendChild(input)
        // }
        
        for(var i = 0; i < 4; i++){
            let inputs = document.createElement('input')
            switch (i){  
                case 0:
                    inputs.className = 'inputs exercicio'
                    inputs.placeholder = 'exercício'
                    element.parentElement.parentElement.querySelector('.placeInputs').appendChild(inputs)
                    break
                case 1:
                    inputs.className = 'inputs KG'
                    inputs.placeholder = 'KG'
                    element.parentElement.parentElement.querySelector('.placeInputs').appendChild(inputs)

                    break   
                case 2:
                    inputs.placeholder = 'SERIE'
                    inputs.className = 'inputs SERIE'
                    element.parentElement.parentElement.querySelector('.placeInputs').appendChild(inputs)

                    break
                case 3:
                    inputs.placeholder = 'REP'
                    inputs.className = 'inputs REP'
                    element.parentElement.parentElement.querySelector('.placeInputs').appendChild(inputs)

                    break
            }
        }
    })
})


let removeRow = document.querySelectorAll('.removeRow')
removeRow.forEach(function removeRow(element){
    element.addEventListener('click', function(){
        for(var i = 0; i < 4; i++){
            let inputs = element.parentElement.parentElement.querySelectorAll('.inputs');
            inputs[inputs.length - 1].remove();
            
        }    
    })
})


let btnsApagarFichas = document.querySelectorAll('.apagarFicha')
btnsApagarFichas.forEach( function(element){
    element.addEventListener('click',() =>{    
        element.parentElement.remove()   
    }) 
})
        


let btnsCreateFicha = document.querySelectorAll('.createFicha')
btnsCreateFicha.forEach(function(element){
    element.addEventListener('click',function(){
        element.parentElement.before(objFicha())
    })
})

let btncreateTreino = document.getElementById('btnCreateTreino')
    btncreateTreino.addEventListener('click',() => createTreino())

let apagarTreino = document.querySelectorAll('.apagarTreino')
    apagarTreino.forEach(function(element){
        element.addEventListener('click',() => 
            element.parentElement.parentElement.parentElement.remove()
        )
    })

function createTreino(){   
    if(objSecs() != null){
        document.getElementById('montarTreino').append(objSecs())
        return
    }
    alert('limite maximo 5')  
}

function ShowRotine(element) {
    
    
    
    if (element.querySelector('.placePlanilha').style.display == 'flex') {
        element.querySelector('.placePlanilha').style.display = 'none'
    }
    else{

        document.querySelectorAll('.placePlanilha').forEach(element => {
        element.style.display = 'none'
        });
        element.querySelector('.placePlanilha').style.display = 'flex'
    }
    
    
    
   
    
    
    
    console.log('leu');
    
}

function createRow(element){
    for(var i = 0; i < 4; i++){
        let inputs = document.createElement('input')
        switch (i){  
            case 0:
                inputs.className = 'inputs exercicio'
                inputs.placeholder = 'exercício'
                element.parentElement.parentElement.querySelector('.placeInputs').appendChild(inputs)

                break
            case 1:
                inputs.className = 'inputs KG'
                inputs.placeholder = 'KG'
                element.parentElement.parentElement.querySelector('.placeInputs').appendChild(inputs)


                break   
            case 2:
                inputs.placeholder = 'SERIE'
                inputs.className = 'inputs SERIE'
                element.parentElement.parentElement.querySelector('.placeInputs').appendChild(inputs)


                break
            case 3:
                inputs.placeholder = 'REP'
                inputs.className = 'inputs REP'
                element.parentElement.parentElement.querySelector('.placeInputs').appendChild(inputs)
                break
        }
    }
}
function objFicha(){
    let obj = document.createElement('section')
    obj.className = 'lugarFicha'

    let button = document.createElement('button')
    button.className = 'apagarFicha'
    button.textContent = 'apague'
       

    let placeInputs = document.createElement('div')
    placeInputs.className = 'placeInputs'

    let div = document.createElement('div')
        
    
    obj.appendChild(button)
    obj.appendChild(placeInputs)
    obj.appendChild(div)

    let btnCriar = document.createElement('button')
    btnCriar.textContent = 'Criar'
    
    let btnApagar = document.createElement('button')    
    btnApagar.textContent = 'X'
        

    div.appendChild(btnCriar)
    div.appendChild(btnApagar)

    button.addEventListener('click',() => button.parentElement.remove()) 
    btnApagar.addEventListener('click', () => {
        for(var i = 0; i < 4; i++){
            let inputs = btnApagar.parentElement.parentElement.querySelectorAll('.inputs');
            inputs[inputs.length - 1].remove();
            
        }  
    })
    btnCriar.addEventListener('click', () => createRow(btnCriar));
    createRow(btnCriar)

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
        h1.textContent = 'treinoFullBody'
        h1.addEventListener('click', () => ShowRotine(treino))
    
    let btnsHeadSecs  = document.createElement('div')
        btnsHeadSecs.className = 'btnsTreinoHead'

    let btnEditarSec = document.createElement('button')
        btnEditarSec.textContent = 'Editar'
        btnEditarSec.className = ''

    let btnApagarSec = document.createElement('button')
        btnApagarSec.textContent = 'X'
        btnApagarSec.className = 'apagarTreino'
        btnApagarSec.addEventListener('click',() => 
            treino.remove()
        )
    
    
    let placePlanilha = document.createElement('div')
        placePlanilha.className = 'placePlanilha'
        placePlanilha.style.display = 'none'

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