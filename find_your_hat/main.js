const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const empt = '░';
const pos = '*';

class Field {
  constructor(arr) {
    this.field = arr;
    this.outOfField = false;
    this.fellInHole = false;
    this.wonTheGame = false;
  }

  print() {
    for (const e of this.field) {
      console.log(e.join(''))
    }
  }

  changePosition(input) {
    const lengthOfOuter = this.field.length
    const lengthOfInner = this.field[0].length
    let row = 0
    
    for (const idx of this.field) {
        if(!idx.includes('*')) {
            row++
        } else {
            break
        }
    }
    
    let index = this.field[row].indexOf('*')
    //return index
    if (input == 'r') {
        if (index+1 <= lengthOfInner-1) {
            if (this.field[row][index+1] == empt) {
              this.field[row][index+1] = pos
              this.field[row][index] = empt
              
           } else if (this.field[row][index+1] == hole) {
              this.fellInHole = true;
           } else {
              this.wonTheGame = true;
           }
            
            
        } else {
            this.outOfField = true;
        } 
    }
    
    if (input == 'l') {
        if (index-1 >= 0) {
            if (this.field[row][index-1] == empt) {
              this.field[row][index-1] = pos
              this.field[row][index] = empt
              
          } else if (this.field[row][index-1] == hole) {
              this.fellInHole = true;
          } else {
              this.wonTheGame = true;
          }
             
            
        } else {
            this.outOfField = true
        }
    }
    
    if (input == 'd') {
        if (row+1 <= lengthOfOuter-1) {
            if (this.field[row+1][index] == empt) {
              this.field[row+1][index] = pos
              this.field[row][index] = empt
              
          } else if(this.field[row+1][index] == hole) {
              this.fellInHole = true
          } else {
              this.wonTheGame = true
          }
        
        } else {
            this.outOfField = true
        }
    }
    
    if (input == 'u') {
        if (row-1 >= 0) {
            if (this.field[row-1][index] == empt) {
              this.field[row-1][index] = pos
              this.field[row][index] = empt
              
          } else if (this.field[row-1][index] == hole) {
              this.fellInHole = true;
          } else {
              this.wonTheGame = true;
            }
        
            
        } else {
            this.outOfField = true;
        } 
    }
  }

  
}

const myfield = new Field([
[pos, empt, hole, empt],
[empt, hole, empt, empt],
[empt, empt, empt, hole],
[empt, hole, empt, empt],
[hole, empt, empt, hole],
[empt, hole, empt, empt],
[hole, empt, hole, empt],
[hole, empt, empt, empt],
[hole, hat, hole, empt]]);

while (!myfield.wonTheGame && !myfield.fellInHole && !myfield.outOfField) {
  myfield.print()
  let userinput = prompt('Type in the direction: "r", "l", "u", "d": ')
  myfield.changePosition(userinput)
  //console.log("Fellinhole "+myfield.fellInHole)
  //console.log("Wonthegame "+myfield.wonTheGame)
}
if (myfield.outOfField) {console.log('Try to keep the "*" symbol within the fields')}
if (myfield.fellInHole) {console.log('You just fell into a Hole, try again!')}
if (myfield.wonTheGame) {console.log('Congrats, you just won my freakin little game!')}
//console.log(myfield.outOfField)





