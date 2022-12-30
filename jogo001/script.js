const url_img = 'https://cdn.appanimeplus.tk/img/'

function abrir_navbar() {
    document.getElementById('nav').style.width = '250px'
}

function fechar_navbar() {
    document.getElementById('nav').style.width = '0px'
}


document.addEventListener('keypress', (val) => {
    if (val.key == 'Enter') {
        const name_anime = document.getElementById('nome-anime')

        window.location.href = `result.html?nomeAnime=${name_anime.value}`
    }
})


const populares = async () => {


    const url = 'https://appanimeplus.tk/play-api.php?populares'

    const resp = await fetch(url)

    const body_pop = document.getElementById('pop')

    const data = await resp.json()

    console.log(data)

    data.map((resp) => { 

        function ver_anime() {
            window.location.href = `anime.html?id=${resp.id}`
        }
    
        const div = document.createElement('div')

        const but = document.createElement('button')

        but.innerText = 'Ver'

        but.addEventListener('click', ver_anime)

        div.innerHTML += `
            <img src="${url_img}${resp.category_image}"/>
            <p>${resp.category_name}</p>`

        div.append(but)

        body_pop.append(div)
    })
}

populares();