const xhr = new XMLHttpRequest();
xhr.open('GET', '/xml/flat1.xml', true);

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const xmlDoc = xhr.responseXML;
        const items = xmlDoc.querySelector('characteristic');
        const rows = document.getElementById("section-3").getElementsByClassName("wrapper-1__cont");

        for (let j = 0; j < 18; j++) {
            let el = rows[j];
            let row = items.querySelector("Row_" + (j + 1)).textContent;
            el.getElementsByClassName("cont__info-2")[0].innerHTML = row;
        }
    }
};

xhr.send();


    
