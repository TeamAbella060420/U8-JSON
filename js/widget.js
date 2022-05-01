var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4) {
       var employees = JSON.parse(xhr.responseText);
        var statusHTML = '<ul class="bulleted">';
    }
};
xhr.open('GET', 'data/employees.json');
xhr.send();