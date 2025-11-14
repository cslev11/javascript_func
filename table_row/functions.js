/**
 * @typedef {{nationality?:string, writer:string, title:string}} CountryWriters
 */

function renderTableRow(tablebody, CountryWriters, CountryWriters2) {
    const tr2 = document.createElement("tr");
    tablebody.appendChild(tr2);

    if (CountryWriters.nationality) {
        const td1 = document.createElement("td");
        td1.innerText = CountryWriters.nationality;
        if (CountryWriters2 && !CountryWriters2.nationality) {
            td1.rowSpan = 2;
        }
        tr2.appendChild(td1);
    }
    createCell("td", CountryWriters.writer, tr2);

    createCell("td", CountryWriters.title, tr2);
}
function createCell(celltype, cellelement, parentrow){
    const td1 = document.createElement(celltype);
    td1.innerText = cellelement;
    parentrow.appendChild(td1);
}

function generateHeader(table, headerlist){
    const thead = document.createElement("thead");
    table.appendChild(thead);
    const tr = document.createElement("tr");
    thead.appendChild(tr);
    for (const headerelement of headerlist){
        createCell("th", headerelement, tr);
    }
}

function HTMLFormEventLister(e){
    
}