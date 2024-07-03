let numero_caixa = [0] 
    numero_caixa[0] = 0
let numero_forma = 0
let qual_forma = []
let numero_section = [0] //numero de caixas por forma



function criar_forma(){
    
    
    let lugar_sessaotreino = document.getElementById("sessoes_treino")
    

    let forma           = document.createElement("div")
        forma.id        = "forma"+numero_forma
        forma.className = "forma"
        

    let btn_sessaonum             = document.createElement("button")
        btn_sessaonum.textContent = numero_forma + 1
        btn_sessaonum.className   = "btn_sessao"
        btn_sessaonum.setAttribute("onclick",'ativado('+numero_forma+')')

        lugar_sessaotreino.insertBefore(btn_sessaonum, add)

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
   
    
    console.log(numeroforma,numero_caixa[numeroforma])
    //console.log(numero_section,numero_forma)
    //console.log(numero_section[numero_forma]);
    
    

    
    let caixas = document.createElement('section')
        caixas.id = "caixa" + numeroforma + numero_caixa[numeroforma] 
        caixas.className = 'linha_grupo'

    let forma = document.getElementById("forma"+ numeroforma)

    if((btn_addcaixas = document.getElementById('addcaixa'+ numeroforma)) == null){
       
        var btn_addcaixas = document.createElement('button')
        btn_addcaixas.textContent = "adicionar caixa"
        btn_addcaixas.id = "addcaixa"+numeroforma
        btn_addcaixas.setAttribute('onclick','criar_caixas('+numeroforma+')');
        forma.appendChild(btn_addcaixas)
        numero_section[numeroforma] =+ 1
        forma.insertBefore(caixas,btn_addcaixas)
        criar_linhas(numeroforma,numero_caixa[numeroforma])
        
        numero_caixa[numeroforma] = numero_caixa[numeroforma] + 1 
        
    }else{
        
        forma.insertBefore(caixas, btn_addcaixas)
        criar_linhas(numeroforma,numero_caixa[numeroforma])
        numero_caixa[numeroforma] = numero_caixa[numeroforma] + 1 
    }
    
    
    //console.log(    'pii' ,numerocaixa[numeroforma[posiCaixa]]  );
}

function criar_linhas(posiForma,posiCaixa){
    
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
        but.setAttribute('onclick','criar_teste('+posiForma+','+posiCaixa+')')
        but.className = 'add_ex'
        but.textContent = '+'
    

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
    
}
function criar_teste(posiForma,posiCaixa){
    
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
    
    

    qualLinha.firstChild.before(input_name,input_kg,input_serie,input_rep)

    
}

function ativado(numeroforma){
    
    qual_forma = Array(numero_forma).fill(false)
    qual_forma[numeroforma] = true
    
    let formas = document.querySelectorAll('.forma')

    for(var k = 0; k < formas.length; k++){
        let forma = formas[k]
        if (qual_forma[k] == false){
            forma.className = 'forma'
            forma.style.display = 'none'

        }
        else{
            forma.className = 'forma forma_ativo'
            forma.style.display = ''
        }

    }
   
}  
