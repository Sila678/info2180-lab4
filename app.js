
document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById("searchButton");

    searchButton.addEventListener("click", function() {
        fetch('superheroes.php')
            .then(response => response.text())
            .then(data => {
                alert(data);
            })
            .catch(error => console.error("Error:", error));
    });
});
