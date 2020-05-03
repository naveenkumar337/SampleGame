
var numbers = Array.from(new Array(50), (a, b) => b + 1);
var _numbers = Array.from(new Array(50), (a, b) => b + 1);

var player1 = "naveen";
var player2 = "ajay";
//Shuffle Array
var data = shuffle(numbers);
var _data = shuffle(_numbers);
function shuffle(arr) {
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
//End Shuffle

//Append to html
const vartable = document.querySelector('.divtable');
var html = "";
//apply the class name
getHTML(data,'A');
getHTML(_data,'B');
function getHTML(data,key) {
    for (let i = 0; i < data.length; i++) {
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
vartable.innerHTML = html;
//end Append to html

//Shuffle the html nodes
shuffleNodes();
function shuffleNodes() {
    var root = document.querySelectorAll('.divtable tr td');
    var rootnode = shuffle(Object.values(root).map(function (key) { return key }));
    var i = 0; root.forEach(function (y) { y.outerHTML = rootnode[i].outerHTML; i++; });
}
//End Shuffle the html nodes

//PopupMODEL
var modal = document.getElementById("myModal");
var submit = document.getElementsByClassName("submit")[0];
submit.onclick = function () {
    modal.style.display = "none";
   // shuffleNodes();
}
//popuCLOSED



//Button Click and Change the color and conditions 
var buttonnodes = document.querySelectorAll('.divtable tr td button');
for (let m = 0; m < buttonnodes.length; m++) {
    buttonnodes[m].addEventListener('click', buttonClick);
}
var a1 = 0,b1=0;
function buttonClick(clicked) {
    var parentnode = clicked.path[0].parentNode;
    if (clicked.path[1].className === 'clsA')
    {
        if (parseInt(clicked.path[1].innerText) === a1 + 1 || parseInt(clicked.path[1].innerText) <= a1) {
            parentnode.style.backgroundColor = "#49ec06";
            clicked.path[0].style.backgroundColor = "#49ec06";
            //var childnode = clicked.path[0]; childnode.style.webkitTextEmphasisStyle = 'double-circle';
            a1 = parseInt(clicked.path[1].innerText);
        } else {
            parentnode.style.backgroundColor = "red";
            clicked.path[0].style.backgroundColor = "red";
            showMessage(player2, `Sorry ${player1.toUpperCase()} You Entered Wrong Number`);
        }

    } else if (clicked.path[1].className === 'clsB') {
        if (parseInt(clicked.path[1].innerText) === b1 + 1 || parseInt(clicked.path[1].innerText) <= b1) {
            parentnode.style.backgroundColor = "#49ec06";
            clicked.path[0].style.backgroundColor = "#49ec06";
            b1 = parseInt(clicked.path[1].innerText);
        }
        else {
            clicked.path[0].style.backgroundColor = "red";
            parentnode.style.backgroundColor = "red";
            showMessage(player1, `Sorry ${player2.toUpperCase()} You Entered Wrong Number`);
        }
    }
    else { }
}
//end Button

//Show Message
function showMessage(player,message) {
    var headmessage = document.querySelector('.modal-header h2');
    headmessage.innerText = "Congrats " + player.toUpperCase();
    var bodymessge = document.querySelector('.modal-body p');
    bodymessge.innerText = message;
    modal.style.display = "block";
}