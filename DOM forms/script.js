
      function myFunction(){
        var tbl = document.querySelector("#myTable");
        var row = tbl.insertRow();//insertrow
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();
        var cell4 = row.insertCell();
        var cell5 = row.insertCell();
        var cell6 = row.insertCell();
        var cell7 = row.insertCell();
        var cell8 = row.insertCell();
        var cell9 = row.insertCell();
        cell1.innerHTML = document.querySelector("#firstname").value;//match value
        cell2.innerHTML = document.querySelector("#lastname").value;
        cell3.innerHTML = document.querySelector("#address").value;
        cell4.innerHTML = document.querySelector("#pincode").value;
        cell5.innerHTML = document.querySelector("#gender").value;
        cell6.innerHTML = document.querySelector("#food").value;
        cell7.innerHTML = document.querySelector("#burger").value;
        cell8.innerHTML = document.querySelector("#state").value;
        cell9.innerHTML = document.querySelector("#country").value;
      }

      
    