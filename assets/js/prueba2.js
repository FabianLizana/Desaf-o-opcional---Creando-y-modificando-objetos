// Definición de la función constructora para el objeto "Paciente"
class Consultorio {
    constructor(nombre) {
      this.nombre = nombre;
      this.pacientes = [];
    }
}
function Paciente(nombre, edad, rut, diagnostico) {
    // Propiedades privadas
    let _nombre = nombre;
    let _edad = edad;
    let _rut = rut;
    let _diagnostico = diagnostico;

    // Métodos getters y setters
    this.getNombre = function () {
        return _nombre;
    };

    this.setNombre = function (nuevoNombre) {
        _nombre = nuevoNombre;
    };

    this.getEdad = function () {
        return _edad;
    };

    this.setEdad = function (nuevaEdad) {
        _edad = nuevaEdad;
    };

    this.getRut = function () {
        return _rut;
    };

    this.setRut = function (nuevoRut) {
        _rut = nuevoRut;
    };

    this.getDiagnostico = function () {
        return _diagnostico;
    };

    this.setDiagnostico = function (nuevoDiagnostico) {
        _diagnostico = nuevoDiagnostico;
    };
}

// Método de búsqueda por nombre (usando prototype)
Paciente.prototype.buscarPorNombre = function (nombre) {
    return this.getNombre() === nombre ? this : null;
};

// Método para mostrar todos los datos de los pacientes registrados (usando prototype)
Paciente.prototype.mostrarTodos = function () {
    console.log(`Nombre: ${this.getNombre()}, Edad: ${this.getEdad()}, Rut: ${this.getRut()}, Diagnóstico: ${this.getDiagnostico()}`);
};

// Instanciar objetos Paciente
let paciente1 = new Paciente("Juan Pérez", 30, "12345678-9", "Resfriado");
let paciente2 = new Paciente("María Gómez", 45, "98765432-1", "Dolor de cabeza");

// Mostrar todos los datos de los pacientes
paciente1.mostrarTodos();
paciente2.mostrarTodos();

// Buscar paciente por nombre
let pacienteEncontrado = paciente1.buscarPorNombre("Juan Pérez");
if (pacienteEncontrado) {
    console.log("Paciente encontrado:");
    pacienteEncontrado.mostrarTodos();
} else {
    console.log("Paciente no encontrado.");
}

