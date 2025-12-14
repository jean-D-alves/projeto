const ImgCompany = document.querySelectorAll('.icone-galeria')



ImgCompany.forEach(img => {
    img.addEventListener('click',()=>{
        console.log("fg")
        const alt = img.alt;
        console.log(alt)
    })
});