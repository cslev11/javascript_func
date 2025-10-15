/**
 * @type {{nationality?:string, writer:string, title:string}[]}
 */
const arr = [
    {
        nationality: 'Orosz',
        writer: 'Gogol',
        title: 'A köpönyeg'
    },
    {
        writer: 'Csehov',
        title: 'A csinovnyik halála'
    },
    {
        nationality: 'Cseh',
        writer: 'Franz Kafka',
        title: 'Az átváltozás'
    },
    {
        nationality: 'Magyar',
        writer: 'Örkény István',
        title: 'Egyperces Novellák'
    },
    {
        writer: 'József Attila',
        title: 'Klárisok'
    },
    {
        nationality: 'Svájc',
        writer: 'Friedrich Dürrenmatt',
        title: 'A fizikusok'
    }
]

const table = document.createElement("table");
document.body.appendChild(table);

const thead = document.createElement("thead");
table.appendChild(thead);

const tr1 = document.createElement("tr");
thead.appendChild(tr1);

const thhead = ["Nemzetiség", "Szerző", "Mű"];

for (const i of thhead) {
    const th = document.createElement("th");
    th.innerText = i;
    tr1.appendChild(th);
}

const tbody = document.createElement("tbody");
table.appendChild(tbody);

for (let i = 0; i < arr.length; i++) {
    const tr2 = document.createElement("tr");
    tbody.appendChild(tr2);

    if (arr[i].nationality) {
        const td1 = document.createElement("td");
        td1.innerText = arr[i].nationality;
        if (arr[i + 1] && !arr[i + 1].nationality) {
            td1.rowSpan = 2;
        }
        tr2.appendChild(td1);
    }

    const td2 = document.createElement("td");
    td2.innerText = arr[i].writer;
    tr2.appendChild(td2);

    const td3 = document.createElement("td");
    td3.innerText = arr[i].title;
    tr2.appendChild(td3);
}