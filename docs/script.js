/*
function functionName(parameter){
    parameter === "Argument as a string";
}
functionName("Argument as a string");

const argument = "Argument saved in a variable";
const functionName = function (parameter){
    parameter === "Argument saved in a variable";
}
functionName(argument);

const functionName = (parameter1, parameter2) => {
    parameter1 === 1;
    parameter2 === 2;
}
functionName(1, 2);
*/
const inputElement = (type, name, label) => {
    return `
        <div>
            <label>${label} :</label>
            <input type='${type}' name='${name}'>
        </div>
    `;
}

const inputElementPlace = (type, name, label, placeholder) => {
    return `
        <div>
            <label>${label} :</label>
            <input type='${type}' name='${name}' placeholder='${placeholder}'>
        </div>
    `;
}
const inputElementClass = (type, name, label, cl) => {
    return `
        <div>
            <label>${label} :</label>
            <input type='${type}' name='${name}' class='${cl}'>
        </div>
    `;
}

const selectElement = (type, name, label, options) => {
    let optionsToSelect = '';
    for (const option of options) {
        optionsToSelect += `
            <option>
                ${option}
            </option>
            `;
    }


    return `
        <div>
            <label>${label}</label>
            <${type} name='${name}'>
                ${optionsToSelect}
            </${type}>
        </div>
    `;
}

const formElement = `
    <form id="form">
        ${inputElementPlace('text', 'firstName', 'Keresztneved', 'Ide írd a keresztneved!')}
        ${inputElementPlace('email', 'personalEmail', 'E-mail címed', 'Ide írd az e-mail címed!')}
        ${inputElementClass('file', 'profilePicture', 'Profilképed', 'hidden')}
        ${inputElement('checkbox', 'newsLetter', 'Feliratkozás hírlevélre')}
        ${inputElement('checkbox', 'terms', 'Szabályzatot elfogadom')}
        ${selectElement('select', 'where', 'Hol hallottál rólunk?', ['interneten', 'ismerőstől', 'egyéb'])}
        <button>Küldés</button>
    </form>
`;

const formSubmit = (event) => {
    event.preventDefault();
    const et = event.target;
    console.log(et);
    et.classList.add('submitted');
    let selectValue = et.querySelector(`select[name="where"]`).value;
    console.log(selectValue);
}

const inputUpdate = (event) => {
    if (event.target.getAttribute("name") === "firstName") {
        document.getElementById("inputValue").innerHTML = event.target.value;
    }
    console.log(event.target.closest("#form"));
}

function loadEvent() {
    const root = document.getElementById("root");
    root.insertAdjacentHTML("afterbegin", formElement);
    root.insertAdjacentHTML("afterbegin", `
        <div id="inputValue"></div>
    `);

    const form = document.getElementById("form");
    form.addEventListener('submit', formSubmit);

    const inputList = form.querySelectorAll('input');
    for (const input of inputList) {
        input.addEventListener('input', inputUpdate);
    }

}

window.addEventListener("load", loadEvent);

/* input update fgv belül
 Csak akkor változzon, ha az aktuális inputnak van first name attribútuma*/