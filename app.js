
var table = document.getElementsByTagName("table")[0];
var cells = table.getElementsByTagName("td"); // 

for(var i = 1; i < cells.length; i++){

var cell = cells[i];

cell.onclick = function(){

var cellIndex  = this.cellIndex + 1;  

var rowIndex = this.parentNode.rowIndex + 1;

alert(" X: " + cellIndex + " Y: " + rowIndex );
}
}


var cells
var cells = document.querySelectorAll('#table td');
Array.from(cells).forEach(function(elem) {
elem.addEventListener('click', function() {
document.getElementById('txtbox').value = this.textContent;
})
})
var table = document.querySelector('#table')
var selectedCells = table.getElementsByClassName('selected')

table.addEventListener('click', function(e) {
var td = e.target

if (td.tagName !== 'TD') {
return
}

if (selectedCells.length) {
selectedCells[0].className = ''    
}

td.className = 'selected'
})
var color = "White"

$( "#btnBlue" ).click(function() {
color = "Blue"
});

$( "#btnGreen" ).click(function() {
color = "Green"
});

$( "#btnYellow" ).click(function() {
color = "Yellow"
});
        $( "#btnRed" ).click(function() {
color = "Red"
});	
$( "#btnWhite" ).click(function() {
color = "White"
});	


$("table tr td").click(function(){
$(this).css("background-color", color);
});

