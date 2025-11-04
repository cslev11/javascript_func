/**
 * 
 * @param {string} label 
 * @param {string} id 
 */

function createFormElement(labelText, id) {
    const label = document.createElement('label');
    label.innerText = labelText;
    label.htmlFor = id;
    form.appendChild(label);
    const br1 = document.createElement('br');
    form.appendChild(br1);
    

    const input = document.createElement('input');
    input.type = 'text';
    input.name = id;
    input.id = id;
    form.appendChild(input);
    const br2 = document.createElement('br');
    form.appendChild(br2);
    const br3 = document.createElement('br');
    form.appendChild(br3);
}

const form = document.createElement('form');
form.id = "form_js";
document.body.appendChild(form);

const title = document.createElement('h2');
title.innerText = "Javascript form";
form.appendChild(title);

createFormElement("Költő neve:", "kolto_nev");
createFormElement("Korszak:", "korszak");
createFormElement("Szerelme:", "szerelem1");
createFormElement("Szerelme:", "szerelem2");

const button = document.createElement('button');
button.innerText = "Hozzáadás";
form.appendChild(button);