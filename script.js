let N = parseInt(prompt("Konbyen not ou vle tape ?"))
console.log(N)
let tab = []
let somme =0;
for (let i = 1; i <= N; i++) {
   let not = parseInt(prompt("Antre not ou yo : "))
    tab.push(not)
}

for(let i= 0; i < tab.length; i++){
    somme +=tab[i];
}
let moyenne =somme / tab.length;
    if(moyenne >= 90){
        console.log("ou fe moyen "+moyenne.toFixed(2)+ " Ou genyen pou kalifikasyon A")
    }
    else if(moyenne >= 80 && moyenne < 90){
        console.log("ou fe moyen "+moyenne.toFixed(2)+ " Ou genyen pou kalifikasyon B")
    }
    else if(moyenne >= 70 && moyenne < 80)
    {
        console.log("ou fe moyen "+moyenne.toFixed(2)+ " Ou genyen pou kalifikasyon C")
    }
    else if(moyenne >= 60 && moyenne <70)
    {
        console.log("ou fe moyen "+moyenne.toFixed(2)+ " Ou genyen pou kalifikasyon D")
    }
    else{
        console.log("ou fe moyen "+moyenne.toFixed(2)+ " Ou genyen pou kalifikasyon F")
    }

