function insertValues(num) {
    const input = document.getElementById('input-value').value
    document.getElementById('input-value').value = input +num
    console.log(num)
}

function calculate() {
    const input = document.getElementById('input-value').value

    document.getElementById('input-value').value = eval(input)
}

function clearInput() {
    document.getElementById('input-value').value = ""
}

function ivertValue() {
    calculate()
    const input = document.getElementById('input-value').value
    document.getElementById('input-value').value = input * -1
}

function percet() {
    calculate()
    const input = document.getElementById('input-value').value
    document.getElementById('input-value').value = input / 100
}

//TERMINAR PORCENTAGEM