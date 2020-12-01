require('./style.css')

window.onload = function() { 
    let pronombre = ["nuestra","la","aquella"]
    let adjetivo = ["alucinante","intrigante","explosiva"]
    let sustantivo = ["vida","aventura","perra"]
    let dominio = [".com",".cu", ".co", ".fr"]

    for (i = 0; i< pronombre.length; i++) {    
        for (j = 0; j < adjetivo.length; j++) {    
            for (k = 0; k < sustantivo.length; k++) {      
                for (l = 0; l < dominio.length; l++) {

                    console.log(pronombre[i] + adjetivo[j] + sustantivo[k] + dominio[l]);

                }
                
            }
        }
    }
}