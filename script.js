const popup=document.getElementById("dialog-personagens")
let nomes=document.getElementById("nome-personagem")
let desc=document.getElementById("desc-personagem")
let banner=document.getElementById("img-personagem")



document.querySelectorAll(".personagem").forEach((infpersonagens)=>{
    infpersonagens.addEventListener('click', ()=>{
        nomes.textContent=infpersonagens.dataset.nome;
        desc.textContent=infpersonagens.dataset.desc;
        banner.style.backgroundImage=`url(${infpersonagens.dataset.imagem})`;
        popup.showModal()
    })
})