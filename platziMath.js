
const PlatziMath = {};

// FORMULAS PARA SACAR EL PROMEDIO 

PlatziMath.calcularPromedio =  function calcularPromedio(lista) {
  function sumarTodosElementos(valorAcumulado, nuevoValor) {
    return valorAcumulado + nuevoValor;
  }

  const sumaLista = lista.reduce(sumarTodosElementos);  
  const promedio = sumaLista / lista.length;
  // console.log(promedio);
  return promedio;
}

// FORMULAS PARA SACAR LA MEDIANA DE UN ARRAY POR LA CANTIDAD DE ELEMENTOS 

PlatziMath.esPar = function esPar(lista) {
  return !(lista.length % 2);
}

PlatziMath.esImpar =  function esImpar(lista) {
  return lista.length % 2;
}

PlatziMath.calcularMediana = function calcularMediana(listaDesordenada) {
  const lista = PlatziMath.ordenarLista(listaDesordenada);
  const listaEsPar = PlatziMath.esPar(lista);

  if (listaEsPar) {
    const indexMitad1ListaPar = (lista.length / 2) - 1;
    const indexMitad2ListaPar = lista.length / 2;
    const listaMitades = [];
    listaMitades.push(lista[indexMitad1ListaPar]);
    listaMitades.push(lista[indexMitad2ListaPar]);

    const medianaListaPar = PlatziMath.calcularPromedio(listaMitades);
    return medianaListaPar;
  } else {
    const indexMitadListaImpar = Math.floor(lista.length / 2);
    const medianaListaImpar = lista[indexMitadListaImpar];
    return medianaListaImpar;
  }
}


// FORMULA PARA SACAR LA MODA 

PlatziMath.calcularModa = function calcularModa(lista) {
  const listaCount = {};

  for (let i = 0; i < lista.length; i++) {
    const elemento = lista[i];

    if (listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  }
  
  listaArray = Object.entries(listaCount);
  const listaOrdenada = ordenarListaBidimensional(listaArray, 1);
  const listaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
  const moda = listaMaxNumber[0];
  return moda; 
}

// FORMULAS PARA ORDENAR UN ARRAY

PlatziMath.ordenarLista = function ordenarLista(listaDesordenada) {
  function ordenarListaSort(valorAcumulado, nuevoValor) {
    // if (valorAcumulado > nuevoValor) {
    //   return 1;
    // } else if (valorAcumulado == nuevoValor) {
    //   return 0;
    // } else if (valorAcumulado < nuevoValor) {
    //   return -1;
    // }

    return valorAcumulado - nuevoValor;
    // return nuevoValor - valorAcumulado;
    // return 5 - 10 -> -5;
    // return 5 - 5 -> 0;
    // return 10 - 5 -> 5;
  }
  
  // const lista = listaDesordenada.sort(ordenarListaSort);
  const lista = listaDesordenada.sort((a,b) => a-b);
  
  return lista;
}

PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(listaDesordenada, i) {
 
  const lista = listaDesordenada.sort((a,b) => a[i] - b[i]);
  
  return lista;
}

PlatziMath.calcularMediaGeometrica = function calcularMediaGeometrica(lista){
  let ValoresAcumulados = lista.reduce((acc, elem) => acc * elem, 1);
  let MediaGeometrica = Math.pow(ValoresAcumulados,1/lista.length);
  return MediaGeometrica;
}

//// FORMA ALTERNATIVA DE LA MODA 

// function listarElementosRepetidos(arrayNum) {
//   let objList = new Object();
//   arrayNum.forEach((element) => {
//     objList[element] = ++objList[element] || 1;
//   });
//   return objList;
// }

// function calcularModa(array) {
//   const objListNum = listarElementosRepetidos(array);
//   const arrayValors = Object.values(objListNum);
//   const numeroMayor = Math.max(...arrayValors);
//   const arrayObjListNum = Object.entries(objListNum);
//   const arrayMatrizModal = arrayObjListNum.filter(
//     (elementArrayActual) => elementArrayActual[1] === numeroMayor
//   );
//   const arrayModaElements = arrayMatrizModal.map((arrayActual) => {
//     return arrayActual[0];
//   });
//   return arrayModaElements;
// }

// const moda = calcularModa(arrayNum);
// console.log(moda);

