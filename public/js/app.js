const cotacoesForm = document.querySelector('form')
const mainMensage = document.querySelector('h3')
const price = document.querySelector('#price')
const price_open = document.querySelector('#price_open')
const day_high = document.querySelector('#day_high')
const day_low = document.querySelector('#day_low')

cotacoesForm.addEventListener('submit', () => {
    mainMensage.innerText = 'Buscando...'
    event.preventDefault()
    const ativo = document.querySelector('input').value

    if(!ativo){
        mainMensage.innerText = 'O ativo deve ser informado'
        return;
    }

    fetch(`http://localhost:3000/cotacoes?ativo=${ativo}`).then((response) =>{
    response.json().then((data) =>{
        if(data.error){
            mainMensage.innerText = 'Alguma coisa deu errado !'
            price.innerText = `${data.error.mensage} | código ${data.error.code}`
        }else{
            mainMensage.innerText = data.symbol
            price.innerHTML = `<img src="/img/price.svg" style="width:30px"> PRICE: ${data.price}`
            price_open.innerHTML = `<img src="/img/gray-arrow.png"> OPEN: ${data.price_open}`
            day_high.innerHTML = `<img src="/img/green-arrow.png"> HIGH: ${data.day_high}`
            day_low.innerHTML = `<img src="/img/red-arrow.png"> LOW: ${data.day_low}`
        }
        
    })
})
})