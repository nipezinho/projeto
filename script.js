function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
    
    const img = document.querySelector("#profile img")

    if(html.classList.contains("light")){
        img.setAttribute("src", "./assets/avatar-light.png")
        img.setAttribute("alt" ,"Foto da Clara com a mão na cara de murca")
    } else {
        img.setAttribute("src", "./assets/avatar.png")
        
        img.setAttribute("alt" ,"Foto da Clara de bandana do naruto")
    } 
    


    
}