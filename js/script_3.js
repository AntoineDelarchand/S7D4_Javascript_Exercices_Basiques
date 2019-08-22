let stage = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
for (i=1; i<=stage; i++){
    console.log(" ".repeat(stage-i)+"#".repeat(i));
}