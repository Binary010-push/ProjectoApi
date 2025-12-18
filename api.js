// funcao assincrona para consumir uma api
    async function api() {
        const respostas = await fetch('https://imdb.iamidiotareyoutoo.com/search?q=Spiderman')
        const dados = await respostas.json()


        const listas = dados.description
// vai fazer uma filtragem dos valores dentro do array e comparar se o valor foi digitado ou nao
        const filtros = document.querySelector('input')
        if(filtros.value == ''){
            filtros.style.border = '1px solid red'
            
        }else {
            
            filtros.style.border = 'none'
            const resultradoFiltrados = listas.filter(item=> item['#TITLE'].includes(filtros.value))
            filtros.value = ''
            //renderizar valores
            renderizarApi(resultradoFiltrados)
            console.log(resultradoFiltrados)
        }

        encontrarPesquisar(dados)


        // return filtros.value != resultradoFiltrados  ? alert('RESULTADO NAO ENCONTRADO') : alert('RESULTADO ENCONTRADO')
        

function renderizarApi(resultradoFiltrados){

    // VAI FAZER UMA INTERACAO ENTRE OS ELEMENTOS
    for (let item of resultradoFiltrados){  
        const container2 = document.querySelector('main')
        console.log(item)

        const img = document.createElement('img')
        // img.style.width = '200px'
        // img.style.height = '200px'
        // img.src = item['#IMG_POSTER']

        const article = document.createElement('article')
        article.classList.add('card')
        article.innerHTML = `
            <img src = '${item['#IMG_POSTER']}'/>
            <p>${item['#TITLE']}</p>
            <h2>${item['#ACTORS']}</h2>
            <P>${item['#YEAR']}</P>
            <a href = 'https://imdb.com/title/${item['#IMDB_ID']}' target = '_blank' class = 'nome'>Descrição do filme</a>
        `

        container2.appendChild(article)

        
    }
}

}


function encontrarPesquisar(dados){

}