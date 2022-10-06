//Her har vi lavet en variabel til vores form. 
const form = document.querySelector('#momsberegner')
const output = document.querySelector('#output')

//Det lytter til vores form. Den giver os svaret for vores event. 
form.addEventListener('submit',(e) =>{
    e.preventDefault()
    let result = moms(e.target.numbers.value, e.target.mode.value)
    output.innerHTML = ""
    result.forEach(resultNum => {

    })
})

/* // 200 2500 3000 550 //
let string = "200 2500 3000 550"
let mode = 'til' */

moms(string, mode)

function moms(string, mode) {
    let arr = string.split(' ')
    let resultArr = null
    arr.forEach(num => {
        let calc = null
        if (mode == 'til') {
            calc = num*1.25
        } 
        else if (mode == 'fra') {
            calc = num*0.8
        }
        else {
            return "error"
        }
        resultArr.push(calc)
    });
    return resultArr
}