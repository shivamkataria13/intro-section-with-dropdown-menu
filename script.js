const openmenu = document.getElementById("openmenu")
const closemenu = document.getElementById("closemenu")
const navbar = document.querySelector(".navbar")
const ul = document.querySelector('.nav-ul')



openmenu.addEventListener("click", () => {
    navbar.classList.add("open")
    ul.style.display = "block"
    closemenu.style.display = "block"
} )

closemenu.addEventListener("click", () => {
    navbar.classList.remove("open")
    ul.style.display = "flex"
    closemenu.style.display = "none"
} )




const features = document.querySelector('.features')
const featuresmenu = document.querySelector('.featuresmenu')
const featuresarrow = document.querySelector('.featuresarrow')


const company = document.querySelector('.company')
const companymenu = document.querySelector('.companymenu')
const companyarrow = document.querySelector('.companyarrow')





features.addEventListener("click", ()=> {
    featuresmenu.classList.toggle('displaynone')
    featuresarrow.classList.toggle('rotate')
})

company.addEventListener("click", ()=> {
    companymenu.classList.toggle('displaynone')
    companyarrow.classList.toggle('rotate')
})