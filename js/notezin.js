
let btnCreateRotine = document.getElementById('btnCreateTreino')
btnCreateRotine.addEventListener('click',newRotine)




function newRotine(){
    let placeRotine = document.querySelector('.place-rotine')

    let rotineObj = document.createElement('div')
    rotineObj.classList = 'rotines'

    let rotineName = document.createElement('h1')
    rotineName.classList = 'rotine-name'
    rotineName.textContent = prompt()

    let volumeContainer = document.createElement('div')
    volumeContainer.classList = 'volume-container'

    let colSets = document.createElement('div')
    colSets.classList = 'col sets-container'
        let sets = document.createElement('h3')
        sets.classList = 'sets'
        sets.textContent = 'Sets'
        colSets.appendChild(sets)
        let indexSets = document.createElement('p')
        indexSets.textContent = '1'
        colSets.appendChild(indexSets)
        function addSet(){
            let newIndexSets = document.createElement('p')
            newIndexSets.textContent = parseInt(colSets.lastChild.textContent) + 1
            colSets.appendChild(newIndexSets)
        }

    let colKg = document.createElement('div')
    colKg.classList = 'col kg-container'
        let kg = document.createElement('h3')
        kg.classList = 'kg'
        kg.textContent = 'Kg'
        colKg.appendChild(kg)
        function inputKgFunction(){
            let inputKg = document.createElement('input')
            inputKg.classList = 'input kg'
            inputKg.type = 'text'
            colKg.appendChild(inputKg)
        }
        inputKgFunction()

    let colReps = document.createElement('div')
    colReps.classList = 'col reps-container'
        let reps = document.createElement('h3')
        reps.classList = 'reps'
        reps.textContent = 'Reps'
        colReps.appendChild(reps)
        function inputRepsFunction(){
            let inputReps = document.createElement('input')
            inputReps.classList = 'input reps'
            inputReps.type = 'text'
            colReps.appendChild(inputReps)
        }   
        inputRepsFunction()

    let btnsSets = document.createElement('button')
    btnsSets.classList = 'btns-sets'
    btnsSets.textContent = '+'
    btnsSets.addEventListener('click',()=> {
        addSet()
        inputKgFunction()
        inputRepsFunction()
    })

    placeRotine.appendChild(rotineObj)

        rotineObj.appendChild(rotineName)
        rotineObj.appendChild(volumeContainer)
        rotineObj.appendChild(btnsSets)
        
            volumeContainer.appendChild(colSets)
            volumeContainer.appendChild(colKg)
            volumeContainer.appendChild(colReps)

}

