var inquirer = require('inquirer');




function Card (front, back) {

  // To ensure users get the result of a new call, even if they forget.
  if (!(this instanceof Card)) {
    return new Card (front, back);
  }

  // Otherwise, proceed as usual.
  this.front = front;

  this.back = back;
}

 console.log (new Card("front", "back") instanceof Card);
 
Card();
   

   





 module.exports = Card;