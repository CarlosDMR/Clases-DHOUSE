function resta(numero1 = 0, numero2 = 0){
    if(isNaN(numero1) || isNaN(numero2)){
        return "Valores invalidos";
    } else{
        return numero1 - numero2;
    }
}

module.exports = resta;