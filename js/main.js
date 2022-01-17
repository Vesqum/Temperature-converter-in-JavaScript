const cover = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const restBtn = document.querySelector('.rest')
const changeBtn = document.querySelector('.change')
const spanOne = document.querySelector('.one')
const spanTwo = document.querySelector('.two')

let fahreneit
let celsius







const swap = () => {
    if(spanOne.textContent === 'C') {
        spanOne.textContent = 'F'
        spanTwo.textContent = 'C'
    } else {
        spanOne.textContent = 'C'
        spanTwo.textContent = 'F'
    }
}

const convertF = () => {
    fahreneit = cover.value * 1.8 + 32
    result.textContent = `${cover.value} = ${fahreneit.toFixed(1)} `
    cover.value = ''
}

const convertC = () => {
    celsius = (cover.value - 32) / 1.8
    result.textContent = `${cover.value} = ${celsius.toFixed(1)} `
    cover.value = ''
    
}

const convesion = () => {
    if(cover.value !== '') {

        if(spanOne.textContent === 'C') {
            convertF()
        } else {
            convertC()
        }

    } else {
        result.textContent = 'Musisz podać wartość'
    }
}

const reset = () => {
    cover.textContent = '';
    result.textContent = '';
}


changeBtn.addEventListener('click', swap)
restBtn.addEventListener('click', reset)
convBtn.addEventListener('click', convesion)