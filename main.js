var dataSource = [];
var no=0;

function showTable(){
    resetForm();
	document.getElementById("add-new-div").style.display = 'none';
	document.getElementById("tour-places-div").style.display = 'block';
}

function BackToaddPlace() {
    resetForm();
	document.getElementById("add-new-div").style.display = 'block';
    document.getElementById("tour-places-div").style.display = 'none';
}

function resetForm() {
    document.getElementById('name').value = "";
    document.getElementById('subj').value = "";
    document.getElementById('ques').value = "";
    document.getElementById('ans').value = "";
}

function addPlace() {
     debugger
    var newPlace = {
        
        name: document.getElementById('name').value,
        subj: document.getElementById('subj').value,
        ques: document.getElementById('ques').value,
        ans: document.getElementById('ans').value
    };


    var reader = new FileReader();
        dataSource.push(newPlace);
        clearGrid()
        loadGrid(dataSource);
}

function loadGrid(data) {
    data.forEach(function (row) {
        var table = document.getElementById("table-places");
        var newRow = table.insertRow(table.rows.length);

        var cel1 = newRow.insertCell(0);
        var cel2 = newRow.insertCell(1);
        var cel3 = newRow.insertCell(2);
        var cel4 = newRow.insertCell(3);

        cel1.innerHTML = row.name;
        cel2.innerHTML = row.subj;
        cel3.innerHTML = row.ques;
        cel4.innerHTML = row.ans;

    });
    showTable();
}

function clearGrid() {
    var table = document.getElementById("table-places");
    for (var i = table.rows.length - 1; i > 0; --i)
        table.deleteRow(i);
}
