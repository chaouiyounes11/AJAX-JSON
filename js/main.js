
// contructeur Clien
function clientManag() {
  // affiche Methode
  this.affichageClient = function() {
        $('#tableau').empty();
        var i = 0;
    for (var x in Client.users) {
      $('#tableau').append("<tr><td>" + Client.users[x].id +
        "</th><td>" + Client.users[x].name +
        "</td><td>" + Client.users[x].lastname +
        "</td ><td>" + Client.users[x].age +
        "</td></tr>"
      );
      i++;console.log(i);
      if (i%2 === 0) {
        $("tbody tr:last-child").css('background-color', 'lightgrey');
    } 
    }

  }


 // sort methode
  this.trieClient = function(tab, key) {


   tab.sort(function(a, b) {
      var keyA = a[key];
      var keyB = b[key];
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });

   // Adds content sort
        this.affichageClient();

 }
}

// ajax request
var objtClient = new clientManag();
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    Client = JSON.parse(this.responseText);
    objtClient.affichageClient();

   $('#selecteur').change(function() {
      objtClient.trieClient(Client.users, $('#selecteur').val());


   })


 }
};
xhttp.open("GET", "list.json", true);
xhttp.send();
