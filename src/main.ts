
function trefle() {
    let x = 1
    let nbr_carte_trefle = 7
    for (let i = 0; i < nbr_carte_trefle; i++) {
        const a = document.querySelector(".ZoneDeJeu") as HTMLDivElement
        const carte_de_trefle = document.createElement('div')
        carte_de_trefle.classList.add('carte_trefle' + x)
        
        const tete_carte = document.createElement("div")
        tete_carte.classList.add("nbr_carte_tete")
        tete_carte.innerText = x.toString()
        
        const centre_carte = document.createElement("div")
        centre_carte.classList.add("symbole_carte_centre")
        centre_carte.innerText = "\u2663"
        
        const pied_carte = document.createElement("div")
        pied_carte.classList.add("nbr_carte_pied")
        pied_carte.innerText = "1"
        
        x++
        carte_de_trefle.appendChild(tete_carte)
        carte_de_trefle.appendChild(centre_carte)
        carte_de_trefle.appendChild(pied_carte)
        a.appendChild(carte_de_trefle)
    }    
}

function carreau() {
    let x = 1
    let nbr_carte_carreau = 7
    for (let i = 0; i < nbr_carte_carreau; i++) {
        const a = document.querySelector(".main") as HTMLDivElement
        const carte_de_carreau = document.createElement('div')
        carte_de_carreau.classList.add('carte_carreau' + x)
        
        const tete_carte = document.createElement("div")
        tete_carte.classList.add("nbr_carte_tete")
        tete_carte.innerText = x.toString()
        
        const centre_carte = document.createElement("div")
        centre_carte.classList.add("symbole_carte_centre")
        centre_carte.innerText = "\u2666"
        
        const pied_carte = document.createElement("div")
        pied_carte.classList.add("nbr_carte_pied")
        pied_carte.innerText = "1"
        
        x++
        carte_de_carreau.appendChild(tete_carte)
        carte_de_carreau.appendChild(centre_carte)
        carte_de_carreau.appendChild(pied_carte)
        a.appendChild(carte_de_carreau)
    }
}

trefle()
carreau()