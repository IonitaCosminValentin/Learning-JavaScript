//del and add values of input;
{
function delValue() {
    let inp = document.getElementById('inp')
    inp.setAttribute('value', '')
}
function addValue() {
    let inp = document.getElementById('inp')
    inp.setAttribute('value', 'email')
}
function delValue2() {
    let inp = document.getElementById('inp2')
    inp.setAttribute('value', '')
}
function addValue2() {
    let inp = document.getElementById('inp2')
    inp.setAttribute('value', 'email')
}
}
function buttonclick() {
    let email = document.getElementById('inp').value
    let password = document.getElementById('inp2').value
    if (password == "1234" & email == 'valy.18@yahoo.com') {
        alert("Congrats!")
    } else {
        alert('Wrong email or password!')
    }

}