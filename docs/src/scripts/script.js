//Adiciona um listener para o evento de scroll na janela
window.addEventListener('scroll', function(){
    const header = document.querySelector('header')
    const scrollPosition = window.scrollY

    //Variável para controlar a seção ativa
    let activeSectionIndex = 0
    if(scrollPosition <= 0){
        //Remove a sombra quando chega no topo
        header.style.boxShadow = 'none'
    } else{
        //Adiciona a sombra no header quando scrollado pra baixo
        header.style.boxShadow = '5px 1px 5px rgba(0, 0, 0, 0.1)'
    }

    const sections = document.querySelectorAll('section')
    const navItems = document.querySelectorAll('.nav_item')
    
    //Para cada seção, verifica se está visível na tela
    sections.forEach((section, i) => {
    const rect = section.getBoundingClientRect();
        
        // Se a seção ocupa pelo menos 50% da tela
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            navItems.forEach(item => item.classList.remove('active'));
            navItems[i].classList.add('active');
        }
    });

});

//Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#mobile-button').addEventListener('click', function(){
        var menu = document.querySelector('#mobile-bar')
        var icon = document.querySelector('#mobile-btn-icon')

        //Alterna a classe 'active' no menu
        menu.classList.toggle('active')

        //Verifica se o icone existe
        if (icon){
            //Alterna entre os ícones
            icon.classList.toggle('fa-bars')
            icon.classList.toggle('fa-x')
        }
    })
})

const botoes = document.querySelectorAll('.btn_year')

botoes.forEach(botao => {
    botao.addEventListener('click', function(){
        //Obtém o ano a partit do atributo data-ano
        const ano = botao.getAttribute('data-ano')
        //Constrói o ID correspondente ao texto 
        const Idtext = 'text-' + ano
        const text = document.getElementById(Idtext)
        const subtitle = document.querySelector('.section_subtitle')

        const alltexts = document.querySelectorAll('[id^="text-"]')
        //Para cada texto, esconde:
        alltexts.forEach(texts => {
            texts.classList.add('text_hidden')
            texts.classList.remove('text_visible')
        })

        //Exibe o texto correspondente ao ano
        if(ano == "2022"){
            subtitle.classList.add('text_hidden')
            text.classList.remove('text_hidden')
            text.classList.add('text_visible')

        } else if(ano == "2023"){
            subtitle.classList.add('text_hidden')
            text.classList.remove('text_hidden')
            text.classList.add('text_visible')
        } 
        else if(ano == "2024"){
            subtitle.classList.add('text_hidden')
            text.classList.remove('text_hidden')
            text.classList.add('text_visible')
        } 
        else if(ano == "2025"){
            subtitle.classList.add('text_hidden')
            text.classList.remove('text_hidden')
            text.classList.add('text_visible')
        } 
    })
})
