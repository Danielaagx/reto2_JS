const estudiantes = [
    { id: 1, nombre: 'Ana', edad: 20 },
    { id: 2, nombre: 'Juan', edad: 22 },
    { id: 3, nombre: 'María', edad: 21 }
];
//
function buscarEstudiante(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const estudiante = estudiantes.find(est => est.id === id);

            if (estudiante) {
                resolve(estudiante);
            } else {
                reject(`No existe un estudiante con el ID ${id}.`);
            }

        }, 1000);
    });
}
console.log("Búsqueda del estudiante con ID 2");
buscarEstudiante(2)
    .then(estudiante => {

        console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);
        console.log("Búsqueda del estudiante con ID 1");
        return buscarEstudiante(1);
    })
    .then(estudiante => {
        console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);
        console.log("Búsqueda del estudiante con ID 10");
        return buscarEstudiante(10);
    })
    .then(estudiante => {
        console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);
    })
    .catch(error => {
        console.log(`Error: ${error}`);
    });
