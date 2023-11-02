//Nisse har 25000kr på ett sparkonto. Kontot har 5% årsränta. skriv ett programm som räknar ut hur mycket pengar Nisse har på kontot efter 5 år.




let pengar = 25000;
let ranta = 0.05; 

    for (let i = 0; i < 5; i++) {
    pengar = pengar + pengar * ranta;
	
}
      console.log("Efter 5 år har Nisse " + pengar + " kr på sitt konto.");