var elementos = document.querySelectorAll('.player-options div')
var playerOpt = ''
var inimigoOpt = ''
var pontosPlayer = 0 
var pontosInimigo = 0
var placar = document.getElementById('placar')
var vencedor = document.querySelector('.vencedor')


function validarGame(){
    
    
    if(playerOpt == 'papel'){
        if(inimigoOpt == 'papel'){
            //empate
            vencedor.innerText = 'Empate'
        }
        else if(inimigoOpt == 'tesoura'){
            //player ganhou
            vencedor.innerText = 'Inimigo ganhou'
            pontosInimigo += 1
        }
        else if(inimigoOpt == 'pedra'){
            //player ganhou
            vencedor.innerText = 'Player ganhou'
            pontosPlayer += 1
        }
    }
    if(playerOpt == 'tesoura'){
        if(inimigoOpt == 'papel'){
            //player ganhou
            vencedor.innerText = 'Player ganhou'
            pontosPlayer += 1
        }
        else if(inimigoOpt == 'tesoura'){
            //empate
            vencedor.innerText = 'Empate'
        }
        else if(inimigoOpt == 'pedra'){
            //inimigo ganhou
            vencedor.innerText = 'Inimigo ganhou'
            pontosInimigo += 1
        }
    }
    if(playerOpt == 'pedra'){
        if(inimigoOpt == 'papel'){
            //inimigo ganhou
            vencedor.innerText = 'Inimigo ganhou'
            pontosInimigo += 1
        }
        else if(inimigoOpt == 'tesoura'){
            //player ganhou
            vencedor.innerText = 'Player ganhou'
            pontosPlayer += 1
        }
        else if(inimigoOpt == 'pedra'){
            //empate
            vencedor.innerText = 'Empate'
        }
    }
    
    placar.innerHTML = `Player ${pontosPlayer} x ${pontosInimigo} Inimigo`
    
}

function gameWin(){
   
    if(pontosInimigo > pontosPlayer){
        alert("Inimigo vencer!!")
    }
    else if(pontosPlayer > pontosInimigo){
        alert("Voce venceu!!")
    }
    else{
        alert("Empate!")
    }
    
    placar.innerHTML = `Player ${'0'} x ${'0'} Inimigo`
    
    vencedor.innerText = ''


}

function resetInimigo(){
    let enemyOptions = document.querySelectorAll('.enemy-options div')
    for( var i = 0; i < enemyOptions.length;i++){
        enemyOptions[i].childNodes[0].style.opacity = 0.3
    }
}


function inimigoGame(){
    let rand = Math.floor(Math.random()*3)
    
    let enemyOptions = document.querySelectorAll('.enemy-options div')
    resetInimigo()
    for( var i = 0; i < enemyOptions.length;i++){
        if(i == rand){
            enemyOptions[i].childNodes[0].style.opacity = 1
            inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt')
        }
    }
    // alert(playerOpt)
    // alert(inimigoOpt)
    validarGame()
}

function resetOpacityPlayer(){
    for(let i=0;i<elementos.length;i++){
        elementos[i].style.opacity = 0.3
    }
}

for(let i=0;i<elementos.length;i++){
    elementos[i].addEventListener('click', function(t){
        resetOpacityPlayer()
        t.target.style.opacity = 1

        playerOpt = t.target.getAttribute('opt')

        inimigoGame()
    })

}

