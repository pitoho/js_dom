let arr = []
for(let i = 0; i < 5; i++){
    arr[i] = []
    for(let j = 0; j < 6; j++){
        arr[i][j] = getNumber(100)
    }  
}

function createCard(array){
    let tr = `<tr class="card">`
    let html
    for(let i = 0; i < 5; i++){
        html += tr
        for(let j = 0; j < 6; j++){
            if(array[i][j] >= 50){
                html += `<td style = 'background-color: orange'>${array[i][j]}</td>`
            }else{
                html += `<td>${array[i][j]}</td>`
            }
            
        }
    }
    return html
}
let content = (`<table>`)
content += createCard(arr)
content += `</table>`
document.body.innerHTML += content

console.log(arr)