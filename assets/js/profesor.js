function Consultorio(nombre, pacientes) {
    var _nombre = nombre;
    // El método paciente se inicializa con la función, devolviendo un array vacío si no se proporciona.
    this._paciente = function () {
        return pacientes || [];
    };

    Object.defineProperty(this, "_getNombre", {
        get: function () {
            return _nombre;
        }
    });

    Object.defineProperty(this, "_setNombre", {
        set: function (nombre) {
            _nombre = nombre;
        }
    });
}

// Métodos prototype para obtener y establecer el nombre del consultorio.
Consultorio.prototype.getName = function () {
    return this._getNombre;
};

Consultorio.prototype.setName = function (nuevo_nombre) {
    this._setNombre = nuevo_nombre;
};

// Método para agregar paciente al consultorio.
Consultorio.prototype.agregarPaciente = function (paciente) {
    this._paciente().push(paciente);
};

// Método para mostrar todos los pacientes en el consultorio.
Consultorio.prototype.mostrarTodos = function () {
    console.log('========= Obtiene todos los Pacientes ============');

    this._paciente().forEach(function (element) {
        console.log(`Nombre: ${element.getName()}`);
        console.log(`Edad: ${element.getEdad()}`);
        console.log(`Rut: ${element.getRut()}`);
        console.log(`Diagnostico: ${element.getDiagnostico()}`);
    });
};

// Método para buscar pacientes por nombre.
Consultorio.prototype.buscarPacientePorNombre = function (nombreBuscado) {
    console.log('========= Busca Pacientes por Nombre ============');

    this._paciente().forEach(function (element) {
        if (element.getName().toLowerCase() === nombreBuscado.toLowerCase()) {
            console.log('Paciente encontrado:');
            console.log(`Nombre: ${element.getName()}`);
            console.log(`Edad: ${element.getEdad()}`);
            console.log(`Rut: ${element.getRut()}`);
            console.log(`Diagnostico: ${element.getDiagnostico()}`);
        }
    });
};

function Paciente(nombrePaciente, edad, rut, diagnostico) {
    var _nombrePaciente = nombrePaciente;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico;

    // Métodos getters y setters para cada propiedad del paciente.
    Object.defineProperty(this, "_getNombrePaciente", {
        get: function () {
            return _nombrePaciente;
        }
    });

    Object.defineProperty(this, "_setNombrePaciente", {
        set: function (nombrePaciente) {
            _nombrePaciente = nombrePaciente;
        }
    });

    Object.defineProperty(this, "_getEdad", {
        get: function () {
            return _edad;
        }
    });

    Object.defineProperty(this, "_setEdad", {
        set: function (edad) {
            _edad = edad;
        }
    });

    Object.defineProperty(this, "_getRut", {
        get: function () {
            return _rut;
        }
    });

    Object.defineProperty(this, "_setRut", {
        set: function (nuevo_rut) {
            _rut = nuevo_rut;
        }
    });

    Object.defineProperty(this, "_getDiagnostico", {
        get: function () {
            return _diagnostico;
        }
    });

    Object.defineProperty(this, "_setDiagnostico", {
        set: function (diagnostico) {
            _diagnostico = diagnostico;
        }
    });
}

// Métodos getters y setters para cada propiedad del paciente.
Paciente.prototype.getName = function () {
    return this._getNombrePaciente;
};

Paciente.prototype.setName = function (nuevo_nombrePaciente) {
    this._setNombrePaciente = nuevo_nombrePaciente;
};

Paciente.prototype.getEdad = function () {
    return this._getEdad;
};

Paciente.prototype.setEdad = function (nueva_edad) {
    this._setEdad = nueva_edad;
};

Paciente.prototype.getRut = function () {
    return this._getRut;
};

Paciente.prototype.setRut = function (nuevo_rut) {
    this._setRut = nuevo_rut;
};

Paciente.prototype.getDiagnostico = function () {
    return this._getDiagnostico;
};

Paciente.prototype.setDiagnostico = function (nuevo_diagnostico) {
    this._setDiagnostico = nuevo_diagnostico;
};

// Creación de instancias de pacientes y consultorio.
var p1 = new Paciente('Pedro', 28, '14567789-5', 'Resfrio');
var p2 = new Paciente('Fernanda', 25, '13667897-k', 'Dolor de cabeza');
var p3 = new Paciente('Luis', 20, '20345678-7', 'Alergia');

 var consultorioUno = new Consultorio('Salva Vidas', [p1, p2]);

//  console.log(p1.getName());
//  console.log(p2.getName());

//  p2.setDiagnostico("Gripe general");

//   console.log(p2.getDiagnostico());

 console.log(consultorioUno.getName());

 consultorioUno.agregarPaciente(p3);


