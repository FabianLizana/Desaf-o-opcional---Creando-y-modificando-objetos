class Consultorio {
    constructor(nombre) {
        let _nombre = nombre;
        let _pacientes = [];

        this.getNombre = function () {
            return _nombre;
        };

        this.setNombre = function (nuevoNombre) {
            _nombre = nuevoNombre;
        };

        this.agregarPaciente = function (paciente) {
            _pacientes.push(paciente);
        };

        this.buscarPaciente = function (nombre) {
            return _pacientes.find((paciente) => paciente.getNombre() === nombre);
        };

        this.mostrarPacientes = function () {
            _pacientes.forEach((paciente) => console.log(paciente.mostrarTodos()));
        };
    }
}

class Paciente {
    constructor(nombre, edad, rut, diagnostico) {
        let _nombre = nombre;
        let _edad = edad;
        let _rut = rut;
        let _diagnostico = diagnostico;

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

        this.mostrarTodos = function () {
            return `Nombre: ${this.getNombre()}, Edad: ${this.getEdad()}, Rut: ${this.getRut()}, Diagnóstico: ${this.getDiagnostico()}`;
        };
    }
}

const consultorio = new Consultorio("Mi Consultorio");

const paciente1 = new Paciente("Juan Pérez", 35, "12345678-9", "Hipertensión");
const paciente2 = new Paciente("María González", 28, "98765432-1", "Diabetes");

consultorio.agregarPaciente(paciente1);
consultorio.agregarPaciente(paciente2);

consultorio.mostrarPacientes();

const pacienteEncontrado = consultorio.buscarPaciente("María González");
console.log(pacienteEncontrado.mostrarTodos());
