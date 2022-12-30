const urlParams = new URLSearchParams(window.location.search)

const name_anime = urlParams.get('nomeAnime')

const url_image = 'https://cdn.appanimeplus.tk/img/'

console.log(name_anime)

async function pegar_animes() {
    const url = `https://appanimeplus.tk/play-api.php?search=${name_anime}`

    const resp = await fetch(url)

    const data = await resp.json()

    const body = document.getElementById('results')

    console.log(data)

    data.map((resp) => {
        function ver_anime() {
            window.location.href = `anime.html?id=${resp.id}`
        }

        const div = document.createElement('div')

        const img = document.createElement('img')

        img.src = `${url_image}${resp.category_image}`

        div.append(img)

        const name = document.createElement('p')

        name.innerText = resp.category_name

        div.append(name)

        const but = document.createElement('button')

        but.innerText = 'Ver'

        but.addEventListener('click', ver_anime)

        div.append(but)

        body.append(div)
    })
}

pegar_animes();