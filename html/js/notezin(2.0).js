

const exercises = [
    {
        id: 1,
        value: 'benchpress',
        label: 'Bench Press',
        muscle: 'chest',
        enabled: true,
        order: 1
    },
    {
        id: 2,
        value: 'Squat',
        label: 'Squat',
        muscle: 'legs',
        enabled: true,
        order: 2
    }
];


let obj = []
let newRotine = document.getElementById('new-rotine')
    newRotine.addEventListener('click', () => {
        if(obj.length >= 5){
            alert('Maximo de elementos criados')
            return
        }
        let nome = prompt("Digite o nome da rotina:");
        if(nome == '' || nome == null){
            alert('elemento vazio') 
            return
        }
        obj.push(nome)

        const place = document.getElementById('rotine-place')

        const rotines =  document.createElement('div')
            rotines.className = 'rotines'
            rotines.id = 'rotine-'+nome
        
        const rotineName = document.createElement('h1')
            rotineName.addEventListener('click',()=> entryRotine(nome))


        const entriedRotine = document.createElement('div')
            entriedRotine.id = 'entry-'+nome
            entriedRotine.className = 'entry'
            entriedRotine.style.display = 'none'

        const input = document.createElement('input')
            

        const placeOneRotine = document.getElementById('one-rotine')


        placeOneRotine.appendChild(entriedRotine)
        entriedRotine.appendChild(input)


        place.appendChild(rotines)
        rotines.appendChild(rotineName)
        rotineName.textContent = nome
        console.log(obj);
        
    } )

function entryRotine(id){
    let oneRotine = document.getElementById('one-rotine')
        oneRotine.style.display = 'block'
    let rotinePlace = document.getElementById('rotine-place')
        rotinePlace.style.display = 'none'

    let AllEntry = document.querySelectorAll('.entry')
    AllEntry.forEach( function(ele){
        ele.style.display = 'none'

    })
    const Entry = document.getElementById('entry-'+id)
        Entry.style.display = 'block'
    
}

let backRotines = document.getElementById('back-rotines')
    backRotines.addEventListener('click',()=>{
        let oneRotine = document.getElementById('one-rotine')
            oneRotine.style.display = 'none'
        let rotinePlace = document.getElementById('rotine-place')
            rotinePlace.style.display = 'block'
    })













/*
const select = document.getElementById('exercise');
exercises.forEach(ex => {
            const option = document.createElement('option');
            option.value = ex.value;  
            option.textContent = ex.label;
            select.appendChild(option);
        });


let NewExercise = document.getElementById('new-exercise')
    NewExercise.addEventListener('click', ()=>{
        const exercise = document.createElement('select')
        const option = document.createElement('option');
            option.value = '';  
            option.textContent = 'Selecionar';
            exercise.appendChild(option)

            exercises.forEach(ex => {

                const option = document.createElement('option');
                option.value = ex.value;  
                option.textContent = ex.label;
                exercise.appendChild(option)
            })

        let place = document.getElementById('exercise')
        place.appendChild(exercise)

    })
*/