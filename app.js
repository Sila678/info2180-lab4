
document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById("searchButton");
    const searchField = document.getElementById("searchField");
    const resultDiv = document.getElementById("result");
    
    // Event listener for the search button
    searchButton.addEventListener("click", function() {
        //Get value from search box and remove estra spaces
        const query = searchField.value.trim();

        //Create  URL for the request
        let url = "superheroes.php";
        if (query) {
            url += `?query=${encodeURIComponent(query)}`;
        }

        //Using Fetch API to send AJAX request to superheroes.php
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
            }
            return response.text();
            })
            .then(data => {
                resultDiv.innerHTML = data;
                document.getElementById("resultHeading").style.display = "block";
            })
            .catch(error => {
                console.error("Error:", error);
                resultDiv.innerHTML = "<p>There was an error processing your request.</p>";
            });
    });

});
