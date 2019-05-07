let submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    let data = document.getElementById("textbox").value;
    fetch('http://localhost:3001/', {
        method: "POST", 
        mode: "no-cors", 
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data, 
    }).then( (response) => {
        console.log(response.json())
        console.log(response.text())
    })
})

