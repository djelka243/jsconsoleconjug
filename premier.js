class Premier {
  constructor(verb) {
    this.verb = verb;
  }

  present(value) {
    const verbe = value.slice(0, -2);
    const voyelle = ["a","e", "i", "o", "u", "y"]
    const person = ["je", "tu", "il/elle/on", "nous", "vous", "ils/elles"];
    const terminaison = ["e", "es", "e", "ons", "ez", "ent"];
    if (voyelle.includes(value.charAt(0))) {
      person[0] = "j'";
    }
    const irregularVerbs = {
      aller: ["vais", "vas", "va", "allons", "allez", "vont"],
      acheter: ["achète","achètes","achète","achetons","achetez","achètent",],
      appeler: ["appelle","appelles","appelle","appelons","appelez", "appellent",],
      jeter: ["jette", "jettes", "jette", "jetons", "jetez", "jettent"],
      lever: ["lève", "lèves", "lève", "levons", "levez", "lèvent"],
      mener: ["mène", "mènes", "mène", "menons", "menez", "mènent"],
      préférer: ["préfère","préfères","préfère","préférons","préférez","préfèrent",],
      espérer: ["espère","espères","espère","espérons","espérez","espèrent",],
      répéter: ["répète","répètes","répète","répétons","répétez","répètent",],
      assiéger: ["assiège","assièges","assiège","assiégeons","assiégez","assiègent",],
      céder: ["cède", "cèdes", "cède", "cédons", "cédez", "cèdent"],
    };

    if (irregularVerbs.hasOwnProperty(value)) {
      for (let index = 0; index < person.length; index++) {
        console.log(`${person[index]} ${irregularVerbs[value][index]}`);
      }
      return;
    }

    let root = verbe;

    if (value.endsWith("ger")) {
      root = value.slice(0, -2);
      terminaison[0] = terminaison[2] = "e";
      terminaison[1] = "es";
      terminaison[3] = "eons";
      terminaison[4] = "ez";
      terminaison[5] = "ent";
    } else if (value.endsWith("cer")) {
      root = value.slice(0, -3);
      terminaison[0] = terminaison[2] = "ce";
      terminaison[1] = "ces";
      terminaison[3] = "çons";
      terminaison[4] = "cez";
      terminaison[5] = "cent";
    } else if (value.endsWith("yer")) {
      const stem = value.slice(0, -3);
      terminaison[0] = terminaison[2] = "ie";
      terminaison[1] = "ies";
      terminaison[3] = "yons";
      terminaison[4] = "yez";
      terminaison[5] = "ient";
      root = stem;
    }

    for (let index = 0; index < terminaison.length; index++) {
      const element = person[index];
      console.log(`${element} ${root + terminaison[index]}`);
    }
  }

  
}

export default Premier;
