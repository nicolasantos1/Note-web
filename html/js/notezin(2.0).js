

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



function newRotine(){
    
    if(document.querySelectorAll('.rotine-content').length == 5){
        alert('Maximo 5')
        return
    }
    let original = document.getElementById('mold')
    let copy = original.cloneNode(true)
        copy.removeAttribute('id')  
        copy.style.display = 'block'
   
    let place = document.getElementById('rotine-place')
        place.appendChild(copy)

    let nome = prompt("Digite o nome da rotina:");
    if (nome == null || nome == '') {
        copy.remove(true)
    }
    

    copy.querySelector('.training-name').textContent = nome

    


}















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