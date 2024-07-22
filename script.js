function toggleMode()  {
    const html = document.documentElement
    html.classList.toggle('light')

    //buscar a tag imagen

    const img = document.querySelector(`#profile img`)

    //substituir a imagem
    if(html.classList.contains('light')){
        //se tiver light mode, adicionar a imagem light
        img.setAttribute('src' , "./assets/avatar2.jpg")
    } else {
        img.setAttribute('src',"./assets/avatar2.jpg")
    }


}