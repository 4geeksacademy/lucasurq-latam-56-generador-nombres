import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronouns = ['the', 'our'];
  let adjs = ['great', 'big'];
  let nouns = ['jogger', 'racoon'];
  let extensiones = ['.com', '.es'];
  
  for (const pronoun of pronouns) { // Representa el elemento (for...of).-
    for (const adj of adjs) {
      for (const noun of nouns) {
        for (const extension of extensiones) {
          console.log(`${pronoun}${adj}${noun}${extension}`);
        }
      }
    }
  }
};