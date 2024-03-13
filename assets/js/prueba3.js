function Consultorio(nombre) {
    let _nombre = nombre;
    let pacientes = [];
  
    return {
      get nombre() {
        return _nombre;
      },
      set nombre(nuevoNombre) {
        _nombre = nuevoNombre;
      },
      get pacientes() {
        return pacientes;
      },
      agregarPaciente(paciente) {
        pacientes.push(paciente);
      },
      buscarPaciente(nombre) {
        return pacientes.find((paciente) => paciente.nombre === nombre);
      },
      mostrarPacientes() {
        console.log(`Consultorio: ${_nombre}`);
        console.log("Pacientes:");
        pacientes.forEach((paciente) => console.log(`  - ${paciente.nombre}`));
      },
    };
  }
  

  function Paciente(nombre, edad, rut, diagnostico) {
    let _nombre = nombre;
    let _edad = edad;
    let _rut = rut;
    let _diagnostico = diagnostico;
  
    return {
      get nombre() {
        return _nombre;
      },
      set nombre(nuevoNombre) {
        _nombre = nuevoNombre;
      },
      get edad() {
        return _edad;
      },
      set edad(nuevaEdad) {
        _edad = nuevaEdad;
      },
      get rut() {
        return _rut;
      },
      set rut(nuevoRut) {
        _rut = nuevoRut;
      },
      get diagnostico() {
        return _diagnostico;
      },
      set diagnostico(nuevoDiagnostico) {
        _diagnostico = nuevoDiagnostico;
      },
      mostrarInformacion() {
        console.log(`Nombre: ${_nombre}`);
        console.log(`Edad: ${_edad}`);
        console.log(`Rut: ${_rut}`);
        console.log(`Diagnóstico: ${_diagnostico}`);
      },
    };
  }
  

  const consultorio = new Consultorio("Mi Consultorio");

const paciente1 = new Paciente("el principe vegeta", 10, "238278173-1", "Resfriado");
const paciente2 = new Paciente("el kokun", 46, "3123131312-1", "Dolor de cabeza");

consultorio.agregarPaciente(paciente1);
consultorio.agregarPaciente(paciente2);

consultorio.mostrarPacientes();

paciente1.mostrarInformacion();
