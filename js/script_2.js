function factorielle(n) {
    if(n==0) return 1;
    else return n*factorielle(n-1);
  }
  let k= prompt("De quel nombre veux-tu calculer la factorielle ?");
  let p = factorielle(k);
  alert("factorielle(" + k + ")=" + p);
  console.log("factorielle(" + k + ")=" + p);