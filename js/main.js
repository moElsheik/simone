

sections =document.querySelectorAll('section')
onload=ActiveNav
onscroll =ActiveNav


function ActiveNav () {
    positionY=this.document.documentElement.scrollTop
    changNavBackGround(positionY)


    sections.forEach(section => {
        if (positionY >= section.offsetTop -200&&
             positionY < section.offsetTop + section.offsetHeight -200) {
           let sectionId = section.attributes.Id
           removeActiveFromAllSections()
           addActiveToSection(sectionId.value)
           
           
        } 
    });
}


function removeActiveFromAllSections() {
    document.querySelectorAll('nav .links a').forEach(element => {
        element.classList.remove('active')
    }); 
}

function addActiveToSection(sectionId) {
    let selector= `nav .links a[href="#${sectionId}"]`
   
    document.querySelector(selector).classList.add('active')
  
    
}
// ----------------------------------------

let nav=document.querySelector("nav")
function changNavBackGround(positionY) {
   
    if (positionY > 0) {
        nav.style.backgroundColor="black"
       
    }else{
        nav.style.backgroundColor="transparent"
    }   
}


// --------------------------------------------
let navToggle=document.querySelector('#navToggle')
const linksRow=document.querySelector('.links .row')

console.log(nav.clientHeight);
console.log(navToggle);
(function(){
    linksRow.style.top=nav.clientHeight+"px";
    linksRow.style.right=-linksRow.offsetWidth+"px";
    
})()

navToggle.addEventListener("click", function () {
if (linksRow.style.right==-linksRow.offsetWidth+"px") {
    navToggle.innerHTML=`<i class="fa-solid fa-xmark"></i>`
    linksRow.style.right="0"
    linksRow.style.bottom="0"
    linksRow.style.opacity="1"   
}else{
    navToggle.innerHTML=` <i class="fa-solid fa-bars"></i>`
    linksRow.style.right=-linksRow.offsetWidth+"px";
    linksRow.style.bottom="100%"
    linksRow.style.opacity="0"   
}
})



// -------------------------------------------


let typing = document.querySelector('#typing')

let text =['I am Simone Olivia. ','I am a freelancer. ','I am a photoghrapher. ','I am a designer. ']

let container =[]
let i = 0
let j = 0
let isWriting=true
time=100

function type() {
typing.innerHTML =container.join("")
if (i < text.length) {


    if (isWriting && j<=text[i].length) {
        container.push(text[i][j])
    j++
    }

    
    
    if (isWriting==false && j <= text[i].length){
       
        j-- 
        container.pop(text[i][j])
        time=100
    }

    if ( j == text[i].length) {
        time=1000
        isWriting=false 
       
    }
   
       if ((isWriting==false && j===0 && i === text.length-1) ||(isWriting==false && j===4 && i===0) || (isWriting==false && j===6 &&i >0 && i < text.length-1 )  ) {
       
        isWriting=true
        
        i++  
       
       }  

    if (i == text.length){
        i=0
    } 
}

setTimeout(type,time)
}
type()













// -----------------------------------------------------

const arrowRight = document.querySelector(".carousal-right")
const arrowLeft = document.querySelector('.carousal-left')
const row=document.querySelector('#testimonial .row')


let rowX =0

arrowRight.addEventListener("click", function (e) {
        next()
        checkDisable()

} )

arrowLeft.addEventListener("click", function (e) {
    
    prev()
    checkDisable()
    

} )


function next() {
    
    if((rowX>-50 && window.innerWidth>600)|| rowX>-75 && window.innerWidth<=600 ){
       
        rowX-=25
        row.style.transform =`translate(${rowX}%)`
    }
}
function prev(){
    
    if(rowX<0){

        rowX+=25
        row.style.transform =`translate(${rowX}%)`
       
    }
   
}
function checkDisable() {
    if ((rowX==-50 && window.innerWidth>600) || (rowX==-75 && window.innerWidth<=600)) {
        arrowRight.classList.add("disable")
    }else if((rowX >-50 &&window.innerWidth>600) ||(rowX >-75 &&window.innerWidth<=600)){
        arrowRight.classList.remove("disable")
    }
     if(rowX == 0){
        arrowLeft.classList.add("disable")
    }else if(rowX < 0){
        arrowLeft.classList.remove("disable")
    }
       
    }

 
   


    // ------------portfolio----------------------

    const portfolioLinks=Array.from(document.querySelectorAll('.porfolio-links ul a'))
     const photoGridCards=Array.from(document.querySelectorAll('.photo-grid .card'))

    portfolioLinks.forEach(anchor=>{
        anchor.addEventListener("click",function () {
        let category=anchor.innerText.toLowerCase();   
        clearActiveFromaAnchors()
        anchor.classList.add('active')
        showCategory(category)
       }) 
    })

    function clearActiveFromaAnchors() {
        portfolioLinks.forEach(anchor=>{
            anchor.classList.remove('active')
        })
        
    }

    function showCategory(searchTerm) {

        photoGridCards.forEach(card=>{
            if (searchTerm == "all") {
               
                card.classList.add("active-card")
            }else if (card.classList.contains(searchTerm)){
                card.classList.add("active-card")
            }else{
                card.classList.remove("active-card")
            }

        })
    }

    