// Enter to add name to the list
var input = document.getElementById("userInput");
var team_input = document.getElementById("userTeamInput")

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("addNameBtn").click();
  }
});

team_input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("addTeamBtn").click();
  }
});



// Click on a close button to delete the list item
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.remove();
  }
}



// Create a new list item when clicking on the "Add" button
function newName() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("userInput").value;
  var t = document.createTextNode(inputValue);

  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("nameList").appendChild(li);
  }
  document.getElementById("userInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.remove();
    }
  }
  
}

// Create a new list item when clicking on the "Add" button
function newTeam() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("userTeamInput").value;
  var t = document.createTextNode(inputValue);

  var num_box = document.createElement("INPUT");
  num_box.className = "teamSizeBox";

  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("teamList").appendChild(li);
  }
  document.getElementById("userTeamInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.remove();
    }
  }
  li.appendChild(num_box);
}

function makeTeams() {
  var name_list = document.getElementById("nameList").getElementsByTagName("li");
  var team_list = document.getElementById("teamList").getElementsByTagName("li");
  var name_list_copy = [...name_list];
  var results_table = document.getElementById("resultsTable");

  var n_rows = results_table.rows.length; 
  while(--n_rows) results_table.deleteRow(n_rows);

  for (var i = 0; i < team_list.length; i++) {
    var team_size = parseInt(team_list[i].getElementsByTagName("INPUT")[0].value);
    var row = results_table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = team_list[i].textContent.slice(0, -1);

    for (var j = 0; j < team_size; j++) {
      if (name_list_copy.length > 0) {
        var randomPerson = name_list_copy[Math.floor(Math.random() * name_list_copy.length)];
        if (cell2.innerHTML == "") cell2.innerHTML = randomPerson.textContent.slice(0, -1);
        else cell2.innerHTML = cell2.innerHTML + ", " + randomPerson.textContent.slice(0, -1);

        var index = name_list_copy.indexOf(randomPerson);
        if (index !== -1) name_list_copy.splice(index, 1);
      }

    }

  }
  

}