let to_verify = new Array(9);
to_verify[0] = "4 2 7 3 5 1 9 8 6";
to_verify[1] = "9 9 3 7 6 2 5 1 4";
to_verify[2] = "1 5 6 8 9 4 7 2 3";
to_verify[3] = "2 3 9 1 8 5 4 6 7";
to_verify[4] = "7 4 1 6 3 9 2 5 8";
to_verify[5] = "5 6 8 2 4 7 1 3 9";
to_verify[6] = "8 7 2 9 1 3 6 4 5";
to_verify[7] = "3 9 5 4 2 6 8 7 1";
to_verify[8] = "6 1 4 5 7 8 3 9 2";

function checkIfArrayIsUnique(myArray) {
  for (let i = 0; i < 18; i++) {
     console.log('TEST ' + myArray[i]) 
  }
}

let _rows, _cols, _grid;

_validate = function(data){

  for (var row = 0; row < 9; row++) {

      data[row].sort();
      
      for (var col = 0; col < 9; col++) {

          var value = data[row][col], next_value = data[row][col + 1];

          // check if value exists and is a valid number
          if (!(value && value > 0 && value < 10)){
              return false;
          }

          // check if numbers are unique
          if (col !== 8 && value === next_value){
              return false;
          }

      }
  }
  return true;
};


console.log(checkIfArrayIsUnique(to_verify[0]));