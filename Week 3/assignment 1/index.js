// Try to fetch data from URLs
async function fetchFromURLs(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// Get elements from the DOM

const fetchButton = document.getElementById('fetchbtn');
const url = document.getElementById('url');

// Include a click event listener on the fetch button

fetchButton.addEventListener('click', () => {
    // Get the value of the input field
    const urlValue = url.value;

    // Fetch data from the URL
    fetchFromURLs(urlValue)
        .then(data => {
            //  Create a new card element
            const card = document.createElement('div');
            card.className = 'card';

            // Include the URL requested in the card and type of Request
            const requestInfo = document.createElement('p');
            requestInfo.innerText = `URL: ${urlValue}`;
            card.appendChild(requestInfo);

            //  Include the content of the fetched data in the card
            const content = document.createElement('pre');
            content.textContent = JSON.stringify(data, null, 2);
            card.appendChild(content);

            // Add card to the DOM
            const output = document.getElementById('output');
            output.insertBefore(card, output.firstChild);
        })
        .catch(error => {
            console.error(error);
        });
}

)