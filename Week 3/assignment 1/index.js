// Try to fetch data from URLs
async function fetchFromURLs(url, method, body) {
    try {
        
    
        const response = await fetch(url, {
            method: method, // Choose the Request Type: GET, POST, PUT, DELETE, OR PATCH
            body: JSON.stringify(body), // Include the body of the request
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        }
        );
        // console.log("fetched");
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}

// Get elements from the DOM

const fetchButton = document.getElementById('fetchbtn');
const url = document.getElementById('url');
const method = document.getElementById('requestType');
const body = document.getElementById('body');

// Include a click event listener on the fetch button

fetchButton.addEventListener('click', () => {
    // Get the value of the input field
    const urlValue = url.value;
    const methodValue = method.value;
    let bodyValue;
    if (methodValue !== 'GET') {
        // console.log(body, "object");
        // console.log(body.value);
        bodyValue = JSON.parse(body.value);
    //     '{
    //     "id": 1, "title": "foo", "body": "bar", "userId": "1"
    // } '
    }
    
    // Fetch data from the URL
    fetchFromURLs(urlValue, methodValue, bodyValue)
        .then(data => {
            //  Create a new card element
            const card = document.createElement('div');
            card.className = 'card';

            // Include the URL requested in the card and type of Request
            const requestInfo = document.createElement('p');
            requestInfo.innerText = `URL: ${urlValue}, Request Type: ${methodValue}`;
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