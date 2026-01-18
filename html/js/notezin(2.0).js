

function newRotine(){
    
    if(document.querySelectorAll('.rotine-content').length == 5){
        alert('Maximo 5')
        return
    }
    let original = document.getElementById('mold')
    let copy = original.cloneNode(true)
        copy.removeAttribute('id')  
   
    let place = document.getElementById('rotine-place')
        place.appendChild(copy)

    let nome = prompt("Digite o nome da rotina:");
    if (nome == null) {
        copy.remove(true)
    }
    

    copy.querySelector('.training-name').textContent = nome

    console.log( copy.querySelector('training-name'));
    
    
}

function entryRotine(element) {
    document.getElementById('rotine-place').style.display = 'none'
    document.getElementById('one-rotine').style.display = 'block'

    let lugar = document.getElementById('rotine-name')
    
    
    lugar.textContent = element.textContent 
}

// Botao de voltar para as rotinas todos os treinos upper 1
let backRotines = document.getElementById('back-rotines').addEventListener('click',() => {
    document.getElementById('rotine-place').style.display = 'block'
    document.getElementById('one-rotine').style.display = 'none'

})
