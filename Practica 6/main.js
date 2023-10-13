function ordenamientoBurbuja(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

function ordenamientoSeleccion(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        const temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
}

function ordenamientoInsercion(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

function main() {
    const n = parseInt(prompt("Ingrese la cantidad de números:"));
    if (!isNaN(n)) {
        const numeros = [];
        for (let i = 0; i < n; i++) {
            const numero = parseFloat(prompt(`Ingrese el número ${i + 1}:`));
            if (!isNaN(numero)) {
                numeros.push(numero);
            }
        }

        const metodo = prompt("Seleccione el método de ordenamiento (burbuja/seleccion/insercion):");
        switch (metodo) {
            case "burbuja":
                ordenamientoBurbuja(numeros);
                break;
            case "seleccion":
                ordenamientoSeleccion(numeros);
                break;
            case "insercion":
                ordenamientoInsercion(numeros);
                break;
            default:
                alert("Método de ordenamiento no válido.");
                return;
        }

        console.log(`Números ordenados (${metodo}): ${numeros.join(", ")}`);
    } else {
        alert("Cantidad no válida.");
    }
}

main();