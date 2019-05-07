// may use jQuery

let submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    let data = document.getElementById("textbox").value;
    fetch('http://localhost:3001/', {
        method: "POST", 
        body: JSON.stringify(data), 
    }).then( (response) => {
        console.log(response);
    });
})