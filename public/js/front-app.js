console.log('client side JS')

const message = document.querySelector("input")
const hwform = document.querySelector("form")
const output = document.querySelector('#p1')

hwform.addEventListener('submit', (e) => {
    e.preventDefault()
    const msg = message.value

    console.log (msg)

    output.textContent = msg

})
