let numero_caixa = [0] 
    numero_caixa[0] = 0
let numero_forma = 0
let foiCriado =[]
let qual_forma = []
let numero_section = [0] //numero de caixas por forma

document.getElementById('clonar').addEventListener('click',function(as){
    console.log(as,'outro');
    let cloneforma = document.getElementById('forma0')
    let colenitu = cloneforma.cloneNode(true)
    cloneforma.after(colenitu)

})

function criar_forma(){
    
            
    document.getElementById('forma'+numero_forma)
    let forma           = document.createElement("div")
        forma.id        = "forma"+numero_forma
        forma.className = "forma"
        
    let btn_sessaonum             = document.createElement("button")
        btn_sessaonum.type ='checkbox'
        btn_sessaonum.textContent = numero_forma + 1
        btn_sessaonum.id ='btn-'+numero_forma
        btn_sessaonum.className   = "btn_sessao"
        btn_sessaonum.setAttribute("onclick",'ativado('+numero_forma+')')

    let lugar_sessaotreino = document.getElementById("sessoes_treino")    
        lugar_sessaotreino.insertBefore(btn_sessaonum, addForma)

    let lugar_forma = document.getElementById("espaco_formas") 
        lugar_forma.appendChild(forma)

    
    

    ativado(numero_forma)
    
    for(var i = 0; i < qual_forma.length; i++){
        
        if(qual_forma[i]==true && numero_section[i] == null || numero_section[i] == 0 ){
         
            criar_caixas(i)
            
        }
    }
    numero_forma++
    
}
    


function criar_caixas(numeroforma){

    if(numero_caixa[numeroforma] == null){
        numero_caixa[numeroforma] = 0
    }
   
    
    let caixas = document.createElement('section')
        caixas.id = "caixa" + numeroforma + numero_caixa[numeroforma] 
        caixas.className = 'caixa'

    let forma = document.getElementById("forma"+ numeroforma)
   
    if((btn_addcaixas = document.getElementById('addcaixa'+ numeroforma)) == null){
        console.log('chamo');
        var btn_addcaixas = document.createElement('button')
        btn_addcaixas.textContent = "adicionar caixa"
        btn_addcaixas.id = "addcaixa"+numeroforma
        btn_addcaixas.className = 'addCaixa'
        btn_addcaixas.setAttribute('onclick','criar_caixas('+numeroforma+')');

        forma.appendChild(btn_addcaixas)

        
        
        forma.insertBefore(caixas,btn_addcaixas)
        criar_firstLinha(numeroforma,numero_caixa[numeroforma])
        numero_section[numeroforma] =+ 1
        numero_caixa[numeroforma] = numero_caixa[numeroforma] + 1 
        
    }else{
        console.log('chamou otou');
        forma.insertBefore(caixas, btn_addcaixas)
        criar_firstLinha(numeroforma,numero_caixa[numeroforma])
        numero_caixa[numeroforma] = numero_caixa[numeroforma] + 1 
    }
    
    
    //console.log(    'pii' ,numerocaixa[numeroforma[posiCaixa]]  );
}

function criar_firstLinha(posiForma,posiCaixa){
    
    if(posiCaixa == null){
        posiCaixa = 0
    }
    let qualLinha = document.getElementById(('caixa'+ posiForma) + posiCaixa)
    
    let input_name  = document.createElement("input")
    let input_kg    = document.createElement("input")
    let input_serie = document.createElement("input")
    let input_rep   = document.createElement("input")

    //console.log(('caixa'+posiForma) + posiCaixa);
    
    let but = document.createElement('button')
        but.setAttribute('onclick','criar_linhas('+posiForma+','+posiCaixa+')')
        but.className = 'add_ex'
        but.textContent = '+'

    let butRemove = document.createElement('button')
        butRemove.textContent = 'X'
        butRemove.setAttribute('onclick', 'remover_linha('+posiForma+','+posiCaixa+')')
    

    input_name.placeholder = "colocar exercicio"
    input_name.className   = "input exercicio"
    input_kg.className     = "input"
    input_rep.className    = "input"
    input_serie.className  = "input"
    input_serie.type = "number"
   
    qualLinha.appendChild(input_name)
    qualLinha.appendChild(input_kg)
    qualLinha.appendChild(input_serie)
    qualLinha.appendChild(input_rep)
    input_rep.after(but)
    but.after(butRemove)
    
}

function criar_linhas(posiForma,posiCaixa){
    
    if(posiCaixa == null){
        posiCaixa = 0
    }
    //console.log(('caixa'+posiForma) +posiCaixa);
    
    let qualLinha = document.getElementById(('caixa'+ posiForma) + posiCaixa )
    

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
   
    let posi_beforebtns = qualLinha.children[qualLinha.childElementCount - 2]
    
    qualLinha.insertBefore(input_name, posi_beforebtns)
    qualLinha.insertBefore(input_kg, posi_beforebtns)
    qualLinha.insertBefore(input_serie, posi_beforebtns)
    qualLinha.insertBefore(input_rep, posi_beforebtns)
}

function remover_linha(posiForma,posiCaixa){
    
    let quallinha   = document.getElementById(("caixa"+ posiForma) +posiCaixa )
    let inputs = quallinha.querySelectorAll(".input")
    
    if(inputs.length > 4){ // apagar as linhas
      
        for(var i = inputs.length-4 ; i <  inputs.length; i++){
            quallinha.removeChild(inputs[i])
        }
    }
    else{ //apagar a caixa onde está a linha
        let forma = document.getElementById('forma'+posiForma)
        let esp = document.getElementById('caixa'+posiForma+posiCaixa)
        if(posiCaixa < (numero_caixa[posiForma]-1)){
            console.log('não apague ainda');
            
        }
        else{
           
            
            
            numero_caixa[posiForma] -= 1

            let nextif = document.getElementById('forma'+ (posiForma +1))
            console.log('forma'+(posiForma+1));

            if (! (nextif == null || nextif == undefined)){
                let clone = document.getElementById('forma'+(posiForma+1))
                let clonado = clone.cloneNode(true)
                    clonado.id ='forma'+posiForma
                numero_caixa[posiForma] = numero_caixa[posiForma+1]
                numero_caixa[posiForma+1] = undefined
                clone.before(clonado)
                clone.remove()
                
                
                console.log('apagou')
            }
            numero_forma--
            esp.remove()
            forma.remove()

        }

        console.log( 'posiForma:'+posiForma,' posiCaixa:' , posiCaixa ,' numero_caixa = ', numero_caixa );
    



    }
    // else{
    //     let forma = document.getElementById("forma"+ posiForma)
    //     forma.remove()

    //     numero_caixa = [0] 
    //     
    //     numero_forma = 0
    //     qual_forma = []
    //     numero_section = [0]
    // }
    
}

function ativado(numeroforma){
    qual_forma = Array(numero_forma).fill(false)
    qual_forma[numeroforma] = true
    
    let formas = document.querySelectorAll('.forma')
    for(var k = 0; k < formas.length; k++){
        let forma = formas[k]
        if (qual_forma[k] == false){
            forma.className = 'forma'
            // forma.style.display = 'none'
        }
        else{
            forma.className = 'forma forma_ativo'
            forma.style.display = '' 
        }
    }

    let inputnumeros_formas = document.querySelectorAll('.btn_sessao')
    inputnumeros_formas.forEach(function(clicou){
        clicou.classList.remove('clicked')
    })
    
    //inputnumeros_formas[numeroforma].classList.add('clicked');
    
}  
document.getElementById('var').addEventListener('click', function(){
    console.clear()
    console.log('numero_caixa = ',numero_caixa);
    console.log('numero_forma = ',numero_forma)
    console.log('qual_forma = ',qual_forma)
    console.log('numero_section = ',numero_section)
})

