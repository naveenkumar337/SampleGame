var numbers = Array.from(new Array(50), (a, b) => b + 1);
var _numbers = Array.from(new Array(50), (a, b) => b + 1);
//numbers.push(..._numbers);

var data = shuffle(numbers);
var _data = shuffle(_numbers);
function shuffle(arr) {
    debugger;
    for (let i = arr.length - 1; i > 0; i--) {
        var k = randomNumber(0, i - 1);

        var t = arr[i];
        arr[i] = arr[k];
        arr[k] = t;
    }
    return arr;
}
function randomNumber(start, end) {
    return Math.floor(Math.random() * (end - start));
}


const vartable = document.querySelector('.divtable');
console.log(vartable);
var html = "";
getHTML(data,'A');
getHTML(_data,'B');

function getHTML(data,key) {
    for (let i = 0; i < data.length; i++) {
        debugger;
        if (i === 0) {
            html += `<tr><td class='cls${key}'>${data[i]}</td>`;
        }
        else if (i % 10 === 0) {
            html += `</tr><tr><td class='cls${key}'>${data[i]}</td>`;
        }
        else if (i === data.length - 1) {
            html += `<td class='cls${key}'>${data[i]}</td ></tr>`;
        }
        else {
            html += `<td class='cls${key}'>${data[i]}</td>`;
        }
    }
    return html;
}
console.log(html);
vartable.innerHTML=html;