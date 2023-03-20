let pronoun = ['the', 'our', 'they','them'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let ext = ['.com', '.net', '.us', '.io'];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < ext.length; l++) {
        let domain = pronoun[i] + adj[j] + noun[k] + ext[l];
        console.log(domain);
        if (ext[l] === '.us') {
          let domainHack = pronoun[i] + adj[j] + '.' + noun[k] + ext[l];
          console.log(domainHack);
        }
      }
    }
  }
}
