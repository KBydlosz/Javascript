let to_verify = new Array(9);
to_verify[0]= "4 2 7 3 5 1 9 8 6" ;
to_verify[1]= "9 8 3 7 6 2 5 1 4" ;
to_verify[2]= "1 5 6 8 9 4 7 2 3" ;
to_verify[3]= "2 3 9 1 8 5 4 6 7" ;
to_verify[4]= "7 4 1 6 3 9 2 5 8" ;
to_verify[5]= "5 6 8 2 4 7 1 3 9" ;
to_verify[6]= "8 7 2 9 1 3 6 4 5" ;
to_verify[7]= "3 9 5 4 2 6 8 7 1" ;
to_verify[8]= "6 1 4 5 7 8 3 9 2" ;


function generate_table() {
    let body = document.getElementsByTagName("body")[0];
  
    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");
  
    for (let i = 0; i < 9; i++) {
      // creates a table row
      let row = document.createElement("tr");
      for (let j = 0; j < 18; j++) {
        let cell = document.createElement("td");
        let cellText = document.createTextNode("" + to_verify[i][j++]);
        cell.appendChild(cellText);
        row.appendChild(cell);
      } 
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");
}
