
//start of the site JS coding.
function joinnow(){
    window.location.href = "https://wa.me/972539234339?text= מעוניין בפרטים כלליים "

}

function joinnowpop_couple(){
    window.location.href = "https://wa.me/972539234339?text= מעוניין בפרטים על תוכנית הזוגות "

}
function joinnowpop_personal(){
    window.location.href = "https://wa.me/972539234339?text= מעוניין בפרטים על התוכנית האישית "

}
function joinnowpop_online(){
    window.location.href = "https://wa.me/972539234339?text= מעוניין בפרטים על תוכנית האונליין "

}
//////////////////////////////////////COUPLE TRAINING//////////////////////////////////////////////////////
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')

openModalButtons.forEach(button=>{
    button.addEventListener('click', () => {
        const modal= document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal= button.closest('.modal')
        closeModal(modal)
    })
})
//////////////////////////////////////ONLINE PROGRAM///////////////////////////////////////////////////

const openModalButtons1 = document.querySelectorAll('[data-modal1-target]')
const closeModalButtons1 = document.querySelectorAll('[data-close1-button]')

openModalButtons1.forEach(button=>{
    button.addEventListener('click', () => {
        const modal1= document.querySelector(button.dataset.modal1Target)
        openModal(modal1)
    })
})

closeModalButtons1.forEach(button => {
    button.addEventListener('click', () => {
        const modal1= button.closest('.modal1')
        closeModal(modal1)
    })
})


function openModal(modal1){
    if (modal1 == null) return
    modal1.classList.add('active')
}

function closeModal(modal1){
    if (modal1 == null) return
    modal1.classList.remove('active')
}

/////////////////////////////////////////////////PERSONAL TRAINING///////////////////////////////////////

const openModalButtons2 = document.querySelectorAll('[data-modal2-target]')
const closeModalButtons2 = document.querySelectorAll('[data-close2-button]')

openModalButtons2.forEach(button=>{
    button.addEventListener('click', () => {
        const modal2= document.querySelector(button.dataset.modal2Target)
        openModal(modal2)
    })
})

closeModalButtons2.forEach(button => {
    button.addEventListener('click', () => {
        const modal2= button.closest('.modal2')
        closeModal(modal2)
    })
})


function openModal(modal2){
    if (modal2 == null) return
    modal2.classList.add('active')
}

function closeModal(modal2){
    if (modal2 == null) return
    modal2.classList.remove('active')
}











