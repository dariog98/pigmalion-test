/*
Dada la siguiente problemática: ¿puede un número X formarse usando la suma de 2 elementos de un array?

Ejemplo 1
Input: nums = [1,4,3,9], requiredSum = 8
Output: False

Ejemplo 2
Input: nums = [1,2,4,4], requiredSum = 8
Output: True
*/

/*
1. Un algoritmo que resuelva el problema asumiendo que la máquina en donde va a correrse el
programa tiene recursos infinitos, que el tiempo de ejecución no importa y que lo más
importante es realizar el desarrollo en el menor tiempo posible.
*/

const resolver = (array, result) => {
    for (let x = 0; x < array.length; x++) {
        for (let y = x + 1; y < array.length; y++) {
            if (array[x] + array[y] === result) return true
        }
    }
    return false
}

/*
El algoritmo utiliza dos bucles for para recorrer el array dado y buscar el primer par de numeros
que resuelve la suma. De encontrarse la función devuelve true y rompe el bucle, caso contrario devolverá false
*/

/*
2. Un algoritmo que resuelva el problema asumiendo que los recursos son un bien preciado,
que el tiempo de ejecución si importa y que el tiempo de desarrollo no es importante.
*/

const findSumInArray = (array, result) => {
    const results = {}
    for (const number of array) {
        if (results[number]) return true
        results[result - number] = true
    }
    return false
}

/*
El algoritmo recorre cada elemento del array y calcula el sumando que necesita para llegar al valor deseado.
Este resultado será guardado en el array de results.
Si en alguno de los proximos elementos del array resulta que se haya ese sumando la funcion devolverá true.
Caso contrario al finalizar se devolverá false.
*/

export { resolver, findSumInArray }