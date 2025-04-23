const key = 'aba477b0d9c9c241eee08c736c2f688b'


function colocarDadosNaTela(dados) {
    document.querySelector('.cidade').innerHTML = 'Tempo em '+dados.name    
    console.log(dados)
    document.querySelector('.temp').innerHTML = Math.floor(dados.main.temp) + '°C' 
    document.querySelector('.textoPrevisao').innerHTML = dados.weather[0].description
    document.querySelector('.umidade').innerHTML = dados.main.humidity + '%'
    document.querySelector('.imgPrevisao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}



async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&units=metric
`).then(resposta => resposta.json())
    
    colocarDadosNaTela(dados)
}

cliqueiNoBotao = () => {
    const cidade = document.querySelector('.inputCidade').value
    buscarCidade(cidade)

}   
