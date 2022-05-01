var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4) {

    }
};
xhr.open('GET', 'data/employees.json');
xhr.send();