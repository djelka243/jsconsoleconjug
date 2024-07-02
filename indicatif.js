import Premier from './premier.js';
import Deuxieme from './deuxieme.js';

class Indicatif {
 
  constructor(verb){
    this.verb = verb;
  }
  getVerb(){
    return this.verb;
  }

  
   onBoard(){
   const verbe = this.verb.slice(-2)
   const verbe2 = this.verb.slice(-3)
    if(verbe === "er"){
      const temps = new Premier(this.verb);
      temps.present(this.verb);
    }else if(verbe === "ir" && verbe2 != "oir"){
      const temps = new Deuxieme(this.verb);
      temps.present(this.verb);
    }else{
        console.log(`Verb: ${this.verb}, Group: troisieme groupe`);
    }
    
  }


}
export default Indicatif;