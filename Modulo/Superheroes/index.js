const superHeroes = [
    {
        nombre: "Wonde Woman",
        poder: "Golpear con latigo",
        saludar: function(){
            return "Hola, soy" + this.nombre + "y mi super poder es" + this.poder;
        } 
    },
    {
        nombre: "Iron Man",
        poder: "Disparar rayos laser",
        saludar: function(){
            return "Hola, soy" + this.nombre + "y mi super poder es" + this.poder;
        } 
    }
]

module.exports = superHeroes;
