class Deuxieme{

    constructor(verb){
        this.verb = verb
    }

    present(value) {
        const verbe = value.slice(0, -2);
        const voyelle = ["a","e", "i", "o", "u", "y"]
        const person = ["je", "tu", "il/elle/on", "nous", "vous", "ils/elles"];
        const terminaison = ["is", "is", "it", "issons", "issez", "issent"];
        if (voyelle.includes(value.charAt(0))) {
          person[0] = "j'";
        }
        const irregularVerbs = {
          acquérir: ["acquiers", "acquiers", "acquiert", "acquérons", "acquérez", "acquièrent"],
          vetir: ["vêts","vêts","vêt","vêtons","vêtez","vêtent",],
        };
    
        if (irregularVerbs.hasOwnProperty(value)) {
          for (let index = 0; index < person.length; index++) {
            console.log(`${person[index]} ${irregularVerbs[value][index]}`);
          }
          return;
        }
    
        let root = verbe;
    
        if (value.endsWith("lir")) {
          root = value.slice(0, -2);
          terminaison[0] = terminaison[2] = "e";
          terminaison[1] = "es";
          terminaison[3] = "eons";
          terminaison[4] = "ez";
          terminaison[5] = "ent";
        } else if (value.endsWith("enir")) {
          root = value.slice(0, -4);
          terminaison[0] = terminaison[1] = "iens";
          terminaison[1] = "ient";
          terminaison[3] = "enons";
          terminaison[4] = "enez";
          terminaison[5] = "iennent";
        } else if (value.endsWith("tir")) {
          const stem = value.slice(0, -2);
          vetir: ["vêts","vêts","vêt","vêtons","vêtez","vêtent",],
          terminaison[0] = terminaison[1] = "s";
          terminaison[2] = "";
          terminaison[3] = "ons";
          terminaison[4] = "ez";
          terminaison[5] = "ent";
          root = stem;
        }
    
        for (let index = 0; index < terminaison.length; index++) {
          const element = person[index];
          console.log(`${element} ${root + terminaison[index]}`);
        }
      }
}

export default Deuxieme;