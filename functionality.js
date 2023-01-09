
const salarysContainer = document.querySelector("#salarys-box");
const enterpriseButton = document.querySelector("#enterprises-btn");
const peopleButton = document.querySelector("#people-btn");

const enterpriseProjectionName = document.querySelector("#projection-enterprise");
const enterpriseProjectionButton = document.querySelector("#projection-btn");
const enterpriseProjectionResult = document.querySelector("#projection-enterprise__result");

const enterpriseAverageName = document.querySelector("#projection-average");
const enterpriseAverageYear = document.querySelector("#average-enterprise__year");
const enterpriseAverageButton = document.querySelector("#average-enterprise__btn");
const enterpriseAverageResult = document.querySelector("#average-enterprise__result");

const enterpriseIncrementYear = document.querySelector("#enterprise-increment-year");
const enterpriseIncrementButton = document.querySelector("#enterprise-increment-button");
const enterpriseIncrementResult = document.querySelector("#enterprise-increment-result");

enterpriseButton.addEventListener("click", printEnterprises);
peopleButton.addEventListener("click", printSalarys);
enterpriseProjectionButton.addEventListener("click", printEnterpriseProjection);
enterpriseAverageButton.addEventListener("click", printEnterpriseAverage);
enterpriseIncrementButton.addEventListener("click", printIncrement);

function printEnterpriseProjection() {
    const name = enterpriseProjectionName.value;
    const result = "$" + Math.round(proyeccionPorEmpresa(name));
    enterpriseProjectionResult.innerText = result;
}

function printEnterpriseAverage() {
    const name = enterpriseAverageName.value;
    const year = enterpriseAverageYear.value;
    const result = "$" + medianaEmpresaYear(name, year);
    enterpriseAverageResult.innerText = result;
}

function printIncrement() {
    const increment = enterpriseIncrementYear.value;
    const result = medianaGeneral(increment);
    enterpriseIncrementResult.innerText = result;
}

function printSalary() {
    const salario = document.createElement("article");
    const nombre = document.createElement("span");
    const datos = document.createElement("div");

    salario.classList.add("box-salary");
    nombre.classList.add("box-salary__name");
    datos.classList.add("box-salary__data");

    nombre.append(document.createTextNode(persona.name));

    for (dato of persona.trabajos) {
        const datoSalario = document.createElement("div");
        const enterprise = document.createElement("span");
        const year = document.createElement("span");
        const amount = document.createElement("span");

        datoSalario.classList.add("data-element");
        enterprise.classList.add("data-element__enterprise");
        year.classList.add("data-element__year");
        amount.classList.add("data-element__amount");

        enterprise.append(document.createTextNode(dato.empresa));
        year.append(document.createTextNode(dato.year));
        amount.append(document.createTextNode(`$${dato.salario}`));

        datoSalario.append(enterprise);
        datoSalario.append(year);
        datoSalario.append(amount);

        datos.append(datoSalario)
    }
    salario.append(nombre);
    salario.append(datos);

    salarysContainer.append(salario);
}

function printSalarys() {
    enterpriseButton.className = "salarys-enterprises__btn";
    peopleButton.className = "salarys-people__btn";

    salarysContainer.innerHTML = "";
    for (persona of salarios) {
        printSalary(persona);
    }
}

function printEnterprises() {
    enterpriseButton.className = "salarys-enterprises__btn";
    peopleButton.className = "salarys-people__btn";

    salarysContainer.innerHTML = "";

    const nombreEmpresas = Object.keys(empresas);
    for (nombre of nombreEmpresas) {
        const articuloEmpresa = document.createElement("article");
        const nombreEmpresa = document.createElement("span");
        const datosEmpresa = document.createElement("div");

        articuloEmpresa.classList.add("enterprise");
        nombreEmpresa.classList.add("enterprise__name");
        datosEmpresa.classList.add("enterprise__data");

        nombreEmpresa.append(document.createTextNode(nombre));

        const years = Object.keys(empresas[nombre]);
        for (year of years) {
            const datoEmpresa = document.createElement("div");
            const yearEmpresa = document.createElement("span");

            yearEmpresa.append(document.createTextNode(year));
            datoEmpresa.append(yearEmpresa);

            datoEmpresa.classList.add('data-year');
            yearEmpresa.classList.add('data-year__text');

            for (salario of empresas[nombre][year]) {
                const salarioEmpresa = document.createElement('span');
                salarioEmpresa.append(document.createTextNode(`$${salario}`));

                salarioEmpresa.classList.add('data-year__amount');

                datoEmpresa.append(salarioEmpresa);
            }
            datosEmpresa.append(datoEmpresa);
        }
        articuloEmpresa.append(nombreEmpresa);
        articuloEmpresa.append(datosEmpresa);
        salarysContainer.append(articuloEmpresa);
    }
}