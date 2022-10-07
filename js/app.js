const rhaenyra = document.getElementId("rhaenyra").style.visibility = "none"
const daemon = document.getElementId("daemon").style.visibility = "none"
const viserys = document.getElementId("viserys").style.visibility = "none"
const otto = document.getElementId("otto").style.visibility = "none"
const alicent = document.getElementId("alicent").style.visibility = "none"
const corlys = document.getElementId("corlys").style.visibility = "none"
const rhaenys = document.getElementId("rhaenys").style.visibility = "none"
const criston = document.getElementId("criston").style.visibility = "none"


const nameShow = (character) =>{
    character.style.position = "absolute"
    character.addEventListener('mouseover', () =>{
        character.style.visibility = 'visible'
    })
    
}
 nameShow(criston)
 nameShow(rhaenys)
 nameShow(corlys)
 nameShow(alicent)
 nameShow(otto)
 nameShow(viserys)
 nameShow(daemon)
 nameShow(rhaenyra)
