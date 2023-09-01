const usuario = [
    {"name": "user1", "Edad": 21, "Carrera": "Software", "year": 1},
    {"name": "user15", "Edad": 21, "Carrera": "computacion", "year": 1},
    {"name": "user18", "Edad": 22, "Carrera": "comunicaciones", "year": 2},
    {"name": "user21", "Edad": 21, "Carrera": "Software", "year": 1},
    {"name": "user56", "Edad": 27, "Carrera": "ingles", "year": 4},
    {"name": "user98", "Edad": 30, "Carrera": "Software", "year": 5},
    {"name": "user56", "Edad": 7, "Carrera": "medicina", "year": 2},
    {"name": "user67", "Edad": 45, "Carrera": "Software", "year": 1},
    {"name": "user6", "Edad": 21, "Carrera": "ingles", "year": 1}
];

const usuarioFilter = usuario.filter( (x) =>{
   // if (x.Carrera == "Software") {
        return x.Carrera == "Software" && x.Edad == 21;
    //}
} );

const usuarioIngles = usuario.filter((ingles) => {
    return ingles.Carrera == "ingles"
});

const usuarioMedicina = usuario.filter((medicina) => {
    return medicina.Carrera == "medicina"
});
console.log(usuarioMedicina)
console.log(usuarioIngles)
console.log(usuarioFilter)
const usuariomap = usuario.map((user) => {
    return{
        "nombre": user.name,
        "edad" : user.Edad
    }
    
});
console.log(usuariomap)