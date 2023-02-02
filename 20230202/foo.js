document.body.innerHTML += "<button onclick='clk()'>Добавить число</button>"
let count = 0
function clk() {
    if (count == 0 || count == 6) {
        document.body.firstElementChild.nextElementSibling.lastElementChild.innerHTML += "<tr></tr>"
        if (count == 6){ 
            count = 0 
        }
    }
    let elem = getNumber(100, 0)
    if (elem >= 50) {
        document.body.firstElementChild.nextElementSibling.lastElementChild.lastElementChild.innerHTML += `<td style = 'background-color: orange'>${elem}</td>`
    }
    else {
        document.body.firstElementChild.nextElementSibling.lastElementChild.lastElementChild.innerHTML += `<td>${elem}</td>`
    }
    count++
}
