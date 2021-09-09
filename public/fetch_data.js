const button = document.getElementById("fetch-button");
const carList = document.getElementById("Cars");

button.addEventListener("click", () => {
    fetch("http://localhost:443/Cars")
        .then(response => response.json())
        .then(result => {

            Object.entries(result[0]).forEach(([key, value]) => {

                const spanElement = document.createElement('span');
                spanElement.textContent = `${key}: ${value}`;
                Cars.append(spanElement);
            });
        });
});