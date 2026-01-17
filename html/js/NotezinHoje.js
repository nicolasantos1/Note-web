let hoje = new Date()



window.addEventListener('load', function() {
    console.log(hoje.getDay());
    
   
    let a = document.querySelectorAll('.nottoday')
    let b = a[hoje.getDay()]
    b.classList.add('today')
        
    
})