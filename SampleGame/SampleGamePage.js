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
            html += `<tr><td class='cls${key}'><button class='btn${i}'>${data[i]}</button></td>`;
        }
        else if (i % 10 === 0) {
            html += `</tr><tr><td class='cls${key}'><button class='btn${i}'>${data[i]}</button></td>`;
        }
        else if (i === data.length - 1) {
            html += `<td class='cls${key}'><button class='btn${i}'>${data[i]}</button></td ></tr>`;
        }
        else {
            html += `<td class='cls${key}'><button class='btn${i}'>${data[i]}</button></td>`;
        }
    }
    return html;
}
console.log(html);
vartable.innerHTML = html;

var root = document.querySelectorAll('.divtable tr td');
var rootnode = shuffle(Object.values(root).map(function (key) { return key }));
var i = 0; root.forEach(function (y) { y.outerHTML = rootnode[i].outerHTML; i++; });

var buttonnodes = document.querySelectorAll('.divtable tr td button');
for (let m = 0; m < buttonnodes.length; m++) {
    buttonnodes[m].addEventListener('click', buttonClick);
}
var a1 = 0,b1=0;
function buttonClick(clicked) {
    if (clicked.path[1].className === 'clsA')
    {
        if (parseInt(clicked.path[1].innerText) === a1+1) {
            var parentnode = clicked.path[0].parentNode;
            parentnode.style.backgroundColor = "White";
            a1 = parseInt(clicked.path[1].innerText);
        }

        //document.querySelector(`.${clicked.path[0]}`).parentNode.style.color = 'green'; 
    } else if (clicked.path[1].className === 'clsB') {
        if (parseInt(clicked.path[1].innerText) === b1 + 1) {
            var parentnode = clicked.path[0].parentNode;
            parentnode.style.backgroundColor = "green";
            b1 = parseInt(clicked.path[1].innerText);
        }
    } else { }
    console.log(clicked.path[1].innerText);
}