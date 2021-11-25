//Por algum motivo a função colorSe n estava pegando a bkCor do style.css...dai tive que por dinamicamente as cores

// function bkCor(){
    function getRandom() {
        let array = ["black" , "orange" , "green" , "red"] //O vetor de cor inicial
        let cores = document.querySelectorAll(".color")
        cores[0].style.backgroundColor = "black" 
        const arrayColor = document.querySelectorAll(".color")
        for (let k = 1; k<arrayColor.length; k++) {
            let r =  parseInt(Math.random() * 255);
            let g = parseInt(Math.random() * 255);
            let b = parseInt(Math.random() * 255);
            array[k] = "rgb("+ r +"," + g +","+ b +")"  
            arrayColor[k].style.backgroundColor = array[k] //no final eu só estou mudando os elementos do array
        }
      
    }
    
    getRandom()

function colorSe () {
    const start = document.querySelector(".back-black");
    start.classList.add("selected"); //aqui é para garantirmos que sempre o preto vai ser o primeiro selecionado

    //Aqui é a parte que o usuário vai selecionar 
    const cp = document.querySelector("#color-palette")
    cp.addEventListener('click', function(event){
        let nSel = event.target //Aqui estou pegando qualquer target dentro do color-pallet
        let eSel = document.querySelector(".selected") //aqui estou pegando o primeiro selected
        eSel.classList.remove("selected") //removendo selected de quem tem selected
        nSel.classList.add("selected") // colocando selected em quem n tinha selected
    })
    //Aqui estou colocando as cores nos pixels
    
    const quadro = document.querySelector("#pixel-board")
    quadro.addEventListener("click", function(event){
        let pixelSel = event.target
        const sdColor = document.querySelector('.selected').style.backgroundColor; //Pegando a cor de fundo do selecionado 
        pixelSel.style.backgroundColor = sdColor;
    })
}

colorSe()

//Criando o botão de limpar

function clearAll(cor) {
    let clear = document.createElement("button");
    clear.innerText = "Limpar"
    clear.id = "clear-board";
    document.querySelector("#BotaoAqui").appendChild(clear);
    document.querySelector("#clear-board").addEventListener("click", function(){
        const arrayPixel = document.querySelectorAll(".pixel");
        for (i=0;i<arrayPixel.length;i++) {
            if (arrayPixel[i].style.backgroundColor != "white" )
            arrayPixel[i].style.backgroundColor = cor
    }
    }) 

}
clearAll("white")

//Desafios 10 e 11

function taQuadrado() {
    //criando o botão vqv
    const vqvBotao = document.createElement("button")
    vqvBotao.id = "generate-board"
    vqvBotao.innerText = "VQV"
    //criando o input
    const inputSpace = document.createElement("input")
    inputSpace.id = "board-size" 
    inputSpace.type = "number" // só recebe valores numéricos
    inputSpace.min = "1" //O valor mínimo aceito pelo imput é 1--> só recebe valores positivos
    //Aqui estou appendando o que fiz acima na div que criei manualmente com id vqvB 
    document.querySelector("#vqvB").appendChild(inputSpace)
    document.querySelector("#vqvB").appendChild(vqvBotao)
//Até aqui criei o botão e o input. Agora vamos criar ums estrutura que expande o quadrado que temos até no máximo 50
    document.querySelector("#vqvB").addEventListener("click" , function(){
            let nQuadrados = inputSpace.value
            if (nQuadrados > 50){
                document.querySelector('#pixel-board').innerHTML = ''; //Isso zera o quadro de pixel
                nQuadrados = 50
                for (let i = 0; i < nQuadrados; i++) { //Esse primeiro for vai criar a linha
                    const cLinha = document.createElement('div');
                    document.querySelector('#pixel-board').appendChild(cLinha); 
                    cLinha.className = 'linha'; 
                    const linha = document.querySelectorAll('.linha'); 
                    for (let j = 0; j < nQuadrados ; j ++) { //Esse segundo for preenche a linha com os pixels
                    const cPixel = document.createElement('div'); 
                    linha[i].appendChild(cPixel); 
                    cPixel.className = 'pixel'; 
                }
            }
        } else if (nQuadrados >=5 && nQuadrados <= 50) {
                document.querySelector('#pixel-board').innerHTML = ''; //Isso zera o quadro de pixel 
                for (let i = 0; i < nQuadrados; i ++) { //Esse primeiro for vai criar a linha
                    const cLinha = document.createElement('div');
                    document.querySelector('#pixel-board').appendChild(cLinha); 
                    cLinha.className = 'linha'; 
                    const linha = document.querySelectorAll('.linha'); 
                    for (let k = 0; k < nQuadrados ; k++) { //Esse segundo for preenche a linha com os pixels
                    const cPixel = document.createElement('div'); 
                    linha[i].appendChild(cPixel); 
                    cPixel.className = 'pixel'; 
                }
            }
        } else {
            alert("Board inválido!")
        }
    })
}
taQuadrado()

//Desafio 12--> gerar de maneira aleatória as cores
function getRandomArbitrary(min, max) {
    let cores = document.querySelectorAll("color")
    for (let i = 1; i< cores;i++){
        let r = Math.random() * (max - min) + min;
        let g = Math.random() * (max - min) + min;
        let b = Math.random() * (max - min) + min;
        cores.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    }
  }

getRandomArbitrary(18,1)


//////////////////////
/////Referências/////
////////////////////

//No Desafio 11, quando precisava expandir o quadro de pixel eu me inspirei no Yuri-TurmaXp-Tribo A.