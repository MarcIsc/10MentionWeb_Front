//Exercice 11
        /*
            Créez un array vide = []
            Puis créez une fonction qui prendra 2 paramètres: 2 nombres
            Le seul but de la fonction sera de pousser le premier nombre à la suite de l'array
            x fois, par rapport au 2eme nombre
            Exemple: pousser(8, 5) => [8, 8, 8, 8, 8]
        */

            let nbr1 = prompt('Nombre 1');
            let nbr2 = prompt('Nombre 2');

            let tableau = [ ]   
            let nombre  

            // console.table(tableau);
            
            function myFonction1(nbr1, nbr2){

                if (nbr1 != isNaN && nbr2 != isNaN) {
                    document.write("Ceci n'est pas un nombre")
                    
                } else {                    
                
                    for (let i = 0; i < nbr2; i++){
                        tableau.push(nbr1);
                    }     
                    document.write(tableau);            
                }
            };        
                          
            myFonction1(nbr1,nbr2);   
            