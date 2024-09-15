let grades = [];

function addGrade() {
    let isValid = false;
    while (!isValid) {
        const gradeInput = prompt('Introduce una nota entre 0 y 10:');
        const grade = parseFloat(gradeInput);

        if (!isNaN(grade) && grade >= 0 && grade <= 10) {
            grades.push(grade);
            alert(`Nota ${grade} añadida.`);
            isValid = true;
        } else {
            alert('Nota inválida. Debe ser un número entre 0 y 10.');
        }
    }
}

function calculateFinalGrade() {
    if (grades.length === 0) {
        alert('No hay notas registradas.');
        return;
    }

    const total = grades.reduce((sum, grade) => sum + grade, 0);
    const average = total / grades.length;
    alert(`La nota final promedio es: ${average.toFixed(2)}`);
}

function displayGrades() {
    if (grades.length === 0) {
        alert('No hay notas registradas.');
        return;
    }

    let gradesText = 'Notas Registradas:\n';
    grades.forEach((grade, index) => {
        gradesText += `Nota ${index + 1}: ${grade}\n`;
    });
    alert(gradesText);
}

function runSimulator() {
    let action;
    do {
        action = prompt(
            '--- Simulador de Nota Final ---\n' +
            '1. Añadir Nota\n' +
            '2. Calcular Nota Final\n' +
            '3. Mostrar Notas\n' +
            '4. Salir\n' +
            'Seleccione una opción (1-4):'
        );

        switch(action) {
            case '1':
                addGrade();
                break;
            case '2':
                calculateFinalGrade();
                break;
            case '3':
                displayGrades();
                break;
            case '4':
                alert('Saliendo del simulador.');
                break;
            default:
                alert('Opción no válida. Por favor, seleccione entre 1 y 4.');
        }
    } while (action !== '4');
}

runSimulator();
